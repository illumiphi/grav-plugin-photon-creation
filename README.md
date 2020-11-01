<a href="https://photon-platform.net/">
    <img src="https://photon-platform.net/user/images/photon-logo-banner.png" alt="photon" title="photon" align="right" height="120" />
</a>


# photon ✴ Creation

## v0.1.0
> structure, style and logic for creative works - https://schema.org/CreativeWork

---

![GitHub release](https://img.shields.io/github/v/tag/photon-platform/grav-theme-photon)

- [configuration](#configuration)
- [templates](#templates)
- [scaffolds](#scaffolds)
- [scss](#scss)
- [assets](#assets)
- [languages](#languages)

# configuration
blueprints.yaml

fields:
- enabled
- built_in_css
- built_in_js
- notes

Before configuring this plugin, you should copy the `user/plugins/photon-creation/photon-creation.yaml` to `user/config/plugins/photon-creation.yaml` and only edit that copy.

Here is the default configuration and an explanation of available options:

```
enabled: true
built_in_css: true
built_in_js: true

description: description
```

Note that if you use the admin plugin, a file with your configuration, and named photon-creation.yaml will be saved in the `user/config/plugins/` folder once the configuration is saved in the admin.


# blueprints

```sh
blueprints
└── creation.yaml
```

### Creation
creation.yaml
extends: article
fields:
- header.data.creation
  - .dateCreated
  - .artForm
  - .artMedium
  - .artworkSurface
  - .width
  - header.creatives
    - .creator
    - .role

# templates

```sh
templates
├── _articles
│   ├── creation-excerpt.html.twig
│   └── creation.html.twig
├── _json-ld
│   └── creation.html.twig
└── creation.html.twig
```

# scss

```sh
scss
├── articles
│   └── _creation.scss
├── templates
│   └── _creation.scss
└── creation.scss
```

# assets

```sh
assets
├── creation.css
├── creation.css.map
└── creation.js
```

# languages

```sh
languages
└── en.yaml
```


## Installation

- all photon plugins are installed as git submodules. More on that later.



## Configuration


## Usage

Select template type when creating a new page

## Credits


## To Do

- [ ] Future plans, if any


copyright &copy; 2020
