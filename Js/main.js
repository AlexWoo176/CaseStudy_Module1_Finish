let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');
let isGameOver = false;
let ball = new Ball(300, 460, 4, 4, 10, 3);
let paddle = new Paddle(250, myCanvas.height - 20, 100, 20, 8);
let brick = new Brick(50, 50, 15, 70, 15, 6, 6, 0, []);
let text = new Text();

function playgame () {
    if(!isGameOver) {
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        ball.drawBall();
        ball.updateBallPosition();
        ball.handlingBallCollisions();
        ball.checkGameOver();
        paddle.drawPaddle();
        paddle.movingEdgePaddle();
        paddle.checkMovingPaddle();
        paddle.handlingPaddleCollisionsWithBall();
        brick.drawBrick();
        brick.handlingBallCollisionsBrick();
        brick.checkWin()
        text.showLive();
        text.showScore();
        requestAnimationFrame(playgame);
    }
}
function restart() {
    document.location.reload();
}