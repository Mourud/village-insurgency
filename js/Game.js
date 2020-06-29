// load, update, inputs, render
import Player from "./Player.js";
// main();
let navbar = document.querySelector(".navbar");
let buttonControls = document.querySelector(".buttonControls");
let pop = document.querySelector("#pop");
let food = document.querySelector("#food");
let gold = document.querySelector("#gold");
let moves = document.querySelector("#moves");
let turnBoxColor = document.querySelector("#turn-player-color");

let counter = 0;

navbar.addEventListener("click", managePersitance, false);
buttonControls.addEventListener("click", handleButtons, false);

const PLAYERS = [new Player("blue", 2, 3), new Player("red", 2, 3)];

function main() {
  counter = 0;
  while (true) {
    counter++;
    alert(counter);
    //playerNum = counter % 2;
    update(PLAYERS[0]);
  }
}

function update(player) {
  setInformation(player);
  render(player);
}

function setInformation(player) {
  pop.innerHTML = player.registry.lenght();
}

function render(player) {}

function managePersitance(e) {}

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

function changeTurn() {
  changeColor();
  moves.innerHTML = 10;
}

function changeColor() {
  counter++;
  let turnNumber;
  turnNumber = counter % 2;
  console.log(turnNumber);
  switch (turnNumber) {
    case 0:
      turnBoxColor.style.background = "#457b9d";
      break;
    case 1:
      turnBoxColor.style.background = "#e63946";
      break;
  }
}

function addPop() {
  newpop = parseInt(pop.innerHTML);
  newpop++;
  pop.innerHTML = newpop;
  newmoves = parseInt(moves.innerHTML);
  newmoves--;
  moves.innerHTML = newmoves;
}

function isTurnOver() {
  return parseInt(moves.innerHTML) < 1;
}

setUp();
