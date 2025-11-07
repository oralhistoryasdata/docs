---
nav_order: 9
title: Troubleshooting Guide
---

## Troubleshooting Common Issues

This guide helps you resolve common problems when building and maintaining your Oral History as Data site. Issues are organized by category for easy reference.

## Setup and Configuration Issues

### Site Won't Build

**Problem**: Your site fails to build after making changes

**Possible Causes and Solutions**:

1. **YAML formatting errors in _config.yml or front matter**
   - Check for proper indentation (use spaces, not tabs)
   - Ensure colons have a space after them (`title: My Project` not `title:My Project`)
   - Put quotes around values containing special characters or colons
   - Use a [YAML validator](https://www.yamllint.com/) to check syntax
   - Check the Actions tab on GitHub for specific error messages

2. **Incorrect metadata filename reference**
   - In `_config.yml`, verify `metadata:` matches your CSV filename (without .csv extension)
   - Example: If file is `my-interviews.csv`, use `metadata: my-interviews`

3. **Required fields missing from metadata**
   - Ensure every row has `objectid`, `title`, and `display_template` fields
   - Check for completely empty rows in your metadata CSV


## Content Issues

### Transcripts Not Displaying

**Problem**: Transcript pages are blank or show errors

**Common Causes**:

1. **Filename mismatch (most common issue!)**
   - The transcript CSV filename MUST exactly match the `objectid` in your metadata
   - Example: If metadata has `objectid: smith_john`, transcript must be named `smith_john.csv`
   - Check for typos, extra spaces, or capitalization differences
   - Location: Transcript CSVs go in `_data/transcripts/` directory

2. **Incorrect display_template**
   - Verify `display_template: transcript` in your metadata for interview items
   - Check for typos: `transcript` not `transcripts` or `Transcript`

3. **CSV formatting issues**
   - Ensure first row contains column headers (`speaker`, `words`, `tags`, `timestamp`)
   - Check that quotes are properly matched in cells with commas
   - Verify file is saved as CSV format, not Excel (.xlsx)

### Visualizations Not Appearing

**Problem**: Colored visualization bars don't show up on transcript pages

**Solutions**:

1. **Missing or incorrect filters.csv**
   - Create `_data/filters.csv` with columns: `tag`, `description`
   - Ensure every tag used in transcripts is defined in filters.csv
   - Check that tag names match exactly (case-sensitive)

2. **Tags not formatted correctly in transcripts**
   - Multiple tags should be separated by semicolons: `education; career; family`
   - No spaces before/after tag names (unless part of the tag)
   - Use only tags defined in your filters.csv

3. **Transcript files in wrong location**
   - Transcript CSVs must be in `_data/transcripts/` directory
   - NOT in `objects/` or `_data/` root

### Media Not Playing

**Problem**: Audio or video files won't play on transcript pages

**Solutions**:

1. **Check object_location format**
   - YouTube: Use format `https://youtu.be/VIDEO_ID` or full URL
   - SoundCloud: Use full track URL
   - Local files: Use `/objects/filename.mp3` (must start with `/`)

2. **File format issues**
   - Supported formats: MP3, MP4, OGG, WebM
   - Convert incompatible formats using tools like [CloudConvert](https://cloudconvert.com/)

3. **File size too large**
   - Keep audio files under 50MB for GitHub Pages
   - Consider using external hosting (YouTube, SoundCloud) for larger files

### Images Not Showing

**Problem**: Images are broken or don't display

**Solutions**:
- Verify image files are in the `objects/` directory
- Check that paths start with `/objects/` for local images
- Ensure filenames in metadata match actual filenames exactly (case-sensitive)
- Verify image formats are web-compatible (JPG, PNG, GIF)
- Check file sizes aren't excessively large (optimize images to under 1MB each)

## Publishing Issues

### 404 Error When Visiting Site

**Problem**: GitHub Pages URL shows "404 Page Not Found"

**Solutions**:
- Wait 5-10 minutes after first enabling GitHub Pages (initial build takes longer)
- Check that GitHub Pages is enabled in Settings → Pages
- Verify you're using the correct URL format: `https://username.github.io/repository-name/`
- Check the Actions tab to ensure the build completed successfully
- If you recently changed the repository name, update your URLs accordingly


## Getting More Help

Check the [CollectionBuilder Docs](https://collectionbuilder.github.io/cb-docs/) for additional information. 

If you're still experiencing issues:

1. **Check the Actions tab** on GitHub for detailed build error messages
2. **Review relevant documentation sections**:
   - [Setup Your Site](intro) - Basic configuration
   - [Prepare Your Content](prepare-content/collection-metadata-overview) - Metadata and transcripts
   - [Publishing](publish/publishing) - GitHub Pages setup
3. **Search existing issues** on the [OHD GitHub repository](https://github.com/oralhistoryasdata/template/issues)
4. **Ask the CollectionBuilder community** in their [Discussion Forum](https://github.com/CollectionBuilder/collectionbuilder.github.io/discussions)
5. **Create a new issue** if you've found a bug or need specific help

### Information to Include When Asking for Help

- Link to your repository (if public) or relevant code snippets
- Error messages (full text from terminal or Actions tab)
- What you were trying to do
- What you expected to happen vs. what actually happened
- Steps you've already tried
- Your operating system (for local development issues)
