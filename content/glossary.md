---
nav_order: 13
title: Glossary
---

## Glossary of Terms

This glossary defines key terms and concepts used throughout the Oral History as Data documentation.

---

### A

**Alt Text (Alternative Text)**
: Descriptive text for images that displays when images can't be loaded and is read by screen readers. Essential for accessibility. Example: `alt="Portrait of John Smith from 1975"`.

---

### B

**Baseurl**
: The URL path where your site is hosted, used in `_config.yml`. For GitHub Pages, this is usually `/repository-name`. Example: If your site is at `username.github.io/my-project/`, the baseurl is `/my-project`.

**Bootstrap**
: A CSS framework used by CollectionBuilder and OHD to provide responsive design and pre-built components. Bootstrap 5 is the current version used.

**Browse Page**
: A page that displays all items in your collection in a grid or list view, allowing users to filter and search through the collection.

---

### C

**Child Object**
: In a compound object structure, a child object is a related item (photo, document, artifact) that appears below a parent transcript. Connected via `parentid` field.

**CollectionBuilder**
: The open-source framework that Oral History as Data is built upon. CollectionBuilder creates digital collection sites from CSV metadata.

**CollectionBuilder-CSV**
: The specific version of CollectionBuilder that uses CSV files for metadata, which OHD extends with transcript-specific features.

**Commit**
: In Git, saving changes to your repository with a descriptive message. Changes must be committed before they can be pushed to GitHub.

**Compound Object**
: A collection item that consists of multiple related components, such as an interview transcript with associated photographs. In OHD, the interview transcript is the parent and related items are children.

**CSV (Comma-Separated Values)**
: A plain text file format that stores tabular data. Used in OHD for metadata, transcript content, and configuration. Can be created in Excel or Google Sheets.

---

### D

**Display Template**
: A field in your metadata that determines how an item is displayed. For oral history interviews, use `display_template: transcript`. Other values include `image`, `pdf`, `video`, `audio`.

---

### F

**Featured Image**
: An image used for the home page background or to represent an item in browse views. Set in `_data/theme.yml` or metadata fields (`image_small`, `image_thumb`).

**Filters.csv**
: A CSV file located at `_data/filters.csv` that defines your tag vocabulary (coding scheme). Contains two columns: `tag` and `description`. Tags from this file are used to code and visualize transcript segments.

**Front Matter**
: YAML-formatted metadata at the top of a markdown file, enclosed by three dashes (`---`). Controls page settings like title, layout, and navigation order.

---

### G

**GitHub**
: A web platform for hosting and collaborating on Git repositories. OHD projects are typically hosted on GitHub.

**GitHub Actions**
: An automation service that builds and deploys your OHD site. The preferred method for GitHub Pages publishing, allowing custom Jekyll plugins.

**GitHub Pages**
: Free web hosting service provided by GitHub that publishes static websites directly from a repository. Perfect for OHD collections.

**Git**
: Version control software that tracks changes to files. GitHub is built on Git.

---

### H

**Hex Code**
: A six-character color code used in web design, starting with `#`. Example: `#0d6efd` for blue. Used in `_data/theme.yml` for customizing colors.

---

### I

**Include**
: A reusable component in Jekyll, stored in the `_includes/` directory. OHD uses includes for Bootstrap components, figures, and transcript features.

**Interviewee**
: The person being interviewed in an oral history. This is an OHD-specific metadata field.

**Interviewer**
: The person conducting the interview. This is an OHD-specific metadata field.

---

### J

**Jekyll**
: The static site generator that powers OHD and CollectionBuilder. Converts markdown files and data into a complete website. Written in Ruby.

**JSON (JavaScript Object Notation)**
: A data format used by OHD for large transcript collections. Can be generated from CSV files for better performance on the visualization page.

---

### K

**Kramdown**
: The markdown parser used by Jekyll. Supports extended markdown syntax including footnotes and tables.

---

### L

**Layout**
: A template that defines how a page is structured, stored in `_layouts/`. Common OHD layouts include `home-cover`, `transcript`, and `lesson-content`.

**Liquid**
: A templating language used by Jekyll to generate dynamic content. Uses tags like `{% raw %}{% if %}{% endraw %}` and variables like `{% raw %}{{ page.title }}{% endraw %}`.

---

### M

**Markdown**
: A lightweight markup language used to write content for OHD pages. Converts plain text to formatted HTML. File extension: `.md`.

