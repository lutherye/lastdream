
class Char {
    constructor(ctx, x) {
        this.ctx = ctx;
        this.charHeight = 10;
        this.charWidth = 10;
        this.x = this.ctx.canvas.width / 2;
        this.y = 0;
        this.vel_x = 0;
        this.vel_y = 0;
        this.jumped = true;
        this.speed = 5;
        this.radius = 5;
        this.maxA = this.ctx.canvas.height / 2;
    }

    hitBottom() {
        var bottom = (this.ctx.canvas.height - this.charHeight);
        if (this.y >= bottom) {
            this.y = bottom;
            this.jumped = false;
            this.vel_y = 0;
            return true;
        }
        return false;
    }

    leftHandle() {
        if (this.vel_x < this.speed) {
            this.vel_x -= 0.9;
        }
    }
    rightHandle() {
        if (this.vel_x < this.speed) {
            this.vel_x += 0.9;
        }
    }
    jumpHandle() {
        if (this.jumped == false) {
            this.vel_y -= 30;
            this.jumped = true;
        }
    }

    drawChar() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.charWidth, this.charHeight, Math.PI * 5);
        this.ctx.fillStyle = "#483D8B";
        this.ctx.fill();
        this.ctx.closePath();

        if (this.x <= 0) {
            this.x = this.ctx.canvas.width - this.charWidth * 1.001;
        }
        if (this.x >= this.ctx.canvas.width - this.charWidth) {
            this.x = 0 ;
        }
        this.vel_y += 0.5;
        this.y += this.vel_y;
        this.x += this.vel_x;
        this.vel_x *= 0.7;
        this.vel_y *= 0.9;
        // if (this.y < this.maxA) {
        //     this.y = this.maxA;
        // } 
        // this.maxA = (this.y  < this.ctx.canvas.height / 2) ? this.y / 2 : this.ctx.canvas.height / 2;
        this.hitBottom();
    }
}

export default Char;
