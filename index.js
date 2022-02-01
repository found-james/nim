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

const centerMain = document.createElement("article");
centerMain.setAttribute("id", "center");
mainConatiner.appendChild(centerMain);


const idsForRows = ["first-row", "second-row", "third-row", "forth-row", "fifth-row", "sixth-row", "seventh-row"]; 
const rowContainers =[]; 

const createRows = (arr) => {

    for (let id of idsForRows){
        const row = document.createElement("section");
        centerMain.appendChild(row);
        row.classList.add("row");
        row.id = id;
        rowContainers.push(row);

    }
}


const headerForCenter = document.createElement("header");
centerMain.appendChild(headerForCenter);
headerForCenter.style.height = "28%";
headerForCenter.style.backgroundColor = "goldenrod";

const updateParagraph = document.createElement("p");
headerForCenter.appendChild(updateParagraph);

// const botMoves = (e) => {

// }
const secForCenterButtons = document.createElement("section");
headerForCenter.append(secForCenterButtons);
secForCenterButtons.style.display = "flex";
secForCenterButtons.style.justifyContent = "center";
secForCenterButtons.style.height = "30%";
secForCenterButtons.style.backgroundColor = "cornflowerblue";

const confirmButtonCenter = document.createElement("button");
confirmButtonCenter.textContent = "confirm";
confirmButtonCenter.classList.add("bot-moves-buttons");
confirmButtonCenter.setAttribute("hidden", "true");

const cancelButtonCenter = document.createElement("button");
cancelButtonCenter.textContent = "cancel";
cancelButtonCenter.classList.add("bot-moves-buttons");
cancelButtonCenter.setAttribute("hidden", "true");
secForCenterButtons.append(confirmButtonCenter, cancelButtonCenter);
//confirmButtonCenter.addEventListener("click", botMoves)

//botMoves is a function that needs input from the button selected from 
//user. so if user selects one bot
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

const containerForButtons = document.createElement("section");
bodyOfHtml.appendChild(containerForButtons);
containerForButtons.setAttribute("id", "player-buttons");
// buttonsForUser.style.width = "100%";
containerForButtons.style.height = "20%";

const buttonOne = document.createElement("button");
buttonOne.setAttribute("id", "one");
buttonOne.style.width = "15%";
buttonOne.style.height = "15%";
containerForButtons.appendChild(buttonOne);
const updateHeaderOfMain = (e) => editText(e.target);
buttonOne.addEventListener("click", updateHeaderOfMain);

const buttonTwo = document.createElement("button");
buttonTwo.style.width = "15%";
buttonTwo.style.height = "15%";
buttonTwo.setAttribute("id", "two");
containerForButtons.appendChild(buttonTwo);
buttonTwo.addEventListener("click", updateHeaderOfMain);

const buttonThree = document.createElement("button");
buttonThree.style.width = "15%";
buttonThree.style.height = "15%";
buttonThree.setAttribute("id", "three");
containerForButtons.appendChild(buttonThree);
buttonThree.addEventListener("click", updateHeaderOfMain);

const footerContainer = document.createElement("footer");
bodyOfHtml.appendChild(footerContainer);
footerContainer.style.height = "20%";

const playerButtons = [buttonOne, buttonTwo, buttonThree];

var playerSelectsOne; 
var playerSelectsTwo;
var playerSelectsThree;

function statsModal(e) {
    console.log(e);
    switch (e.target){
        case buttonForStats: 
            modalForStats.classList.toggle("stats");
            break;
        case buttonForBotStats: 
            modalForBotStats.classList.toggle("stats");
            break;
    }
}
 

function editText(btnElem) {
    console.log(btnElem);
    confirmButtonCenter.removeAttribute("hidden");
    cancelButtonCenter.removeAttribute("hidden");
    switch (btnElem){
        case buttonOne:
            updateParagraph.textContent = `You have selected to remove ${btnElem.id} stick from the pile`;
            playerSelectsOne = true;
            break;
        case buttonTwo:
            updateParagraph.textContent = `You have selected to remove ${btnElem.id} sticks from the pile`;
            playerSelectsTwo = true;
            break;
        case buttonThree:
            updateParagraph.textContent = `You have selected to remove ${btnElem.id} sticks from the pile`;
            playerSelectsThree = true;
            break;
    }
    
    for (let button of playerButtons){
        button.setAttribute("hidden", true);
    }
    
    // this function is supposed to store the choice when the header is updated
    // botMove function will retrieve this global variable and decide how many sticks to move
    console.log(playerSelectsOne, playerSelectsTwo, playerSelectsThree);
}
