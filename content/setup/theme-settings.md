---
section_id: Setup Your Site
nav_order: 5
title: theme.yml Settings
---

# Customizing Your Site with `_data/theme.yml`

The `_data/theme.yml` file controls your site's appearance and many display options. Use it to adjust colors, layout, and which features are visible to users.

## Key Options in `theme.yml`

### Transcript Page Options
```yaml
transcript-fields: "description,date,location,interviewer,image"
```
Controls which metadata fields appear at the top of each transcript page.

```yaml
media-scroll: true
```
Keeps the media player and visualization visible as you scroll (on large screens).

```yaml
search-and-filters: true
search-and-filters-sticky: true
```
Show and pin the search/filter bar above transcript text.

### Visualization Page Options
```yaml
as-data: true
```
Show an "As Data" button for more info about the visualization.

```yaml
transcript-contents: true
```
Display transcript text below the visualization chart.

```yaml
json-generation: false
```
Controls whether JSON files are used for advanced visualization features.

### Accessibility Considerations
- Test media scroll and filters for screen reader compatibility
- Displaying transcript text improves accessibility

## Learn More & Tutorials
- [How to Customize Your Site](../tutorials/tutorial-github.html#customize-your-site)
- [OHD Customization Options](../customize/overview.html)
- [theme.yml Reference (CollectionBuilder)](https://collectionbuilder.github.io/cb-docs/docs/theme/)

For more advanced options, see the [CollectionBuilder documentation](https://collectionbuilder.github.io/cb-docs/docs/customization/).
