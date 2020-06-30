import Player from './Player.js'
/*
  This file is the entry point of the game and it handles all global Game related tasks
*/








const PLAYER_ONE_COLOR = '#457b9d';
const PLAYER_TWO_COLOR = '#e63946';
const INITIAL_POPULATION = 5;
const INITIAL_FOOD = 100;
const INITIAL_GOLD = 100;
// initializing a list of players
const PLAYERS = [ new Player(PLAYER_ONE_COLOR, INITIAL_POPULATION, INITIAL_FOOD,INITIAL_GOLD),
                  new Player(PLAYER_TWO_COLOR, INITIAL_POPULATION, INITIAL_FOOD,INITIAL_GOLD)];

/*
global turn value:
  0     blue
  1     red
*/
let g_turn = 0
  ;
// function sets up values on the top bar before entering players turn
function setUp() {
  //set player color on the Turn box
  let playerColor = PLAYERS[g_turn].color;
  let colorBox = document.querySelector('#turn-player-color');
  colorBox.style.background = playerColor;
  //set population on UI
  let population = PLAYERS[g_turn].registry.length;
  let popElement = document.querySelector('#pop');
  popElement.innerHTML = population;
  //set Food
  let foodAmount = PLAYERS[g_turn].foodAmount;
  let foodElement = document.querySelector('#food');
  foodElement.innerHTML = foodAmount;
  //set Gold
  let goldAmount = PLAYERS[g_turn].goldAmount;
  let goldElement = document.querySelector('#gold');
  goldElement.innerHTML = goldAmount;
  //set moves
  let moves = PLAYERS[g_turn].registry.length;
  let movesElement = document.querySelector('#moves');
  movesElement.innerHTML = moves;
}

buttonControls.addEventListener("click", handleButtons, false);

function handleButtons(e) {
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
    playerNum = counter % 2;
    if (clickedItem === "makeVil") {
      PLAYERS[playerNum].makeVillager();
    } else if (clickedItem === "makeSold") {
      addPop();
    } else if (clickedItem === "skip") {
      changeTurn();
    }
  }
  e.stopPropagation;
}

setUp();