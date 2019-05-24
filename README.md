# ATLauncher Wiki
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FATLauncher%2Fwiki.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FATLauncher%2Fwiki?ref=badge_shield)


This repository contains all the code and documentation for the ATLauncher wiki. It's built
with [Docusaurus](https://docusaurus.io/).

## Development

To get started, first install the root dependencies with `npm install`.

All the code for the website itself is contained in the `website/` directory.

Once in this directory, you can get started by installing the dependencies with `npm install` and
then you can start the dev server by running `npm start`.

## Deployment

Any changes to this repository will automatically deploy to the [wiki](https://wiki.atlauncher.com)
using GitHub actions.

## Editing Content

### Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://docusaurus.io/docs/en/navigation)

## Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebar.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click [here](https://docusaurus.io/docs/en/navigation)

### Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the headerLinks field of `website/siteConfig.js`:

`website/siteConfig.js`

```javascript
{
  headerLinks: [
    ...
    /* you can add docs */
    { doc: 'my-examples', label: 'Examples' },
    /* you can add custom pages */
    { page: 'help', label: 'Help' },
    /* you can add external links */
    { href: 'https://github.com/facebook/Docusaurus', label: 'GitHub' },
    ...
  ],
  ...
}
```

For more information about the navigation bar, click [here](https://docusaurus.io/docs/en/navigation)

### Adding custom pages

1. Docusaurus uses React components to build pages. The components are saved as .js files in `website/pages/en`:
1. If you want your page to show up in your navigation header, you will need to update `website/siteConfig.js` to add to the `headerLinks` element:

`website/siteConfig.js`

```javascript
{
  headerLinks: [
    ...
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
    ...
  ],
  ...
}
```

For more information about custom pages, click [here](https://docusaurus.io/docs/en/custom-pages).

## Full Documentation

Full documentation can be found on the [Docusaurus website](https://docusaurus.io/).


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FATLauncher%2Fwiki.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FATLauncher%2Fwiki?ref=badge_large)