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
            <br>Student at University of the Witwatersrand, Johannesburg
            <br>Student Number: 2458318
            <br>Bachelor of Engineering Science (in Digital Arts), YOS 3
            <br>I am studying to become a Game Designer.
        </h2>
        <p>...</p>
    </li>
</ul>
</section>
<article class="regularArticle" id="wireframes">
<h2 class="paragraphTitle">Thank you for visiting my website.</h2>
<p>
    Have a nice day! Visit again anytime.
</p>
</article>`;
displayedProfile.innerHTML = contentString;