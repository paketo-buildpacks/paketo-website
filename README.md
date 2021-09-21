# paketo-website
Website for [Paketo Buildpacks](https://paketo.io)

Every day at 0500, a [cron job](/.github/workflows/check-live-links.yml) runs to check for broken links on the deployed Paketo site.
![Link Check](https://github.com/paketo-buildpacks/paketo-website/actions/workflows/check-live-links.yml/badge.svg)
## Development

### Prerequisites

* [Hugo (extended version)](https://gohugo.io/getting-started/installing/)
* [npm](https://docs.npmjs.com/getting-started/configuring-your-local-environment)

### Navigating this repo
* HTML lives in [`layouts/`](/layouts), including
  [partials](https://gohugo.io/templates/partials/) (HTML snippets) that are
  reused across multiple pages.
* SCSS and Javascript live in [`assets/`](/assets)
* Much of the CSS uses the [BEM naming
  methodology](https://en.bem.info/methodology/quick-start/).
* Hugo automatically compiles our SCSS into CSS. This is a feature of Hugo
  extended version.

### Serving Locally

To Serve docs at http://localhost:1313:
```bash
npm install && hugo server
```

### Testing links

To ensure that documentation cross-referencing is done correctly (i.e. no links are broken), we use built in Hugo shortcodes `{{< ref >}}` and `{{< relref >}}` in our documentation. (See [Hugo docs](https://gohugo.io/content-management/cross-references/)). As a heuristic check for non-shortcoded internal links in the docs markdown, run
```bash
scripts/check-internal-links.sh
```

We also check whether external links on the site (e.g. a link to buildpacks.io) are valid, using a link checker called [muffet](https://github.com/raviqqe/muffet). It's written in Golang!

To quickly check most links on the rendered site, run
```bash
scripts/check-links.sh --quick
```
This uses the power of goroutines to check our external links at lightning speed -- but avoids Github links to escape rate limiting.

To run a more complete link check (including Github links), run
```bash
scripts/check-links.sh
```

### Checking spelling
The site uses the
[spellchecker-cli](https://github.com/tbroadley/spellchecker-cli) to check
spelling in documentation content. To quickly spellcheck the entire `/content`
directory, run
```bash
scripts/check-spelling.sh
```
#### Custom dictionary
This repo contains a dictionary of custom regular expressions to add to the
default spellcheck dictionary. It is in
[scripts/.util/spellcheck-dictionary.txt](/scripts/.util/spellcheck-dictionary.txt).
Items are case sensitive. See spellchecker's documentation for more details.

### Contributing
* Open a PR against the main branch if you'd like to make a change to the site.
    * If you're already a
      [Contributor](https://github.com/orgs/paketo-buildpacks/teams/content-contributors),
      when you open a PR, a GHA will automatically deploy an ephemeral version
      of the staging site based on your PR branch. A bot will comment on your
      PR with the staging URL.
    * Otherwise, a
      [Maintainer](https://github.com/orgs/paketo-buildpacks/teams/content-maintainers)
      can manually trigger a deploy of your PR. A bot will comment with the
      staging URL.
* Join website-related conversations in the
  [#website](https://paketobuildpacks.slack.com/archives/C0229DVMFM5) channel
  of the [Paketo slack instance](https://slack.paketo.io/).

## Deployment
This repo uses a GHA workflow to automatically deploy commits on `main` to the
[Paketo site](https://paketo.io) using GitHub Pages.

