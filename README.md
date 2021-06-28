# paketo-website
Website for [Paketo Buildpacks](https://paketo.io)

## Development

### Prerequisites

* [Hugo (extended version)](https://gohugo.io/getting-started/installing/)
* [npm](https://docs.npmjs.com/getting-started/configuring-your-local-environment)

### Navigating this repo
* HTML lives in [`layouts/`](/layouts), including [partials](https://gohugo.io/templates/partials/)
(HTML snippets) that are reused across multiple pages.
* SCSS and Javascript live in [`assets/`](/assets)
* Much of the CSS uses the [BEM naming methodology](https://en.bem.info/methodology/quick-start/). 
* Hugo automatically compiles our SCSS into CSS. This is a feature of Hugo extended version.

### Serving Locally

To Serve docs at http://localhost:1313:
```bash
npm install && hugo server
```

### Contributing
* Open a PR against the main branch if you'd like to make a change to the site.
* Join website-related conversations in the [#website](https://paketobuildpacks.slack.com/archives/C0229DVMFM5) channel of the [Paketo slack instance](https://slack.paketo.io/).

## Deployment
This repo [automatically](https://github.com/paketo-buildpacks/paketo-website/blob/main/.github/workflows/deploy.yml) deploys commits on `main` to the [Paketo site](https://paketo.io) using GitHub Pages.
