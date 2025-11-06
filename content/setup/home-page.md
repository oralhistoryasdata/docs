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

## Customizing Site Title and Tagline

The home page displays your site title and tagline prominently. These are set in `_config.yml`:

```yaml
# _config.yml
title: "Your Oral History Project Name"
tagline: "A descriptive tagline about your collection"
description: "Longer description for search engines (max 160 characters)"
```

**Title** appears as the main heading on your home page.
**Tagline** appears below the title explaining your project.
**Description** is used for SEO meta tags (not displayed on page).

## Adding a Background or Featured Image

For the `home-cover` layout, you can add a background image or featured image:

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

**Recommended specs**:
- Size: At least 1920x1080px for full-screen display
- Format: JPG or PNG
- File size: Under 500KB (optimize for web)

### Option 3: Use an external URL

```yaml
# _data/theme.yml
featured-image: https://example.com/image.jpg
```

### Image Display Options

Customize how the image displays:

```yaml
# _data/theme.yml
featured-image-alt-text: "Description of the image"
home-banner-image-position: center  # Options: center, top, bottom
home-title-y-padding: 12em  # Adjusts vertical spacing of title
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

## Organization Branding

Add your institution's branding in `_config.yml`:

```yaml
# _config.yml
organization-name: "Your Organization Name"
organization-link: https://your-organization.edu
organization-logo-banner: https://example.com/logo-banner.png
organization-logo-nav: https://example.com/logo-small.png
```

**Logo specifications**:
- **Banner logo**: Appears in the home page footer (recommended width: 300-400px)
- **Nav logo**: Appears in the site header/navigation (recommended height: 40-50px)
- Can be external URLs or relative paths to files in your repository (e.g., `/objects/logo.png`)

## Customizing Colors

While the `home-cover` layout uses a dark theme by default, you can customize accent colors in `_data/theme.yml`:

```yaml
# _data/theme.yml
theme-color: "#0d6efd"      # Primary color for buttons and highlights
link-color: "#0d6efd"        # Link color
```

**Note**: The dark hero section's background color is part of the layout design and changing it requires advanced customization.

## Typography

Customize fonts in `_data/theme.yml`:

```yaml
# _data/theme.yml
base-font-family: "Roboto, sans-serif"
heading-font-family: "Roboto Slab, serif"
base-font-size: 1.2em
```

Use [Google Fonts](https://fonts.google.com/) to find font names. Include the full font family with fallback (e.g., `"Font Name, sans-serif"`).

## Navigation Buttons

The `home-cover` layout automatically generates navigation buttons based on your `_data/config-nav.csv` file. These buttons appear on the home page and provide quick access to key sections.

To customize navigation, edit `_data/config-nav.csv`:

```csv
display_name,stub,dropdown_parent
Home,/,
Browse Items,/browse.html,
Subjects,/subjects.html,
Locations,/locations.html,
Map,/map.html,
Timeline,/timeline.html,
Visualization,/visualization.html,
Data,/data/,
About,/about.html,
```

## Advanced Customization

### Using Custom Content in pages/index.md

While the template's `pages/index.md` is typically empty (just front matter), you *can* add custom content that will appear in specific areas of the layout:

```yaml
---
layout: home-cover
title: Home
permalink: /
---

Content you add here will be processed by the layout template.
```

However, for `home-cover`, this is rarely used. The layout generates content automatically from your configuration files.

### Switching Base Layout Style

If you want to use CollectionBuilder styling throughout your entire site (not just the home page), edit `_data/theme.yml`:

```yaml
# _data/theme.yml
base-layout: cb  # Use CollectionBuilder design system
# OR
base-layout: ohd  # Use OHD design system (default)
```

## Example Configurations

### Minimal OHD Home Page

```yaml
# _config.yml
title: "Community Voices Archive"
tagline: "Oral histories from our local community"
```

```yaml
# _data/theme.yml
home-page-visualization: true
```

```yaml
# pages/index.md
---
layout: home-cover
title: Home
permalink: /
---
```

### Home Page with Featured Image

```yaml
# _config.yml
title: "Mining Heritage Project"
tagline: "Stories from three generations of miners"
organization-name: "State Historical Society"
organization-link: https://history.state.gov
```

```yaml
# _data/theme.yml
home-page-visualization: false
featured-image: /objects/mine-entrance.jpg
featured-image-alt-text: "Historic photograph of mine entrance, 1952"
home-banner-image-position: center
home-title-y-padding: 14em
```

### CollectionBuilder-Style Home Page

```yaml
# pages/index.md
---
layout: home-infographic
title: Home
permalink: /
---
```

## Testing Your Changes

After making changes:

1. **Commit and push** your changes to `_config.yml`, `_data/theme.yml`, or `pages/index.md`
2. **Wait 2-5 minutes** for GitHub Pages to rebuild
3. **Check your live site** to see the changes
4. **Clear browser cache** if changes don't appear immediately

## Troubleshooting

| Problem | Solution |
|---------|----------|
| **Title/tagline not showing** | Check that `title` and `tagline` are set in `_config.yml` (not `pages/index.md`) |
| **Featured image not appearing** | Verify `featured-image` path in `_data/theme.yml`; ensure file exists in repository |
| **Visualization not showing** | Ensure `home-page-visualization: true` in `theme.yml` and that you have transcript files with tags |
| **Wrong layout displaying** | Check `layout:` value in `pages/index.md` front matter (must be `home-cover` or `home-infographic`) |
| **Organization logo missing** | Verify URLs in `_config.yml` for `organization-logo-banner` and `organization-logo-nav` |

## Learn More

- [Configuration File Reference](config-settings) - Complete `_config.yml` settings
- [Theme Settings Overview](theme-settings) - All `theme.yml` options
- [CollectionBuilder Home Page Docs](https://collectionbuilder.github.io/cb-docs/docs/theme/home/) - Advanced customization options
