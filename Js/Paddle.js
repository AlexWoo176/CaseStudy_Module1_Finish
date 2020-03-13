const ParameterKeyboard = {
    KEYLEFT: 37,
    KEYRIGHT: 39
};
let Paddle = function (x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;

    this.drawPaddle = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    };

    this.checkMovingPaddle = function () {
        if (this.isMovingLeft) {
            this.x -= this.speed;
        } else if (this.isMovingRight) {
            this.x += this.speed;
        }
    };

    this.movingEdgePaddle = function () {
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > myCanvas.width - this.width) {
            this.x = myCanvas.width - this.width;
        }
    };

    this.handlingPaddleCollisionsWithBall = function () {
        if (ball.x + ball.radius >= this.x && ball.x + ball.radius <= this.x + this.width &&
            ball.y + ball.radius >= myCanvas.height - this.height) {
            ball.dy = -ball.dy;
        }
    };
    // this.resetPaddle = function () {
    //     this.x = x;
    //     this.y = y;
    // };
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == ParameterKeyboard.KEYLEFT) {
            paddle.isMovingLeft = false;
        } else if (event.keyCode == ParameterKeyboard.KEYRIGHT) {
            paddle.isMovingRight = false;
        }
    });
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == ParameterKeyboard.KEYLEFT) {
            paddle.isMovingLeft = true;
        } else if (event.keyCode == ParameterKeyboard.KEYRIGHT) {
            paddle.isMovingRight = true;
        }
    });
};
// let paddle = new Paddle(250, myCanvas.height - 20, 100, 20, 8);
