import Char from './player';
import MapItem from './map';
import Cloud from './cloud';
import Game from './game';
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let game = new Game();


function draw() {
    game.draw();
    
}


var gameStart = setInterval(draw, 7);

// testing // 
    // window.canvas = Player.canvas;
    // window.char = Player.char;
    // window.ctx = Player.ctx;
// testing //
