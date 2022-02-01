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

const createRows = (arr, domElem, arrOfdomElems) => {

    for (let str of arr){
        const row = document.createElement("section");
        domElem.appendChild(row);
        row.classList.add("row");
        row.setAttribute("id", str);
        arrOfdomElems.push(row);

    }
}


const headerForCenter = document.createElement("header");
centerMain.appendChild(headerForCenter);
headerForCenter.style.height = "28%";
headerForCenter.style.backgroundColor = "goldenrod";

const updateParagraph = document.createElement("p");
const updateParagraphWithBotChoice = document.createElement("p");
headerForCenter.append(updateParagraph, updateParagraphWithBotChoice);

// const botMoves = (e) => {

// }
const secForCenterButtons = document.createElement("section");
headerForCenter.append(secForCenterButtons);
secForCenterButtons.style.display = "flex";
secForCenterButtons.style.justifyContent = "center";
secForCenterButtons.style.height = "30%";


const confirmButtonCenter = document.createElement("button");
confirmButtonCenter.textContent = "confirm";
confirmButtonCenter.classList.add("bot-moves-buttons");
confirmButtonCenter.setAttribute("hidden", "true");
confirmButtonCenter.addEventListener("click", statsModal);

const cancelButtonCenter = document.createElement("button");
cancelButtonCenter.textContent = "cancel";
cancelButtonCenter.classList.add("bot-moves-buttons");
cancelButtonCenter.setAttribute("hidden", "true");
cancelButtonCenter.addEventListener("click", statsModal);
secForCenterButtons.append(confirmButtonCenter, cancelButtonCenter);


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

const sectionForButtons = document.createElement("section");
bodyOfHtml.appendChild(sectionForButtons);
// buttonsForUser.style.width = "100%";
sectionForButtons.style.height = "20%";

const containerForButtons = document.createElement("div");
containerForButtons.setAttribute("id", "player-buttons");
sectionForButtons.appendChild(containerForButtons);
containerForButtons.style.height = "15%";
containerForButtons.style.width = "70%";
containerForButtons.style.backgroundColor = "goldenrod";

const buttonOne = document.createElement("button");
buttonOne.setAttribute("id", "one");
buttonOne.style.width = "33%";
buttonOne.style.height = "100%";
const updateHeaderOfMain = (e) => editText(e.target);
buttonOne.addEventListener("click", updateHeaderOfMain);

const buttonTwo = document.createElement("button");
buttonTwo.style.width = "33%";
buttonTwo.style.height = "100%";
buttonTwo.setAttribute("id", "two");
buttonTwo.addEventListener("click", updateHeaderOfMain);

const buttonThree = document.createElement("button");
buttonThree.style.width = "33%";
buttonThree.style.height = "100%";
buttonThree.setAttribute("id", "three");
buttonThree.addEventListener("click", updateHeaderOfMain);

const clearRoundResults = document.createElement("button");
clearRoundResults.setAttribute("hidden", true);
clearRoundResults.style.width = "33%";
clearRoundResults.style.height = "100%";
clearRoundResults.textContent = "...click to allow botMove";
containerForButtons.append(buttonOne, buttonTwo, buttonThree, clearRoundResults);
clearRoundResults.addEventListener("click", statsModal);

const footerContainer = document.createElement("footer");
bodyOfHtml.appendChild(footerContainer);
footerContainer.style.height = "20%";

var playerSelectsOne; 
var playerSelectsTwo;
var playerSelectsThree;

const paragraphs = [updateParagraph, updateParagraphWithBotChoice];
const playerButtons = [buttonOne, buttonTwo, buttonThree];
const botMovesButtons = [confirmButtonCenter, cancelButtonCenter];



function statsModal(e) {
    console.log(playerSelectsOne, playerSelectsTwo, playerSelectsThree);

    function botMove(){
        if (playerSelectsOne) console.log("bot will move 3 sticks from pile");
        if (playerSelectsTwo) console.log("bot will move 2 sticks");
        if (playerSelectsThree) console.log("bot will move 1 stick");
    }

    function updateBotPara() { 
        if(playerSelectsOne) updateParagraphWithBotChoice.textContent = "Bot will move 3 sticks";
        if(playerSelectsTwo) updateParagraphWithBotChoice.textContent = "Bot will move 2 sticks";
        if(playerSelectsThree) updateParagraphWithBotChoice.textContent = "Bot will move 1 stick";

        } 
    switch (e.target){
        case buttonForStats: 
            modalForStats.classList.toggle("stats");
            break;
        case buttonForBotStats: 
            modalForBotStats.classList.toggle("stats");
            break;
         case confirmButtonCenter:
            // if (playerSelectsOne) bot will choose 3
            // if (playerSelectsTwo) bot will choose 2
            // if (playerSelectsThree) bot will choose 1
            clearRoundResults.removeAttribute("hidden");
            updateBotPara();
            for(let button of botMovesButtons) button.setAttribute("hidden", true);
            break;
            case cancelButtonCenter:
                playerSelectsOne = false;
                playerSelectsTwo = false;
                playerSelectsThree = false;
                for(let paragraph of paragraphs) paragraph.textContent = "";
                for(let button of botMovesButtons) button.setAttribute("hidden", true);
                for(let button of playerButtons) button.removeAttribute("hidden");        
            case clearRoundResults:
            botMove();
            playerSelectsOne = false;
            playerSelectsTwo = false;
            playerSelectsThree = false;
            for(let paragraph of paragraphs) paragraph.textContent = "";
            for(let button of playerButtons) button.removeAttribute("hidden");
            clearRoundResults.setAttribute("hidden", true);
            break;
     }

     console.log(playerSelectsOne, playerSelectsTwo, playerSelectsThree);
}
 

function editText(btnElem) {
    console.log(btnElem);
    confirmButtonCenter.removeAttribute("hidden");
    cancelButtonCenter.removeAttribute("hidden");

    const insertTextintoParagraph = (idOfElem) =>{
        if (idOfElem === "one") {
            updateParagraph.textContent = `You have selected to remove ${idOfElem} stick from the pile`;
        } else {
            updateParagraph.textContent = `You have selected to remove ${idOfElem} sticks from the pile`;
        }
    }

    switch (btnElem){
        case buttonOne:
            insertTextintoParagraph(btnElem.id);    
            playerSelectsOne = true;
            break;
        case buttonTwo:
            insertTextintoParagraph(btnElem.id);    
            playerSelectsTwo = true;
            break;
        case buttonThree:
            insertTextintoParagraph(btnElem.id);    
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

