
const v1Button = document.querySelector('#V1Button');
v1Button.addEventListener("click", () => DisplayDesignV1());
const v2Button = document.querySelector('#V2Button');
v2Button.addEventListener("click", () => DisplayDesignV2());


let displayedDesign = document.getElementById("DesignDisplay");

let stringV1 = `<article class="regularArticle" id="discription">
<h2 class="paragraphTitle">Discription</h2>
<p>This page contains the wireframes, style guide and other documentation used to design, plan and make the website I made for Assignment 1. To see future versions of the site, please select a higher version above.</p>
</article>

<article class="regularArticle" id="DocIxD">
<h2 class="paragraphTitle">Documentation of my IxD process</h2>
<h3 class="subParagraphTitle">Goal Alignment</h3>
<p>
    My goal is to make a portfolio website, where a user can easily navigate within a page and between pages.
    <br>The user will be anyone who wishes to view my portfolio.
    <br>As stipulated in the assignment brief, the website will contain the following pages: Home, Blog, Design, Essay, Profile and Portfolio.
</p>
<h3 class="subParagraphTitle">Information Structure</h3>
<img src="IxDdocumentation/ContentMap.jpg" alt="Picture of Content Map">
<h3 class="subParagraphTitle">User Flow</h3>
<img src="IxDdocumentation/UserFlow.jpg" alt="User Flow Diagram">
<h3 class="subParagraphTitle">Interface Elements</h3>
<p>
    The user can use the Top Nav-bar to traverse between different pages. The user can use the Bottom Nav-bar (which is fixed to the bottom of the screen, not the bottom of the page) to traverse within a single page.
    <br>Both of these Nav-bars are implemented as a list of links (display: inline-block) that either link to an HTML file or an ID tag. No JavaScript was used for this implementation.
    <br>Other than these Nav-bars, the user can simply scroll through each page, if they wish to do so.
</p>

</article>

<article class="regularArticle" id="styleguides">
<h2 class="paragraphTitle">Style Guide</h2>
<h3 class="subParagraphTitle">Goal and Aesthetic</h3>
<p>
    My goals are to have simple and recognizable UI element, to make all navigational components have warm colouring (i.e. shades of red) and to make all content components (such as articles or item-selectors) have cool colouring (i.e. blues and white). 
</p>
<h3 class="subParagraphTitle">Visual Design Elements</h3>
<p>
    The warm colours of the navigational components contrast well with the actual content of each page (which as cool colouring), and this clearly and visually separates the interactable nav-bars from the static content. The interactable content (item-selectors) has more vivid colouring than the rest of the content (i.e. deeper blues).
    <br><br>Every visual container on a page has rounded edges to give the site a smooth aesthetic. Every container also has a clear difference in colour from whatever appears behind it in the visual hierarchy. This hierarchy starts with the light-blue background and then goes to the white articles (which contain black text and aqua-blue items) and above that comes the red navigation (which contains white text that turns dark-red when the mouse hovers above it).
    <br><br>Wherever the default font wasn’t used, such as paragraph titles, the font family “cursive” and font style bold was used, since it was readable and it is different enough from the main text to be noticeable, but not distracting.
    <br><br>All these elements combine to create a unique visual identity that I quite like since it incorporated my favourite colours (namely red and blue) and thus the website’s visual aesthetic helps to describe me, my style, and my design preferences (which contributes to the goal of a portfolio website).
</p>
<h3 class="subParagraphTitle">Final Design Sketches</h3>
<p>See Wireframes for details on different pages.</p>
<img src="StyleGuide/DesignSketch.jpg" alt="Final Design Diagram">

</article>

<article class="regularArticle" id="wireframes">
<h2 class="paragraphTitle">Wireframes</h2>
<h3 class="subParagraphTitle">Version 1 (Original wireframes from start of course)</h3>
<img src="Wireframes/V1pic1.jpg" alt="Version 1 Picture 1">
<h3 class="subParagraphTitle">Version 2</h3>
<img src="Wireframes/V2pic1.jpg" alt="Version 2 Picture 1">
<img src="Wireframes/V2pic2.jpg" alt="Version 2 Picture 2">
<h3 class="subParagraphTitle">Version 3 (Current Version)</h3>
<img src="Wireframes/V3pic1.jpg" alt="Version 3 Picture 1">
<img src="Wireframes/V3pic2.jpg" alt="Version 3 Picture 2">
<img src="Wireframes/V3pic3.jpg" alt="Version 3 Picture 3">
</article>`;

let stringV2 = `<p>Test</p>`;

function DisplayDesignV1()
{
    displayedDesign.innerHTML = stringV1;
}

function DisplayDesignV2()
{
    displayedDesign.innerHTML = stringV2;
}
