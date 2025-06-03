---
section_id: Prepare Your Content
nav_order: 2
title: Prepare Your Content
---

# Prepare Your Content

This section guides you through preparing both your interview transcripts and your collection metadata for use with Oral History as Data. Follow these steps to get your content ready for upload and visualization.

## What You'll Learn
- How to clean and format interview transcripts
- How to structure your transcript CSV files
- How to create and structure your collection metadata
- How to connect transcripts, metadata, and media files

## Content Preparation Workflow

1. **Clean your transcript text**
   - Remove formatting artifacts and normalize text for web display.
   - Use the built-in text cleaner tool or a plain text editor.
2. **Format your transcript as CSV**
   - Create a spreadsheet with these columns: `speaker`, `words`, `tags` (optional), `timestamp` (optional).
   - Each row should represent a single speaker segment.
   - Save as CSV. Name the file to match the `objectid` in your metadata.
3. **Create your metadata spreadsheet**
   - Use the [CollectionBuilder-CSV format](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/).
   - Required fields: `objectid`, `title`, `display_template` (set to `transcript`).
   - Recommended fields: `interviewer`, `interviewee`, `date`, `description`, `subject`, `location`, `object_location` (for media links).
   - Each row represents one interview.
4. **Connect transcripts and media**
   - Ensure transcript filenames match the `objectid` in your metadata.
   - Add media URLs (YouTube, SoundCloud, etc.) in the `object_location` field if available.
5. **(Optional) Add coding/tags**
   - Create a `filters.csv` file with your coding vocabulary (columns: `tag`, `description`).
   - Apply tags in the `tags` column of your transcript CSV for visualization and analysis.

## Why This Matters

Well-prepared content ensures:
- Searchable, interactive transcripts
- Accurate metadata for browsing and display
- Seamless integration of transcripts, metadata, and media
- Thematic coding and visualization features

For detailed examples and templates, see the [examples folder](/examples/) and the sample spreadsheets linked throughout this documentation.
