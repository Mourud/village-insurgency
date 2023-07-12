import * as GameConstants from "./GameConstants.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const GAMEBOX_HEIGHT = 1024;
const GAMEBOX_WIDTH = 2048;

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
canvas.addEventListener("click", (e) => {

  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;
  if (bHouse.width > x && bHouse.height > y) {
    if (unclicked) {
      bHouse.src = 'assets/sprites/updated/BlueHouseOnClick.png';
      unclicked = false;
    } else {
      bHouse.src = 'assets/sprites/updated/BlueHouse.png';
      unclicked = true;
    }
  }
})
const background = new Image();
    background.onload = () => {
      ctx.drawImage(background, 0, 0);
    }
    background.src = 'assets/sprites/Backgroud.png';
    const bHouse = new Image();
    bHouse.onload = () => {
      ctx.drawImage(bHouse, 0, 0)
    };
    bHouse.src = 'assets/sprites/updated/BlueHouse.png';
    bHouse.addEventListener('click', () => {

      alert('clicked')
    })


    const rHouse = new Image();
    rHouse.onload = () => {
      ctx.drawImage(rHouse, 1664, 0)
    };
    rHouse.src = 'assets/sprites/updated/RedHouse.png';

    const farm1 = new Image();
    farm1.onload = () => {
      ctx.drawImage(farm1, 0, 0)
    }
    farm1.src = 'assets/sprites/Farm1.png';
    const farm2 = new Image();
    farm2.onload = () => {
      ctx.drawImage(farm2, 0, 0)
    }
    farm2.src = 'assets/sprites/Farm2.png';

function startGameLoop() {
  const step = () => {
    // Clear off the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var unclicked = true;
    
    const background = new Image();
    background.onload = () => {
      ctx.drawImage(background, 0, 0);
    }
    background.src = 'assets/sprites/Backgroud.png';
    const bHouse = new Image();
    bHouse.onload = () => {
      ctx.drawImage(bHouse, 0, 0)
    };
    bHouse.src = 'assets/sprites/updated/BlueHouse.png';
    bHouse.addEventListener('click', () => {

      alert('clicked')
    })


    const rHouse = new Image();
    rHouse.onload = () => {
      ctx.drawImage(rHouse, 1664, 0)
    };
    rHouse.src = 'assets/sprites/updated/RedHouse.png';

    const farm1 = new Image();
    farm1.onload = () => {
      ctx.drawImage(farm1, 0, 0)
    }
    farm1.src = 'assets/sprites/Farm1.png';
    const farm2 = new Image();
    farm2.onload = () => {
      ctx.drawImage(farm2, 0, 0)
    }
    farm2.src = 'assets/sprites/Farm2.png';
    requestAnimationFrame(() => {
      step();
    });
  };
  step();
}

// startGameLoop();
