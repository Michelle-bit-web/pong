let canvas;
let ctx;

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    draw();
}

function draw(){
ctx.fillStyle = 'white'; //weiße Elemente
ctx.fillRect(700, 10, 10, 80);
ctx.fillRect(10, 10, 10, 80);
ctx.arc(350, 100, 5, 0, Math.PI * 2);
ctx.fill();    
}