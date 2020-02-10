import Board from "./board";
import Canvas from "./canvas";
import { CONFIG, SHAPES } from './constants/game.config';
import Shape from './shape';

export default class Game {
    private currentTime: DOMHighResTimeStamp = 0;
    private lastTime: DOMHighResTimeStamp;
    private stopMain: DOMHighResTimeStamp;
    private updateInterval: number;

    private currentShape: Shape;

    public init(): void {
        Canvas.init(
            CONFIG.CANVAS_WIDTH,
            CONFIG.CANVAS_HEIGHT,
            <HTMLCanvasElement>document.getElementById("gameCanvas")
        );

        this.updateInterval = CONFIG.UPDATE_INTERVAL;
        this.ready();
    }

    private generateRandomShape(): Shape {
        // TODO: Move this function and create randomness
        const shape = SHAPES.i;
        const newShape: Shape = new Shape(shape.dirs, shape.color, 0);
        return newShape;
    }

    private ready(): void {
        Canvas.fillCanvas(CONFIG.CANVAS_BG_COLOR);

        Board.init();
        Board.draw();
        this.currentShape = this.generateRandomShape();
        this.currentShape.drawShape();

        const startTime = window.performance.now();
        this.lastTime = startTime;

        this.gameLoop(startTime);
    }

    private update(tFrame: DOMHighResTimeStamp): void {
        const deltaTime = tFrame - this.lastTime;
        this.lastTime = tFrame;

        this.currentTime += deltaTime;

        if (this.currentTime > this.updateInterval) {
            this.currentShape.lowerShape();
            this.currentTime = 0;
        }

        return;
    }

    public gameLoop = (tFrame: DOMHighResTimeStamp): void => {
        // You can stop the game at any point with:
        // window.cancelAnimationFrame(Game.stopMain);
        this.stopMain = window.requestAnimationFrame(this.gameLoop);

        this.update(tFrame);
    }
}

;(() => {
    const game: Game = new Game();

    game.init();
})();
