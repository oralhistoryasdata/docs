---
section: Setup Your Site
nav_order: 4
title: Customize Home Page
---

## Customizing Your Home Page

Your OHD site's home page is the first thing visitors see, so customizing it to match your project's identity and goals is important. This guide covers the various ways you can customize your home page.

## How OHD Home Pages Work

The home page is controlled by two main configuration files:

1. **`pages/index.md`** - Sets the layout type (usually just front matter, no content)
2. **`_config.yml`** - Defines your site title, tagline, and organization info
3. **`_data/theme.yml`** - Controls colors, images, and display options

## Home Page Layout Options

OHD offers two home page layouts. The layout is set in the `pages/index.md` file.

### Layout: home-cover (Default OHD Style)

The `home-cover` layout creates a dark-themed hero landing page with a large title, tagline, and optional visualization or background image. This is the default for OHD projects.

**Features**:
- Dark hero section with site title and tagline
- Soundwave icon branding
- Optional collection visualization preview
- Optional background/featured image
- Navigation buttons to main site sections
- Clean, focused presentation emphasizing oral history content

**To use this layout**, ensure your `pages/index.md` contains:

```yaml
---
layout: home-cover
title: Home
permalink: /
---
```

Note: The `pages/index.md` file typically contains **only front matter** (no body content). The layout generates everything automatically.

### Layout: home-infographic (CollectionBuilder Style)

The `home-infographic` layout displays a more data-rich home page with featured items, collection statistics, subjects, and locations.

**Features**:
- Featured item carousel
- Top subjects buttons
- Locations section
- Time/date components
- Collection statistics
- Data download section
- More traditional digital collection homepage

**To use this layout**, change `pages/index.md` to:

```yaml
---
layout: home-infographic
title: Home
permalink: /
---
```

## Home Page Visualization

The `home-cover` layout can display a preview of your collection's coded transcript visualization.

**Enable visualization** in `_data/theme.yml`:

```yaml
# _data/theme.yml
home-page-visualization: true  # Shows visualization on home page
```

**Disable visualization** (to show featured image instead):

```yaml
# _data/theme.yml
home-page-visualization: false
```

This option only works if you have:
- Transcript files with tags/codes in `_data/transcripts/`
- A `_data/filters.csv` file defining your tags


## Adding a Background or Featured Image

For both the `home-cover` and `home-infographic` layouts, you can add a background image or featured image:

### Option 1: Use an image from your collection

Reference an existing item's objectid in `_data/theme.yml`:

```yaml
# _data/theme.yml
featured-image: demo_001  # objectid from your metadata
```

### Option 2: Use a local image file

Place your image in the `objects/` folder and reference it:

```yaml
# _data/theme.yml
featured-image: /objects/homepage-background.jpg
```


### Option 3: Use an external URL

```yaml
# _data/theme.yml
featured-image: https://example.com/image.jpg
```

### Image Display Options

Customize how the image displays (this is only for `home-infographic`):

```yaml
# _data/theme.yml
featured-image-alt-text: "Description of the image"
home-banner-image-position: center  # Options: center, top, bottom
home-title-y-padding: 12em  # Adjusts vertical spacing of title
```

## Learn More

- [Configuration File Reference](config-settings) - Complete `_config.yml` settings
- [Theme Settings Overview](theme-settings) - All `theme.yml` options
- [CollectionBuilder Home Page Docs](https://collectionbuilder.github.io/cb-docs/docs/theme/home/) - Advanced customization options
