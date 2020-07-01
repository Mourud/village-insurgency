const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const GAMEBOX_HEIGHT = 1000;
const GAMEBOX_WIDTH = 2000;

canvas.height = GAMEBOX_HEIGHT;
canvas.width = GAMEBOX_WIDTH;


ctx.fillStyle = "#457b9d";
ctx.fillRect(0, 0, 160, 160);
ctx.fillStyle = "black";
ctx.font = "bold 1.5em Arial";
ctx.fillText("Town Hall", 65 - 40, 65);


ctx.fillStyle = "#e63946";
ctx.fillRect(GAMEBOX_WIDTH - 130, GAMEBOX_HEIGHT - 130, 130, 130);
ctx.fillStyle = "black";
ctx.font = "bold 1.5em Arial";
ctx.fillText("Town Hall", GAMEBOX_WIDTH - 130 + 65 - 35, GAMEBOX_HEIGHT - 130 + 70);


ctx.fillStyle = "#f9dc5c";
ctx.fillRect(GAMEBOX_WIDTH - 200, 0, 200, 130);
ctx.fillStyle = "black";
ctx.font = "bold 1.5em Arial";
ctx.fillText("Gold Mine", GAMEBOX_WIDTH - 130 + 65 - 70, 65);


ctx.fillStyle = "#386641";
ctx.fillRect(0, GAMEBOX_HEIGHT - 130, 200, 130);
ctx.fillStyle = "black";
ctx.font = "bold 1.5em Arial";
ctx.fillText("Farm", 70, GAMEBOX_HEIGHT - 130 + 70);

