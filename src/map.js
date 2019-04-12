

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let img = new Image();
img.src = "../img/clouds.png";
img.onload = function () {
    init();
};

// class TileSheet {
//     constructor(size, column) {
//         this.image = new Image();
//         image.src = "../img/clouds.png";
//         this.size = size;
//         this.column = column;
//     }
// }

class MapItem {
    constructor(img, width, height) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }
    
    def (name, x, y) {
        const buffctx = document.createElement('canvas');
        buffctx.width = this.width;
        buffctx.height = this.height;
        debugger;
        let buff = buffctx.getContext('2d');
        buff.drawImage(this.img, 
            x * this.width, y * this.height, this.width, this.height,
            0, 0, this.width, this.height);
        this.tiles.set(name, buffctx);
    }
    draw (name, ctx, x, y) {
        const buffer = this.tiles.get(name);
        ctx.drawImage(buffer, x, y);
    }
}

function init () {
    const mappi = new MapItem(img, 200, 120);
    mappi.def("cloud", 0, 230);
    mappi.draw("cloud", ctx, 0, 0);
    // ctx.drawImage(img,                   // cuts the cloud tile out
    //     110, 230, 200, 120,
    //     50, 50, 200, 120);
}

function draw() {
    init();
}


setInterval(draw, 7);