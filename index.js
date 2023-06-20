//the purpose of this js file is to simplify the corresponding html file, 
//and to make the corresponding html file more consistent with the others in the site.

let displayedHome = document.getElementById("HomeDisplay");
let contentString = `<article class="regularArticle" id="helloWorld">
<h2 class="paragraphTitle">Hello World!</h2>
<p>Hello, I'm Jean-Francois Retief (Student Number: 2458318).</p>
<p>I am a student at the University of Witwatersrand.</p>
<p>This is my my portfolio website.</p>
<p>It was originally made for WSOA3028A - Interactive Media IIIA Assigment 1.</p>
<p>It was improved for WSOA3028A - Interactive Media IIIA Assigment 3.</p>
<p>It was improved further for WSOA3028A - Interactive Media IIIA Final Website (Exam). This is the current and final version of this website.</p>
<p>It was made in 2023 (YOS3), semester 1.</p>
<p>&nbsp</p>
<p>It includes the following pages:</p>
<ul>
    <li>Homepage</li>
    <li>DevBlog page</li>
    <li>Design page</li>
    <li>Essay page</li>
    <li>Portfolio page</li>
    <li>Profile page</li>
</ul>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
</article>
<article class="regularArticle" id="navTut">
<h2 class="paragraphTitle">About</h2>
<p>You are currently on the Home Page.</p>
<p>The Blog Page contains all the dev-blogs that I've written during the course of the semester for the subject: WSOA3028A - Interactive Media IIIA.</p>
<p>The Design section contains wireframes, design notes and other illustrations that explain my process of designing this website.</p>
<p>The Essay page contains all essays written up until present day.</p>
<p>The Portfolio page contains some of the games and websites I've made during my time at the University of the Witwatersrand.</p>
<p>The Profile page contains a profile picture and a brief "About", about me.</p>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
<p>&nbsp</p>
</article>`;

displayedHome.innerHTML = contentString;
