---
section: How-To Guides
nav_order: 7
title: How to Convert CollectionBuilder-CSV to Oral History as Data
---

# How to Convert CollectionBuilder-CSV to Oral History as Data

This guide shows you how to convert an existing CollectionBuilder-CSV repository into an Oral History as Data (OHD) repository.

## When You Need This

- You have an existing CollectionBuilder-CSV project you want to convert
- You want to add transcript visualization and analysis features
- You need to maintain your existing metadata while adding OHD functionality

## Step 1: Download the OHD Template

1. **Access the OHD template repository**
   - Go to [https://github.com/oralhistoryasdata/template](https://github.com/oralhistoryasdata/template)
   - Click the green "Code" button
   - Select "Download ZIP"
   
2. **Extract the downloaded ZIP file**
   - Save it to a location where you can easily access the files
   - Extract/unzip the file to view its contents

{% include bootstrap/figure.md img="download-template.jpg" caption="Download the template as a ZIP file" alt="Screenshot showing how to download the OHD template repository as a ZIP file" class="w-50" %}

## Step 2: Copy Files to Your CollectionBuilder Repository

1. **Open both folders**
   - Open your existing CollectionBuilder-CSV repository folder
   - Open the extracted OHD template folder
   
2. **Replace the following files and folders**

   | Action | File/Folder | Notes |
   |--------|-------------|-------|
   | Replace | `_data/` folder | Contains OHD-specific configurations |
   | Add | `_includes/transcript/` folder | Contains transcript visualization templates |
   | Add | `_sass/ohd.scss` | Styles for transcript visualizations |
   | Add | `_layouts/visualization.html` | Layout for visualization pages |
   | Add | `_layouts/item/transcript.html` | Layout for transcript items |
   | Add | `_layouts/home-cover.html` | Cover page layout |
   | Add | `pages/visualization.html` | Visualization page template |
   | Replace | `pages/about.md` | Remember to edit with your project info |
   | Replace | `pages/index.md` | Change layout to "home-cover" |
   | Replace | `assets/css/cb.scss` | Updated styles for OHD |
   | Replace | `_config.yml` | OHD configuration file |
   | Replace | `readme.md` | Edit to reflect your project |
   | Add | `rakelib/generate_json.rake` | Helper for generating transcript JSON |

{% include bootstrap/figure.md img="file-replacement.jpg" caption="Replace files in your repository" alt="Illustration showing the process of replacing files in your existing repository" class="w-75" %}

## Step 3: Update .gitignore File

1. **Edit the .gitignore file in your repository**
   - Open `.gitignore` in a text editor
   - Find the line that excludes "objects/" at the end of the file
   - Delete this line completely
   - Save the file

{% include bootstrap/figure.md img="edit-gitignore.jpg" caption="Edit .gitignore file" alt="Screenshot showing the line to remove from .gitignore file" class="w-50" %}

## Step 4: Update Your Metadata

1. **Check your metadata format**
   - OHD requires specific metadata fields for transcripts to work properly
   - Open the `_data/metadata.csv` file from the OHD template to see required fields:
     - `objectid`: Unique identifier for each item
     - `title`: Title of the oral history
     - `format`: Should include "oral history" for transcript items
     - `transcript-file`: Name of the transcript file (without path)

2. **Adapt your existing metadata**
   - Update your existing metadata CSV to include required OHD fields
   - Ensure your transcript files match the names in your metadata

## Step 5: Add Your Transcript Files

1. **Prepare your transcript files**
   - Transcripts should be in plain text format with specific formatting
   - Each speaker should be indicated by their name followed by a colon
   - See the OHD template examples for formatting guidance

2. **Place transcript files in the correct location**
   - Add your transcript files to the `objects/` directory
   - Ensure filenames match those referenced in your metadata

{% include bootstrap/figure.md img="transcript-format.jpg" caption="Example transcript format" alt="Example of correctly formatted transcript text" class="w-75" %}

## Step 6: Test Your Conversion

1. **Run the site locally (if possible)**
   - Use Jekyll to build and preview your site locally
   - Check that visualizations and transcripts display correctly

2. **Commit and push your changes**
   - Commit all new and modified files to your repository
   - Push the changes to GitHub to update your site

{% include bootstrap/figure.md img="final-result.jpg" caption="Your converted OHD site" alt="Screenshot of a successfully converted OHD site" class="w-75" %}

## Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **Visualizations not appearing** | Ensure transcript files are properly formatted and located in the objects/ directory |
| **Missing metadata fields** | Check that you've added all required OHD fields to your metadata.csv |
| **Styling issues** | Make sure all CSS files were correctly copied over |
| **Build errors** | Verify _config.yml was correctly replaced and contains valid YAML |

## Next Steps

After converting your repository:

1. Customize your site's appearance by editing the theme settings in `_config.yml`
2. Add more transcripts and metadata as your collection grows
3. Explore the visualization features by clicking on different transcripts

Remember that you can always check the [OHD documentation](https://oralhistoryasdata.github.io/docs/) for more details on customization options and features.