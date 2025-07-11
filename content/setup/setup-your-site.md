---
section_id: Setup Your Site
nav_order: 3
title: Setup Overview
---

# Setup Your Site

This section combines all the steps needed to get your Oral History as Data project up and running, from creating your repository to configuring and customizing your site.

## What You'll Learn
- How to create and organize your GitHub repository
- How to configure essential project settings
- How to choose your development approach (web or local)
- How to customize your site's appearance and features
- How to use and edit key configuration files: [_config.yml](config-settings) and [theme.yml](theme-settings)

## Setup Workflow

1. **Create your repository**
   - Use the OHD template on GitHub to start your project.
   - Name your repository and set it to public for GitHub Pages.
   - [See the GitHub setup tutorial](../tutorials/tutorial-github)
2. **Configure your project**
   - Edit the [_config.yml](config-settings) file to set your site title, description, and metadata filename.
   - Update other settings as needed (branding, navigation, etc.).
   - [How to edit _config.yml on GitHub](../tutorials/tutorial-github#edit-_configyml)
3. **Choose your development method**
   - Use GitHub's web interface for simple, browser-based editing.
   - Set up a local development environment for advanced customization and faster feedback.
   - [See development options](development-options)
4. **Customize your site**
   - Edit [_data/theme.yml](theme-settings) to change colors, fonts, and layout.
   - Adjust navigation and page config files in `_data/` as needed.
   - Add or edit content pages (e.g., about, home, custom sections) using [CollectionBuilder Options](customization-cb).
5. **Advanced options**
   - Explore CollectionBuilder's extensive customization features for further control over your site's look and functionality.
   - [CollectionBuilder customization docs](https://collectionbuilder.github.io/cb-docs/docs/customization/)

## Key Files and Settings

| File | Purpose |
|------|---------|
| **_config.yml** | Main project settings (title, metadata, etc.) |
| **_data/theme.yml** | Visual appearance and layout options |
| **_data/config-*.csv** | Navigation and feature configuration |
| **_data/transcripts/** | Folder for transcript CSVs |
| **_data/filters.csv** | Coding vocabulary for tags |

## Why This Matters

A well-configured site ensures your content is discoverable, visually appealing, and easy to maintain. Customization options let you tailor the experience to your project's needs and audience.

For more details and advanced options, see the [CollectionBuilder documentation](https://collectionbuilder.github.io/cb-docs/).
