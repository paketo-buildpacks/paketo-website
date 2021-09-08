# paketo-website
Website for [Paketo Buildpacks](https://paketo.io)

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

