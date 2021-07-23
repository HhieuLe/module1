var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

let score;
let charac;
let pulldown;
let block = [];
let gameSpeed;
let keys = {};

class Character {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.dy = 0;
        this.jumpStep = 10;
        this.beginHeight = height;
        this.jumpTime = 0;
        this.inGround = false;

    }
    Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();

    }
    Jump() {
        if (this.jumpTime == 0 && this.inGround == true) {
            this.jumpTime = 1;
            this.dy = -this.jumpStep;
        } else if (this.jumpTime > 0 && this.jumpTime < 15) {
            this.jumpTime++
                this.dy = -this.jumpStep - (this.jumpTime / 50)
        }
    }
    Effect() {
        //nhảy
        if (keys["ArrowUp"]) {
            this.Jump();

        } else {
            this.jumpTime = 0;
        }
        this.y += this.dy;
        //cúi
        if (keys["ArrowDown"]) {
            this.height = this.beginHeight / 2;
        } else {
            this.height = this.beginHeight;
        }
        //xuống
        if (this.y + this.height < canvas.height) {
            this.dy += pulldown;
            this.inGround = false;
        } else {
            this.dy = 0;
            this.inGround = true;
            this.y = canvas.height - this.height;
        }

        this.Draw();
    }
}
class Block {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.dx = -gameSpeed;
    }
    updateBlock() {
        this.x += this.dx;
        this.drawBlock();
        this.dx = -gameSpeed;
    }
    drawBlock() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }

}
//phím
document.addEventListener('keydown', function(even) {
    keys[even.code] = true;
});
document.addEventListener('keyup', function(even) {
    keys[even.code] = false;
});

//tạo mới block
function addNewBlock() {
    let size = randomSizeBlock(10, 80);
    let type = randomSizeBlock(0, 1);
    let nblock = new Block(canvas.width + size, canvas.height - size, size, size, "#2484E4")

    if (type == 1) {
        block.y -= charac.beginHeight - 10;
    }
    block.push(nblock);
}
//random size
function randomSizeBlock(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// chạy
function star() {
    canvas.width = 1000;
    canvas.height = 500;
    // gameSpeed = 3;
    pulldown = 0.5;

    score = 0;
    highscore = 0
    charac = new Character(10, 450, 50, 50, '#FBA431');

    requestAnimationFrame(Update);

}
let beginAddBlockTime = 200;
let addBlockTime = beginAddBlockTime;

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    charac.Effect();
    // addBlockTime--;
    // if (addBlockTime <= 0) {
    //     addNewBlock();
    //     addBlockTime = beginAddBlockTime - gameSpeed * 8;
    //     if (addBlockTime < 60) {
    //         addBlockTime = 60;
    //     }
    // }

    // for (let i = 0; i < block.lenght; i++) {
    //     let b = block[i];

    //     b.updateBlock();
    // }




    // gameSpeed += 0.003;

}


star();