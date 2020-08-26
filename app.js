let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle

let x = 200;
let y = 200;
let dx = 5;
let dy = 5;
let width = 100;
let height = 100;

function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    ctx.fillStyle = "tomato";
    ctx.fillRect(x, y, width, height);
    
    if (x + width > innerWidth || x < 0) {
       dx = -dx;
    }

    if (y + height > innerHeight || y < 0) {
        dy = -dy;
     }

    x += dx;
    y += dy;
}

animation();
