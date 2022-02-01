

const createSticks = (num) => {
    const stickArr = [];
    for (let i = 0; i < num; i++){
        const stick = document.createElement("span");
        stick.classList.add("stick");
        stickArr.push(stick);
    }
    return stickArr;
}

const stickArr = createSticks(17);

const appendSticks = (arr2) => {
    for (let elem of arr2){
        const populateSticks = (numOfSticks) => {
            if (stickArr.length === 0){
                throw new Error ("arr is empty");
            } else {
                for (let i = 0; i < numOfSticks; i++){
                    elem.appendChild(stickArr.pop());
                }
            }
        }
        switch (elem.id){
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

appendSticks(rowContainers);
console.log(stickArr);

function checkIfItIsLastMove (){
    const sticksLeft = document.querySelectorAll(".stick");
    const endGame = () => {
        for (let button of playerButtons) button.setAttribute("hidden", true);
        for (let button of botMovesButtons) button.setAttribute("hidden", true);
        clearRoundResults.setAttribute("hidden", true);
        for (let paragraph of paragraphs) paragraph.textContent = "";
        paragraphs[0].textContent = "This is the last move whoevers turn is to grab sticks has lost";

    }
    if (sticksLeft.length === 1 || 2 || 3) endGame();

}


function editText(btnElem) {
    checkIfItIsLastMove();
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
            for (let paragraph of paragraphs) paragraph.textContent = "";
            insertTextintoParagraph(btnElem.id);    
            playerSelectsOne = true;
            break;
        case buttonTwo:
            for (let paragraph of paragraphs) paragraph.textContent = "";
            insertTextintoParagraph(btnElem.id);    
            playerSelectsTwo = true;
            break;
        case buttonThree:
            for (let paragraph of paragraphs) paragraph.textContent = "";
            insertTextintoParagraph(btnElem.id);    
            playerSelectsThree = true;
            break;
    }
    for (let button of playerButtons){
        button.setAttribute("hidden", true);
    }    
}
