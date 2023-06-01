/*const nav = [
    {
        id: 1,
        buttonID: "homeButton",
        buttonCaption: "Home",
    },
    {
        id: 2,
        buttonID: "blogsButton",
        buttonCaption: "Blogs",
    },
    {
        id: 3,
        buttonID: "designButton",
        buttonCaption: "Design",
    },
    {
        id: 4,
        buttonID: "essayButton",
        buttonCaption: "Essays",
    },
    {
        id: 5,
        buttonID: "portfolioButton",
        buttonCaption: "Portfolio",
    },
    {
        id: 6,
        buttonID: "profileButton",
        buttonCaption: "Profile",
    }
];*/

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

const navBarItem = document.getElementById("topOfPage"); //<nav></nav>

/*
function DisplayNavBar(nav)
{
    let displayNav = nav.map(function (nav) {
    return `<ul><li><button id="${nav[1].buttonID}">${nav[1].buttonCaption}</button></li>
    <li><button id="${nav[0].buttonID}">${nav[0].buttonCaption}</button></li>
    <li><button id="${nav[0].buttonID}">${nav[0].buttonCaption}</button></li>
    <li><button id="${nav[0].buttonID}">${nav[0].buttonCaption}</button></li>
    <li><button id="${nav[0].buttonID}">${nav[0].buttonCaption}</button></li>
    <li><button id="${nav[0].buttonID}">${nav[0].buttonCaption}</button></li></ul>`
    }).join("");
    navBar.innerHTML = displayNav;
}
DisplayNavBar(nav); //always run
*/

function GoToHomePage(){
    //window.location.replace("http://127.0.0.1:5500/index.html");
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
