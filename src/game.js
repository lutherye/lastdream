
import Char from './player';
import Cloud from './cloud';
import Score from './score';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// const sprite = new Image();
// sprite.src = "../img/char.png";

const keys = [];
document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});



let newClouds = [];
    
    var clouds = [];
    for ( let y = 0; y < canvas.height * 2; y += 30) {
        for (let i = 0; i < 4; i++) {
            let x = Math.random(i, y) * canvas.width;
            if ( Math.random() < 0.3) {
                clouds.push(new Cloud(ctx, x, y));
            }
        }
    }
    // return clouds;
// }

//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 4; j++) {
//             let x = Math.random(i, j) * canvas.width;
//             let y = Math.random(j, i) * canvas.height;
//             clouds.push(new Cloud(ctx, x, y));
//         }
//     }



const char = new Char(ctx);
const score = new Score(ctx);

class Game {
    constructor(){
    }
    keyHandle() {
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
    
    draw() {
        this.keyHandle();
        score.counter += 1;
        score.drawScore();

        let scoreCount = Math.floor(score.counter / 100);

        for (let i = 0; i < clouds.length; i++) {
            clouds[i].draw();
            if (clouds[i].collide(char)) {
                char.vel_y = 0;
                char.y = clouds[i].y;
                char.jumped = false;
            }
        }

        if (scoreCount < 5 ) {
            if (Math.random() < 0.025) {
            for (let i = 0; i < 9; i++) {
                var x = Math.random(i) * canvas.width;
            }
            let y = 0;
            newClouds.push(new Cloud(ctx, x, y));
            }
        } else if (scoreCount >= 5) {
            if (Math.random() < 0.035) {
            for (let i = 0; i < 9; i++) {
                var x = Math.random(i) * canvas.width;
            }
            let y = 0;
            newClouds.push(new Cloud(ctx, x, y));
            }
        } else if (scoreCount >= 15) {
            if (Math.random() < 0.7) {
                for (let i = 0; i < 9; i++) {
                    var x = Math.random(i) * canvas.width;
                }
                let y = 0;
                newClouds.push(new Cloud(ctx, x, y));
            }
        else if (scoreCount >= 20) {
            if (Math.random() < 1.2) {
                for (let i = 0; i < 9; i++) {
                    var x = Math.random(i) * canvas.width;
                }
                let y = 0;
                newClouds.push(new Cloud(ctx, x, y));
            }
        }
        else if (scoreCount >= 25) {
            if (Math.random() < 1.8) {
                for (let i = 0; i < 9; i++) {
                    var x = Math.random(i) * canvas.width;
                }
                let y = 0;
                newClouds.push(new Cloud(ctx, x, y));
            }
        }
        } else if (scoreCount >= 30) {
            if (Math.random() < 3) {
                for (let i = 0; i < 9; i++) {
                    var x = Math.random(i) * canvas.width;
                }
                let y = 0;
                newClouds.push(new Cloud(ctx, x, y));
            }
        } else if (scoreCount >= 35) {
            if (Math.random() < 3.9) {
                for (let i = 0; i < 9; i++) {
                    var x = Math.random(i) * canvas.width;
                }
                let y = 0;
                newClouds.push(new Cloud(ctx, x, y));
            }
        } else if (scoreCount >= 40) {
            if (Math.random() < 4.9) {
                for (let i = 0; i < 9; i++) {
                    var x = Math.random(i) * canvas.width;
                }
                let y = 0;
                newClouds.push(new Cloud(ctx, x, y));
            }
        }

        newClouds.forEach(cloud => {
            cloud.draw();
            if (cloud.collide(char)) {
                char.vel_y = 0;
                char.y = cloud.y;
                char.jumped = false;
            }

            if (scoreCount > 5) {
                cloud.y += 0.2;
            }
            if (scoreCount > 10) {
                cloud.y += 0.15;
            }
            if (scoreCount > 15) {
                cloud.y += 0.15;
            }
            if (scoreCount > 20) {
                cloud.y += 0.1;
            }
            if (scoreCount > 25) {
                cloud.y += 0.15;
            }
            if (scoreCount > 30) {
                cloud.y += 0.15;
            }
            if (scoreCount > 35) {
                cloud.y += 0.15;
            }
            if (scoreCount > 40) {
                cloud.y += 0.15;
            }

        });
 
        newClouds = newClouds.filter(cloud => cloud.y < canvas.height);
    }
    gameOver() {
        return char.hitBottom();
    }

    
}


export default Game;