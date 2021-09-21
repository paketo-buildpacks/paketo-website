#!/usr/bin/env bash

set -eu
set -o pipefail

readonly PROGDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly SITEDIR="$(cd "${PROGDIR}/.." && pwd)"
readonly CONTENTDIR="$(cd ${SITEDIR}/content && pwd)"

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
        printf "unknown argument \"${1}\""
        exit 1
    esac
  done

  clean=0

  refMessage="Internal links not wrapped in {{< ref >}} found:"
  relrefMessage="Anchor links not wrapped in {{< relref >}} found:"

  if grep -irn "paketo.io" "${CONTENTDIR}" | grep -v "deps.paketo.io" | grep -qv "paketo.io/images" ; then
    echo "${refMessage}";
    grep -irn "paketo.io" "${CONTENTDIR}" | grep -v "deps.paketo.io" | grep -v "paketo.io/images";
    printf "\n\n"
    clean=1;
  fi

  if grep -irnq "(/docs" "${CONTENTDIR}" || grep -irnq "(docs" ; then
    echo "${refMessage}";
    grep -irn "(/docs" "${CONTENTDIR}"
    grep -irn "(docs" "${CONTENTDIR}"
    printf "\n\n"
    clean=1
  fi

  if grep -irnq "(#" "${CONTENTDIR}" || grep -irnq ":#" "${CONTENTDIR}"; then
    echo "${relrefMessage}";
    grep -irn "(#" "${CONTENTDIR}"
    grep -irn ":#" "${CONTENTDIR}"
    printf "\n\n"
    clean=1
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
