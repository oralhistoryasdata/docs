---
section_id: Tutorials
nav_order: 8
title: Transcript Preparation
---

# Step-by-Step: Converting Your Transcript to an OHD-friendly CSV Format

This beginner-friendly tutorial guides you through converting a standard interview transcript into the structured CSV format used by Oral History as Data. Follow this step-by-step process to prepare your first transcript.

## What You'll Create

By the end of this tutorial, you'll have:
- A properly formatted transcript CSV file
- Content ready for upload to your OHD site
- A file that can be visualized and searched

## Before You Begin

Gather these materials:
- A raw interview transcript (Word document, text file, etc.)
- Access to Google Sheets (recommended) or another spreadsheet program
- 15-20 minutes of time (less for subsequent transcripts)

## Tutorial Steps

### Step 1: Create Your Spreadsheet

[Go to our template spreadsheet](https://docs.google.com/spreadsheets/d/1uWrPMItiP-XOSkm7gyC8b9bl3tpSQRj9zLzS5y8QnW0/copy) and click "Make a copy".

   

### Step 2: Clean Your Transcript Text

1. **Open your transcript document**
   - Open your interview transcript in Word, Google Docs, or another program
   - Select all text (Ctrl+A or Cmd+A) and copy it (Ctrl+C or Cmd+C)

2. **Use the text cleaner tool**
   - Paste your text in the top box below
   - Click the "Clean Text" button
   - The cleaned version will appear in the bottom box

   {% include wordcleaner.html %}

3. **Copy the cleaned text**
   - Click in the bottom box
   - Select all text (Ctrl+A or Cmd+A) 
   - Copy it (Ctrl+C or Cmd+C)

### Step 3: Structure Your Transcript

1. **Paste text into your spreadsheet**
   - If you don't have any Speaker's noted in the text, Click in cell B2 (under the "words" column)
   - If you do have Speaker's noted, click in cell A2 (under the "speaker" column)
   - Paste your cleaned text (Ctrl+V or Cmd+V)
   - The text will appear in a single cell

2. **Separate text by speaker**
   - If your text appears in a single cell, with the Speaker's name starting each cell like so "Speaker:" follow these steps:
     - Select the cell with your text
     - Using the menu at top, click Data → Split text to columns
     - In the separator options, choose "Custom" and enter a colon mark --> ":"
     - Click "Split"
   - Speaker's should now be separated from the text that they speak!
      - Note: if you have colons in the rest of your text, this will also be split out into new cells; you can paste that content back into the preceding cells, or just replace the current words column with the cleaned transcript you had from before, then do a find/replace function to remove any mention of speakers

3. **If not Speakers are listed, Identify speakers**
   - In column A, add the speaker name for each segment of text
   - For example:
     - "Interviewer" for questions
     - "John Smith" for the interviewee's responses
   - Be consistent with names throughout

### Step 4: Add Optional Information

1. **Add timestamps** (if you have audio/video)
   - In column D, add timestamps for key segments
   - Format as MM:SS (e.g., 01:45) or HH:MM:SS (e.g., 1:12:30)
   - Match to the corresponding points in your recording

2. **Add topic tags** (for visualization and analysis)
   
   **Create your tag vocabulary first:**
   - Before tagging segments, create a `filters.csv` file in your `_data` folder
   - Include two columns: `tag` and `description`
   - Review all your transcripts to identify 10-20 common themes
   
   Example filters.csv:
   ```
   tag,description
   education,Educational experiences and schooling
   family,Family relationships and history
   career,Work and professional life
   childhood,Early life experiences
   community,Community involvement and local history
   ```
   
   **Apply tags to transcript segments:**
   - In column C, add relevant topic keywords from your vocabulary
   - Use semicolons between multiple tags (e.g., "education; family; career")
   - Be selective - focus on the most meaningful content
   - Use exact tag terms from your filters.csv file
   - Keep formatting consistent: lowercase, no special characters

### Step 5: Finalize and Save

1. **Review your spreadsheet**
   - Ensure each row has a speaker identified
   - Check that text is properly separated (one speaker segment per row)
   - Verify any timestamps or tags are correctly formatted

2. **Save as CSV file**
   - Click File → Download → Comma-separated values (.csv)
   - Find the downloaded file (don't open it!!) where it's been downloaded
   - Rename your file to match the objectid in your metadata
   - Example: If your interview has objectid "smith_john" in metadata, name the file "smith_john.csv"

3. **Upload to your repository**
   - Place the CSV file in the _data/transcripts/ folder
   - For GitHub users:
     - Navigate to the _data/transcripts/ folder in your repository
     - Click "Add file" → "Upload files"
     - Drag your CSV file or use the file selector
     - Commit the changes


## Example of Completed Transcript

Here's how a properly formatted transcript CSV should look (note: this is overly tagged to serve as an example ... )

| **Speaker**    | **Words**                                                                                      | **Tags**                           | **Timestamp** |
|----------------|-----------------------------------------------------------------------------------------------|------------------------------------|---------------|
| Interviewer    | What was your first teaching job?                                                              | career; education                  | 00:15         |
| John Smith     | "I started at Lincoln Elementary in 1972. It was a challenging environment but rewarding."     | education; career; 1970s           | 00:22         |
| Interviewer    | What subject did you teach?                                                                    | education                          | 01:05         |
| John Smith     | "I taught sixth grade math and science, though I preferred the science lessons."              | education; science; mathematics    | 01:12         |

