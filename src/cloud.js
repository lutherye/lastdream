
const img = new Image();
img.src = "../lastdream/img/ccc.png";

class Cloud {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.cloudHeight = 50;
        this.cloudWidth = 100;
        this.x = x;
        this.y = y;
    }

    draw(){ 
            this.ctx.drawImage(img, 
                0, 0, 200, 105,
                this.x, ( this.y ), this.cloudWidth, this.cloudHeight);
            this.y += 0.5;

    }

    collide(char) {
        var cloudLeft = this.x;
        var cloudRight = this.x + this.cloudWidth;
        var cloudTop = this.y;
        var cloudBot = this.y + this.cloudHeight;

        var charLeft = char.x;
        var charRight = char.x + char.charWidth;
        var charTop = char.y + 5;
        var charBot = char.y + char.charHeight - 10;

        if (Math.abs(cloudTop - charBot) < 5 && char.vel_y > 0) {
            if ((charLeft >= cloudLeft && charLeft <= cloudRight) || (charRight >= cloudLeft && charRight <= cloudRight)) {
                return true;
            } 
        }
    }
}

export default Cloud;