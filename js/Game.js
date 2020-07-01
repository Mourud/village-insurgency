import Player from "./Player.js";
import * as GameConstants from './GameConstants.js'
/*
  This file is the entry point of the game and it handles all global Game related tasks
*/
//Game Constants
const PLAYER_ONE_COLOR = GameConstants.PLAYER_ONE_COLOR;
const PLAYER_TWO_COLOR = GameConstants.PLAYER_TWO_COLOR;
const INITIAL_POPULATION = 5;
const INITIAL_FOOD = 100;
const INITIAL_GOLD = 100;

// initializing a list of players
const PLAYERS = [
  new Player(PLAYER_ONE_COLOR, INITIAL_POPULATION, INITIAL_FOOD, INITIAL_GOLD),
  new Player(PLAYER_TWO_COLOR, INITIAL_POPULATION, INITIAL_FOOD, INITIAL_GOLD),
];

/*
global turn value:
  0     blue
  1     red
*/
let g_turn = 0;
// function sets up values on the top bar before entering players turn
function turnSetUp() {
  let playerColor = PLAYERS[g_turn].color;
  let colorBox = document.querySelector("#turn-player-color");
  colorBox.style.background = playerColor;
  //set population on UI
  let population = PLAYERS[g_turn].registry.length;
  let popElement = document.querySelector("#pop");
  popElement.innerHTML = population;
  //set Food on UI
  let foodAmount = PLAYERS[g_turn].foodAmount;
  let foodElement = document.querySelector("#food");
  foodElement.innerHTML = foodAmount;
  //set Gold on UI
  let goldAmount = PLAYERS[g_turn].goldAmount;
  let goldElement = document.querySelector("#gold");
  goldElement.innerHTML = goldAmount;
  //set moves
  // the number of moves a player has is equal to the their population at the start of the turn
  PLAYERS[g_turn].movesLeft = PLAYERS[g_turn].registry.length;
  let moves = PLAYERS[g_turn].movesLeft;
  let movesElement = document.querySelector("#moves");
  movesElement.innerHTML = moves;
}
function refreshNavBar() {
  //set population on UI
  let population = PLAYERS[g_turn].registry.length;
  let popElement = document.querySelector("#pop");
  popElement.innerHTML = population;
  //set Food on UI
  let foodAmount = PLAYERS[g_turn].foodAmount;
  let foodElement = document.querySelector("#food");
  foodElement.innerHTML = foodAmount;
  //set Gold on UI
  let goldAmount = PLAYERS[g_turn].goldAmount;
  let goldElement = document.querySelector("#gold");
  goldElement.innerHTML = goldAmount;
  //set moves on UI
  let moves = PLAYERS[g_turn].movesLeft;
  let movesElement = document.querySelector("#moves");
  movesElement.innerHTML = moves;
}

let buttonControls = document.querySelector(".buttonControls");
buttonControls.addEventListener("click", handleButtons, false);

function handleButtons(e) {
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
    if (clickedItem === "makeVil") {
      PLAYERS[g_turn].createVillager();
      refreshNavBar();
    } else if (clickedItem === "makeSold") {
      PLAYERS[g_turn].createSoldier();
      refreshNavBar();
      console.log(PLAYERS[0].registry.length);
    } else if (clickedItem === "end") {
      //this adds 1 to the turn, but since we only use it to access the players in the array, we only need it to be 0/1
      g_turn = (g_turn + 1) % 2;
      turnSetUp();
    }
  }
  e.stopPropagation;
}

turnSetUp();
