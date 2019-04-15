
import Char from './player';
import MapItem from './map';
import Cloud from './cloud';
import { rejects } from 'assert';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const keys = [];

document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


var score;

let newClouds = [];
    
    var clouds = [];
    for ( let y = 0; y < canvas.height * 2; y += 40) {
        for (let i = 0; i < 4; i++) {
            let x = Math.random(i, y) * canvas.width;
            if ( Math.random() < 0.5) {
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
    
    collide() {
        debugger
        let charLeft = char.x;
        let charRight = char.x + char.charWidth;
        let charTop = char.y + 5;

        
        let cloudLeft = cloud.x;
        let cloudRight = cloud.x + cloud.cloudWidth;
        let cloudTop = cloud.y;
        let cloudBot = cloud.y + cloud.cloudHeight;
        
    }
    
    draw() {
        this.keyHandle();
        // translate(0, score);
        // this.maxA = (this.y > this.maxA) ? this.y : this.maxA;

        for (let i = 0; i < clouds.length; i++) {
            debugger
            clouds[i].draw();
            if (clouds[i].collide(char)) {
                char.vel_y = 0;
                char.y = clouds[i].y;
                char.jumped = false;
            }
        }

            if (Math.random() < 0.015) {
                for (let i = 0; i < 10; i++) {
                    var x = Math.random(i) * canvas.width;
                }
                let y = 0;
                newClouds.push(new Cloud(ctx, x, y));
            }

            newClouds.forEach(cloud => {
                cloud.draw();
                if (cloud.collide(char)) {
                    char.vel_y = 0;
                    char.y = cloud.y;
                    char.jumped = false;
                }
            });
            newClouds = newClouds.filter(cloud => cloud.y < canvas.height);
    }
    
    gameOver () {

    }

}

export default Game;