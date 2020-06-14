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

function managePersitance(e) {}

function handleButtons(e) {
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
    if (!isTurnOver()) {
      if (clickedItem === "makeVil") {
        addPop()
      } else if (clickedItem === "makeSold") {
        addPop();
      } else if (clickedItem === "skip") {
        changeTurn()
      }
    } else {
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
  return(parseInt(moves.innerHTML)< 1)
}

