---
section_id: Prepare Your Content
nav_order: 2
title: Collection Metadata Overview
---

# Collection Metadata Overview

This page explains how to create and configure your metadata spreadsheet, which is the backbone of your Oral History as Data project.

## What is Metadata?
Metadata is the structured information about each interview in your collection. It enables search, browsing, and connects transcripts and media to your site.

## Key Steps
- Use the [CollectionBuilder-CSV format](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/)
- Required fields: `objectid`, `title`, `display_template` (set to `transcript`)
- OHD specific fields: `interviewer`, `interviewee`, `date`, `description`, `subject`, `location`, `object_location` (for media links)
- Each row = one interview


#### Required Fields
- **objectid**: A unique identifier for each interview (used for filenames and URLs)
   - This should also match with the filename of the transcript your using!!
- **title**: The title of the interview
- **display_template**: The template for displaying the item described -- it should be `transcript` for OHD features to work

#### Oral History as Data Specific Fields
- **interviewee**: Name of the person interviewed
- **interviewer**: Name of the person conducting the interview
- **pdf**: Path to transcript pdf file
    - PDFs will be automatically generated using PagedJS but if you'd rather link to a prepared PDF file, list it here
    - Can be an external link, or a relative link to a PDF stored in the repository
- **bio**: Biographical information about the interviewee
    - You can use Markdown to style the bios. 

#### Standard CollectionBuilder Fields
- **description**: A brief summary of the interview content
- **subject**: Topics covered in the interview (semicolon separated)
- **date**: When the interview took place (YYYY-MM-DD format recommended)
- **location**: Where the interview was conducted
- **latitude**: Geographic coordinate (if relevant)
- **longitude**: Geographic coordinate (if relevant)
- **format**: The format of the original interview (e.g. video/mp4)
- **rights**: Copyright or usage rights statement
- **rightsstatement**: URL to a formal rights statement
- **object_location**: URL to audio/video (if available)
- **image_small***: small image to represent item in the collection (if left blank, will default to bootstrap icon)
- **image_thumb**: thumbnail image to represent item in the collection (if left blank, will default to bootstrap icon)


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

## Creating Compound Objects

Oral History as Data supports compound objects, allowing you to associate additional materials (photos, documents, artifacts) with interview transcripts. This follows the same approach as CollectionBuilder-CSV, with the key difference being that parent objects keep their `display_template` as "transcript".

### How Compound Objects Work
- **Parent object**: The main interview transcript with `display_template: transcript`
- **Child objects**: Related materials (photos, documents) that appear below the transcript
- **Connection**: Child objects include a `parentid` field matching the parent's `objectid`

### Setting Up Compound Objects

1. **Create the parent interview** with standard transcript metadata:
   ```
   objectid: mcmichael
   title: Interview with James McMichael
   display_template: transcript
   interviewee: James McMichael
   interviewer: Devin Becker
   ```

2. **Add child objects** with a `parentid` field:
   ```
   objectid: mcmichael1
   parentid: mcmichael
   title: McMichael's thesis binders on a shelf
   display_template: image
   format: image/jpg
   object_location: /objects/mcmichael1.jpg
   ```

### Key Points for Compound Objects
- Parent objects must have `display_template: transcript` to maintain OHD functionality
- Child objects can use any appropriate display template (`image`, `pdf`, etc.)
- Child objects inherit location and date information from their parent
- All child objects will display below the main transcript and metadata sections

## More Help
- [Step-by-step metadata tutorial](../tutorials/tutorial-metadata)
- [How-to: Connect media to transcripts](../how-to/connect-media-to-transcripts)
- [How-to: Convert CollectionBuilder-CSV to OHD](../how-to/convert-cb-to-ohd)

For a sample file, see the {% include examples-modal.html %}.
