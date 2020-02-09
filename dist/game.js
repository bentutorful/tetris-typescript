import Board from "board";
export default class Game {
    constructor() {
        this.stopMain = null;
        // draw
        // timer
        // key handler
        // play/pause
        // new shape
    }
    // You can stop the game at any point with:
    // window.cancelAnimationFrame(Game.stopMain);
    update(tFrame) {
    }
    render() {
        Board.draw();
    }
    gameLoop(tFrame) {
        this.stopMain = window.requestAnimationFrame(this.gameLoop);
        this.update(tFrame);
        this.render();
    }
}
