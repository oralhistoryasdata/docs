---
section: Setup Your Site
nav_order: 5
title: CollectionBuilder Customization 
---

# Customizing Using CollectionBuilder Options

Because Oral History as Data is built on top of CollectionBuilder, you have access to many powerful customization options beyond the OHD-specific features.

The sections below provide direct links to specific CollectionBuilder documentation topics. When you click these links, you'll be taken to the CollectionBuilder documentation site where you can learn about each customization option in detail. You can then return here to continue working on your OHD project.

{% include bootstrap/alert.md text="**Note**: The CollectionBuilder documentation covers the general CollectionBuilder framework. Most customization options work the same way in OHD, but remember that OHD adds transcript-specific features on top of the base CollectionBuilder functionality." color="info" %} 

# CollectionBuilder Documentation Guide

## Theme Options
The `_data/theme.yml` file controls display options that impact every page of your site. These settings affect global options in your website, so it's important to review each one as you create your site.

- [Theme Options Overview](https://collectionbuilder.github.io/cb-docs/docs/theme/) - Main page explaining theme configuration
- [Home Page Configuration](https://collectionbuilder.github.io/cb-docs/docs/theme/home/) - Configure your collection's home page features, including featured images and banner settings
- [Browse Page Configuration](https://collectionbuilder.github.io/cb-docs/docs/theme/browse/) - Options for the browse layout
- [Item Page Configuration](https://collectionbuilder.github.io/cb-docs/docs/theme/item/) - Settings for individual item pages
- [Navbar Configuration](https://collectionbuilder.github.io/cb-docs/docs/theme/navbar/) - Custom navbar options

## Page Config
CollectionBuilder's navigation features and visualization pages are configured via "config" CSV files located in your project's "_data" directory. These config files usually have the prefix "config-" and tend to be more detailed than the options in "theme.yml".

- [Customization Overview](https://collectionbuilder.github.io/cb-docs/docs/customization/) - Learn about config files
- [Collection Settings](https://collectionbuilder.github.io/cb-docs/docs/config/collection/) - Configure metadata sources and page generation
- [Navigation Config](https://collectionbuilder.github.io/cb-docs/docs/config/nav/) - Create and customize your site's navigation
- [Map Configuration](https://collectionbuilder.github.io/cb-docs/docs/config/map/) - Settings for the map visualization
- [Metadata Configuration](https://collectionbuilder.github.io/cb-docs/docs/config/metadata/) - Configure how metadata fields display

## Edit Pages
Most pages in CollectionBuilder are placeholders for visualization features like "Browse" or "Subjects," but you'll want to edit "about.md" and potentially add more interpretive pages.

- [Page Basics](https://collectionbuilder.github.io/cb-docs/docs/pages/basics/) - Learn about page files and front matter
- [Add Page](https://collectionbuilder.github.io/cb-docs/docs/pages/add_page/) - Instructions for adding new pages to your collection site, including required front matter variables and permalink configuration
- [About Page](https://collectionbuilder.github.io/cb-docs/docs/pages/about/) - Customizing the about page
- [Feature Includes](https://collectionbuilder.github.io/cb-docs/docs/pages/features/) - Using include features to enhance content

## Additional Resources

### Video Tutorials

CollectionBuilder provides helpful video tutorials for working with your site:

- [GitHub Workflows Video Tutorials](https://www.youtube.com/playlist?list=PLt9zT3xACQo7q72AfphJzH41OiPcZrF4H) - Learn how to work with GitHub, repositories, and GitHub Pages
- [CSV Metadata Video Tutorials](https://www.youtube.com/playlist?list=PLt9zT3xACQo6aLD8ayLFOGp5T_mEw3tMQ) - Learn how to create and manage your collection metadata in CSV format

### Community Support

- [Discussion Forum](https://github.com/CollectionBuilder/collectionbuilder.github.io/discussions) - Get help from the CollectionBuilder community
- [CollectionBuilder Documentation](https://collectionbuilder.github.io/cb-docs/) - Complete CollectionBuilder documentation site

<!-- This section has been replaced by the new combined 'Setup Your Site' documentation. Please see ../setup-your-site.md for the latest workflow. -->

