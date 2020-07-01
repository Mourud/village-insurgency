const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 1000;

ctx.fillStyle = "#457b9d";
ctx.fillRect(0, 0, 130, 130);

ctx.fillStyle = "black";
ctx.font = "bold 16px Arial";
ctx.fillText("Town Hall", 65 - 40, 65);


ctx.fillStyle = "#e63946";
ctx.fillRect(1000 - 130, 500 - 130, 130, 130);

ctx.fillStyle = "black";
ctx.font = "bold 16px Arial";
ctx.fillText("Town Hall", 1000 - 130 + 65 - 35, 500 - 130 + 70);


ctx.fillStyle = "#f9dc5c";
ctx.fillRect(1000 - 200, 0, 200, 130);

ctx.fillStyle = "black";
ctx.font = "bold 16px Arial";
ctx.fillText("Gold Mine", 1000 - 130 + 65 - 70, 65);

ctx.fillStyle = "#386641";
ctx.fillRect(0, 500 - 130, 200, 130);

ctx.fillStyle = "black";
ctx.font = "bold 16px Arial";
ctx.fillText("Farm", 70, 500 - 130 + 70);

