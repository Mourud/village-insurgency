import * as GameConstants from "./GameConstants.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const GAMEBOX_HEIGHT = 1000;
const GAMEBOX_WIDTH = 2000;

const TOWNHALL_LENGHT = 200;

//Object colors
const PLAYER_ONE_COLOR = GameConstants.PLAYER_ONE_COLOR;
const PLAYER_TWO_COLOR = GameConstants.PLAYER_TWO_COLOR;
const GOLD_MINE_COLOR = "#f9dc5c";
const FARM_COLOR = "#386641";
//P1 TOWNHALL CONST
const P1_TOWNHALL_POSITION_X = 0;
const P1_TOWNHALL_POSITION_Y = 0;
const P1_TEXT_X = TOWNHALL_LENGHT / 2 - 75;
const P1_TEXT_Y = TOWNHALL_LENGHT / 2 + 10;
//P2 TOWNHALL CONST
const P2_TOWNHALL_POSITION_X = GAMEBOX_WIDTH - TOWNHALL_LENGHT;
const P2_TOWNHALL_POSITION_Y = GAMEBOX_HEIGHT - TOWNHALL_LENGHT;
const P2_TOWNHALL_TEXT_X = GAMEBOX_WIDTH - TOWNHALL_LENGHT / 2 - 60;
const P2_TOWNHALL_TEXT_Y = GAMEBOX_HEIGHT - TOWNHALL_LENGHT / 2 + 20;
//GOLDMINE CONST
const GOLDMINE_WIDTH = 350;
const GOLDMINE_HEIGHT = 250;
const GOLDMINE_POSITION_X = GAMEBOX_WIDTH - GOLDMINE_WIDTH;
const GOLDMINE_POSITION_Y = 0;
const GOLDMINE_TEXT_X = GAMEBOX_WIDTH - GOLDMINE_WIDTH / 2 - 55;
const GOLDMINE_TEXT_Y = GOLDMINE_HEIGHT / 2 + 10;
//FARM CONST
const FARM_WIDTH = 350;
const FARM_HEIGHT = 250;
const FARM_POSITION_X = 0;
const FARM_POSITION_Y = GAMEBOX_HEIGHT - FARM_HEIGHT;
const FARM_TEXT_X = FARM_WIDTH / 2 - 55;
const FARM_TEXT_Y = FARM_POSITION_Y + FARM_HEIGHT / 2 + 20;

canvas.height = GAMEBOX_HEIGHT;
canvas.width = GAMEBOX_WIDTH;

export function drawObject(name, color, x, y, width, height, text_x, text_y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = "black";
  ctx.font = "1.5em Arial";
  ctx.fillText(name, text_x, text_y);
}
//TOWNHALL 1
drawObject(
  "TOWN HALL",
  PLAYER_ONE_COLOR,
  P1_TOWNHALL_POSITION_X,
  P1_TOWNHALL_POSITION_Y,
  TOWNHALL_LENGHT,
  TOWNHALL_LENGHT,
  P1_TEXT_X,
  P1_TEXT_Y
);
//TOWNHALL 2
drawObject(
  "TOWN HALL",
  PLAYER_TWO_COLOR,
  P2_TOWNHALL_POSITION_X,
  P2_TOWNHALL_POSITION_Y,
  TOWNHALL_LENGHT,
  TOWNHALL_LENGHT,
  P2_TOWNHALL_TEXT_X,
  P2_TOWNHALL_TEXT_Y
);
//GOLD MINE
drawObject(
  "GOLD MINE",
  GOLD_MINE_COLOR,
  GOLDMINE_POSITION_X,
  GOLDMINE_POSITION_Y,
  GOLDMINE_WIDTH,
  GOLDMINE_HEIGHT,
  GOLDMINE_TEXT_X,
  GOLDMINE_TEXT_Y
);
//FARM
drawObject(
  "FARM",
  FARM_COLOR,
  FARM_POSITION_X,
  FARM_POSITION_Y,
  FARM_WIDTH,
  FARM_HEIGHT,
  FARM_TEXT_X,
  FARM_TEXT_Y
);
