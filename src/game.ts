import Board from "./board";
import Canvas from "./canvas";
import { CONFIG } from './constants/game.config';

export default class Game {
    private start: DOMHighResTimeStamp;
    private stopMain: DOMHighResTimeStamp;
    private updateInterval: number;

    // You can stop the game at any point with:
    // window.cancelAnimationFrame(Game.stopMain);

    public init(): void {
        Canvas.init(
            CONFIG.CANVAS_WIDTH,
            CONFIG.CANVAS_HEIGHT,
            <HTMLCanvasElement>document.getElementById("gameCanvas")
        );

        this.updateInterval = CONFIG.UPDATE_INTERVAL;
        this.ready();
    }

    private ready(): void {
        Canvas.fillCanvas(CONFIG.CANVAS_BG_COLOR);

        Board.init();
        Board.draw();

        const startTime = window.performance.now();
        this.start = startTime;

        this.gameLoop(startTime);
    }

    private update(tFrame: DOMHighResTimeStamp): void {
        if ((tFrame - this.start) > this.updateInterval) {
            this.start = tFrame;
        }
        return;
    }

    // private render(): void {

    // }

    public gameLoop = (tFrame: DOMHighResTimeStamp): void => {
        this.stopMain = window.requestAnimationFrame(this.gameLoop);

        this.update(tFrame);
        // this.render();
    }

    // draw
    // timer
    // key handler
    // play/pause
    // new shape
}

;(() => {
    const game: Game = new Game();

    game.init();
})();
