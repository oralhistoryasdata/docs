---
section: How-To Guides
nav_order: 2
title: How to Create Transcript Tags
---

# How to Create and Apply Transcript Tags

This guide explains how to develop and apply tags to your transcript segments for visualization and analysis.

## When You Need This

- You want to visualize patterns across interview segments
- You need to categorize transcript content by topic
- You want to enable filtering and searching by theme

## Step 1: Create a Tag Vocabulary File

Before tagging transcript segments, establish a consistent vocabulary:

1. **Review your transcripts** to identify common themes
2. **Create a list of primary tags** (10-20 is usually sufficient)

## Step 2: Create `filters.csv` to define tags and enable visualization

Create a document that defines your tagging system:

1. **Create a CSV file** named "filters.csv" in your `_data` folder
2. **Structure your file** with two columns: `tag` and `description`
3. **Add your tags**, with each row containing:
   - A short tag term (used in transcripts)
   - A brief description of what the tag represents

Example filters.csv:
```
tag,description
highlight,Highlight
between,working between media to advance writing process
early,writing before widespread computer usage
paper,using paper in the writing proceess
files,usage and organization of computer files
revision,revision
software,the use of software and/or code for writing
```

## Step 3: Add Tags to Your Transcript CSV

1. **Open your transcript CSV** in a spreadsheet program
2. **Navigate to the "tags" column**
3. **Add relevant tags to each segment**:
   - Separate multiple tags with semicolons (e.g., "revision; paper; files")
   - Use the exact tag terms defined in your filters.csv file
   - Not every segment needs tags - focus on meaningful content

   ![Example of applied tags in a transcript CSV](SCREENSHOT_PLACEHOLDER)

## Tips for Effective Tagging

- **Keep it simple** - aim for 10-20 primary tags
- **Use consistent formatting**:
  - Lowercase terms
  - Avoid special characters
  - Use singular forms when possible
- **Be selective** - tag only the most relevant segments
- **Consider audience needs** - what will users want to find?
- **Be consistent** across all transcripts in your collection

## How Tags Power Visualization

Once applied, tags enable:

- Color-coded transcript visualizations
- Interactive filtering of content
- Pattern identification across interviews
- Targeted searching within specific themes

## Next Steps

After tagging your transcripts:
- [Learn how to customize visualization colors](../setup/visualizations)
- [Configure your filters display](../z-old/customize/customization)
- [Test your visualization features](../z-old/customize/overview)