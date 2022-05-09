#!/usr/bin/env bash

set -eu
set -o pipefail

# shellcheck source=SCRIPTDIR/.util/print.sh
source "$(dirname "${BASH_SOURCE[0]}")/.util/print.sh"

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
        util::print::error "unknown argument \"${1}\""
    esac
  done

  cd "${SITEDIR}"
  npm install &> /dev/null
  ./node_modules/.bin/spellchecker ./content/**/** \
                                   --no-suggestions \
                                   --dictionaries ./scripts/.util/spellcheck-dictionary.txt \
                                   --plugins spell indefinite-article repeated-words syntax-mentions syntax-urls frontmatter
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
