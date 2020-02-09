import Board from "board";

export default class Game {
    stopMain: DOMHighResTimeStamp = null;

    // You can stop the game at any point with:
    // window.cancelAnimationFrame(Game.stopMain);

    private update(tFrame: DOMHighResTimeStamp): void {

    }

    private render(): void {
        Board.draw();
    }

    public gameLoop(tFrame: DOMHighResTimeStamp): void {
        this.stopMain = window.requestAnimationFrame(this.gameLoop);

        this.update(tFrame);
        this.render();
    }

    // draw
    // timer
    // key handler
    // play/pause
    // new shape
}
