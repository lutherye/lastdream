
export var canvas = document.getElementById("myCanvas");
export var ctx = canvas.getContext("2d");

export var char = {
    charHeight: 10,
    charWidth: 10,
    x: (canvas.width - 20) / 2,
    y: (canvas.height - 20),
    vel_x: 0,
    vel_y: 0,
    jumped: true,
};

var speed = 7;

var keys = [];

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
    ctx.arc(char.x, char.y, char.charWidth, char.charHeight, Math.PI * 5);
    ctx.fillStyle = "#483D8B";
    ctx.fill();
    ctx.closePath();
    if (keys[65]) {
        if (char.vel_x < speed) {
            char.vel_x -= 0.5;
        }
    }
    if (keys[68]) {
        if (char.vel_x < speed) {
            char.vel_x += 0.5;
        }
    }
    if (keys[32] && char.jumped == false) {
            char.vel_y -= 20;
            char.jumped = true;
        }

    if ( char.x <= 0 ) {
        char.x = canvas.width - char.charWidth * 2;
    }
    if ( char.x >= canvas.width - char.charWidth) {
        char.x = 0 + char.charWidth;
    }
        
    char.vel_y += 0.7;
    char.y += char.vel_y;
    char.x += char.vel_x;
    char.vel_x *= 0.9;
    char.vel_y *= 0.9;

    hitBottom();

}

setInterval(draw, 7);

