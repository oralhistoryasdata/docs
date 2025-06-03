---
section: Prepare Your Content
nav_order: 3
title: Transcript Preparation Overview
---

# Preparing Your Interview Transcripts

This section guides you through the process of transforming traditional interview transcripts into structured CSV files that can be used with the Oral History as Data platform. 

## Key Steps
- [Clean your transcript text](../how-to/clean-transcript-text.html) (remove formatting artifacts, normalize for web display)
- Create a CSV with columns: `speaker`, `words`, `tags`, `timestamp`
    - *The only required column is `words`*
- Each row = one paragraph on the page
    - Break up overly long rows!
- Save as CSV, name to match the `objectid` in your metadata
    - A mismatch between filename and objectid is the most common problem users run into! [More below](#csv-naming-convention)


## Transcript CSV Structure

Your transcript CSV files can include the following columns (in any order). Note that **the only required field is `words`!**

1. **speaker**: The person speaking in this segment (optional)
2. **words**: The text of what was said
3. **tags**: Your thematic codes for this segment (optional, but enables visualization)
4. **timestamp**: Timecode reference for audio/video syncing (optional)

The first row of your CSV file should contain these column headers. 





## Example Transcript Format

Here's how a typical transcript segment looks:

| **Speaker**    | **Words**                                                                                                   | **Tags**                       | **Timestamp** |
|----------------|-------------------------------------------------------------------------------------------------------------|--------------------------------|---------------|
| Interviewer    | Could you tell me about your early experiences?                                                             | background                     | 00:00       |
| Interviewee    | Yes, I grew up in a small town in the 1950s. It was quite different from today.                             | childhood; rural life          | 24:15       |
| Interviewer    | What was school like for you?                                                                               | education                      | 48:32       |
| Interviewee    | School was challenging but rewarding. I particularly enjoyed mathematics and science classes.              | education; academic interests  | 01:03:45       |



## Timestamp Format

The timestamp field accepts several formats:

- **00:00** - Minutes:Seconds
- **0:00:00** - Hours:Minutes:Seconds
- **00:00.00** - Minutes:Seconds.Milliseconds

{% include bootstrap/alert.md text="The **timestamp** field enables synchronization between transcript text and audio/video recordings. When properly formatted, users can click on a timestamp to jump to that point in the recording." color="info" %}

## CSV Naming Convention

Name your transcript CSV files to match the objectid in your metadata spreadsheet. For example, if your metadata contains an interview with objectid `smith_john`, name the transcript file `smith_john.csv`.

This naming convention is crucial because it connects your transcript files to the CollectionBuilder-CSV metadata system, allowing the platform to automatically link the right transcript with the right metadata entry.





## Sample Files

For sample transcript files that demonstrate the proper format, see our {% include examples-modal.html %}.

## More Help

- [Step-by-step transcript tutorial](../tutorials/tutorial-transcript)
- [How-to: Clean transcript text](../how-to/clean-transcript-text)
- [How-to: Create and apply transcript tags](../how-to/create-transcript-tags)
