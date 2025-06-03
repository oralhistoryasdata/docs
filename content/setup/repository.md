---
section: Setup and Configuration
nav_order: 3
title: Repository Setup
---

# Creating Your Repository

The first step in building your Oral History as Data project is to create a GitHub repository using our template. This gives you your own copy of all the necessary files and structure.

{% include alert.html text="See our [How To Guide](/content/how-to/create-github-repository.html) for more detailed instructions with images" color="info" %}

## Create a GitHub Account

If you already have a GitHub account, you can skip this step.

1. Go to [github.com](https://github.com/)
2. Click "Sign up" and follow the registration process
3. Verify your email address when prompted
4. Sign in to your new account

## Use the OHD Template

1. Go to the [Oral History as Data repository](https://github.com/oralhistoryasdata/template){:target="_blank"}

2. Click the green "Use this template" button in the upper right corner of the page and select "Create New repository" 

3. Name your repository
   - Choose a descriptive name related to your project 
   - Keep it concise and use lowercase letters with hyphens instead of spaces
   - Example: "vietnam-veterans-oral-history" or "community-memory-project"
   - Optional: Associate the repo with an organization rather than your personal account ([more below](#repository-organization-options))

4. Make sure the repository is set to "Public" (required for GitHub Pages)

5. Click "Create repository" button
   - This copies all the files from the template into your new repository
   - Unlike a fork, it doesn't maintain connection to the original repository

## Repository Organization Options

You have two main options for hosting your repository:

### Personal Account (Simplest)
- Host directly from your personal GitHub account
- Simple to manage as a single researcher or small team
- URL will be: `username.github.io/repository-name`

### Organization Account (For Teams/Institutions)
- Create a GitHub organization for more formal projects
- Better for collaborative institutional projects
- Provides a consistent home if project maintainers change
- URL will be: `organization-name.github.io/repository-name`

If you want to create an organization:
1. Go to your GitHub profile settings
2. Select "Organizations" from the sidebar
3. Click "New organization"
4. Follow the prompts to set up your organization
5. Then create your repository within the organization
6. On the initial configuration page, you'll then change the owner of the repo from yourself to the organization, using the drop down menu to the left of where you name the repo.

## Next Steps

After creating your repository, you're ready to customize it for your project by configuring the settings in the _config.yml file.

<!-- This section has been replaced by the new combined 'Setup Your Site' documentation. Please see ../setup-your-site.md for the latest workflow. -->