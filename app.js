let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

let linearGradient = ctx.createLinearGradient(50,0,150,120);
linearGradient.addColorStop(0,"tomato");
linearGradient.addColorStop(1,"blue");

let radialGradient = ctx.createRadialGradient(300, 76, 5, 300, 76, 80);
radialGradient.addColorStop(0,"tomato");
radialGradient.addColorStop(1,"blue");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle
ctx.fillStyle = linearGradient;
ctx.fillRect(25, 25, 100, 100);

for ( let i = 0; i < 50; i++) {
    let x = Math.random() * window.innerWidth;  
    let y = Math.random() * window.innerHeight;  
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    ctx.fillStyle = "rgba("+red+","+green+"," +blue+",.5 )";
    ctx.fillRect(x, y, 100, 100);
}

// circle
ctx.fillStyle = radialGradient;
ctx.beginPath();
ctx.arc(300,76,50,0,2 * Math.PI,false);
ctx.fill();

ctx.fillStyle = "coral";
ctx.beginPath();
ctx.arc(410,76,50,0,2 * Math.PI,false);
ctx.fill();


// text

ctx.font = "24px sans-serif";
ctx.fillStyle = "green";
ctx.fillText("Hello There!", 500, 75);