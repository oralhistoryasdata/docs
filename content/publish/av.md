---
section: Publish and Connect
nav_order: 4
title: Connect Audio or Video
---

### Optional: Connect the transcript to an audio or video file using `av_source`

{:.alert .alert-info .mt-3}
You may want to connect transcript to a audio or video recording. The tool has built in connections to YouTube, Vimeo, Soundcloud, and plain mp3 files.  You'll need to incorporate some simple information in the header of your markdown file to make these connections possible. To provide users navigation to certain moments in the recording, you'll also need to provide timestamps in the data file. 

- Look in the header of your markdown file. You'll see that there is a space for av_source. Here you have four options: 

- `mp3`
- `youtube`  
- `soundcloud`
- `vimeo`

- Enter one of the options above as the `av_source` value. Or leave blank if no recording will be connected.
{% include bootstrap/figure.md img="howto/avid1.png" caption="" alt="opened file, ready for editing" class="w-50" %}
- Below `av_source`, you'll see a space for your file's `audiovideo-id`. Fill in this information using the directions for your transcript's platform below. 
{% include bootstrap/figure.md img="howto/avid2.png" caption="" alt="opened file, ready for editing" class="w-50" %}

#### Youtube
{% include bootstrap/figure.md img="howto/youtubeid.png" caption="location of your youtube audiovideo-id" alt="opened file, ready for editing" class="w-50" %}

#### Vimeo
{% include bootstrap/figure.md img="howto/vimeoid2.png" caption="location of your vimeo audiovideo-id" alt="opened file, ready for editing" class="w-50" %}

#### Soundcloud
{% include bootstrap/figure.md img="howto/soundcloud_path_copy.png" caption="location of your the URL path" alt="opened file, ready for editing" class="w-50" %}

#### MP3

If you want to directly link an mp3 file, you can store that file in your repository or on another web server, but be aware that GitHub only allows a small amount of space to each repository. If I were to store the gluck.mp3 file listed below, for instance, its size (155MB) would represent about 15% of the alotted storage for the repo. 

**Connecting an MP3 via a link to another location on the web (Recommended!)**

- Make sure the `av_source` value is: `mp3`
- Find the link to your MP3 file. 
    - Tip: If you're using an MP3 on another website you don't have access to, you may need to view the page source for the page on which the audio player is visible, and then search for "mp3" on the page, hoping you can find the link. 
- Enter the mp3 link url into the `audiovideo-id` option surrounded by quotation marks. 
    - E.G. `audiovideo-id: "https://www.example.com/mp3/doe_jane.mp3"`

**Connecting an MP3 stored in the GitHub repository**

- Make sure the `av_source` value is: `mp3`
- Upload your mp3 into the `objects` folder:
    - Open the `objects` folder 
    - Drag the mp3 from your local computer onto the web page and drop it to upload it. (Or use the Add New File button and follow the prompts.)
    - After finished uploading, make a commit message and click the commit message
- Enter the mp3 filename into the `audiovideo-id` option preceded by `/objects/`
    - E.G. For an mp3 called `doe_jane.mp3`, you would have the following line: 
        - `audiovideo-id: /objects/doe_jane.mp3`



{% include bootstrap/figure.md img="howto/url_mp3_final.png" caption="" alt="mp3 page URL" %}

{% include bootstrap/figure.md img="howto/final_source.png" caption="" alt="Included URL for mp3 feature" %}
 

