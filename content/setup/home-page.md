---
section: Setup Your Site
nav_order: 4
title: Customize Home Page
---

# Customizing Your Home Page

Your OHD site's home page is the first thing visitors see, so customizing it to match your project's identity and goals is important. This guide covers the various ways you can customize your home page.

## Home Page Layout Options

OHD offers different home page layouts to suit different presentation styles. The layout is controlled by the `layout` value in your `pages/index.md` file.

### Layout: home-cover (Default OHD Style)

The `home-cover` layout creates a full-screen landing page with a large title and optional background image. This is the default for OHD projects and emphasizes the oral history focus.

**Features**:
- Full-screen cover design with centered title
- Optional background image
- Prominent "Get Started" or custom call-to-action button
- Clean, focused presentation ideal for interview collections

**To use this layout**:

1. Open `pages/index.md` in your repository
2. Set the front matter to:
```yaml
---
layout: home-cover
---
```

### Layout: home-infographic (CollectionBuilder Style)

The `home-infographic` layout displays a more data-rich home page with featured items, collection statistics, and visual elements. This is better suited if you want to show more collection information upfront.

**Features**:
- Featured image carousel from your collection
- Collection statistics and metadata
- Multiple visual elements and navigation options
- More traditional digital collection homepage feel

**To use this layout**:

1. Open `pages/index.md` in your repository
2. Set the front matter to:
```yaml
---
layout: home-infographic
---
```

## Customizing Home Page Content

### Editing pages/index.md

The `pages/index.md` file controls your home page content and settings:

```yaml
---
layout: home-cover
title: Your Project Title
permalink: /
---

# Optional: Add custom content below

Your custom introductory text can go here. This appears below the main title area.
```

**Key front matter options**:

- `layout`: Choose `home-cover` or `home-infographic`
- `title`: Main heading displayed on the home page (can also pull from `_config.yml`)
- `permalink`: Keep as `/` to make this your home page

### Adding a Background Image

For the `home-cover` layout, you can add a background image to create visual impact:

1. **Add your image to the repository**
   - Place the image file in the `objects/` folder (e.g., `objects/homepage-bg.jpg`)
   - Recommended size: At least 1920x1080px for full-screen display
   - Optimize image file size for web (aim for under 500KB)

2. **Configure in `_data/theme.yml`**
   ```yaml
   featured-image: /objects/homepage-bg.jpg
   ```

3. **Adjust image display settings** (optional)
   ```yaml
   home-title-y-padding: 12em  # Vertical spacing for title
   home-banner-image-position: center  # Image positioning
   ```

## Customizing Colors and Styles

### Primary Colors

Edit `_data/theme.yml` to change your site's color scheme:

```yaml
# Primary color (used for buttons, links, highlights)
theme-color: "#0d6efd"

# Accent color (for secondary elements)
secondary-color: "#6c757d"

# Link color
link-color: "#0d6efd"
```

**Finding color codes**: Use a tool like [HTML Color Picker](https://www.w3schools.com/colors/colors_picker.asp) to find hex color codes that match your branding.

### Typography

Customize fonts in `_data/theme.yml`:

```yaml
# Google Fonts for body text
base-font-family: "Roboto, sans-serif"

# Google Fonts for headings
heading-font-family: "Roboto Slab, serif"

# Font size
base-font-size: 1.2em
```

## Customizing the Call-to-Action

### Button Text and Link

The home page includes a primary call-to-action button. Customize it in `_data/theme.yml`:

```yaml
# Button text
cta-button-text: "Explore Interviews"

# Button destination (page to link to)
cta-button-link: /browse.html
```

**Common button destinations**:
- `/browse.html` - Browse all items
- `/visualization.html` - Go to visualization page
- `/subjects.html` - Browse by subject
- `/about.html` - Learn more about the project

## Using Organization Branding

Add your institution's branding via `_config.yml`:

```yaml
# Organization information
organization-name: "Your Organization"
organization-link: https://your-organization.edu
organization-logo-banner: https://example.com/logo-banner.png
organization-logo-nav: https://example.com/logo-small.png
```

**Logo specifications**:
- **Banner logo**: Larger version for home page/footer (recommended width: 300-400px)
- **Nav logo**: Smaller version for navigation bar (recommended height: 40-50px)
- Can be external URLs or relative paths to files in your repository

## Advanced Customization Options

### Custom HTML Content

For more control, you can add custom HTML sections to your home page:

1. Edit `pages/index.md`
2. Add HTML content below the front matter:

```markdown
---
layout: home-cover
---

<div class="container my-5">
  <div class="row">
    <div class="col-md-6">
      <h2>About This Project</h2>
      <p>Your custom content here...</p>
    </div>
    <div class="col-md-6">
      <h2>Featured Interviews</h2>
      <p>More custom content...</p>
    </div>
  </div>
</div>
```

### Using Bootstrap Classes

OHD is built with Bootstrap 5, so you can use any [Bootstrap utility classes](https://getbootstrap.com/docs/5.1/utilities/) for styling:

- **Spacing**: `mt-3` (margin-top), `py-5` (padding vertical), etc.
- **Colors**: `text-primary`, `bg-light`, etc.
- **Layout**: `container`, `row`, `col-md-6`, etc.

### Including Feature Components

You can include CollectionBuilder feature components on your home page. Add them in `pages/index.md`:

```markdown
{% include feature/image.html objectid="demo_001" width="75" %}

{% include feature/card.md header="About This Collection" text="Description of your project" %}

{% include feature/button.md text="Browse Interviews" link="/browse.html" color="primary" %}
```

See the [CollectionBuilder Feature Includes documentation](https://collectionbuilder.github.io/cb-docs/docs/pages/features/) for more options.

## Example Configurations

### Minimal Home Page

```yaml
# pages/index.md
---
layout: home-cover
title: Voices from the Valley
---

# _data/theme.yml
theme-color: "#2c5f2d"
featured-image: /objects/valley-landscape.jpg
cta-button-text: "Listen to Stories"
cta-button-link: /browse.html
```

### Rich Home Page with Branding

```yaml
# pages/index.md
---
layout: home-infographic
title: University Archives Oral History Project
---

# _config.yml
organization-name: "State University Archives"
organization-link: https://archives.university.edu
organization-logo-banner: /objects/logo-banner.png

# _data/theme.yml
theme-color: "#003366"
base-font-family: "Georgia, serif"
```

## Testing Your Changes

After making changes:

1. **Preview locally** (if using Jekyll):
   ```bash
   bundle exec jekyll serve
   ```
   View at `http://localhost:4000`

2. **Push to GitHub**:
   - Commit your changes to `pages/index.md`, `_config.yml`, and/or `_data/theme.yml`
   - Push to your repository
   - Wait 1-2 minutes for GitHub Pages to rebuild
   - Check your live site

## Troubleshooting

| Problem | Solution |
|---------|----------|
| **Background image not showing** | Verify the image path is correct and starts with `/objects/` or full URL |
| **Colors not changing** | Check that hex color codes include the `#` symbol and are in quotes |
| **Layout not applying** | Ensure `layout:` value matches exactly (`home-cover` or `home-infographic`) |
| **Changes not visible** | Clear browser cache or wait longer for GitHub Pages to rebuild |
| **Button link broken** | Verify the link path starts with `/` for internal links |

## Learn More

- [CollectionBuilder Home Page Configuration](https://collectionbuilder.github.io/cb-docs/docs/theme/home/)
- [Theme Settings Overview](theme-settings)
- [Configuration File Reference](config-settings)
- [Adding Custom Pages](customization-cb)
