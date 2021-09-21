#!/usr/bin/env bash

set -eu
set -o pipefail

# shellcheck source=SCRIPTDIR/.util/print.sh
source "$(dirname "${BASH_SOURCE[0]}")/.util/print.sh"

readonly PROGDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly SITEDIR="$(cd "${PROGDIR}/.." && pwd)"
readonly CONTENTDIR="$(cd "${SITEDIR}"/content && pwd)"

function main() {
  while [[ "${#}" != 0 ]]; do
    case "${1}" in
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

  clean=0

  refMessage="Found internal links not wrapped in {{< ref >}} or {{< relref >}}:"

  if grep -irn "paketo.io" "${CONTENTDIR}" | grep -v "deps.paketo.io" | grep -qv "paketo.io/images" ; then
    util::print::title "${refMessage}";
    grep -irn "paketo.io" "${CONTENTDIR}" | grep -v "deps.paketo.io" | grep -v "paketo.io/images";
    clean=1;
  fi

  searchStrings=( "(/docs" "(docs" "(#" ":#" )
  for search in "${searchStrings[@]}"; do
    if grep -irnq "${search}" "${CONTENTDIR}"; then
      if [ "${clean}" -eq 0 ]; then
        util::print::title "${refMessage}"
      fi
      grep -irn "${search}" "${CONTENTDIR}";
      clean=1
    fi
  done

  if [ "${clean}" -eq 0 ]; then
    util::print::success "Internal links are all wrapped."
  fi

  exit $clean
}


function usage() {
  cat <<-USAGE
check-links.sh [OPTIONS]

Checks for internal links to docs pages that do not use a {{< ref }} or {{< relref >}}.

OPTIONS
  --help  -h  prints the command usage
USAGE
}

main "${@:-}"
