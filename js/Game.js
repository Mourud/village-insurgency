import Player from './Player.js'


const PLAYER_ONE_COLOR = '#457b9d'
const PLAYER_TWO_COLOR =  '#e63946'
// initializing a list of players
const PLAYERS = [new Player(PLAYER_ONE_COLOR), new Player(PLAYER_TWO_COLOR)];

/*global turn value:
  0     blue
  1     red
*/
let g_turn = 0
  ;
// function sets up values on the top bar before entering players turn
function setUp() {
  let playerColor = PLAYERS[g_turn].color;
  let colorBox = document.querySelector('#turn-player-color');
  colorBox.style.background = playerColor;
}



setUp();