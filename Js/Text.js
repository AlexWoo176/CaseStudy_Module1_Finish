const ParameterTextLive = {
    leftMargin: 515,
    topMargin: 20
};
const ParameterTextScore = {
    marginLeft: 40,
    marginTop: 20
};
let Text = function () {
    this.showLive = function () {
        ctx.font = "18px Arial";
        ctx.fillStyle = "#CD853F";
        ctx.fillText("Live: " + ball.getlive(), ParameterTextLive.leftMargin, ParameterTextLive.topMargin);
    };
    this.showGameOver = function () {
        if (ball.getlive() <= 0) {
            ctx.font = "33px Arial";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER! PLEASE TRY AGAIN", myCanvas.width / 2, myCanvas.height / 2);
        }
    };
    this.showScore = function () {
        ctx.font = "18px Arial";
        ctx.fillStyle = "#CD853F";
        ctx.fillText("Score: " + brick.getScore(), ParameterTextScore.marginLeft, ParameterTextScore.marginTop);
    };
    this.showWin = function () {
        ctx.font = "33px Arial";
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";
        ctx.fillText("YOU WIN! CONGRATULATIONS ", myCanvas.width / 2, myCanvas.height / 2);
    }
};
// let text = new Text();