---
section_id: Prepare Your Content
nav_order: 3
title: Collection Metadata Overview
---

# Collection Metadata Overview

This page explains how to create and configure your metadata spreadsheet, which is the backbone of your Oral History as Data project.

## What is Metadata?
Metadata is the structured information about each interview in your collection. It enables search, browsing, and connects transcripts and media to your site.

## Key Steps
- Use the [CollectionBuilder-CSV format](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/)
- Required fields: `objectid`, `title`, `display_template` (set to `transcript`)
- Recommended fields: `interviewer`, `interviewee`, `date`, `description`, `subject`, `location`, `object_location` (for media links)
- Each row = one interview

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
object_location: https://youtu.be/BX_bURONf78
bio: John Smith (b. 1945) worked as a miner from 1963-2003 and served as safety coordinator for the last decade of his career.
```

## More Help
- [Step-by-step metadata tutorial](../tutorials/tutorial-metadata.html)
- [How-to: Connect media to transcripts](../how-to/connect-media-to-transcripts.html)
- [How-to: Convert CollectionBuilder-CSV to OHD](../how-to/convert-cb-to-ohd.html)

For a sample file, see the [examples folder](/examples/demo-ohd-metadata.csv).
