#!/usr/bin/env bash

set -eu
set -o pipefail

# shellcheck source=SCRIPTDIR/print.sh
source "$(dirname "${BASH_SOURCE[0]}")/print.sh"

function util::tools::path::export() {
  local dir
  dir="${1}"

  if ! echo "${PATH}" | grep -q "${dir}"; then
    PATH="${dir}:$PATH"
    export PATH
  fi
}

function util::tools::hugo::install() {
  local dir
  while [[ "${#}" != 0 ]]; do
    case "${1}" in
      --directory)
        dir="${2}"
        shift 2
        ;;

      *)
        util::print::error "unknown argument \"${1}\""
    esac
  done

  mkdir -p "${dir}"
  util::tools::path::export "${dir}"

  local os
  case "$(uname)" in
    "Darwin")
      os="macOS-64bit"
      ;;

    "Linux")
      os="Linux-64bit"
      ;;

    *)
      echo "Unknown OS \"$(uname)\""
      exit 1
  esac

  if [[ ! -f "${dir}/hugo" ]]; then
    local version
    version="$(jq -r .hugo "$(dirname "${BASH_SOURCE[0]}")/tools.json")"

    util::print::title "Installing hugo ${version}"
    curl "https://github.com/gohugoio/hugo/releases/download/${version}/hugo_extended_${version#v}_${os}.tar.gz" \
      --silent \
      --location \
      --output /tmp/hugo.tgz
    tar xzf /tmp/hugo.tgz -C "${dir}"
    chmod +x "${dir}/hugo"
    rm /tmp/hugo.tgz
  fi
}

function util::tools::muffet::install() {
  local dir
  while [[ "${#}" != 0 ]]; do
    case "${1}" in
      --directory)
        dir="${2}"
        shift 2
        ;;

      *)
        util::print::error "unknown argument \"${1}\""
    esac
  done

  mkdir -p "${dir}"
  util::tools::path::export "${dir}"

  local os
  case "$(uname)" in
    "Darwin")
      os="darwin_amd64"
      ;;

    "Linux")
      os="linux_amd64"
      ;;

    *)
      echo "Unknown OS \"$(uname)\""
      exit 1
  esac

  if [[ ! -f "${dir}/muffet" ]]; then
    local version
    version="$(jq -r .muffet "$(dirname "${BASH_SOURCE[0]}")/tools.json")"

    util::print::title "Installing muffet ${version}"
    curl "https://github.com/raviqqe/muffet/releases/download/${version}/muffet_${os}.tar.gz" \
      --silent \
      --location \
      --output /tmp/muffet.tgz
    tar xzf /tmp/muffet.tgz -C "${dir}"
    chmod +x "${dir}/muffet"
    rm /tmp/muffet.tgz
  fi
}
