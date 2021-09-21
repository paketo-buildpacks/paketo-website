#!/usr/bin/env bash

set -e
set -u
set -o pipefail

# shellcheck source=SCRIPTDIR/.util/print.sh
source "$(dirname "${BASH_SOURCE[0]}")/.util/print.sh"

# shellcheck source=SCRIPTDIR/.util/tools.sh
source "$(dirname "${BASH_SOURCE[0]}")/.util/tools.sh"

readonly ROOT_DIR="$(cd "$(dirname "${0}")/.." && pwd)"
readonly BIN_DIR="${ROOT_DIR}/.bin"

function main() {
  local address port quick live strip
  quick="false"
  live="false"
  strip="false"
  while [[ "${#}" != 0 ]]; do
    case "${1}" in
      --address)
        address="${2}"
        shift 2
        ;;

      --port)
        port="${2}"
        shift 2
        ;;

      --quick)
        quick="true"
        shift 1
        ;;

      --live)
        live="true"
        shift 1
        ;;

      --strip-fragments)
        strip="true"
        shift 1
        ;;

      --help|-h)
        shift 1
        usage
        exit 0
        ;;

      "")
        # skip if the argument is empty
        shift 1
        ;;

      *)
        util::print::error "unknown argument \"${1}\""
    esac
  done

  util::tools::muffet::install --directory "${BIN_DIR}"

  if [ "${live}" = "true" ] ; then
    check_links_live "${quick}" "${strip}";
  else
    util::tools::hugo::install --directory "${BIN_DIR}"
    check_links_local "${port:-"1313"}" "${quick}" "${strip}";
  fi
}

function usage() {
  cat <<-USAGE
check-links.sh [--quick]

Checks all links in the rendered static site to ensure they point to a valid location.

OPTIONS
  --port <port number>               port on which the hugo server will serve the site (default: 1313)
  --live                             checks links on paketo.io instead of a locally served instance
  --quick                            checks links concurrently, but SKIPS all github.com links (to avoid rate-limiting)
  --strip-fragments                  strip fragments from URLs before checking (e.g. anchor tags, querys)
  --help                 -h          prints the command usage
USAGE
}

function check_links_live() {
  local quick strip

  quick="${1}"
  strip="${2}"

  util::print::title "Checking links across paketo.io..."

  check_links "https://paketo.io" "" "${quick}" "${strip}";

  exit "${clean}"
}

function check_links_local() {
  local quick port address strip

  port="${1}"
  quick="${2}"
  strip="${3}"
  address="127.0.0.1"

  util::print::title "Spinning up a local server..."

  "${BIN_DIR}"/hugo server --bind "${address}" --port "${port}" &
  hugoPID=$!
  trap "echo 'Shutting down server...'; kill ${hugoPID}; exit" SIGHUP SIGINT SIGTERM

  sleep 3

  util::print::title "Checking links across local site..."

  check_links "http://${address}" "${port}" "${quick}" "${strip}";

  util::print::title "Shutting down server..."
  kill "${hugoPID}"

  exit "${clean}"
}

check_links() {
    local address port quick strip ignoreFragments excludeGithub limitConnections

  address="${1}"
  port="${2}"
  quick="${3}"
  strip="${4}"

  ignoreFragments=""
  excludeGithub=""
  limitConnections="--max-connections=1"

  if [ "${strip}" = "true" ]; then
    ignoreFragments="--ignore-fragments";
  fi

  if [ "${quick}" = "true" ]; then
    excludeGithub="--exclude='github\.com'";
    limitConnections=""
  fi

  set +e
  "${BIN_DIR}"/muffet --buffer-size 8192 \
                      --skip-tls-verification \
                      --timeout=20 \
                      --exclude="localhost" \
                      ${excludeGithub} \
                      ${limitConnections} \
                      ${ignoreFragments} \
                      "${address}${port:+:$port}";
  clean=$?
}

main "${@:-}"

