#!/usr/bin/env bash

set -eu
set -o pipefail

readonly PROGDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly SITEDIR="$(cd "${PROGDIR}/.." && pwd)"

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

  cd "${SITEDIR}"
  npm install &> /dev/null
  ./node_modules/.bin/spellchecker ./content/**/** \
                                   --no-suggestions \
                                   --dictionaries "${SITEDIR}"/scripts/.util/spellcheck-dictionary.txt

}


function usage() {
  cat <<-USAGE
check-spelling.sh [OPTIONS]

Spellchecks markdown in /content directory.

OPTIONS
  --help  -h  prints the command usage
USAGE
}

main "${@:-}"
