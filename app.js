let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle

function Rectangle(x, y, dx, dy, width, height, fillStyle){
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.width = width;
      this.height = height;
      this.fillStyle = fillStyle;

      this.draw = function(){
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }

      this.update = function(){
        if (this.x + this.width > innerWidth || this.x < 0) {
            this.dx = -this.dx;
         }
         if (this.y + this.height > innerHeight || this.y < 0) {
             this.dy = -this.dy;
          }
         this.x += this.dx;
         this.y += this.dy;
         this.draw();
      }
}

let rectangleArray = [];

for (let i = 0; i < 100; i++) {
    let width = Math.random() * 100;
    let height = Math.random() * 100;
    let x = Math.random() * (innerWidth - width * 2) + width;
    let y = Math.random() * (innerHeight - height * 2) + height;
    let dx = (Math.random() - 0.5) * 1;
    let dy = (Math.random() - 0.5) * 1;
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let fillStyle = "rgba("+red+","+green+"," +blue+",.5 )";

    rectangleArray.push(new Rectangle(x,y,dx,dy,width,height,fillStyle));
}

function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    for (let i = 0; i < rectangleArray.length; i++) {
        rectangleArray[i].update();
    }
}

animation();

