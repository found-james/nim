// Modules for html elements later
const hmtlTag = document.querySelector("html");
hmtlTag.style.margin = "0%";

const bodyOfHtml = document.querySelector("body");
bodyOfHtml.style.height = "100vh";
bodyOfHtml.style.width = "100%";


const headerContainer = document.createElement("header");
bodyOfHtml.appendChild(headerContainer);
// headerContainer.style.display = "flex";
headerContainer.style.postion = "sticky";
headerContainer.style.height = "20%";

const navContainer = document.createElement("nav");
headerContainer.appendChild(navContainer);
// navContainer.style.height = "100%";


const mainConatiner = document.createElement("main");
bodyOfHtml.appendChild(mainConatiner);
// mainConatiner.style.width = "100";
mainConatiner.style.height = "40%";
mainConatiner.style.display = "flex";

const leftSideMain = document.createElement("aside");
mainConatiner.appendChild(leftSideMain);
leftSideMain.id = "left-side";
leftSideMain.classList.add("edge");
leftSideMain.style.display = "flex";
leftSideMain.style.flexDirection = "column";


const headerForAside = document.createElement("header");
leftSideMain.appendChild(headerForAside);
headerForAside.style.height = "15%";

const h2ForAside = document.createElement("h2");
headerForAside.appendChild (h2ForAside);
h2ForAside.textContent = "Player stats";

const sectionForStats = document.createElement("section");
leftSideMain.appendChild (sectionForStats);
sectionForStats.style.height = "85%";
sectionForStats.style.width = "100%";

const modalForStats = document.createElement("div");
sectionForStats.appendChild(modalForStats);

const buttonForStats = document.createElement("button");
sectionForStats.appendChild(buttonForStats);
buttonForStats.setAttribute("id", "player-stats-button");
buttonForStats.style.width = "100%";
buttonForStats.style.height = "15%";
buttonForStats.textContent = "player stats";
buttonForStats.addEventListener("click", statsModal);

function statsModal(e) {
    switch (e.target.id){
        case "player-stats-button" : modalForStats.classList.toggle("stats");
            break;
        case "bot-stats-button" : modalForBotStats.classList.toggle("stats");
            break;
    }
}


const centerMain = document.createElement("article");
centerMain.id = "center";
mainConatiner.appendChild(centerMain);

const rightSideMain = document.createElement("article");
mainConatiner.appendChild(rightSideMain);
rightSideMain.id = "right-side";
rightSideMain.classList.add("edge");
rightSideMain.style.display = "flex";
rightSideMain.style.flexDirection = "column";

const headerForArticle = document.createElement("header");
rightSideMain.appendChild(headerForArticle);
headerForArticle.style.height = "15%";

const h2ForArticle = document.createElement("h2");
headerForArticle.appendChild (h2ForArticle);
h2ForArticle.textContent = "Bot stats";

const sectionForBotStats = document.createElement("section");
rightSideMain.appendChild (sectionForBotStats);
sectionForBotStats.style.height = "85%";
sectionForBotStats.style.width = "100%";

const modalForBotStats = document.createElement("div");
sectionForBotStats.appendChild(modalForBotStats);

const buttonForBotStats = document.createElement("button");
sectionForBotStats.appendChild(buttonForBotStats);
buttonForBotStats.setAttribute("id", "bot-stats-button");
buttonForBotStats.style.width = "100%";
buttonForBotStats.style.height = "15%";
buttonForBotStats.textContent = "bot stats";
buttonForBotStats.addEventListener("click", statsModal);

const buttonsForUser = document.createElement("section");
bodyOfHtml.appendChild(buttonsForUser);
buttonsForUser.id = "player-buttons";
// buttonsForUser.style.width = "100%";
buttonsForUser.style.height = "20%";

const buttonOne = document.createElement("button");
buttonOne.id = "one";
buttonOne.style.width = "15%";
buttonOne.style.height = "15%";
buttonsForUser.appendChild(buttonOne);

const buttonTwo = document.createElement("button");
buttonTwo.style.width = "15%";
buttonTwo.style.height = "15%";
buttonTwo.id = "two";
buttonsForUser.appendChild(buttonTwo);

const buttonThree = document.createElement("button");
buttonThree.style.width = "15%";
buttonThree.style.height = "15%";
buttonThree.id = "three";
buttonsForUser.appendChild(buttonThree);

const footerContainer = document.createElement("footer");
bodyOfHtml.appendChild(footerContainer);
footerContainer.style.height = "20%";
