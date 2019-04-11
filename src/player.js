
export var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var keys = [];

export var char = {
    charHeight: 20,
    charWidth: 20,
    x: (canvas.width - 20) / 2,
    y: (canvas.height - 20),
    vel_x: 0,
    vel_y: 0,
    jumped: true,
};

var speed = 7;

document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

function hitBottom() {
    var bottom = (canvas.height - char.charHeight);
    if (char.y >= bottom) {
        char.y = bottom;
        char.jumped = false;
        char.vel_y = 0;
    }
}

export function draw() {

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.beginPath();
    ctx.rect(char.x, char.y, char.charWidth, char.charHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    char.vel_x = char.vel_x / 2;
    if (keys[65]) {
        if (char.vel_x < speed) {
            char.vel_x-=2;
        }
    }
    if (keys[68]) {
        if (char.vel_x < speed && char.x < canvas.width - char.charWidth) {
            char.vel_x+=2;
        }
    }
    if (keys[32] && char.jumped == false) {
            char.vel_y -= 20;
            char.jumped = true;
        }
    if ( char.y < canvas.height - char.charHeight ) {
        char.vel_y += 1.5;
    }
    if ( char.x < 0 + char.charWidth) {
        char.x = canvas.width;
    }
    if ( char.x > canvas.width - char.charWidth) {
        
        char.x = 0;
    }

    char.y += char.vel_y;
    char.x += char.vel_x;
    char.x_velocity *= 0.9;
    char.y_velocity *= 0.9;

    hitBottom();

}

setInterval(draw, 7);

