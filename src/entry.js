import Char from './player';
import * as Map from './map';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var keys = [];
document.getElementById("play").addEventListener("click", start);

document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

const char = new Char(ctx);

function start() {
    document.getElementById("play").remove();
    setInterval(draw, 7);
}

function draw() {
    char.drawChar();
    if (keys[65]) {
        char.leftHandle();
    }
    if (keys[68]) {

        char.rightHandle();
    }
    if (keys[32]) {
        char.jumpHandle();
    }
}

// testing // 
    // window.canvas = Player.canvas;
    // window.char = Player.char;
    // window.ctx = Player.ctx;
// testing //
