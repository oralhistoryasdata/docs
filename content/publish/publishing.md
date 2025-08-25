---
nav_order: 5
title: Publishing Your Site
---

# Publishing Your Site

After setting up your repository and configuring your project, you can publish your site to make it publicly accessible on the web.

**Quick Links:**
- [GitHub Pages Setup](#github-actions) (recommended)
- [Other Publishing Options](#other-publishing-options) 
- [Step-by-step tutorial](../tutorials/tutorial-publishing)

## About GitHub Pages

GitHub Pages is a free hosting service that publishes websites directly from GitHub repositories. It's perfect for project sites like Oral History as Data because:

- It's completely free
- It integrates seamlessly with your repository
- It automatically updates when you make changes
- It provides a reliable, secure web presence



## GitHub Actions

GitHub Actions allows you to use GitHub Pages to host an OHD site on GitHub that require custom plugins. This is important since the default GitHub Pages process doesn't support plugins needed by CB-CSV.

For detailed step-by-step instructions, see our [publishing tutorial](../tutorials/tutorial-publishing).


- **Setup**: Configure through repository Settings > Pages
- **Process**: Creates a workflow file (.github/workflows/jekyll.yml) that builds your site with the correct Jekyll version
- **Benefits**: Free hosting with the ability to use plugins
- **Documentation**: [GitHub Actions Guide](https://collectionbuilder.github.io/cb-docs/docs/deploy/actions/)






## GitHub Pages Usage Guidelines

GitHub Pages is intended for documentation and small project sites. Keep these guidelines in mind:

- Sites should be less than 1GB in total size
- Monthly bandwidth limit is 100GB
- Build limits: 10 builds per hour

{% capture media_note %}
### Hosting Media Files

**Options for audio/video files:**

1. **External Services (Recommended):**
   - YouTube or Vimeo for video files
   - SoundCloud for audio files
   - Other dedicated media hosting platforms

2. **Direct Hosting (Limited):**
   - Small audio files (MP3) can be stored in your repository
   - Keep individual files under 50MB when possible
   - Be mindful of the 1GB total repository size limit

**Note:** For extensive media collections, consider using dedicated media hosting services rather than storing large files directly in your repository.
{% endcapture %}

{% include bootstrap/alert.md text=media_note color="secondary" %}

## Other Publishing Options

OHD sites can be deployed in several ways beyond GitHub Pages, each with different benefits depending on your needs.

### Self-Hosting
After building your site with Jekyll, copy the "_site" folder contents to any web server. 
- **Process**: Run `JEKYLL_ENV=production bundle exec jekyll build`
- **Benefits**: Complete control over hosting environment
- **Documentation**: [Jekyll Build Guide](https://collectionbuilder.github.io/cb-docs/docs/deploy/build/)

### Third-Party Services
- **Render**: Free static site service that connects to GitHub and builds with Jekyll
- **GitLab Pages**: Similar to GitHub Pages but with GitLab repositories  
- **Cloudflare Pages**: Free static site hosting with global CDN
- **Documentation**: [Third Party Services](https://collectionbuilder.github.io/cb-docs/docs/deploy/thirdparty/)

### Choosing the Right Option
Consider these factors:
1. **Technical requirements**: Does your site use plugins? (GitHub Actions, third-party, or self-hosting required)
2. **Collection size**: Approaching GitHub's 1GB limit? (Consider hosting objects separately)
3. **Custom domain**: Most services support custom URLs
4. **Long-term maintenance**: Self-hosting requires more maintenance