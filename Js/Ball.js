let Ball = function (x, y, dx, dy, radius, live) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.live = live;

    this.drawBall = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    };

    this.updateBallPosition = function () {
        this.x += this.dx;
        this.y += this.dy;
    };

    this.handlingBallCollisions = function () {
        if (this.x < this.radius || this.x > myCanvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius || this.y > myCanvas.height - this.radius) {
            this.dy = -this.dy;
        }
    };

    this.liveBall = function () {
        if (this.y + this.radius > myCanvas.height) {
            this.live--;
            this.resetBall();
        }
    };
    this.getlive = function () {
        return this.live;
    };
    this.resetBall = function () {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    };

    this.checkGameOver = function () {
        if (this.y > myCanvas.height - this.radius) {
            ball.liveBall();
            // paddle.resetPaddle();
            if (ball.getlive() <= 0) {
                isGameOver = true;
                text.showGameOver();
            }
        }
    };
};
// let ball = new Ball(300, 460, 4, 4, 10, 3);