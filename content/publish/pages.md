---
section: Publish and Connect
nav_order: 3
title: Create Interview Pages
---

## Creating a Markdown File

##### Go to the `_transcripts/` directory: 

- Navigate back to the root of your repository by clicking on `<> Code ` at the top left of the page.
- Click on the folder that says "_transcripts" 
{% include bootstrap/figure.md img="howto/transcripts.png" caption="" alt="_transcipts button" class="w-50" %}

##### Make a copy of one of the Markdown files in the directory: 

- Open up any of the .md file examples that are in this folder
- Navigate to the button that says "raw" and click it
{% include bootstrap/figure.md img="howto/raw.png" caption="" alt="raw file button" class="w-50" %}
- Copy the text inside of the file you opened by clicking CTRL+C or right clicking and selecting "Copy"
{% include bootstrap/figure.md img="howto/newcopyandpaste.png" caption="" alt="raw file text" class="w-50" %}

{% include youtube/embed.html  video-id="kfDeEfjl6nQ" title="Creating a .MD File" display="d-none d-md-block" %}


##### Create a new Markdown file for your transcript by pasting and then editing your copied text:  

- Go back to your _transcripts directory by using the back button. You'll need to click back two pages in your browser.
- Click the "Create New File" button
{% include bootstrap/figure.md img="howto/createnewmd.png" caption="" alt="create new file button" class="w-50" %}
- Name this file the same name you named your transcript file, but be sure to put `.md `rather than `.csv`, as it's file extension.  
    - ***Be sure that the filename is the same as the filename of your transcript. If your transcript is `doe_jane.csv`, make sure this file is `doe_jane.md`***   

{% include bootstrap/figure.md img="howto/mdname.png" caption="" alt="name field in new markdown file" class="w-50" %}

{:.alert .alert-info .mb-5}
You are creating a markdown file; [more on Markdown here](https://www.markdownguide.org/). 
Jekyll uses the markdown file as the basis for creating web pages. The information stored between the two `---` lines at the top of the page called "frontmatter." This frontmatter is written in a language called YAML, which is a [a human-readable language for writing/storing data variables](https://en.wikipedia.org/wiki/YAML). 

- Paste the text you copied from the raw file you opened initially into this new file.
{% include bootstrap/figure.md img="howto/beforemd1.png" caption="Pasted text before editing" alt="pasted text in new .md file" class="w-50" %}
- Edit the variables in the frontmatter (between the `---` lines ) to fit your interview's information.     
    - ***Be sure that the object-id option is the same as the filename (without the extension) of your transcript.***
{% include bootstrap/figure.md img="howto/aftermd2.png" caption="File after being edited for new file" alt="new .md file text after being edited for new file" class="w-50" %}

{:.alert .alert-danger .mb-5}
If you are not going to be connecting the transcript to an audio or video source, be sure and ***DELETE the av_source and audiovideo-id lines from the markdown file.*** You can also just remove the values and leave them blank. If you put a different value, like "n/a", the site will likely break. So just get rid of them if you aren't using that feature! 

{% capture lastcheck %}
LAST CHECK: if the "object-id" field or the markdown filename is different than the name of your transcript CSV file in the _data/transcripts folder, the tool will break. Make sure all these files and the frontmatter value match! Look at the example below 

Using our ongoing Jane Doe example, 

- Our transcript should be named: `doe_jane.csv` 
- The markdown file should be named: `doe_jane.md`
- The object-id value in the frontmatter should read: `doe_jane` 
    - That line should look like this: `object-id: doe_jane` {% endcapture %}

##### Commit your changes:

- Write a commit message, briefly describing the changes you made and then commit them at the bottom.
- Once you are done, navigate to your new file, it should look like the example below (without that bit about the poet at the bottom). 
{% include bootstrap/figure.md img="howto/comletemd.png" caption="" alt="the newly created md file" class="w-50" %}

{% include bootstrap/alert.md color="warning" text=lastcheck %}

