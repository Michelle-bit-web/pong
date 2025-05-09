let canvas;
let ctx;
let p1 = 80; //initial position y player 1
let p2 = 80; //player 2
let key = {}; //for pressed keys
let ball = {
    x: 360,
    y: 240,
    speedX: 3,
    speedY: 1,
};

document.addEventListener('keydown', event => key[event.keyCode] = true);
document.addEventListener('keyup', event => key[event.keyCode] = false);

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    draw();
    let loopInterval = setInterval(() => loop(), 1000 / 60)
}

function draw(){
ctx.clearRect(0, 0, canvas.width, canvas.height);  //initial clearance of canvas  

ctx.fillStyle = 'white'; //white elements
ctx.fillRect(700, p1, 10, 80);
ctx.fillRect(10, p2, 10, 80);

ctx.beginPath(); //start balöl
ctx.arc(ball.x, ball.y, 5, 0, Math.PI * 2); //x, y, radius, angle or start, 360 degree 
ctx.fill();    

requestAnimationFrame(draw); // for repetitive drawing
}

function loop(){
    ball.x += ball.speedX; //change x direction
    ball.y += ball.speedY; //change y direction
}