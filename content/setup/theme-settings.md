---
section: Setup Your Site
nav_order: 3
title: Customize (_data/theme.yml)
---

# Customizing Your Site with `_data/theme.yml`

The `_data/theme.yml` file controls your site's appearance and many display options. Use it to adjust colors, layout, and which features are visible to users.

## Key Options in `theme.yml`

### Transcript Page Options
```yaml
transcript-fields: "description,date,location,interviewer,image"
```
Controls which metadata fields appear at the top of each transcript page. Choose from: `description`, `date`, `location`, `interviewer`, `interviewee`, `bio`, `image`. List the fields you want displayed, separated by commas.

```yaml
media-scroll: true
```
Keeps the media player and visualization visible as you scroll (on large screens with minimum width 1024px). The media appears in the lower right as users scroll down a transcript.

```yaml
search-and-filters: true
search-and-filters-sticky: true
```
The first option shows the search/filter bar above transcript text. The second option makes the search and filter controls stick to the top of the page as users scroll down.

### Visualization Page Options
```yaml
as-data: true
```
Shows an "As Data" button at the top right of the visualization page, which opens a modal with more information about the data when clicked.

```yaml
transcript-contents: true
```
Displays and filters the contents of individual interviews at the bottom of the visualization page (below the color-coded chart portion).

```yaml
json-generation: false
```

This determines if JSON files will be accessed for the visualization page. Particularly good for large collections as it reduces the visualization page size and allows for better usability. 

This will also allow you to download individual json files of your interviews. 

**Warning --> This requires an Extra Step!**: If set to `true`, you must run the rake command `generate_json` to create necessary JSON files. This determines whether JSON files are accessed for advanced visualization features. Defaults to `false`.

### Site Layout Options
```yaml
base-layout: OHD
```
Choose between `OHD` or `CB` (CollectionBuilder) to control the overall site appearance and styling.

## Learn More & Tutorials
- [How to Customize Your Site](../tutorials/tutorial-github#customize-your-site)
- [OHD Customization Options](../customize/overview)
- [theme.yml Reference (CollectionBuilder)](https://collectionbuilder.github.io/cb-docs/docs/theme/)

For more advanced options, see the [CollectionBuilder documentation](https://collectionbuilder.github.io/cb-docs/docs/customization/).
