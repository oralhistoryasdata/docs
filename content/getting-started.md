---
nav_order: 2
title: Getting Started
---

# Getting Started with Oral History as Data

This guide will help you set up your Oral History as Data project and understand the basic workflow.

## Prerequisites

Before you begin, you should have:

1. **GitHub Account**: A free account at [github.com](https://github.com/)
2. **Interview Content**: At least one interview transcript ready to work with
3. **Basic Familiarity**: Some understanding of spreadsheets and CSV files

## Quick Start

### 1. Set Up Your Repository

1. Go to the [Oral History as Data repository](https://github.com/learn-static/oral-history-as-data)
2. Click the green "Use this template" button
3. Name your new repository and click "Create repository from template"
4. Your repository is now ready to customize

### 2. Configure Your Project

1. Edit the `_config.yml` file to update:
   - Project title and description
   - Metadata CSV filename (defaults to `demo-ohd-metadata.csv`)
   - Other project details

### 3. Prepare Your CSV Files

You'll need two main CSV files:

**Metadata File** (`demo-ohd-metadata.csv` or your custom name):
- Contains information about each interview
- Each row represents one interview
- Be sure to include the required fields: objectid, title, etc.

**Transcript Files**:
- For each interview, create a CSV with three columns: speaker, words, tags
- Each row represents one segment of dialogue
- Store these in the `_data/transcripts/` directory
- Name each file to match the objectid in your metadata

### 4. Create Your Coding System

1. Create or edit `_data/filters.csv`
2. Define your tag codes and descriptions
3. Apply these codes in the "tags" column of your transcript files

### 5. Publish Your Site

1. Go to Settings → Pages in your GitHub repository
2. Select "main" branch and "/ (root)" folder
3. Click "Save"
4. Wait a few minutes for your site to build
5. Access your site at the URL provided

## Project Structure Overview

```
your-repository/
├── _data/
│   ├── filters.csv           # Your coding vocabulary
│   └── transcripts/          # Folder for transcript CSVs
│       └── example.csv       # Sample transcript
├── demo-ohd-metadata.csv     # Metadata for all interviews
├── _config.yml               # Site configuration
└── images/                   # Folder for interview images
```

## Next Steps

Once you've set up your basic site:

1. **Explore the Prepare section** to learn how to format your transcripts
2. **Review the Coding section** for best practices in developing your controlled vocabulary
3. **Visit the Publish section** for details on customizing your site and sharing it publicly

{% include button.html link="prepare/overview.html" text="Continue to Preparation" color="primary btn-lg mt-2 mb-4" %}