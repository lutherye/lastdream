import Score from './score';
import Game from './game';
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let game = new Game();
let gameOver = false;
let score = new Score();



function draw() {
    gameOver = gameOver || game.gameOver();
        if (gameOver) {

            console.log('loser');
        } else {

            game.draw();
        }
    }

    setInterval(draw, 7);

// testing // 
    // window.canvas = Player.canvas;
    // window.char = Player.char;
    // window.ctx = Player.ctx;
// testing //
