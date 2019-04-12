import { inherits } from "util";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
init();

}

setInterval(draw, 7);

let img = new Image();
img.src = "../img/clouds.png";
img.onload = function () {
    inherits();
};
const scale = 2;
function init () {
    ctx.drawImage(img, 
        110, 230, 200, 120,
        50, 50, 200, 120);
}