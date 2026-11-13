---
section: Setup Your Site
nav_order: 4
title: Customizing Visualizations
---

# Understanding and Customizing Visualizations

The visualization system is a core feature of Oral History as Data, enabling researchers and users to visually explore coded interview content. This guide explains how the visualization system works and how you can customize it for your specific needs.

## How OHD Visualizations Work

Oral History as Data creates interactive visualizations in two steps.

**At build time**, the plugin `_plugins/topic_viz_index.rb` reads the `tags` column of every transcript CSV and writes small JSON files to `assets/data/topic-viz/`:

- `index.json` -- which lines of each interview carry which tag, plus each tag's color (no transcript text, so it stays small)
- one file per tag (for example `education.json`) -- the passages for that tag, grouped by interview

**In the browser**, the visualization page draws every interview from `index.json` and only loads a tag's passages when a visitor selects that tag.
This keeps the page fast whether your collection has five interviews or five hundred, and no rake command is needed.

On the visualization page, visitors can:

- Select a topic to leave only that topic's lines colored
- Hover over a mark to read the passage, and select it to open that moment in the interview
- Sort interviews by name or by number of passages, and hide interviews with no passages
- Read, expand, and print the matching passages in the **Passages** section below the bars

Interviews are grouped by interviewee: if your metadata includes a `person` record (`display_template: person`), all interviews with that `personid` share one row.
The home page overview (`{% raw %}{% include transcript/index/viz-overview.html height="450px" %}{% endraw %}`) uses the same `index.json` file.

{% include bootstrap/figure.md img="howto/visualization.png" caption="The OHD visualization interface highlights coded segments" alt="Screenshot of the OHD visualization interface" class="w-75" %}

## Customizing the Visualization System

### Choosing a Display Size

Set `visualization-size` in `_data/theme.yml` to match your collection:

```yaml
visualization-size: auto ## large / compact / auto
visualization-compact-threshold: 25 ## with auto, use compact above this many interviews
```

- **large** -- one tall bar per interviewee with their name above it
- **compact** -- thin strips in columns, which scale to very large collections
- **auto** -- picks `large` or `compact` based on the number of interviews

### Choosing Which Tags Appear

By default only the tags in `_data/filters.csv` are shown.
To include every tag in your transcripts, set:

```yaml
topic-viz-tags: all
```

Tags in square brackets, such as `[crosstalk]`, are always skipped and listed as a warning in the build output.
Tags that differ only in capitalization or spacing (`LCOH Places`, `lcoh places`) are merged into one topic.

See [Theme Settings](theme-settings) for all visualization options, including `transcript-contents` and `topic-viz-output`.

### Modifying Tag Colors

Tag colors come from one 20-color palette, applied in the order tags appear in `_data/filters.csv`.
Tags not in `filters.csv` (when using `topic-viz-tags: all`) continue through the palette, most common first; with more than 20 tags the colors repeat.

The same palette is defined in two places, and both should be changed together so a tag has the same color everywhere:

1. `_plugins/topic_viz_index.rb` -- the `PALETTE` list sets colors on the visualization page and home page overview
2. `_includes/transcript/style/filter-style.html` -- the `cycle` list sets colors on individual interview pages

```ruby
# _plugins/topic_viz_index.rb
PALETTE = %w[
  #e6194b #3cb44b #ffe119 #4363d8 #f58231 #911eb4 #46f0f0 #f032e6 #bcf60c #fabebe
  #008080 #e6beff #9a6324 #fffac8 #800000 #aaffc3 #808000 #ffd8b1 #000075 #808080
].freeze
```

```html
{% raw %}<!-- _includes/transcript/style/filter-style.html -->
{% capture color %}{% cycle '#e6194b','#3cb44b','#ffe119','#4363d8', ... %}{% endcapture %}{% endraw %}
```

{% include bootstrap/alert.md text="**Keep the order the same:** the first color in each list goes to the first tag in `filters.csv`, the second to the second, and so on. To give a specific tag a specific color, reorder the rows in `filters.csv` or the colors in both lists." color="warning" %}

Because the visualization is now drawn on a canvas, CSS overrides in `_sass/_custom.scss` (such as `.education { fill: ... }`) only affect interview pages, not the visualization page.