**Metadata**
: Structured information about each interview in your collection. Stored in a CSV file in the `_data/` directory. Required fields include `objectid`, `title`, and `display_template`.

---

### N

**Nav Order**
: A front matter value that determines the order of pages in your site's navigation menu. Lower numbers appear first.

---

### O

**Object Location**
: A metadata field containing the URL or path to media files (audio, video, images). For YouTube, use format: `https://youtu.be/VIDEO_ID`. For local files: `/objects/filename.mp3`.

**Objectid**
: A unique identifier for each item in your collection. Must match the transcript CSV filename exactly (without .csv extension). Use lowercase letters, numbers, and underscores only. Example: `smith_john`.

**OHD (Oral History as Data)**
: A framework for creating digital oral history collections with interactive transcript visualizations, built on top of CollectionBuilder.

---

### P

**Parent Object**
: In a compound object structure, the main interview transcript item. Child objects reference the parent via `parentid` field matching the parent's `objectid`.

**Parentid**
: A metadata field used in compound objects. Links child objects to their parent by matching the parent's `objectid`.

**Permalink**
: The permanent URL for a page, set in front matter. Example: `permalink: /about/` creates a page at `yoursite.com/about/`.

**Push**
: In Git, uploading committed changes from your local computer to GitHub. Changes must be pushed to appear on GitHub and trigger site rebuilds.

---

### R

**Repository (Repo)**
: A project folder that contains all your site files, tracked by Git. Hosted on GitHub for OHD projects.

**Ruby**
: The programming language that Jekyll is written in. Must be installed to run Jekyll locally.

**RubyGems**
: A package manager for Ruby that installs Jekyll and its dependencies.

---

### S

**SASS/SCSS**
: CSS preprocessor languages that add features like variables and nesting. OHD uses SCSS files in the `_sass/` directory for styling.

**Section**
: A navigation grouping in OHD docs. The first page in a section uses `section_id`, subsequent pages use `section` to create dropdown menus.

**Speaker**
: A column in transcript CSV files indicating who is speaking in each segment. Typically the interviewer or interviewee name.

**Static Site**
: A website consisting of fixed HTML, CSS, and JavaScript files (no database required). OHD generates static sites using Jekyll.

**Subject**
: A metadata field containing topics or themes covered in an interview. Multiple subjects separated by semicolons. Example: `mining; labor history; safety`. Powers subject browse pages and filtering.

---

### T

**Tags**
: Thematic codes applied to transcript segments for visualization and analysis. Tags must be defined in `_data/filters.csv` and applied in the `tags` column of transcript CSVs. Multiple tags separated by semicolons.

**Template**
: A starter repository containing all necessary files for an OHD project. Create new projects by clicking "Use this template" on the OHD repository.

**Theme.yml**
: A configuration file at `_data/theme.yml` that controls display options, colors, and feature toggles for your OHD site.

**Timestamp**
: A column in transcript CSV files indicating when each segment occurs in the audio/video recording. Formats: `MM:SS` or `HH:MM:SS`. Enables click-to-navigate functionality.

**Transcript CSV**
: A CSV file containing interview transcript content, stored in `_data/transcripts/`. Columns include `speaker`, `words`, `tags`, and `timestamp`. Filename must match metadata `objectid`.

---

### U

**UTF-8**
: A character encoding that supports all languages and special characters. Always save CSV files with UTF-8 encoding to prevent display issues.

**URL Variables**
: Settings in `_config.yml` that define your site's web addresses, including `url`, `baseurl`, and `source-code`.

---

### V

**Visualization**
: The interactive colored bar chart at the top of transcript pages, showing coded segments. Users can filter by tags to focus on specific themes.

**Vocabulary**
: See **Filters.csv**. The set of tags/codes defined for analyzing transcripts across a collection.

---

### W

**Words**
: A column in transcript CSV files containing the actual spoken text from the interview. The only required column in transcript CSVs.

**Workflow**
: In GitHub Actions, an automated process defined by a YAML file in `.github/workflows/`. OHD uses a Jekyll workflow to build and deploy sites.

---

### Y

**YAML (YAML Ain't Markup Language)**
: A human-readable data format used in `_config.yml`, `_data/theme.yml`, and front matter. Uses key-value pairs and strict indentation (spaces, not tabs).

---

## Related Resources

- [Troubleshooting Guide](troubleshooting) - Solutions to common problems
- [Resources for Further Learning](resources) - Technology documentation
- [Accessibility Guide](accessibility) - Making your collection accessible to all users
