let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle

let x = 200;

function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    ctx.fillStyle = "tomato";
    ctx.fillRect(x, 200, 100, 100);

    x += 1;
}

animation();
