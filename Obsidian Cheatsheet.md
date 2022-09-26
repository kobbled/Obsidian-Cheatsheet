# Obsidian Cheatsheet

```ad-warning
Open in Obsidian to view correctly.
```
```ad-info
If you have any helpful additions to this document, please contribute!
```
[[__TOC__]]

## 1 Plugins

- Admonition            **ESSENTIAL**
- Advanced Tables           **ESSENTIAL**
- Buttons
- Calendar
- Charts View
- Citations
- Contextual Typography   ->  (Useful with Minimal Theme Settings for using img-grid)
- Dataview                **ESSENTIAL**
- dictionary
- Dynamic Table of Contents
- Editor Syntax Highlight
- Excalibrain
- Excalidraw
- Highlightr
- Hotkeys++
- Icon Folder -> https://github.com/FlorianWoelki/obsidian-icon-folder
- Journey
- Kanban
- Kindle Highlights
- Link Favicons
- Minimal Theme Settings
- Open Vault in VS Code
- Outliner
- Ozan's image in editor plugin
- PDF Highlights
- Periodic Note
- Quick Add                **ESSENTIAL** ([watch demo](https://www.youtube.com/watch?v=gYK3VDQsZJo&ab_channel=ChristianB.B.Houmann))
- Quick Latex
- Search on Internet
- Sliding Panes (Andy Matuschak Mode)
- Sortable
- Sort & Permute lines
- Tag Wrangler
- Tasks
- Templater           **ESSENTIAL**
- Tracker
- Vantage  ->  Advanced search builder
- Zotero Integration

## 2 Themes

* [Things](https://github.com/colineckert/obsidian-things) **USING**
* [Minimal](https://github.com/kepano/obsidian-minimal)
* [Primary](https://github.com/ceciliamay/obsidianmd-theme-primary)
* [Prism](https://github.com/damiankorcz/Prism-Theme)

### 2.1 Minimal Theme
```ad-note
Install the `Minimal Theme Settings` plugin for custimization
```

**Minimal Theme** can be used in conjunction with **Contextual Typography** to produce _image_grids_ (See [Docs](https://minimal.guide/Block+types/Image+grids), and ).

* [Minimal Block Types](https://minimal.guide/Block+types/Cards)

## 3 Terminology

- Zettelkasten
- Johnny Decimal
- PARA Method
- [Linking Your Thinking](https://www.linkingyourthinking.com/)


## 4 Markdown

- [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [The Ultimate Markdown Cheat Sheet](https://towardsdatascience.com/the-ultimate-markdown-cheat-sheet-3d3976b31a0)
- [Markdown Extended Syntax](https://www.markdownguide.org/extended-syntax/)
- [Markdown Extended for VScode](https://marketplace.visualstudio.com/items?itemName=jebbs.markdown-extended) -> This shows some of the extra features that can be achieved with markdown. This is for VSCode but most of the features can be achieved in Obsidian with various community plugins (Just have to search for them).

## 5 Latex

- [MathJax-demos-web](https://github.com/mathjax/MathJax-demos-web#samples-of-mathjax-v3)
- [LATEX Math for Undergrads](http://tug.ctan.org/info/undergradmath/undergradmath.pdf)
- [LATEX Math Cheatsheet](https://c-tan.com/download/latex_math_cheatsheet_2018-01-13.pdf)

## 6 Hotkeys

```ad-note
Set **Commands** to **Hotkeys** by going to `Settings -> Hotkeys`
```

- https://keycombiner.com/collections/obsidian/
 - [Obsidian Hotkeys: Favorites and best practices](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125)
 
## 7 Tips
### 7.1 how to put the graphs in the sidebar

![[Obsidian-mini-graph.gif]]


## 8 Commands (CNTRL+P)

| **Command**                                  | **Action**                                                               |
| -------------------------------------------- | ------------------------------------------------------------------------ |
| *Backlinks: Toogle backlinks in document*    | include the backlinks in a "Links To This Page" section in each document |
| *Dyanamic Table of Contents*                 | Create table of contents for current document                            |
| *Number All Headings in Document*            | Number heading sequentially and by level                                 |
| *Sort & Permute lines : Sort Alphabetically* | Sort selected lines alphabetically                                       |
| *Toogle Bullet List*                         | Turn Selected Block into a list                                          |
| Templater: Create Note from Template         | Initialize note from template                                            |
| Tempalter: Replace Templates in current file | Update note that was created from a template                                                                          |

## 9 Images

## 10 CSS

Goto `settings->appearance->css snippets`. Click the `Open snippets folder` button. Make a CSS file, and copy the css into a single or multiple file.

```ad-tip
To see the CSS that is running open up the Inspector with `Ctrl + Shift + I`
```

### 10.1 Images

<dt>Center images at max width of page</dt>

```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
}
```

<dt>Hover over images in preview mode</dt>

```css
/* Enlarge image on hover */
.markdown-preview-view img {
  display: block;
  margin-top: 20pt;
  margin-bottom: 20pt;
  margin-left: auto;
  margin-right: auto;
  width: 30%; /*experiment with values*/
  transition: transform 0.25s ease;
}

.markdown-preview-view img:hover {
  -webkit-transform: scale(2); /* experiment with values */
  transform: scale(2);
}
```

#### 11.2.1 img-grid

If using **Minimal Theme** with `Minimal Theme Settings` and `Contextual Typography` plugins you will have access to the _img-grid_ class. Use this CSS as a default template:

```css
/* Updated for Obsidian 0.9.22 and up */

.img-grid .markdown-preview-section img:not([width]),
.img-grid .markdown-preview-section video {
    width:100%;
}

.img-grid .markdown-preview-section > div {
    display:flex;
}
.img-grid .markdown-preview-section > div > .internal-embed {
    flex:1;
    margin-left:-0.5rem;
    padding:0 0.5rem 0.5rem 0.5rem;
}
.img-grid .markdown-preview-section > div > *:not(div) {
    margin-block-start: 0rem;
    margin-block-end: 1rem;
}
.img-grid .markdown-preview-section > div img {
	padding-bottom: 20px;
}
.img-grid .markdown-preview-section > div hr {
    width:100%;
}
/* These lines make every image the same height */
.img-grid .markdown-preview-section > div > .internal-embed img:not(:active) {
    object-fit:cover;
    height:100%;
}
```

To center grid on page use

```css
.img-grid .markdown-preview-section > div {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
```

```ad-caution
This will disable resizing, and some other feature of img-grid
```
```ad-question
Is there a better way to center image grids?
```

To use for individual pages put this in the notes frontmatter:

```yaml
cssclass: img-grid
```

### 11.3 Tables

<dt>Center tables</dt>

```css
table {
  table-layout: fixed;
  margin-left: auto;
  margin-right: auto;
}
```

### 11.4 Math

<dt> Increase sie of Latex Math </dt>

```css
mjx-math {
  font-size: 130% !important;
}
```

### 11.5 Mermaid

<dt>Get mermaid charts to not overflow</dt>

```css
.mermaid {
  max-width: 100%;
  overflow: auto;
  text-align: center;
  justify-content: center;
}
```

## 12 Update Settings

- `settings->editor->display->readable line length`
- `excaidraw->display->new drawing to match obsidian theme`
- `appearance->css snippets`
- `core plugins -> Templates`
* `core plugins -> Outgoing Links`  **Optional**

## 13 Dataview

Dataview table can be viewed as cards if using the **Minimal Theme** and placing in the yaml frontmatter of a note:

```yaml
cssClasses: [cards, cards-cover, cards-2-3]

```

## 14 Javascript/DataviewJS

The root directory of the vault can be accessed with:
```javascript
this.app.vault.adapter.basePath
```

```ad-tip
You can debug **dataviewjs**, or javascript by going into the inspector ( `Ctrl + Shift + I` ), and going to the console window.
```

### 14.1 Writing Dataviewjs

javascript for dataview can be written with:

> ```dataviewjs                             ```

### 14.2 inserting images into dataview
(# ref::  [Obsidian Dataviewjs](https://www.jkoster.com/Obsidian-Dataviewjs-6f3e76cf455747fb9fa30de3e5dff197#d2d6f279cc634256b724b165672c3e03) ; https://www.reddit.com/r/ObsidianMD/comments/soapkd/dataview_plugin_help_how_to_display_images/)

To insert local images into a Dataview table, a Dataviewjs query must be made:

```javascript
let searchterm = dv.current().searchterm;  
let pages = dv.pages(searchterm).where(p => p.img != undefined).sort(p => p.file.name, 'desc');  
// console.log(dv.current());
// Create table  
dv.table(["File", "Image"],  
  pages   
    .map(p => [    
 	   `<img class="myTableImg" src="${this.app.vault.adapter.basePath}/${p.img.path}">`,
		p.file.link
  ])  
);
```

where `img` is the field (i.e `img::`) on the note where the image should be located

```
img:: ![[picture.jpg]]
```

## 15 Templater

### 15.1 Automating Titles

For creating a Title during template creation you will need to use the javascript below in the frontmatter

```javascript
<%* 
	let title = tp.file.title 
	if (title.startsWith("Untitled")) { 
		title = await tp.system.prompt("Title"); 
		await tp.file.rename(`${title}`); 
	} 
%>
```

And then in the body call the title like:

```javascript
# <% `${title}`%>
```



## 17 References
* [**Obsidian Hub**](https://publish.obsidian.md/hub)
* [Obsidian Hub Showcases](https://publish.obsidian.md/hub/03+-+Showcases+%26+Templates/%F0%9F%97%82%EF%B8%8F+03+-+Showcases+%26+Templates)
* [Linking Your Thinking](https://www.linkingyourthinking.com/)

### 17.1 Obsidian Publish References
https://obsidian.md/publish
https://workinginpublic.one/
----
- [Welcome+to+The+Quantum+Well!](https://publish.obsidian.md/myquantumwell/Welcome+to+The+Quantum+Well!)
- [chromatically/nutrition](https://publish.obsidian.md/chromatically/nutrition)
- [Notes on AI](https://notesonai.com)
- [Alex Digital Garden](https://publish.obsidian.md/alexander/1_Home/%F0%9F%8F%A0+Home)


### 17.2 Guides

#### 17.2.1 General Formatting

[Format your notes](https://help.obsidian.md/How+to/Format+your+notes)


#### 17.2.2 Dataview Guides

* [Create Cards (Movie Database)](https://minimal.guide/Guides/Create+a+movie+database)
* [Tutorial: How to Create a Bookshelf](https://thebuccaneersbounty.wordpress.com/2021/08/21/tutorial-how-to-create-a-bookshelf-in-obsidian/)
* [Obsidian Dataviewjs](https://www.jkoster.com/Obsidian-Dataviewjs-6f3e76cf455747fb9fa30de3e5dff197#d2d6f279cc634256b724b165672c3e03)

#### 17.2.3 Setting up Obsidian for Papers and Research

- [How to Boost Your Productivity for Scientific Research Using Obsidian](https://universvm.medium.com/how-to-boost-your-productivity-for-scientific-research-using-obsidian-fe85c98c63c8)
- [Obsidian Tutorial for Academic Writing](https://betterhumans.pub/obsidian-tutorial-for-academic-writing-87b038060522?gi=9664895fa2cc)

- [Using Dataview with Charts in Obsidian](https://agileadam.com/2022/07/using-dataview-with-charts-in-obsidian/)
- [The Beginner’s Guide to DATAVIEW Obsidian Plugin — 10 areas where things can go wrong and how to fix them](https://denisetodd.medium.com/obsidian-dataview-for-beginners-a-checklist-to-help-fix-your-dataview-queries-11acc57f1e48)

#### 17.2.4 Johnny Decimal System
- [Byran Jenks: Johnny Decimal](https://publish.obsidian.md/bryan-jenks/Z/Johnny+Decimal)
- [Johnny Decimal-ising my life](https://colinwren.medium.com/johnny-decimal-ising-my-life-82ee453f79a4)

#### 17.2.5 PARA Method
[The PARA Method: A Universal System for Organizing Digital Information](https://fortelabs.co/blog/para/)


### 17.3 Reddit Links
[ObsidianMD Subreddit](https://www.reddit.com/r/ObsidianMD/)
https://www.reddit.com/r/ObsidianMD/comments/wb6wwy/need_help_indexing_3d_print_files_see_comments/
https://www.reddit.com/r/ObsidianMD/comments/we4b06/has_anyone_created_a_bookmarking_system_in/

### 17.4 Discord Server
https://obsidian.md/community


### 17.5 Youtube

#### 17.5.1 Youtube Channels
https://www.youtube.com/channel/UC85D7ERwhke7wVqskV_DZUA
https://www.youtube.com/c/NicolevanderHoeven
https://www.youtube.com/user/Peepnbrick

 **excalidraw**
https://www.youtube.com/c/VisualPKM
https://www.youtube.com/c/SantiYounger


#### 17.5.2 Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/E6ySG7xYgjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/MYJsGksojms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/_YJUv1m_fnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/txsScSC53-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4T0q2kQwc2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ftzQOkzGCLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/5j9fAvJCaig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/fMq0aoAjueE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/iU60ItemuDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/zIh1S7ra3aI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
