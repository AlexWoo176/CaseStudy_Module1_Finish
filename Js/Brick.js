let Brick = function (offsetX, offsetY, margin, width, height, totalRow, totalCol, score, []) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.margin = margin;
    this.width = width;
    this.height = height;
    this.totalRow = totalRow;
    this.totalCol = totalCol;
    this.score = score;
    BrickList = [];
    this.isBroken = false;

    for (let i = 0; i < this.totalRow; i++) {
        for (let j = 0; j < this.totalCol; j++) {
            BrickList.push({
                x: this.offsetX + j * (this.width + this.margin),
                y: this.offsetY + i * (this.height + this.margin),
                isBroken: false
            })
        }
    }

    this.drawBrick = function () {
        BrickList.forEach(function (b) {
            if (!b.isBroken) {
                ctx.beginPath();
                ctx.rect(b.x, b.y, brick.width, brick.height);
                ctx.fillStyle = 'brown'
                ctx.fill();
                ctx.closePath();
            }
        })
    };
    this.getScore = function () {
        return this.score;
    };
    this.setScore = function (score) {
        this.score += score;
    };

    this.handlingBallCollisionsBrick = function () {
        BrickList.forEach(function (b) {
            if (!b.isBroken) {
                if (ball.x >= b.x && ball.x <= b.x + brick.width &&
                    ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y + brick.height) {
                    ball.dy = -ball.dy;
                    brick.getScore(brick.setScore(1));
                    b.isBroken = true;
                }
            }
        })
    };
    this.checkWin = function () {
        if (brick.getScore() >= brick.totalCol * brick.totalRow) {
            text.showWin();
            cancelAnimationFrame(playgame());
        }
    };
};
// let brick = new Brick(50, 50, 15, 70, 15, 6, 6, 0, []);

