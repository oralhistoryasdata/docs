---
section_id: Publish Your Site
nav_order: 5
title: Publishing Overview
---

# Publish Your Site

This section guides you through publishing your Oral History as Data project and integrating audio or video recordings. Follow these steps to make your site publicly accessible and connect media files to your transcripts.

## What You'll Learn
- How to upload your files to GitHub and activate GitHub Pages
- How to connect transcripts with media recordings from external platforms
- How to choose the best publishing and hosting approach for your project
- How to verify your site is working correctly after publication

## Publishing Workflow

1. **Upload your files**
   - Add transcript CSVs to the `_data/transcripts/` folder
   - Upload your metadata CSV to the `_data/` folder
   - Commit and push changes to your GitHub repository
   - [Publishing via GitHub Pages](publishing)
2. **Activate GitHub Pages**
   - Enable GitHub Pages in your repository settings
   - Configure the publishing source (usually main branch)
   - Wait for the initial build and deployment
   - [Step-by-step publishing tutorial](../tutorials/tutorial-publishing)
3. **Connect media sources**
   - Add media URLs to the `object_location` field in your metadata
   - Test audio/video playback on your published site
   - [How-to: Connect media to transcripts](../how-to/connect-media-to-transcripts)
4. **Test and verify**
   - Check that all transcripts display correctly
   - Verify search functionality works
   - Test media playback and synchronization
   - [Other publishing options](publishing-other)

## Publishing Options

| Method | Best For | Requirements |
|--------|----------|--------------|
| **GitHub Pages** | OHD projects (required) | GitHub repository, GitHub Actions workflow |
| **Self-hosting** | Advanced users | Web server, Jekyll build environment |
| **Third-party services** | Enhanced features | Account with hosting provider |

**Note**: OHD projects require GitHub Actions for publishing because they use custom Jekyll plugins that aren't supported by the default GitHub Pages build process.

## Media Integration Options

OHD supports several approaches for connecting transcripts to audio/video:

1. **External platforms** (recommended)
   - YouTube or Vimeo for video content
   - SoundCloud for audio recordings
   - Internet Archive for public domain content
2. **Direct hosting** (for smaller files)
   - MP3 files stored in your repository
   - Local video files (with GitHub's size limitations)

## Why This Matters

Proper publishing ensures:
- Your oral history collection is accessible to researchers and the public
- Media files are properly integrated and synchronized with transcripts
- Search and discovery features work as expected
- Your site loads quickly and reliably for all users

For detailed instructions and troubleshooting, see the [publishing tutorial](../tutorials/tutorial-publishing) and the [CollectionBuilder deployment documentation](https://collectionbuilder.github.io/cb-docs/docs/deploy/).

