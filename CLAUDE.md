# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Oral History as Data Documentation** - a Jekyll-based documentation site for the Oral History as Data (OHD) digital humanities tool. The site provides comprehensive guidance for researchers, archivists, and oral history practitioners on how to prepare, publish, and analyze interview transcripts using the OHD platform.

## Architecture & Key Components

### Site Structure
- **Jekyll-based documentation site** using the Learn-Static lesson template
- **Content organization**: Documentation is structured in `/content/` with logical sections:
  - `intro.md` - How OHD works overview
  - `setup/` - Site configuration and customization 
  - `prepare-content/` - Metadata and transcript preparation
  - `how-to/` - Step-by-step guides
  - `tutorials/` - Complete workflows
  - `publish/` - Deployment options

### Navigation System
- Uses **front matter-driven navigation** via `nav_order` and `section`/`section_id` 
- Individual pages: add `nav_order` only
- Section dropdowns: first page gets `nav_order` + `section_id`, subsequent pages get `section` + `nav_order`

### Layout System
- `_layouts/lesson-content.html` - Main content layout with YouTube video support
- `_includes/` - Reusable components (Bootstrap alerts, modals, figures, etc.)
- `_sass/_custom.scss` - Site-specific styling overrides

### Content Management
- **Markdown-first**: All content written in Markdown with front matter
- **Bootstrap components** available via Liquid includes (`{% include bootstrap/alert.md %}`)
- **Example files** in `/examples/` directory (CSV templates)

## Development Commands

### Local Development
```bash
# Serve the site locally (Jekyll server should already be running per user)
bundle exec jekyll serve
# Alternative if bundle not available
jekyll serve
```

### Content Writing Conventions
- One sentence per line for better version control
- Blank lines between all elements (headers, paragraphs, lists, code blocks)
- Headers start at h2 (since layout provides h1 from page title)
- Code/variables use backticks, filenames use quotes
- Follow logical header hierarchy without skipping levels

## Configuration Files

- `_config.yml` - Main Jekyll configuration and site metadata
- `_data/theme.yml` - Theme customizations (referenced but may not exist)
- Content managed via front matter in individual markdown files

## Important Notes for Documentation Work

### Current Documentation Gaps (from existing CLAUDE.md notes)
1. **Visualization Documentation** - Limited info on how visualization system works
2. **Troubleshooting Guide** - No common issues/solutions documented  
3. **Advanced Topics** - Limited guidance for experienced users wanting customization
4. **Complete Project Examples** - Need full start-to-finish walkthroughs
5. **Accessibility & Best Practices** - Missing ethical considerations and accessibility guidance
6. **Migration & Integration** - How to migrate from other platforms
7. **Collaborative Workflows** - Team-based project guidance
8. **Managing Larger Collections** - Scaling advice for large projects

### Content Strategy
- Focus on **user experience** - researchers and practitioners, not developers
- Emphasize **CSV-driven workflow** as the core concept
- Connect to **CollectionBuilder** relationship where relevant
- Provide **practical examples** throughout

### When Working on This Site
- **NEVER create files unless absolutely necessary** - prefer editing existing files
- **ALWAYS check existing content organization** before adding new pages
- **Use the existing include system** for Bootstrap components rather than raw HTML
- **Follow the established navigation patterns** when adding new sections
- **Test navigation changes** since the section/nav_order system can be finicky