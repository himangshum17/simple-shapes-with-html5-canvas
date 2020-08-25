let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

let gradient = ctx.createLinearGradient(50,0,150,120);

gradient.addColorStop(0,"tomato");
gradient.addColorStop(1,"blue");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle
ctx.fillStyle = gradient;
ctx.fillRect(25, 25, 100, 100);

ctx.fillStyle = "coral";
ctx.fillRect(135, 25, 100, 100);

// circle
ctx.fillStyle = "tomato";
ctx.beginPath();
ctx.arc(300,76,50,0,2 * Math.PI,false);
ctx.fill();

ctx.fillStyle = "coral";
ctx.beginPath();
ctx.arc(410,76,50,0,2 * Math.PI,false);
ctx.fill();