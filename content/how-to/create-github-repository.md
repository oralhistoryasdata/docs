---
section: How-To Guides
nav_order: 4
title: How to Create Your GitHub Repository
---

# How to Create Your GitHub Repository from the Template

This guide shows you how to create your own copy of the Oral History as Data project template on GitHub.

## When You Need This

- You're starting a new Oral History as Data project
- You want to create your own version of the site to customize
- You need a GitHub repository to host your project

## Step 1: Access the Template Repository

1. **Go to the OHD template**
   - Open your web browser
   - Navigate to [https://github.com/oralhistoryasdata/csv-version](https://github.com/oralhistoryasdata/csv-version)
   - Make sure you're logged into your GitHub account

2. **Click the "Use this template" button**
   - Look for the green "Use this template" button near the top of the page
   - Click this button to begin creating your own copy
   
3. **Select "Create a new repository"** from the dropdown menu

{% include bootstrap/figure.md img="use-this-template.jpg" caption="Use this template button" alt="Screenshot showing the green Use this template button on GitHub" class="w-50" %}

## Step 2: Configure Your New Repository


1. **Fill in repository details**
   - **Repository name**: Choose a descriptive name (e.g., "family-oral-histories" or "community-interview-project")
   - **Description**: Add a brief description of your project
   - **Visibility**: Choose "Public" unless you have specific privacy needs
   - Leave other settings at their defaults

2. **Click "Create repository" button**
   - This button is at the bottom of the form
   - GitHub will create your new repository with a copy of all OHD files

      
{% include bootstrap/figure.md img="new-repo-config.jpg" caption="Base repository configuration menu" alt="Screenshot showing the configuration menu for someone after they create a new repo based on ohd template" class="w-50" %}

## Step 3: Explore Your New Repository

1. **Wait for creation to complete**
   - GitHub will automatically redirect you to your new repository

2. **Familiarize yourself with the structure**
   - Your repository now contains all the files from the original template
   - Key directories include:
     - `_data/`: Contains metadata and configuration files
     - `_includes/` and `_layouts/`: Template files for the site
     - `pages/`: Web pages content
     - `objects/`: Storage for media files
   
{% include bootstrap/figure.md img="new-collection.jpg" caption="Newly created OHD collection" alt="Screenshot showing the github.com homepage of a newly created OHD collection from template" class="w-75" %}

## Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **"Use this template" button is missing** | You may need to log in to GitHub first |
| **Error during repository creation** | Try a different repository name (names must be unique to your account) |
| **Can't find your new repository** | Go to your GitHub profile page and check the "Repositories" tab |

## Next Steps

After creating your repository:

1. [Configure your site settings](edit-github-files.html) by editing _config.yml
2. [Add your collection metadata](upload-files-to-github.html) and transcript files
3. [Publish your site](../publish/tutorial-publishing.html) using GitHub Pages

Remember that your new repository is completely independent from the original template. Any changes you make will only affect your copy.