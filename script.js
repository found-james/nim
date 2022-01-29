
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

    // // const targetButtons = [buttonOne, buttonTwo, buttonThree];
    // // for (let button of targetButtons){
    // //     if (button.id !== str) button.classList.toggle("disapper-player-button");
    // //     console.log("loop is working", button);
    // }





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