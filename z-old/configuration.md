---
section: Setup and Configuration
nav_order: 4
title: Configuration
---

# Configuring Your Oral History as Data Project

After creating your repository, you need to customize the configuration for your specific oral history project. This is done by editing the `_config.yml` file, which controls your site's settings and appearance.


## Essential Settings to Update

The `_config.yml` file is in the root of your project folder. You can edit it on GitHub.com or on your local computer. 

The configuration file contains several important sections that you should customize:

### URL Variables

```yaml
# site domain, full URL to the production location of your collection
url: 
# path to location on the domain if necessary e.g. /digital/hjccc
baseurl: 
# location of code, the full url to your github repository
source-code: https://github.com/yourusername/yourrepository
```

These settings determine how your site is accessed. The `source-code` should point to your GitHub repository URL.

### Site Settings

```yaml
# title of site appears in banner
title: Your Oral History Project Title
# tagline, a short phrase that will appear throughout the site in the top banner
tagline: A descriptive phrase about your project
# description appears in meta tags and other locations
description: "A longer description of your project (about 160 characters max for SEO)"
# creator of the digital collection
author: yourusername
```

These settings define the basic information about your site, including the title that appears in the banner and the description used in search results.

### Collection Settings

```yaml
# Set the metadata for your collection (CSV file in your _data directory)
# Use the filename without the ".csv" extension
metadata: your-metadata-filename
```

This crucial setting specifies which CSV file in your `_data` directory contains your interview metadata. The OHD template uses a metadata format based on CollectionBuilder-CSV standards.

### Organization Branding (Optional)

```yaml
# To brand your site with an organizational logo
organization-name: "Your Organization Name"
organization-link: https://your-organization-website.com
organization-logo-banner: https://path-to-your-banner-logo.png
organization-logo-nav: https://path-to-your-nav-logo.png
```

These optional settings allow you to include your organization's branding. To remove branding, you can comment out these lines using `#` or delete them.

## Search Engine Indexing

```yaml
# set noindex to true if you do NOT want Google to index your site
# noindex: true 
```

By default, your site will be indexed by search engines. If you don't want your site to be indexed, uncomment the `noindex: true` line.

## Configuration Tips

1. **YAML Syntax**: The configuration file uses YAML format, which is sensitive to:
   - Indentation (use spaces, not tabs)
   - Quotation marks around values with special characters or that contain colons
   - Colons followed by a space

2. **Comments**: Lines starting with `#` are comments and don't affect the site

3. **Testing Changes**: After saving changes, wait for GitHub Pages to rebuild your site (typically 1-2 minutes)

## Advanced Configuration

The Oral History as Data template is built on CollectionBuilder-CSV and Jekyll, which provides additional customization options:

- **Metadata Page Generation**: You can customize how item pages are generated:
  ```yaml
  page_gen:
    - data: 'your-metadata-filename'
      template: 'item'
      name: 'objectid'
      dir: 'items'
      extension: 'html' 
      filter: 'objectid'
  ```

- **Build Settings**: The template already includes optimized build settings:
  ```yaml
  # ignore certain files/folders during build
  exclude: [docs/, Rakefile, README.md, LICENSE]
  # compress CSS output
  sass:
    style: compressed
  ```

## Saving Your Changes

1. Scroll to the bottom of the page
2. Add a brief description of your changes in the "Commit changes" box
3. Click the green "Commit changes" button

Your site will automatically rebuild with your new configuration. This process typically takes 1-2 minutes.

## Next Steps

After configuring your site, you'll need to:

1. Add your interview metadata CSV file to the `_data` directory
2. Add your interview transcript and media files
3. Publish your site on GitHub Pages

<!-- This section has been replaced by the new combined 'Setup Your Site' documentation. Please see ../setup-your-site.md for the latest workflow. -->