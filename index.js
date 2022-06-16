
const hmtlTag = document.querySelector("html");
hmtlTag.style.margin = "0%";

const bodyOfHtml = document.querySelector("body");
// bodyOfHtml.style.height = "100vh";
// bodyOfHtml.style.width = "100%";

const headerContainer = document.createElement("header");
bodyOfHtml.appendChild(headerContainer);
headerContainer.style.height = "20%";

const navContainer = document.createElement("nav");
headerContainer.appendChild(navContainer);

const mainConatiner = document.createElement("main");
bodyOfHtml.appendChild(mainConatiner);
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

const centerMain = document.createElement("article");
centerMain.setAttribute("id", "center");
mainConatiner.appendChild(centerMain);

const createRows = (domElem) => {
    const idsForRows = ["first-row", "second-row", "third-row", "forth-row", "fifth-row", "sixth-row", "seventh-row"];  
    const rowContainers = [];
    for (let str of idsForRows){
        const row = document.createElement("section");
        domElem.appendChild(row);
        row.classList.add("row");
        row.setAttribute("id", str);
        rowContainers.push(row);

    }
    return rowContainers;
}

const headerForCenter = document.createElement("header");
centerMain.appendChild(headerForCenter);
headerForCenter.style.height = "28%";
headerForCenter.style.backgroundColor = "#e88d72";
headerForCenter.style.borderRadius = "10px";
const rowContainers = createRows(centerMain);

const updateParagraph = document.createElement("p");
const updateParagraphWithBotChoice = document.createElement("p");
headerForCenter.append(updateParagraph, updateParagraphWithBotChoice);

const secForCenterButtons = document.createElement("section");
headerForCenter.append(secForCenterButtons);
secForCenterButtons.style.display = "flex";
secForCenterButtons.style.justifyContent = "center";
secForCenterButtons.style.height = "30%";

const confirmButtonCenter = document.createElement("button");
confirmButtonCenter.textContent = "confirm";
confirmButtonCenter.classList.add("bot-moves-buttons");
confirmButtonCenter.setAttribute("hidden", "true");

const cancelButtonCenter = document.createElement("button");
cancelButtonCenter.textContent = "cancel";
cancelButtonCenter.classList.add("bot-moves-buttons");
cancelButtonCenter.setAttribute("hidden", "true");
secForCenterButtons.append(confirmButtonCenter, cancelButtonCenter);

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

const sectionForButtons = document.createElement("section");
bodyOfHtml.appendChild(sectionForButtons);
sectionForButtons.style.height = "20%";
sectionForButtons.style.backgroundColor = "#e88d72";

const containerForButtons = document.createElement("div");
containerForButtons.setAttribute("id", "player-buttons");
sectionForButtons.appendChild(containerForButtons);
containerForButtons.style.height = "15%";
containerForButtons.style.width = "70%";

const buttonOne = document.createElement("button");
buttonOne.setAttribute("id", "one");
buttonOne.style.width = "33%";
buttonOne.style.height = "100%";
const updateHeaderOfMain = (e) => editText(e.target);

const buttonTwo = document.createElement("button");
buttonTwo.style.width = "33%";
buttonTwo.style.height = "100%";
buttonTwo.setAttribute("id", "two");

const buttonThree = document.createElement("button");
buttonThree.style.width = "33%";
buttonThree.style.height = "100%";
buttonThree.setAttribute("id", "three");

const clearRoundResults = document.createElement("button");
clearRoundResults.setAttribute("hidden", true);
buttonThree.setAttribute("id", "botMove");
clearRoundResults.style.width = "33%";
// clearRoundResults.style.height = "100%";
clearRoundResults.textContent = "...click to allow botMove";
containerForButtons.append(buttonOne, buttonTwo, buttonThree, clearRoundResults);

const footerContainer = document.createElement("footer");
bodyOfHtml.appendChild(footerContainer);
footerContainer.style.height = "20%";

var playerSelectsOne; 
var playerSelectsTwo;
var playerSelectsThree;

const paragraphs = [updateParagraph, updateParagraphWithBotChoice];
const playerButtons = [buttonOne, buttonTwo, buttonThree];
const botMovesButtons = [confirmButtonCenter, cancelButtonCenter];

buttonForStats.addEventListener("click", statsModal);
confirmButtonCenter.addEventListener("click", statsModal);
cancelButtonCenter.addEventListener("click", statsModal);
buttonForBotStats.addEventListener("click", statsModal);
buttonOne.addEventListener("click", updateHeaderOfMain);
buttonTwo.addEventListener("click", updateHeaderOfMain);
buttonThree.addEventListener("click", updateHeaderOfMain);
clearRoundResults.addEventListener("click", statsModal);

function statsModal(e) {    
    const removeStickLoop = (num) => {
        for(let i = 0; i < num; i++){
            const stickToBeRemoved = document.querySelector(".stick");
            stickToBeRemoved.remove();
        }
    }

    function botMove(){
         return playerSelectsOne ? removeStickLoop(3)
                :playerSelectsTwo ? removeStickLoop(2)
                :playerSelectsThree ? removeStickLoop(1)
                :console.log("hi");  
        } 

    function updateBotPara() { 
        if (playerSelectsOne) updateParagraphWithBotChoice.textContent = "Bot will move 3 sticks";
        if (playerSelectsTwo) updateParagraphWithBotChoice.textContent = "Bot will move 2 sticks";
        if (playerSelectsThree) updateParagraphWithBotChoice.textContent = "Bot will move 1 stick";
        } 

    function removeSticks (){
        return playerSelectsOne ? removeStickLoop(1)
                :playerSelectsTwo ? removeStickLoop(2)
                :playerSelectsThree ? removeStickLoop(3)
                :console.log("hi");  
           
        }
    
     switch (e.target){
        case buttonForStats: 
            modalForStats.classList.toggle("stats");
            break;
        case buttonForBotStats: 
            modalForBotStats.classList.toggle("stats");
            break;
        case confirmButtonCenter:
            clearRoundResults.removeAttribute("hidden");
            updateBotPara();
            for (let button of botMovesButtons) button.setAttribute("hidden", true);
            removeSticks();
            //addSticksToPlayerStats(); couldnt get this funciton to work
            break;
        case cancelButtonCenter:
            playerSelectsOne = false;
            playerSelectsTwo = false;
            playerSelectsThree = false;
            for (let paragraph of paragraphs) paragraph.textContent = "";
            paragraphs[0].textContent = "Make no mistake this time";
            for (let button of botMovesButtons) button.setAttribute("hidden", true);
            for (let button of playerButtons) button.removeAttribute("hidden");  
            break;      
        case clearRoundResults:
            botMove();
            playerSelectsOne = false;
            playerSelectsTwo = false;
            playerSelectsThree = false;
            for (let paragraph of paragraphs) paragraph.textContent = "";
            paragraphs[1].textContent = "New Round";
            for (let button of playerButtons) button.removeAttribute("hidden");
            clearRoundResults.setAttribute("hidden", true);
            break;
     }

         //    function addSticksToPlayerStats() {
    //          const row = document.createElement("div");
    //          modalForStats.appendChild(row);
    //          row.classList.add("row");

    //          if (playerSelectsOne){
    //          console.log("addSticks to player stats");
    //          const sticksToAppend = createSticks(1).pop();        
    //          row.appendChild(sticksToAppend);
    //         }
    //     }

     
}
