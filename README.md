#2_nim

## About
Nim is a game in which two players take turns picking sticks.
In this version, each turn players are must take one, two or three sticks from the pile.
Last player to choose from the pile loses.

## How the game should work

Player will be prompted to select the number of sticks that will be removed in that round by using a button.

As soon as the click happens, all the sticks will "turn into" buttons.

User will need to select a stick one at a time.
- something needs to keep track of how many sticks have been selected
- once the number of selected sticks matches the value represented 
- include an animation once all sticks were selected to travel across to the users side

All the sticks will be buttons until user finishes selecting the amount that he needs.
Sticks will then cease to be buttons.
It will be cpu's turn to select sticks.
- cpu will be coded to choose with this formula c = 4 - userChoice;
- use a loop that will select any stick (document.querySelector())
- include an animation once all sticks were selected to travel across to the CPU side

Once last move is made
- message that declares winner

## html file & css
-the included html & css were for wireframing purposes only
-goal is to create most of the dom elements with js and append them. This should make it easier to modify the starting size of the pile should I want to extend the number of rounds played.

## addtional elements that need to be added
- counter on each of the players side so that players know 
: how many sticks they have taken
: how many sticks they took last turn

- counter in the center to show total number of sticks left in the pile

## other concerns/comments/ideas/wonderings

click stick "disable" the other sticks
CPU can continue with their logic