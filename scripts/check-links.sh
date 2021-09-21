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
  local address port quick live
  quick="false"
  live="false"
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

  clean=0

  if [ "${live}" = "true" ] ; then
    check_links_live "${quick}";
  else
    util::tools::hugo::install --directory "${BIN_DIR}"
    check_links_local "${port:-"1313"}" "${quick}";
  fi

  exit "${clean}"
}

function usage() {
  cat <<-USAGE
check-links.sh [--quick]

Checks all links in the rendered static site to ensure they point to a valid location.

OPTIONS
  --port <port number>               port on which the hugo server will serve the site (default: 1313)
  --live                             checks links on paketo.io instead of a locally served instance
  --quick                            checks links concurrently, but SKIPS all github.com links (to avoid rate-limiting)
  --help                 -h          prints the command usage
USAGE
}

function check_links_live() {
  local quick

  quick="${1}"

  util::print::title "Checking links across paketo.io..."

  check_links "https://paketo.io" "" "${quick}";

  exit "${clean}"
}

function check_links_local() {
  local quick port address

  port="${1}"
  quick="${2}"
  address="127.0.0.1"

  util::print::title "Spinning up a local server..."

  "${BIN_DIR}"/hugo server --bind "${address}" --port "${port}" &
  hugoPID=$!
  trap "echo 'Shutting down server...'; kill ${hugoPID}; exit 1" SIGHUP SIGINT SIGTERM

  sleep 3

  util::print::title "Checking links across local site..."

  check_links "http://${address}" "${port}" "${quick}";

  util::print::title "Shutting down server..."
  kill "${hugoPID}"
}

check_links() {
    local address port quick excludeGithub limitConnections skipTLS

  address="${1}"
  port="${2}"
  quick="${3}"

  # A list of URL patterns that we know are correct but fail to be scraped
  excludeList=( "github\\.com.*#" "maven\\.apache\\.org.*#" "docs\\.npmjs\\.com.*#" )

  excludeGithub=""
  limitConnections="--max-connections=1"
  skipTLS=""

  if [ "${quick}" = "true" ]; then
    excludeGithub="--exclude github.com";
    limitConnections=""
  fi

  if [ "${address}" = "http://127.0.0.1" ]; then
    skipTLS="--skip-tls-verification" # our local server doesn't present a cert
  fi

  set +e
  # ignore fragments
  util::print::info "Ignoring link fragments..."
  "${BIN_DIR}"/muffet --buffer-size 8192 \
                      --timeout=20 \
                      --ignore-fragments \
                      ${skipTLS} \
                      ${excludeGithub} \
                      ${limitConnections} \
                      "${address}${port:+:$port}";
  clean=$(( $? | ${clean} ))

  # include fragments except excludelist
  util::print::info "Including link fragments (except excludelist)..."
  "${BIN_DIR}"/muffet --buffer-size 8192 \
                      --timeout=20 \
                      ${excludeList[@]/#/--exclude } \
                      ${skipTLS} \
                      ${excludeGithub} \
                      ${limitConnections} \
                      "${address}${port:+:$port}";
  clean=$(( $? | ${clean} ))
}

main "${@:-}"

