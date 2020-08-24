let canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle
ctx.fillStyle = "tomato";
ctx.fillRect(25, 25, 100, 100);

ctx.fillStyle = "coral";
ctx.fillRect(135, 25, 100, 100);

