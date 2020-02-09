import Board from "./board";
import Canvas from "./canvas";

export default class Game {
    public stopMain: DOMHighResTimeStamp = null;

    // You can stop the game at any point with:
    // window.cancelAnimationFrame(Game.stopMain);

    private update(tFrame: DOMHighResTimeStamp): void {

    }

    private render(): void {
        Canvas.init(640, 800, <HTMLCanvasElement>document.getElementById("gameCanvas"));
        Board.draw();
    }

    public gameLoop = (tFrame: DOMHighResTimeStamp): void => {
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

;(() => {
    const game: Game = new Game();

    game.gameLoop(window.performance.now());
})();
