
class Score {
    constructor(ctx){
        this.ctx = ctx;
        this.counter = 0;
    }

    drawScore() {
        let score = Math.floor(this.counter / 100);
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Score: " + score, 8, 20);

    }
    
}
export default Score;