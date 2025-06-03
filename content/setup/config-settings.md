---
section: Setup Your Site
nav_order: 2
title: Configuring (_config.yml settings)
---

# Configuring Your Site with `_config.yml`

The `_config.yml` file in your project root controls your site's core settings, appearance, and metadata connections. Editing this file is one of the first steps after creating your repository.

## Key Sections in `_config.yml`

### URL Variables
```yaml
url: # Full site URL
github: # GitHub repository URL
baseurl: # Path if not at root (optional)
source-code: # Link to your repository
```

### Site Settings
```yaml
title: Your Project Title
tagline: Short phrase for banner
description: "A longer description for SEO"
author: yourusername
```

### Collection Settings
```yaml
metadata: your-metadata-filename # (without .csv)
```
This links your site to your main metadata CSV in `_data/`.

### Organization Branding (Optional)
```yaml
organization-name: "Your Organization Name"
organization-link: https://your-organization-website.com
organization-logo-banner: https://path-to-your-banner-logo.png
organization-logo-nav: https://path-to-your-nav-logo.png
```

### Search Engine Indexing
```yaml
# noindex: true # Uncomment to prevent Google from indexing your site
```

## Tips for Editing
- Use spaces (not tabs) for indentation
- Put quotes around values with special characters or colons
- Save and commit changes to see them live

## Learn More & Tutorials
- [How to Edit _config.yml on GitHub](../tutorials/tutorial-github#edit-_configyml)
- [Project Setup Guide](setup-your-site)
- [Metadata Preparation](../prepare-content)

For advanced options, see the [CollectionBuilder configuration docs](https://collectionbuilder.github.io/cb-docs/docs/theme/).
