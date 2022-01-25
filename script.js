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

//list of ids for rows 
const idsForRows = ["first-row", "second-row", "third-row", "forth-row", "fifth-row", "sixth-row", "seventh-row"];


for (let i = 0; i < idsForRows.length; i++){ 

const createRows = () => {
    const row = document.createElement("div");
    row.classList.add("row");
    row.id = "first__row";
    const center = document.querySelector("#center");
    center.appendChild(row);
}


createRows ();

const createSticks = () => {
    const stick = document.createElement("span");
    stick.classList.add("stick");
    const firstRow = document.querySelector("#first__row");
    firstRow.appendChild(stick);


}

createSticks();



// class Sticks {
//     constructor(){
   
//     }
// }

// class RowsForSticks {
//     constructor(){
    
//     }

// }