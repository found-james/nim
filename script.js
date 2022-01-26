// const totalSticks = 17;

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


const bodyOfHtml = document.querySelector("body");
bodyOfHtml.style.height = "100vh";
bodyOfHtml.style.width = "100%";

const mainConatiner = document.createElement("main");
mainConatiner.style.width = "80%";
mainConatiner.style.height = "40%";
mainConatiner.style.display = "flex";
bodyOfHtml.appendChild(mainConatiner);

const leftSideMain = document.createElement("article");
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

const buttonsForUser = document.createElement("div");
buttonsForUser.id = "player-buttons"
bodyOfHtml.appendChild(buttonsForUser);

const buttonOne = document.createElement("button");
buttonOne.id = "one";
buttonOne.style.width = "25%";
buttonOne.style.height = "15%";
buttonsForUser.appendChild(buttonOne);

const buttonTwo = document.createElement("button");
buttonTwo.style.width = "25%";
buttonTwo.style.height = "15%";
buttonTwo.id = "two";
buttonsForUser.appendChild(buttonTwo);

const buttonThree = document.createElement("button");
buttonThree.style.width = "25%";
buttonThree.style.height = "15%";
buttonThree.id = "three";
buttonsForUser.appendChild(buttonThree);

const idsForRows = ["first-row", "second-row", "third-row", "forth-row", "fifth-row", "sixth-row", "seventh-row"]; 
 
const createRows = (arr) => {

    for (let id of idsForRows){
        const row = document.createElement("div");
        row.classList.add("row");
        row.id = id;
        centerMain.appendChild(row);
    }



    // for (let i = 0; i < arr.length; i++){
    //     const row = document.createElement("div");
    //     row.classList.add("row");
    //     row.id = idsForRows[i];
    //     center.appendChild(row);
    // }
}

createRows(idsForRows);

const createSticks = (num) => {
    
    for (let i = 0; i < num; i++){
    const stick = document.createElement("span");
    stick.classList.add("stick");
    }

    
}

console.log(createSticks(17));

// const createSticks = () => {
//     const stick = document.createElement("span");
//     stick.classList.add("stick");
//     const firstRow = document.querySelector("#first__row");
//     firstRow.appendChild(stick);


// }

// createSticks();



// class Sticks {
//     constructor(){
   
//     }
// }

// class RowsForSticks {
//     constructor(){
    
//     }

// }


// class RowContainer {
//     constructor(id){
//         this.id = id;

//     }
// //This code makes an array of future divs with their corresponding ids
// //I want this instance to become a div and I want to append it to <main>
// //Concerned that if I use a loop to create instances all instances will have the same variable name
// //I have everything in the array so I could the array index to refer to specific instances

//     static makeRowContainers (arr) {
//         const arrOfRows =[];
//         for (let i = 0; i < arr.length; i++){
//             arrOfRows.push(new RowContainer(arr[i]));
//     }
//     return arrOfRows;
//     }
// }