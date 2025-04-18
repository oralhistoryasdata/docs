---
section: Prepare Your Content
nav_order: 1
title: Setting Up Your Metadata
---

# Configuring Your Interview Metadata

Before working with individual transcripts, you'll need to set up your project's metadata spreadsheet. This file serves as the central registry for all your interviews and provides the information needed to generate your site's pages.

## Understanding the Metadata CSV

The metadata spreadsheet contains information about each interview in your collection. Each row represents one interview, and columns represent different metadata fields.

Key fields include:

- **objectid**: A unique identifier for each interview (used for filenames and URLs)
- **title**: The title of the interview
- **interviewee**: Name of the person interviewed
- **interviewer**: Name of the person conducting the interview
- **date**: When the interview took place
- **description**: A brief summary of the interview content
- **location**: Where the interview was conducted (can include coordinates)
- **object_location**: URL to audio/video (if available)
- **object_transcript**: Path to transcript file (if separate from main system)
- **bio**: Biographical information about the interviewee

## Creating Your Metadata Spreadsheet

1. Start with a copy of the sample spreadsheet:
   - Download the [demo-ohd-metadata.csv](/demo-ohd-metadata.csv) file
   - Open it in Excel, Google Sheets, or another spreadsheet program
   
2. Review the column structure:
   - Keep all the original column headers
   - You can add additional columns as needed
   
3. Add your interviews:
   - Create a new row for each interview
   - Fill in as many fields as possible
   - Ensure each interview has a unique objectid
   
4. When finished:
   - Save/export as a CSV file
   - If using Excel, choose "CSV UTF-8" format if available
   - Name according to your preference (e.g., `interviews.csv`)

## Configuring Your Site

After creating your metadata CSV, you need to tell your site to use it:

1. Open your `_config.yml` file
2. Look for or add the `metadata-csv` setting
3. Set it to your CSV filename (e.g., `metadata-csv: interviews.csv`)
4. Save the file

## Tips for Effective Metadata

- **Be consistent**: Use the same formatting and style across all entries
- **Be thorough**: Complete metadata improves searchability and context
- **Use standardized dates**: YYYY-MM-DD format is recommended
- **Check objectids**: These must be unique and contain no spaces or special characters
- **Consider privacy**: Only include information appropriate for public sharing

## Example Metadata Entry

```
objectid: smith_john
title: Interview with John Smith on Local Mining History
interviewee: John Smith
interviewer: Sarah Johnson
date: 2023-05-15
description: John Smith discusses his 40-year career in the Coalville mines, focusing on technological changes and safety improvements.
subject: mining; labor history; workplace safety
location: Coalville, PA
latitude: 41.4090
longitude: -75.6624
object_location: https://example.com/audio/smith_interview.mp3
bio: John Smith (b. 1945) worked as a miner from 1963-2003 and served as safety coordinator for the last decade of his career.
```

Each interview in your collection will follow this pattern, allowing the system to automatically generate pages for browsing and visualization.