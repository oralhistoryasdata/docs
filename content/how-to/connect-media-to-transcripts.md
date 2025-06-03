---
section: How-To Guides
nav_order: 3
title: How to Connect Media to Transcripts
---

# How to Connect Audio/Video to Transcripts

This guide explains how to link your interview transcripts with their corresponding audio or video recordings.

## When You Need This

- You have audio/video recordings of your interviews
- You want viewers to be able to listen to/watch interviews while reading
- You want to create timestamps for synchronization

## Option 1: External Media Services (Recommended)

### Step 1: Upload to a Media Platform

1. **Choose a platform**:
   - **YouTube** for video files
   - **Vimeo** for video files (alternative to YouTube)
   - **SoundCloud** for audio files
   - **Internet Archive** for audio and video files

2. **Upload your media file**:
   - Create an account if needed
   - Follow the platform's upload process
   - Set appropriate privacy settings

3. **Get the media URL**:
   - After uploading, obtain the URL that will be used to connect your transcript to the media
   - Each platform provides URLs in a specific format. Here are examples that work:
     - **YouTube**: `https://youtu.be/BX_bURONf78` or `https://www.youtube.com/watch?v=BX_bURONf78`
     - **Vimeo**: `https://vimeo.com/464555587`
     - **SoundCloud**: `https://soundcloud.com/user-944694772/robert-wrigley-ctrl-shift-interview-conducted-by-devin-becker`
     - **Internet Archive**: `https://archive.org/details/f8_2005-08-18_gluck-prose`

### Step 2: Connect the Media to Your Collection

1. **Open your metadata CSV file**
2. **Add the media URL** to the `object_location` field for the corresponding interview:
   - Simply paste the full URL you obtained in Step 1
   - This connects your transcript page with the hosted media

   ![Example of metadata with object_location field](SCREENSHOT_PLACEHOLDER)

## Option 2: Direct Hosting or External Audio Files

1. **For direct hosting (small audio files)**:
   - Keep files under 50MB when possible
   - Use MP3 format for audio
   - Place files in the `objects/` directory
   - Reference in metadata using the file path
   - Example: `objects/smith_interview.mp3`

2. **For externally hosted audio files**:
   - You can link to MP3 files hosted on any web server
   - Simply use the full URL in the `object_location` field
   - Example: `https://www.example.com/john_doe.mp3`

## Adding Timestamps for Synchronization

To sync transcript segments with specific points in your media:

1. **Open your transcript CSV**
2. **Add timestamps in the "timestamp" column**:
   - Use MM:SS format (e.g., "05:42")
   - Use HH:MM:SS for longer recordings (e.g., "1:12:36")
   - Match timestamps to the actual recording
   - Not every segment needs a timestamp

   ![Example of transcript with timestamps](SCREENSHOT_PLACEHOLDER)

## Testing Your Media Connection

1. **Publish your site** or preview locally
2. **Navigate to the interview page**
3. **Verify media player appears** and functions correctly
4. **Test timestamp synchronization** if applicable

## Troubleshooting

- **Media doesn't appear**: Check the URL/ID format in metadata
- **Player appears but won't play**: Verify media permissions on hosting platform
- **Timestamps don't work**: Ensure format follows MM:SS or HH:MM:SS
   - Note Timestamps for Vimeo and Internet Archive items do not advance the player
- **Slow loading**: Consider reducing media file size or using external services

## Next Steps

- [Set up advanced visualization features](../setup/visualizations)