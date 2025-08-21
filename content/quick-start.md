---
nav_order: 1
title: Quick Start
---

# Quick Start

If you just want to jump in to creating an Oral History as Data project without reading all of the sections, this guide will help you understand the basic workflow.

## Prerequisites

Before you begin, you should have:

1. **GitHub Account**: A free account at [github.com](https://github.com/)
2. **Interview Content**: At least one interview transcript ready to work with
3. **Basic Familiarity**: Some understanding of spreadsheets and CSV files

## Quick Start

### 1. Set Up Your Repository

1. Go to the [Oral History as Data Template repository](https://github.com/oralhistoryasdata/template)
2. Click the green "Use this template" button
3. Name your new repository and click "Create repository from template"
4. Your repository is now ready to customize

### 2. Configure Your Project

1. Edit the `_config.yml` file to update:
   - Project title and description
   - Metadata CSV filename (defaults to `demo-ohd-metadata.csv`)
   - Other project details

### 3. Prepare Your CSV Files

You'll need two types of CSV files:

**Metadata File**: One CSV with info about each interview (required fields: objectid, title, display_template). 

**Transcript Files**: One CSV per interview with columns: speaker, words, tags, timestamp. Store in `_data/transcripts/` folder. 

To see samples of these  files, {% include examples-modal.html button="check out our example CSVs"%}

### 4. Create Your Coding System (Optional)

1. Create `_data/filters.csv` to define tag codes and descriptions
2. Apply these codes in the "tags" column of your transcript files for visualization

### 5. Publish Your Site

1. Go to Settings → Pages in your GitHub repository
2. In the Build and Deployment section, Select "GitHub Actions" from the dropdown options (change from "Deploy from a branch")
3. GitHub will automatically detect the existing workflow file in your repository - no additional configuration needed
4. Wait a few minutes for your site to build
5. Access your site at the URL provided


## More Detail

For more detail on the instructions above, explore the rest of this site:

1. **Explore the Prepare section** to learn how to format your transcripts and metadata
2. **Review the Setup section** for information on setting up and customizing your site
3. **See our publishing guide** for details on sharing your site publicly

{% include button.html link="prepare-content/collection-metadata-overview" text="Continue to Preparation" color="primary btn-lg mt-2 mb-4" %}