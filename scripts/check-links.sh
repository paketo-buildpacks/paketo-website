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
  local address port quick
  quick=false
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
        quick=true
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

  util::tools::hugo::install --directory "${BIN_DIR}"
  util::tools::muffet::install --directory "${BIN_DIR}"

  check_links "${address:-"127.0.0.1"}" "${port:-"1313"}" ${quick}
}

function usage() {
  cat <<-USAGE
check-links.sh [--quick]

Checks all links in the rendered static site to ensure they point to a valid location.

OPTIONS
  --help               -h            prints the command usage
  --quick                            checks links concurrently, but SKIPS all github.com links (to avoid rate-limiting)
USAGE
}

function check_links() {
  local address port quick clean

  address="${1}"
  port="${2}"
  quick="${3}"

  util::print::title "Spinning up a local server..."
  "${BIN_DIR}"/hugo server --bind "${address}" --port "${port}" &
  hugoPID=$!
  trap "echo 'Shutting down server...'; kill ${hugoPID}; exit" SIGHUP SIGINT SIGTERM

  sleep 3

  util::print::title "Checking links across rendered site..."
  set +e

  if $quick ; then
    util::print::info "Using quick search..."
    "${BIN_DIR}"/muffet  --buffer-size 8192 \
                        --skip-tls-verification \
                        --exclude="localhost" \
                        --exclude='example\.com' \
                        --exclude='(github\.com).*#' \
                        --exclude='(github\.com)' \
                        "http://${address}:${port}";
  else
    util::print::info "Using complete search..."
    "${BIN_DIR}"/muffet  --buffer-size 8192 \
                        --skip-tls-verification \
                        --exclude="localhost" \
                        --exclude='example\.com' \
                        --exclude='(github\.com).*#' \
                        --max-connections=1 \
                        "http://${address}:${port}";
  fi
  clean=$?

  util::print::title "Shutting down server..."
  kill "${hugoPID}"

  exit $clean
}

main "${@:-}"

