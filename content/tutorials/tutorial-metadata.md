---
section: Tutorials
nav_order: 2
title: Tutorial - Metadata Preparation
---

# Step-by-Step: Creating Your Collection Metadata

This tutorial walks you through creating the metadata spreadsheet that organizes your oral history collection and enables its display on the web.

## What You'll Create

By the end of this tutorial, you'll have:
- A complete metadata CSV file that catalogs all your interviews
- Proper connections between transcripts and media files
- Information that powers browsing, search, and display features

## Before You Begin

Gather these materials:
- Information about each interview (dates, participants, locations, etc.)
- Any media URLs (YouTube, SoundCloud, etc.) if applicable
- 15-20 minutes of time

## Tutorial Steps

### Step 1: Get Started with a Template

1. **Download the template spreadsheet**
   - Click to download the [demo-ohd-metadata.csv](/examples/demo-ohd-metadata.csv) file, or browse all {% include examples-modal.html %}
   - Save it to your computer
   
2. **Open in Google Sheets**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Click File → Import → Upload
   - Select the downloaded template file
   - Choose "Import data" when prompted
   
3. **Examine the structure**
   - Review the column headers in the first row
   - Note the example entries in subsequent rows
   - These show the format for each field


### Step 2: Understand Required Fields

Every interview in your collection needs these three essential fields:

1. **objectid**
   - A unique identifier for each interview
   - Use simple lowercase names with underscores (e.g., "smith_john")
   - **Important**: This MUST match your transcript filename
   
2. **title**
   - The complete title of the interview
   - Be descriptive and consistent
   - Example: "Interview with John Smith on Mining History"

3. **display_template**
   - Controls how the item displays
   - Always set to "transcript" for interviews
   

### Step 3: Add Your Interviews

1. **Create a new row for each interview**
   - Delete the example rows once you understand the format
   - Add a new row for each interview in your collection
   
   ![Empty spreadsheet with just the header row](SCREENSHOT_PLACEHOLDER)

2. **Fill in the required fields**
   - Add the objectid, title, and display_template for each interview
   - Make objectid values simple and URL-friendly
   
   ![Spreadsheet with basic required information added](SCREENSHOT_PLACEHOLDER)

3. **Add recommended fields**
   - Complete additional fields for better display and searchability:
     - **interviewer**: Person conducting the interview
     - **interviewee**: Person being interviewed
     - **date**: Interview date (YYYY-MM-DD format)
     - **description**: Brief content summary (1-2 sentences)
     - **subject**: Main topics (separated by semicolons)
     - **location**: Where the interview took place
   
To get a better idea of how this look, see our {% include examples-modal.html %} 

### Step 4: Connect Media (Optional)

If you have audio or video recordings:

1. **Prepare your media links**
   - For YouTube videos: Copy the video URL or ID
   - For SoundCloud: Copy the track URL
   - For local files: Note the filename

2. **Add to object_location field**
   - YouTube format: `https://youtu.be/VIDEO_ID`
   - SoundCloud format: `https://soundcloud.com/USER/TRACK_NAME`
   - Local file format: `/objects/filename.mp3`
   

### Step 5: Finalize and Save

1. **Review all entries**
   - Check that all required fields are completed
   - Verify spelling and formatting
   - Ensure objectids match your transcript filenames

2. **Save as CSV file**
   - Click File → Download → Comma-separated values (.csv)
   - Name the file according to your preference (typically something like "project.csv" or "metadata.csv")
   
3. **Upload to your repository**
   - Place the CSV file in the `_data/` folder
   - Update `_config.yml` to reference this filename if needed

### Step 6: Adding Compound Objects (Advanced)

Compound objects allow you to associate additional materials (photographs, documents, artifacts) with your interview transcripts. These appear below the main transcript content.

1. **Set up the parent interview** (using standard steps above)
   - Keep `display_template: transcript` for the main interview
   - Ensure the interview has a unique `objectid`

2. **Create child object entries**
   - Add new rows for each related item (photos, documents, etc.)
   - Include a `parentid` field matching the parent interview's `objectid`
   - Set appropriate `display_template` for the content type (e.g., "image")

3. **Example compound object structure**:
   ```
   Parent Interview:
   objectid: mcmichael
   title: Interview with James McMichael
   display_template: transcript
   interviewee: James McMichael
   interviewer: Devin Becker
   
   Child Objects:
   objectid: mcmichael1
   parentid: mcmichael
   title: McMichael's thesis binders on shelf
   display_template: image
   object_location: /objects/mcmichael1.jpg
   
   objectid: mcmichael2
   parentid: mcmichael
   title: Books and drafts on McMichael's desk
   display_template: image
   object_location: /objects/mcmichael2.jpg
   ```

4. **Key points for compound objects**:
   - Parent objects must keep `display_template: transcript`
   - Child objects inherit date and location information from their parent
   - Child objects appear below the transcript and metadata sections
   - Use descriptive titles for child objects to explain their relevance

## Example of a Complete Metadata File

Here's how a metadata values might look with multiple entries (displayed vertically for easier reading--these will be in a spreadsheet when you enter them!):

```
object id: smith_john  
title: "Interview with John Smith on Mining History"  
display_template: transcript  
interviewer: Sarah Johnson  
interviewee: John Smith  
date: 2023-05-15  
description: John Smith discusses his 40-year career in local mines, focusing on safety improvements.  
subject: mining; labor history; safety  
location: Coalville, PA  
object_location: https://youtu.be/BX_bURONf78  
```

```
object id: garcia_maria  
title: "Maria Garcia on Immigration and Education"  
display_template: transcript  
interviewer: David Lee  
interviewee: Maria Garcia  
date: 2023-06-10  
description: Maria Garcia shares her experience immigrating to the US as a child and later becoming an educator.  
subject: immigration; education; family  
location: Phoenix, AZ  
object_location: https://soundcloud.com/user/maria-garcia-interview  
```

```
object id: taylor_robert  
title: "Robert Taylor: Civil Rights Activism in the 1960s"  
display_template: transcript  
interviewer: Emily Wong  
interviewee: Robert Taylor  
date: 2023-04-22  
description: Robert Taylor recounts his participation in civil rights demonstrations and community organizing.  
subject: civil rights; activism; history  
location: Atlanta, GA  
object_location:  
```
