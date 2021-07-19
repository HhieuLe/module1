/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function() {
        this.left += 40;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function() {
        this.top += 40;
        console.log('ok:' + this.top);
    }
    this.moveLeft = function() {
        this.left -= 40;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function() {
        this.top -= 40;
        console.log('ok: ' + this.top);
    }
}

var paimon = new Hero('pikachu1.png', 20, 30, 200);

function start() {
    if (paimon.left < window.innerWidth - paimon.size && paimon.top == 20) {
        paimon.moveRight();
    } else if (paimon.left > window.innerWidth - paimon.size && window.innerHeight - paimon.size > paimon.top) {
        paimon.moveDown();
    } else if (window.innerHeight - paimon.size < paimon.top) {
        paimon.moveLeft();
    }
    if (paimon.left === 0) {
        paimon.moveUp();
    }
    document.getElementById('game').innerHTML = paimon.getHeroElement();
    setTimeout(start, 300)
}

start();