const homeButton = document.querySelector('#homeButton');
homeButton.addEventListener("click", () => GoToHomePage());
const blogsButton = document.querySelector('#blogsButton');
blogsButton.addEventListener("click", () => GoToBlogPage());
const designButton = document.querySelector('#designButton');
designButton.addEventListener("click", () => GoToDesignPage());
const essayButton = document.querySelector('#essayButton');
essayButton.addEventListener("click", () => GoToEssayPage());
const portfolioButton = document.querySelector('#portfolioButton');
portfolioButton.addEventListener("click", () => GoToPortfolioPage());
const profileButton = document.querySelector('#profileButton');
profileButton.addEventListener("click", () => GoToProfilePage());

let displayNavContainer = document.getElementById("NavBarDisplay");
let navBarBackToTopInnerHTML = 
`<nav-bar class="isFixed">
    <ul>
        <li><a href="#topOfPage">Top</a></li>
    </ul>
</nav-bar>`;
displayNavContainer.innerHTML = navBarBackToTopInnerHTML;

function GoToHomePage(){
    window.location.replace("https://jeanfrancoisretief.github.io/Assignment-1-Website/index.html");
}

function GoToBlogPage(){
    window.location.replace("https://jeanfrancoisretief.github.io/Assignment-1-Website/blogs.html");
}

function GoToDesignPage(){
    window.location.replace("https://jeanfrancoisretief.github.io/Assignment-1-Website/design.html");
}

function GoToEssayPage(){
    window.location.replace("https://jeanfrancoisretief.github.io/Assignment-1-Website/essay.html");
}

function GoToPortfolioPage(){
    window.location.replace("https://jeanfrancoisretief.github.io/Assignment-1-Website/portfolio.html");
}

function GoToProfilePage(){
    window.location.replace("https://jeanfrancoisretief.github.io/Assignment-1-Website/profile.html");
}
