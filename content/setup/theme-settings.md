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

Shows the **Passages** section below the color-coded bars on the visualization page.
When a visitor selects a topic, its passages are listed here, grouped by interview, and can be expanded or printed.
Set to `false` to show only the bars.

```yaml
visualization-size: compact
visualization-compact-threshold: 25
```

Controls how the bars on the visualization page are drawn:

- `large` -- one tall bar per interviewee with their name above it (best for smaller collections)
- `compact` -- thin strips arranged in columns (best for large collections)
- `auto` -- uses `large` until the number of interviews is greater than `visualization-compact-threshold`, then switches to `compact`

`visualization-compact-threshold` is only used with `auto` (defaults to `30` if left out).
In `compact` mode the row height adjusts to the collection size automatically, from tallest (10 or fewer interviews) to thinnest (more than 100).

```yaml
topic-viz-tags: filters
```

Chooses which tags appear in the visualization:

- `filters` -- only the tags listed in `_data/filters.csv` (recommended, so the topic list matches your curated filters)
- `all` -- every tag found in your transcript CSVs

Tags written in square brackets (for example `[inaudible]`) are treated as processing notes and are always skipped.

```yaml
topic-viz-output: assets/data/topic-viz
```

The folder where the visualization's data files are written during the build.
You normally do not need to change this.

{% include bootstrap/alert.md text="**No extra step needed:** The visualization data is generated automatically every time the site builds, by the plugin `_plugins/topic_viz_index.rb`. Because it is a plugin, your site must be built with GitHub Actions or locally -- see [Publishing Options](../publish/publishing)." color="info" %}

```yaml
json-generation: false
```

Controls only the **Transcripts as JSON** download options in the Data Access section of the visualization page.
The visualization itself no longer uses these files, so most projects can leave this as `false`.

**Warning --> This requires an Extra Step!**: If set to `true`, you must run the rake command `rake generate_json` to create the JSON files before building the site.

### Site Layout Options
```yaml
base-layout: OHD
```
Choose between `OHD` or `CB` (CollectionBuilder) to control the overall site appearance and styling.

**Warning --> Home page needs further adjustment for CollectionBuilder look:** If you'd like to use a full CB look, you'll need to also change the layout of the `/pages/index.md` needs to be changed to `home-infographic` **

## Learn More & Tutorials
- [How to Customize the Visualization](visualizations)
- [Page and Scaffold Customizations via CB](customization-cb)
- [theme.yml Reference (CollectionBuilder)](https://collectionbuilder.github.io/cb-docs/docs/theme/)

For more advanced options, see the [CollectionBuilder documentation](https://collectionbuilder.github.io/cb-docs/docs/customization/).
