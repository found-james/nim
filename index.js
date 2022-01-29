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

const leftSideMain = document.createElement("article");
mainConatiner.appendChild(leftSideMain);
leftSideMain.setAttribute("id", "left-side");
leftSideMain.classList.add("edge");
leftSideMain.style.display = "flex";
leftSideMain.style.flexDirection = "column";


const headerForLeftSide = document.createElement("header");
leftSideMain.appendChild(headerForLeftSide);
headerForLeftSide.style.height = "15%";

const h2ForLeftSide = document.createElement("h2");
headerForLeftSide.appendChild(h2ForLeftSide);
h2ForLeftSide.textContent = "Player stats";

const sectionForStats = document.createElement("section");
leftSideMain.appendChild(sectionForStats);
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
    console.log(e);

    
    switch (e.target.id){
        case "player-stats-button" : modalForStats.classList.toggle("stats");
            break;
        case "bot-stats-button" : modalForBotStats.classList.toggle("stats");
            break;
    }
}
 

const centerMain = document.createElement("article");
centerMain.setAttribute("id", "center");
mainConatiner.appendChild(centerMain);

const headerForCenter = document.createElement("header");
centerMain.appendChild(headerForCenter);
centerMain.style.height = "28%";
centerMain.style.backgroundColor = "goldenrod";

const updateParagraph = document.createElement("p");
headerForCenter.appendChild(updateParagraph);

const confirmButtonCenter = document.createElement("button");
headerForCenter.appendChild(confirmButtonCenter);

const rightSideMain = document.createElement("article");
mainConatiner.appendChild(rightSideMain);
rightSideMain.setAttribute("id", "right-side");
rightSideMain.classList.add("edge");
rightSideMain.style.display = "flex";
rightSideMain.style.flexDirection = "column";

const headerForRightSide = document.createElement("header");
rightSideMain.appendChild(headerForRightSide);
headerForRightSide.style.height = "15%";

const h2ForRightSide = document.createElement("h2");
headerForRightSide.appendChild(h2ForRightSide);
h2ForRightSide.textContent = "Bot stats";

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
buttonsForUser.setAttribute("id", "player-buttons");
// buttonsForUser.style.width = "100%";
buttonsForUser.style.height = "20%";

const buttonOne = document.createElement("button");
buttonOne.setAttribute("id", "one");
buttonOne.style.width = "15%";
buttonOne.style.height = "15%";
buttonsForUser.appendChild(buttonOne);
const updateHeaderOfMain = (e) => editText(e.target.id);
buttonOne.addEventListener("click", updateHeaderOfMain);

function editText(str) {
    console.log(str);
    updateParagraph.textContent = `testing ${str}`
    confirmButtonCenter.classList.toggle("reveal-confirm");
}

const buttonTwo = document.createElement("button");
buttonTwo.style.width = "15%";
buttonTwo.style.height = "15%";
buttonTwo.setAttribute("id", "two");
buttonsForUser.appendChild(buttonTwo);
buttonTwo.addEventListener("click", updateHeaderOfMain);


const buttonThree = document.createElement("button");
buttonThree.style.width = "15%";
buttonThree.style.height = "15%";
buttonThree.setAttribute("id", "three");
buttonsForUser.appendChild(buttonThree);
buttonThree.addEventListener("click", updateHeaderOfMain);

const footerContainer = document.createElement("footer");
bodyOfHtml.appendChild(footerContainer);
footerContainer.style.height = "20%";
