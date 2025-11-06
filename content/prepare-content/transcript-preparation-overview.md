---
section: Prepare Your Content
nav_order: 3
title: Transcript Overview
---

# Preparing Your Interview Transcripts

This section guides you through the process of transforming traditional interview transcripts into structured CSV files that can be used with the Oral History as Data platform. 

## Key Steps
- Clean your transcript text (remove formatting artifacts, normalize for web display)
- Create a CSV with columns: `speaker`, `words`, `tags`, `timestamp`
    - *The only required column is `words`*
- Each row = one paragraph on the page
    - Break up overly long rows!
- Save as CSV
- ***Important!*** the filename must match the `objectid` in your metadata
    - A mismatch between filename and objectid is the most common problem users run into! ([More below](#csv-naming-convention))


## Transcript CSV Structure

Your transcript CSV files can include the following columns (in any order). Note that **the only required field is `words`!**

1. **speaker**: The person speaking in this segment (optional)
2. **words**: The text of what was said
3. **tags**: Your thematic codes for this segment (optional, but enables visualization)
4. **timestamp**: Timecode reference for audio/video syncing (optional)

The first row of your CSV file should contain these column headers.

## Using Tags for Visualization and Analysis

Tags are thematic codes that enable powerful visualization and filtering features in your oral history site. Think of tags as keywords or themes that describe the content of each transcript segment.

### What Tags Do

When you add tags to transcript segments, they:

- **Create color-coded visualizations** - Each tag gets a unique color in the interactive transcript view, making it easy to see patterns
- **Enable filtering** - Users can click on tags to filter the transcript and see only segments about specific topics
- **Support analysis** - Tags help researchers identify themes across multiple interviews
- **Generate tag clouds** - The visualization page shows which themes appear most frequently

### The filters.csv File Explained

The `filters.csv` file is your **tag vocabulary** or **coding scheme**. It defines all the tags you'll use across your entire collection and provides descriptions of what each tag means.

**Location**: `_data/filters.csv` in your repository

**Required columns**:
- `tag`: The short keyword you'll use in transcript files (e.g., "education", "family", "career")
- `description`: A brief explanation of what this tag represents (shows up in tooltips and helps keep tagging consistent)

**Example filters.csv**:
```
tag,description
highlight,Key moments worth highlighting
education,Educational experiences and schooling
family,Family relationships and history
career,Work and professional life
childhood,Early life and youth experiences
community,Community involvement and local history
migration,Moving between places or immigration
wartime,Experiences during war or conflict
technology,Use of technology and tools
health,Health and medical experiences
```

### Creating Your Tag Vocabulary

Before you start tagging individual transcript segments, establish your vocabulary:

1. **Read through your transcripts** to identify recurring themes (10-20 tags works well for most collections)
2. **Create the filters.csv file** with your chosen tags and descriptions
3. **Upload it to `_data/filters.csv`** in your repository
4. **Use only these tags** when tagging transcript segments to maintain consistency

{% include bootstrap/alert.md text="**Important**: Create your filters.csv file BEFORE you start tagging transcripts. This ensures consistency across your entire collection." color="warning" %}

### How Tags Appear in Transcript Files

Once you've created your filters.csv vocabulary, you apply tags in your individual transcript CSV files using the `tags` column:

**Single tag**: `education`

**Multiple tags**: `education; family; career` (use semicolons to separate multiple tags)

**Example transcript row**:
```
speaker,words,tags,timestamp
John Smith,"I started teaching in 1972 at Lincoln Elementary.",education; career; 1970s,00:45
```

### Tips for Effective Tagging

- **Keep it simple** - Aim for 10-20 primary tags; more than 30 becomes hard to manage
- **Use consistent formatting** - Stick to lowercase, avoid special characters, use singular forms (e.g., "family" not "families")
- **Be selective** - Not every segment needs tags; focus on the most meaningful content
- **Stay consistent** - Always use the exact tag terms from your filters.csv file
- **Think thematically** - Tags should represent ideas or themes, not just keywords
- **Test as you go** - Preview your site to see how tags appear in visualizations 





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

For sample transcript files that demonstrate the proper format, see our {% include examples-modal.html button="example trancripts."%}

## More Help

- [Step-by-step transcript tutorial](../tutorials/tutorial-transcript)
