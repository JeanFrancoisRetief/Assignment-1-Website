const portfolioGames = [
    {
        id: 1,
        title: "~ 2458318 ~ Jean-Francois Retief ~ Game 1 ~ Sentient Delivery (Platformer)",
        description: "Made for a Game Design assigment in semester 2 of 2022. You play as a sentient package that has to deliver itself. The game is a platformer. The first level is clasic 2D platforming with moving platforms. Level 2 has portals and size-changers. Level 3 has puzzles. Level 4 does not have a 'IsGrounded' check for the jumps, thus allowing the player to fly. Level 5 allows for 3D movement.",
        downloadPath: "Other Files/DeliveryPlatformer.zip",
        downloadName: "DeliveryPlatformer",
        downloadCaption: "DeliveryPlatformer.zip",
        imageSRC: "Other Images/Game01Screenshot01.jpg",
        imageALT: "Image of my platformer game.",
    },
    {
        id: 2,
        title: "~ 2458318 ~ Jean-Francois Retief ~ Game 2 ~ Online Texas Holdem",
        description: "This was a group project for ELEN3020A Professional Practice and Software Development. Me and my team member, Ngcweti Mjiyako made a webpage version of texas holdem. One must download the files and run the game on Live Server (in VScode).",
        downloadPath: "Other Files/TexasHoldemPoker.zip",
        downloadName: "TexasHoldemPoker",
        downloadCaption: "TexasHoldemPoker.zip",
        imageSRC: "Other Images/GameRiver001.jpg",
        imageALT: "Image of me and Ngcweti Mjiyako's Poker game",
    },
    {
        id: 3,
        title: "",
        description: "",
        downloadPath: "",
        downloadName: "",
        downloadCaption: "",
        imageSRC: "",
        imageALT: "",
    }
];

const portfolioSites = [
    {
        id: 1,
        title: "~ 2458318 ~ Jean-Francois Retief ~ Website 1 ~ Original version of THIS portfolio website",
        description: "This was the first iteration of my portfolio website, made for WSOA3028A - Assignment 1 - Website",
        linkPath: "Assignment1Website/index.html",
        linkName: "http://127.0.0.1:5500/Assignment1Website/index.html",
        imageSRC: "Other Images/Website01Screenshot01.jpg",
        imageALT: "Image of original porfolio website.",
    }
];

const GameButton = document.querySelector('#GameButton');
GameButton.addEventListener("click", () => displayGames(portfolioGames));
const SiteButton = document.querySelector('#SiteButton');
SiteButton.addEventListener("click", () => displaySites(portfolioSites));

const displayContainer = document.getElementById("displayContainer");

function displayGames(portfolio) {
    let displayGames = portfolio.map(function (portfolio) {
    return `<article class="regularArticle">
    <h1>${portfolio.title}</h1>
    <p>${portfolio.description}</p>
    <p>Download link (zip file):</p>
    <a href="${portfolio.downloadPath}" download="${portfolio.downloadName}">${portfolio.downloadCaption}</a>
    <p>Screenshot:</p>
    <img src="${portfolio.imageSRC}" alt="${portfolio.imageALT}" id="screenshot">
    </article>`;
    })
    .join("");
    displayContainer.innerHTML = displayGames;
}

function displaySites(portfolio) {
    let displaySites = portfolio.map(function (portfolio) {
    return `<article class="regularArticle">
    <h1>${portfolio.title}</h1>
    <p>${portfolio.description}</p>
    <p>Link to website:</p>
    <a href="${portfolio.linkPath}">${portfolio.linkName}</a>
    <p>Screenshot:</p>
    <img src="${portfolio.imageSRC}" alt="${portfolio.imageALT}" id="screenshot">
    </article>`;
    })
    .join("");
    displayContainer.innerHTML = displaySites;
    }

/*
function displayMenu(menuItems) {
    let displayMenu = menuItems
    .map(function (menuItem) {
    return `<article class="menu-item">
    <img src="${menuItem.img}" alt="${menuItem.category}" class="photo" />
    <div class="item-info">
    <header>
    <h4>${menuItem.title}</h4>
    <h4 class="price">${menuItem.price}</h4>
    </header>
    <p class="item-text">
    ${menuItem.desc}
    </p>
    </div>
    </article>`;
    })
    .join("");
    sectionCenter.innerHTML = displayMenu;
    }
    */