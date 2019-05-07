import Score from './score';
import Game from './game';
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let game = new Game();
let gameOver = false;

function restartHandler(e){
    if (game.gameOver() && e.keyCode === 13) {
        location.reload();
    }
}
document.addEventListener("keydown", restartHandler);

function draw() {

    gameOver = gameOver || game.gameOver();
        if (gameOver) {
            document.getElementById("game_over").style.zIndex = 10;
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
