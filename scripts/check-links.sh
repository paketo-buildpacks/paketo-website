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

  if [ "${live}" = "true" ] ; then
    check_links_live ${quick};
  else
    util::tools::hugo::install --directory "${BIN_DIR}"
    check_links_local "${port:-"1313"}" ${quick};
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
  --help                 -h          prints the command usage
USAGE
}

function check_links_live() {
  local quick

  quick="${1}"

  util::print::title "Checking links across paketo.io..."

  if [ "${quick}" = "true" ] ; then
    check_links_quick "https://paketo.io" "";
  else
    check_links_full "https://paketo.io" "";
  fi

  exit ${clean}
}

function check_links_local() {
  local quick port address

  port="${1}"
  quick="${2}"
  address="127.0.0.1"

  util::print::title "Spinning up a local server..."

  "${BIN_DIR}"/hugo server --bind "${address}" --port "${port}" &
  hugoPID=$!
  trap "echo 'Shutting down server...'; kill ${hugoPID}; exit" SIGHUP SIGINT SIGTERM

  sleep 3

  util::print::title "Checking links across local site..."

  if [ "${quick}" = "true" ] ; then
    check_links_quick "http://${address}" "${port}";
  else
    check_links_full "http://${address}" "${port}";
  fi

  util::print::title "Shutting down server..."
  kill "${hugoPID}"

  exit ${clean}
}

check_links_quick() {
  local address port

  address=${1}
  port=${2}

  util::print::info "Using quick search..."
  set +e
  "${BIN_DIR}"/muffet  --buffer-size 8192 \
                      --skip-tls-verification \
                      --exclude="localhost" \
                      --exclude='(github\.com).*#' \
                      --exclude='(github\.com)' \
                      "${address}${port:+:$port}";
  clean=$?
}

check_links_full() {
  local address port

  address=${1}
  port=${2}

  util::print::info "Using complete search..."
  set +e
  "${BIN_DIR}"/muffet  --buffer-size 8192 \
                      --skip-tls-verification \
                      --exclude="localhost" \
                      --exclude='(github\.com).*#' \
                      --max-connections=1 \
                      "${address}${port:+:$port}";
  clean=$?
}
main "${@:-}"

