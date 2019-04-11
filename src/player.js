export var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rightPressed = false;
var leftPressed = false;
var spacePressed = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


export function keyDownHandler(e) {
    if (e.key == "a" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key == "d" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Space" || e.keyCode == 32) {
        spacePressed = true;
    }
    debugger
}

export function keyUpHandler(e) {
    if (e.key == "a" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if (e.key == "d" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Space" || e.keyCode == 32) {
        spacePressed = false;
    }
}

var charHeight = 20;
var charWidth = 20;
var charX = (canvas.width - charHeight) / 2 ;
var charY = 500;

export function draw() {

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.beginPath();
    ctx.rect(charX, charY, charWidth, charHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    if (rightPressed && charX < canvas.width - charWidth) {
        charX += 7;
    }
    else if (leftPressed && charX > 0) {
        charX -= 7;
    }
    else if ( spacePressed && charY > 0) {
        charY -= 7;
    }
}

setInterval(draw, 10);

