import Player from "./Player.js";
import * as GameConstants from "./GameConstants.js";
import { drawObject } from "./canvas.js";
/*
  This file is the entry point of the game and it handles all global Game related tasks
*/
//Game Constants
const PLAYER_ONE_COLOR = GameConstants.PLAYER_ONE_COLOR;
const PLAYER_TWO_COLOR = GameConstants.PLAYER_TWO_COLOR;
const INITIAL_POPULATION = 5;
const INITIAL_FOOD = 100;
const INITIAL_GOLD = 100;

export let g_MAP = [];
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
  render(PLAYERS[g_turn]);
  render(PLAYERS[(g_turn + 1) % 2]);
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
  render(PLAYERS[g_turn]);

}

function render(player) {
  player.registry.forEach((person) => {
    drawObject(
      "",
      player.color,
      person.position.x,
      person.position.y,
      person.size,
      person.size,
      0,
      0
    );
  });
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
    } else if (clickedItem === "end") {
      //this adds 1 to the turn, but since we only use it to access the players in the array, we only need it to be 0/1
      fetch('https://us-central1-village-insurgency.cloudfunctions.net/incrementTurn',{
        method: 'GET',
      }).then(response => response.json())
        .then(data => {
          console.log(typeof data);
          console.log(data);
          g_turn = data.currentTurn;
          console.log("turn: ");
          console.log(g_turn);
        }).then(() => {turnSetUp()})
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }
  e.stopPropagation;
}
let selectedPerson = null;
// add mouse event listener to the canvas
let canvas = document.querySelector("#canvas");
canvas.addEventListener("click", handleClick, false);
let gameBox = document.querySelector(".gamebox");

function handleClick(e) {
  const rect = gameBox.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;
  let oldPosition = null;
  if (selectedPerson) { // Person is already selected
    // TODO: Code for selected person
    // TODO: Deal with the old position
    // TODO: Deal with the case where the person is moved to an occupied position
    // TODO: Deal with the case where the person is moved to an unoccupied position


    oldPosition = selectedPerson.position; // save the old position {CHANGE needed}
    // selectedPerson.setPosition(x, y);
    drawObject("", "white", oldPosition.x, oldPosition.y, selectedPerson.size, selectedPerson.size, 0, 0) // clear the old position {CHANGE needed}
    selectedPerson = null;
    refreshNavBar(); // refresh the nav bar {CHANGE to a general render function}
  } else { // Person is not selected
    // find if a person is clicked
    selectedPerson = PLAYERS[g_turn].registry.find((person) => {
      return (
        x >= person.position.x &&
        x <= person.position.x + person.size &&
        y >= person.position.y &&
        y <= person.position.y + person.size
      );
    });
  }

}

turnSetUp();

(function () {

  let playerId;
  let playerRef;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log(user.uid);
      playerId = user.uid;
      playerRef = firebase.database().ref(`players/${playerId}`)

      playerRef.set({
        name: 'Anonymous',
        direction: 'right',
        x: 0,
        y: 0,
        coins: 0,
      })
    } else {
      // User is signed out.
    }
  });
  firebase.auth().signInAnonymously().catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });

})();
