
class Char {
    constructor(ctx) {
        this.ctx = ctx;
        this.charHeight = 10;
        this.charWidth = 10;
        this.x = (ctx.canvas.width - 20) / 2;
        this.y = (ctx.canvas.height - 20);
        this.vel_x = 0;
        this.vel_y = 0;
        this.jumped = true;
        this.speed = 7;
    }

    hitBottom() {
        var bottom = (this.ctx.canvas.height - this.charHeight);
        if (this.y >= bottom) {
            this.y = bottom;
            this.jumped = false;
            this.vel_y = 0;
        }
    }
    leftHandle() {
        if (this.vel_x < this.speed) {
            this.vel_x -= 0.5;
        }
    }
    rightHandle() {
        if (this.vel_x < this.speed) {
            this.vel_x += 0.5;
        }
    }
    jumpHandle() {
        if (this.jumped == false) {
            this.vel_y -= 20;
            this.jumped = true;
        }
    }

    drawChar() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.charWidth, this.charHeight, Math.PI * 5);
        this.ctx.fillStyle = "#483D8B";
        this.ctx.fill();
        this.ctx.closePath();

        if (this.x <= 0) {
            this.x = this.ctx.canvas.width - this.charWidth * 2;
        }
        if (this.x >= this.ctx.canvas.width - this.charWidth) {
            this.x = 0 + this.charWidth;
        }
        this.vel_y += 0.7;
        this.y += this.vel_y;
        this.x += this.vel_x;
        this.vel_x *= 0.9;
        this.vel_y *= 0.9;

        this.hitBottom();
    }
}

export default Char;
