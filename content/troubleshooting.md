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

### Configuration Changes Not Appearing

**Problem**: Changes to `_config.yml` or `_data/theme.yml` don't show up

**Solutions**:
- Restart Jekyll if working locally (`Ctrl+C` then `bundle exec jekyll serve` again)
- On GitHub Pages, wait 2-5 minutes for the site to rebuild
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try viewing in an incognito/private browsing window

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

### Build Fails on GitHub Actions

**Problem**: Green checkmark doesn't appear in Actions tab; build shows red X

**Solutions**:

1. **Click on the failed action to see error details**
   - Read the error message carefully
   - Common issues: YAML syntax errors, missing files, invalid front matter

2. **Check for duplicate workflow files**
   - Don't click "Configure" button if workflow already exists
   - Only one `.github/workflows/jekyll.yml` file should exist

3. **Verify repository structure**
   - Essential files: `_config.yml`, `_data/` directory with your metadata CSV
   - Essential directories: `_layouts/`, `_includes/`, `assets/`

### Changes Not Appearing on Live Site

**Problem**: You've committed changes but they don't show up on your published site

**Solutions**:
- Wait 2-5 minutes for GitHub Actions to rebuild your site
- Check Actions tab to see if build is in progress or has completed
- Clear browser cache or use incognito/private window
- Verify changes were actually committed and pushed to the correct branch
- Check that you're viewing the correct URL (not a local preview)

### Slow Site Loading

**Problem**: Site takes a long time to load or times out

**Solutions**:
- Optimize image sizes (use tools like [TinyPNG](https://tinypng.com/))
- Move large media files to external hosting (YouTube, SoundCloud, Vimeo)
- Reduce number of items loaded on browse page (adjust `config-browse.csv`)
- Enable JSON generation for large collections (see [visualization settings](setup/visualizations))

## Customization Issues

### Theme Colors Not Changing

**Problem**: Custom colors don't appear on your site

**Solutions**:
- Check that hex color codes include `#` symbol: `#0d6efd` not `0d6efd`
- Put color values in quotes in `_data/theme.yml`: `theme-color: "#0d6efd"`
- Restart Jekyll if working locally
- Clear browser cache after publishing changes
- Verify you're editing `_data/theme.yml` not `_config.yml`

### Background Image Not Showing

**Problem**: Home page background image doesn't display

**Solutions**:
- Verify image path in `_data/theme.yml` starts with `/objects/` or is a full URL
- Check that image file actually exists in `objects/` directory
- Ensure filename matches exactly (case-sensitive)
- Verify image format is web-compatible (JPG, PNG)
- Check that `layout: home-cover` is set in `pages/index.md`

### Layout Not Applying

**Problem**: Page layout looks wrong or default

**Solutions**:
- Check front matter has correct `layout:` value
- Common layouts: `home-cover`, `home-infographic`, `lesson-content`, `transcript`
- Ensure layout name is spelled correctly (case-sensitive)
- Verify layout file exists in `_layouts/` directory

### Navigation Not Working

**Problem**: Menu items missing or in wrong order

**Solutions**:
- Check `nav_order:` values in front matter (lower numbers appear first)
- For section dropdowns, ensure:
  - First page: has both `section_id` and `nav_order`
  - Subsequent pages: have `section` (matching section_id) and `nav_order`
- Verify no duplicate `nav_order` values at the same level
- Check that `title:` is set in front matter (required for navigation display)

## Metadata and CSV Issues

### Incorrect CSV Format

**Problem**: CSV files cause errors or don't load properly

**Solutions**:

1. **Use proper CSV format**
   - First row must be column headers
   - Save as CSV (Comma delimited) not Excel format
   - Don't open CSV in Excel after saving (it may corrupt formatting)

2. **Handle special characters**
   - Put cells containing commas in quotes: `"Portland, OR"`
   - Put cells containing quotes in quotes and double the internal quotes: `"She said ""Hello"""`
   - Avoid special characters in objectid (use `_` not spaces or special chars)

3. **Check encoding**
   - Save files as UTF-8 encoding
   - This prevents issues with accented characters and special symbols

### Compound Objects Not Working

**Problem**: Child objects don't appear below transcript

**Solutions**:
- Verify parent has `display_template: transcript`
- Check that child objects have `parentid` field matching parent's `objectid` exactly
- Ensure child objects have appropriate `display_template` (image, pdf, video, etc.)
- Confirm child objects have `object_location` pointing to actual files

### Subjects/Tags Not Appearing

**Problem**: Subject cloud or tag filters are empty or incomplete

**Solutions**:
- Check that `subject` field in metadata uses semicolons to separate values: `mining; labor; history`
- For transcript tags, verify tags are defined in `_data/filters.csv`
- Ensure consistent spelling across all metadata entries
- Rebuild site after updating filters.csv or metadata

## Search and Discovery Issues

### Site Search Not Working

**Problem**: Search box doesn't return results or returns wrong results

**Solutions**:
- Search indexes your metadata fields, not full transcript text
- Ensure items have descriptive `title`, `description`, and `subject` fields
- Wait for site to fully rebuild after adding new content
- Check that JavaScript isn't blocked in browser

### Map Not Showing Items

**Problem**: Map page is empty or items don't appear

**Solutions**:
- Add `latitude` and `longitude` fields to your metadata
- Use decimal degree format: `latitude: 45.5152, longitude: -122.6784`
- Verify coordinates are correct (test with Google Maps)
- Check that `config-map.csv` is present in `_data/` directory

## Development Environment Issues

### Jekyll Won't Install

**Problem**: Errors when trying to install Jekyll locally

**Solutions**:
- Ensure Ruby version 2.5.0 or higher is installed: `ruby -v`
- Update RubyGems: `gem update --system`
- Install bundler: `gem install bundler`
- Follow platform-specific guides at [CollectionBuilder docs](https://collectionbuilder.github.io/cb-docs/docs/software/)

### Bundle Install Fails

**Problem**: `bundle install` command produces errors

**Solutions**:
- Delete `Gemfile.lock` and try again
- Update bundler: `gem install bundler`
- Try: `bundle update` then `bundle install`
- On Windows, may need Ruby DevKit installed
- On Mac, may need Xcode Command Line Tools: `xcode-select --install`

### Jekyll Serve Errors

**Problem**: Site won't build locally with `bundle exec jekyll serve`

**Solutions**:
- Check terminal output for specific error messages
- Common: Port 4000 already in use → try `bundle exec jekyll serve --port 4001`
- Verify you're in the correct directory (should contain `_config.yml`)
- Check that all required gems are installed: `bundle install`
- Try rebuilding from scratch: `bundle exec jekyll clean` then `bundle exec jekyll serve`

## Getting More Help

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
