//the purpose of this js file is to simplify the corresponding html file, 
//and to make the corresponding html file more consistent with the others in the site.

let displayedProfile = document.getElementById("ProfileDisplay");
let contentString = `<section class="Profile">
<ul>
    <li>
        <img src="ProfilePic001.jpg" alt="Jean-Francois's Profile Picture">
    </li>
    <li>
        <h2>
            Jean-Francois Retief
            <br>2458318
            <br>Student at University of the Witwatersrand, Johannesburg
            <br>Bachelor of Engineering Science (in Digital Arts), YOS 3
        </h2>
        <p>
            ...
            <br>...
            <br>...
        </p>
    </li>
</ul>
</section>
<article class="regularArticle" id="wireframes">
<h2 class="paragraphTitle">Thank you for visiting my website.</h2>
<p>
    &nbsp
    <br>&nbsp
</p>
</article>`;
displayedProfile.innerHTML = contentString;