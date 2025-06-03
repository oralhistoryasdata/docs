---
section: Setup Your Site
nav_order: 4
title: Customizing Visualizations
---

# Understanding and Customizing Visualizations

The visualization system is a core feature of Oral History as Data, enabling researchers and users to visually explore coded interview content. This guide explains how the visualization system works and how you can customize it for your specific needs.

## How OHD Visualizations Work

Oral History as Data creates interactive visualizations by:

1. Reading the tags from your transcript CSV files
2. Matching them to the color definitions generated from your `_data/filters.csv` file
3. Rendering colored segments that represent the coded sections of each interview
4. Providing an interactive interface where users can:
   - Filter by specific tags to see only relevant content
   - Click on colored segments to view the associated transcript text
   - Navigate between related content across multiple interviews

The visualizations are displayed at the top of the page, with filterable transcript content below.

{% include bootstrap/figure.md img="howto/visualization.png" caption="The OHD visualization interface highlights coded segments" alt="Screenshot of the OHD visualization interface" class="w-75" %}

## Customizing the Visualization System

### Modifying Tag Colors

Colors for transcript tags are automatically assigned in the `_includes/transcript/style/filter-style.html` file using a color cycle. To customize these colors:

**Option A: Edit filter-style.html (Recommended)**

1. Create a copy of `_includes/transcript/style/filter-style.html` in your repository
2. Modify the color cycle list with your preferred colors:

```html
{% raw %}
<style>
  {% for n in site.data.filters %}
  {% capture color %}{% cycle '#e6194b','#3cb44b','#ffe119','#4363d8','#f58231','#911eb4','#46f0f0','#f032e6' %}{% endcapture %}
  .{{ n.tag | slugify }} { 
    fill: {{color}};
    border-color: {{color}};
  }
  .{{ n.tag | slugify }}.primary-{{ n.tag | slugify }}{ 
    fill: {{color}} !important;
  }
  {% endfor %}
</style>
{% endraw %}
```

**Option B: Override with Custom CSS**

1. Create a file called `_sass/_custom.scss` (or edit if it exists)
2. Add CSS targeting the tag classes with `!important` to override default styling:

```scss
/* Custom tag colors */
.education { 
  fill: #8B4513 !important;
  border-color: #8B4513 !important;
}
.technology {
  fill: #4682B4 !important;
  border-color: #4682B4 !important;
}
```
