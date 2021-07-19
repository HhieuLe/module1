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
        this.left += 20;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function() {
        this.top += 20;
        console.log('ok:' + this.top);
    }
    this.moveLeft = function() {
        this.left -= 20;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function() {
        this.top -= 0;
        console.log('ok: ' + this.top);
    }
}

var luffy = new Hero('pikachu1.png', 20, 30, 200);

function start() {
    if (luffy.left < window.innerWidth - luffy.size && luffy.top == 20) {
        luffy.moveRight();
    } else if (luffy.left > window.innerWidth - luffy.size && window.innerHeight - luffy.size > luffy.top) {
        luffy.moveDown();
    } else if (window.innerHeight - luffy.size < luffy.top) {
        luffy.moveLeft();
    }
    if (luffy.left <= 0) {
        luffy.moveUp();
    }
    document.getElementById('game').innerHTML = luffy.getHeroElement();
    setTimeout(start, 300)
}

start();