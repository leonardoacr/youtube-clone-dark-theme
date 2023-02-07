![main_ytb](https://user-images.githubusercontent.com/102761127/180124363-19f80e33-e042-4bb1-a9c8-d18a8722fe0a.png)

Live website:
https://leonardoacr.github.io/youtube-clone-dark-theme/

As being my first big HTML/CSS and Javascript project, this content is meant to be a personal note for future remembrance of how this YouTube Home clone was made.

Features added to this clone:
- Top Navigation Bar
  + Functional Search Box (redirect to an actual YouTube search) with the same border and cancel button when clicked;
  - Tooltips similar to the actual YouTube;
- Inactive Left Navigation Bar
  + Background changes with hover;
  + Functional Menu Button to change the bar.
- Active Left Navigation Bar
  + Background changes with hover;
  + Sections divided same as YouTube including footer section;
  + Scroll bar similar to the original;
  + Most of links are working (redirect to YouTube).
- Video Section
  + Functional grid with videos and sections.

**Contents**

- [HTML](#html)
  * [Top Navigation Bar](#top-navigation-bar)
    + [Menu Button](#menu-button)
    + [YouTube Logo](#youtube-logo)
    + [Search Box - Microphone Icon](#search-box---microphone-icon)
    + [Right Page Icons](#right-page-icons)
  * [Inactive Left Navigation Bar](#inactive-left-navigation-bar)
    + [Left Navigation Bar](#left-navigation-bar)
  * [Active Left Navigation Bar](#active-left-navigation-bar)
    + [Menu - Youtube Logo](#menu---youtube-logo)
    + [Left Navigation Bar](#left-navigation-bar-1)
  * [YouTube Videos](#youtube-videos)
    + [Categories](#categories)
    + [Videos](#videos)
  * [Tooltips](#tooltips)
- [CSS](#css)
  * [Top Navigation Bar](#top-navigation-bar-1)
    + [Menu Button - YouTube Logo](#menu-button---youtube-logo)
    + [Search Box - Microphone Icon](#search-box---microphone-icon-1)
    + [Right Page Icons](#right-page-icons-1)
  * [Inactive Left Navigation Bar](#inactive-left-navigation-bar-1)
  * [Active Left Navigation Bar](#active-left-navigation-bar-1)
  * [YouTube Videos](#youtube-videos-1)
  * [Tooltips](#tooltips-1)
- [Javascript](#javascript)
  * [Function Inactive Menu Button](#function-inactive-menu-button)
  * [Function Active Menu Button](#function-active-menu-button)
  * [Submit Function](#submit-function)
 

# HTML
This section is dedicated to explore the functionalities and a bit of how the HTML was made. The sections here are organized the same way as on the HTML.

Some important short notes for general understanding:
- Most of the icons (99%) were taken from YouTube original HTML as SVG with:
```html
<yt-icon></yt-icon>
```
- Most of the icons are generally in original form so it needs the "filter: brightness(0) invert(1);" on the CSS to make it adapted to the dark theme. 

## Top Navigation Bar
![top_bar](https://user-images.githubusercontent.com/102761127/180460312-e67e2ca5-f1e9-448b-8220-28a48346d892.png)

### Menu Button
The "Menu Button" was simple made with the tag "button", while the function "inactive_menu_btn()" for the attribute "onclick" was used to make the rest of the sections with less opacity and turn the Active Left Bar enabled, while setting to hidden the Inactive Left Bar.

### YouTube Logo
The YouTube Logo was simple divided into  2 sections: 1 - The icon and text (YouTube) and 2 - The country code. Both are linked to the actual YouTube Home. 

### Search Box - Microphone Icon
The Search Box was made with a simple form linked to a return of a function "submit_func()" for the attribute "onsubmit" making the user being redirected to an actual search on YouTube (the function will be explained later on Javascript section). The "input" was set as a type "search" to make appear the cancel button when typing something on the search box. The Mic icon was added to the Search Box div to make them be centered on the general top-bar scope using CSS. 

### Right Page Icons
Bascially this section exist to put the three icons (create - notifications - user profile) on  the right of the top nav bar.

## Inactive Left Navigation Bar
![inactive_bar](https://user-images.githubusercontent.com/102761127/180460563-2556f745-5de6-4312-9c4b-d9dbef83c0f4.png)

### Left Navigation Bar
Basically all the icons were taken from YouTube. This section only divide them into a navbar attribute, and an unorganized list to organize the icons with CSS. 

## Active Left Navigation Bar
![active_bar](https://user-images.githubusercontent.com/102761127/180460666-97161655-a085-4924-ae43-78e4b476e0d1.png)

### Menu - Youtube Logo
In this section the menu button and youtube logo were glued together as a div to make it easier to set the position on the CSS. For the Active bar the same scheme with the function was used, but now for the opposite, as "active_menu_btn()".

### Left Navigation Bar
The 'Left Navigation Bar' for the active  was divided into 6 sections splitted with an horizontal bar (simple made with a div and customized on CSS) and the footer. The footer was copied from YouTube source and changed as necessary. 

## YouTube Videos
The main page containing the videos and sections.

### Categories
The categories are simple buttons for each category. 

### Videos
This section was actually divided into 3 main sub-sections (on the code they are named equal to make the CSS smaller but the actual meaning is): 

- Video Section:  This section has the videos and their metadada. Basically, each video is inside the attribude "video-container", which is divided into: "thumbnail" (with an data-duration attribute to customize into the CSS), "video-bottom-section": contains profile channel photo icon, channel name, video title and metadata. The verified icon was ignored for this application. 

- Latest Youtube Post: The actual posts could be implemented in future updates, meanwhile they are just pictures positioned with CSS. 

- Top News: Just another video section. 

## Tooltips
The Tooltips are basically span text defined with a class called "tooltiptext", the main thing is done with CSS. 

# CSS
## Top Navigation Bar
Since it was the first time I made a navigation bar, this section is probably unecessary long and it could be reduced. Besides that, it was divided into 3 sub-sections (left - Menu Button and Youtube Logo, middle - Search Box - Microphone Icon and Right Page Icons). To position and organize it was used display flex and position fixed. The z-index at max is important to make it more priority with the video section. The CSS is easy to understand so I won't go into too much detail here (most of the stuff are to position the icons right), the sections here will be focuses only on important features. 

### Menu Button - YouTube Logo
The CSS basically uses position relative and display flex to set the items position. 

### Search Box - Microphone Icon
The special thing here is the cancel icon customization when the user is writing in the search box. The SVG was taken from the atual YouTube, inside the class "yt-icon" and copyied inside the CSS code replacing the path. The following guide should be used when replacing and image there:

```CSS
	background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='**REPLACE THE PATH OF YOUR SVG HERE**'></path></svg>");
 
```

Another worth mention feature: When the input box is on click, the "focus" pseudo-class is used to change the box color to the same as used in YouTube, the 'outline' disable the natural color and a new border is customized with the desired color with 'boder-color'.

### Right Page Icons
Only basic code is used to set position and justify contents. 

## Inactive Left Navigation Bar
Besides the variables that are used to change visibility on JS code the inactive bar CSS is basically to set positions and justifify contents. 

## Active Left Navigation Bar
For this nav bar it is important to let the 'width' as 0 and 'visibility' hidden as default (it will be changed with JS code later), also a fast transition is used to make the animation when the menu button is clicked. The special feature here is the scroll bar that was set similar to what YouTube does. To add it in your project first create a section with only the desired icons body (the top icons - menu and youtube logo - are not included) and add the commands:

```CSS
  padding-right: 16px;
  overflow-y: hidden;
  overflow-x: hidden;
 
```

A 'padding-right' is added to make space to the bar. The scroll is only enabled when the user hover into the section (when this happens the added padding is set to 0 again):

```CSS
.left-nav-sections:hover {
    overflow-y: auto;
    padding-right: 0px;
}
 
```

The scroll is customized with the following webkits: (webkit-scrollbar, webkit-scrollbar-track and webkit-scrollbar-thumb).

## YouTube Videos
The following video was used to make this section: 

https://www.youtube.com/watch?v=rhPSo4_Tgi0

Most of the code was used in the same way only changing some details to adapt to this project. 

## Tooltips
The Tooltips are basically span text, the main CSS format and justify the texts and set the colors, setting the 'visibility' to hidden. They are enabled only when the user hover the buttons using ':hover', than the 'visibility' is set to visible and the opacity to 90%. I didn't find a way to set all the positions right only at one time so for each tooltip there is a specific code to set the right position. 

# Javascript
## Function Inactive Menu Button
This function was made to make the transition between the active and inactive left navigation bar changing the style 'visibility' and the 'active bar' class width from 0 to 240px, while the opacity from the rest of the code is reduced (sometimes time this kind of feature is applied on the actual YouTube).

## Function Active Menu Button
This one works as the opposite from the previous section. Turn the inactive bar visibility to visible and the for active bar visibility and width to 0.

## Submit Function
This function get the input search and add as string to the actual YouTube search address. 

```javascript
	let input_search = document.getElementById("input_search").value;
	window.open("https://www.youtube.com/results?search_query="+input_search);
```



