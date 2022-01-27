
// const playerChoiceOneStick = document.querySelector("#one");
// const playerChoiceTwoSticks = document.querySelector("two");
// const playerChoiceThreeSticks = document.querySelector("three");
// let lastMove = false;

// //conditionals needed to end the game
// if(!lastMove) gameLost();
// if(totalSticks == 0) lastMove = true;

// //conditionals
// if(buttonsClicked === valueOfSelectedButton) roundOver();


// //conditionals that will be needed based on user prompt

// function oneRound () {
//     //store value of button clicked in a variable
//     //max sticks allowed to choose from 
//     //allow spans to become checkboxes
//     //once checked boxes = value of clicked button disable check
    
//     //function to make bot select the sticks to move
//     //


// if(playerChoiceOneStick){
//     console.log("player one has selected to remove one stick from the pile");
//     console.log("bot will choose three sticks from the pile");
//     totalSticks-= 4;
// }

// if(playerChoiceTwoSticks){
//     console.log("player one has selectd to remove two sticks from the pile");
//     console.log("bot will choose two sticks from the pile");
//     totalSticks -= 4;
// }

// if(playerChoiceThreeSticks){
//     console.log("player one has selected to remove three sticks from the pile");
//     console.log("bot will choose three sticks");
// }



//     //return a modal displaying information
// }


// //
// gameLost = () =>{
// //make modal appear with lost message
// //includes number of moves

// }
// //next move has to be the bots

//create layout of game


const hmtlTag = document.querySelector("html");
hmtlTag.style.margin = "0%";

const bodyOfHtml = document.querySelector("body");
hmtlTag.appendChild(bodyOfHtml);
bodyOfHtml.style.height = "100vh";
bodyOfHtml.style.width = "100%";

const headerContainer = document.createElement("header");
bodyOfHtml.appendChild(headerContainer);
headerContainer.style.display = "flex";
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
leftSideMain.id = "left-side";
leftSideMain.classList.add("edge");
mainConatiner.appendChild(leftSideMain);

const centerMain = document.createElement("article");
centerMain.id = "center";
mainConatiner.appendChild(centerMain);

const rightSideMain = document.createElement("article");
rightSideMain.id = "right-side";
rightSideMain.classList.add("edge");
mainConatiner.appendChild(rightSideMain);

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


const idsForRows = ["first-row", "second-row", "third-row", "forth-row", "fifth-row", "sixth-row", "seventh-row"]; 
const rowContainers =[]; 

const createRows = (arr) => {

    for (let id of idsForRows){
        const row = document.createElement("section");
        row.classList.add("row");
        row.id = id;
        centerMain.appendChild(row);
        rowContainers.push(row);

    }
}

createRows(idsForRows);

const stickArr = [];
const createSticks = (num) => {
    
    for (let i = 0; i < num; i++){
    const stick = document.createElement("span");
    stick.classList.add("stick");
    stickArr.push(stick);
    }
}

createSticks(17);

const appendSticks = () => {
    const copyOfSticks = stickArr;
    
    for(let container of rowContainers){
        
        const populateSticks = (numOfSticks) => {
            if (copyOfSticks.length === 0){
                throw new Error ("arr is empty")
            } else {
                for (let i = 0; i < numOfSticks; i++){
                    container.appendChild(copyOfSticks.pop());
                }
            }
        }
        switch (container.id){
            case "first-row":
            case "seventh-row": 
                populateSticks(1);
                break;
            case "second-row": 
            case "sixth-row": 
                populateSticks(2);
                break;
            case "third-row": 
            case "fifth-row": 
                populateSticks(3);
                break;
            case "forth-row": 
                populateSticks(5);
                break;
        }
    }
}

appendSticks();
console.log(rowContainers[3]);