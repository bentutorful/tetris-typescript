import Board from "./Board";
import Canvas from "./Canvas";
import { CONFIG, SHAPES } from './constants/game.config';
import Shape from './Shape';
import EventHandler from './EventHandler';

export default class Game {
    private currentTime: DOMHighResTimeStamp = 0;
    private lastTime: DOMHighResTimeStamp;
    private stopMain: DOMHighResTimeStamp;
    private updateInterval: number;
    private currentShape: Shape;
    private eventHandler: EventHandler;
    private boardMatrix: number[][];

    private generateRandomShape(): Shape {
        // TODO: Move this function, and possibly change random algorithm
        const pieces = ['i','j','l','o','s','t','z']
        const next = pieces[Math.floor(Math.random() * (pieces.length - 0)) + 0];

        const newShape: Shape = new Shape(SHAPES[next].dirs, SHAPES[next].color, 0);
        return newShape;
    }

    private handleInput(): void {
        // TODO move this elsewhere?
        if (this.eventHandler.keyPressed(CONFIG.DOWN_KEY)) {
            this.currentShape.lowerShape(this.boardMatrix);
        } else if (this.eventHandler.keyPressed(CONFIG.LEFT_KEY)) {
            this.currentShape.leftShape();
        } else if (this.eventHandler.keyPressed(CONFIG.RIGHT_KEY)) {
            this.currentShape.rightShape();
        } else if (this.eventHandler.keyPressed(CONFIG.UP_KEY)) {
            this.currentShape.rotateShape();
        }
    }

    ////////////////////////

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
        // Fill the canvas
        Canvas.fillCanvas(CONFIG.CANVAS_BG_COLOR);

        // Draw the game board to the canvas
        Board.init();
        Board.draw();

        // Generate the first shape
        this.currentShape = this.generateRandomShape();
        this.currentShape.drawShape();

        // Set up our event handler
        this.eventHandler = new EventHandler();

        // Create a matrix for the board to hold shapes
        this.boardMatrix = Board.createBoardMatrix(CONFIG.BOARD_WIDTH_TILES, CONFIG.BOARD_HEIGHT_TILES);

        // Get the initial game time
        const startTime = window.performance.now();
        this.lastTime = startTime;

        // Start the game
        this.gameLoop(startTime);
    }

    private update(tFrame: DOMHighResTimeStamp): void {
        this.handleInput();
        const deltaTime = tFrame - this.lastTime;
        this.lastTime = tFrame;

        this.currentTime += deltaTime;

        if (this.currentTime > this.updateInterval) {
            this.currentShape.lowerShape(this.boardMatrix);
            this.currentTime = 0;
        }
        this.eventHandler.reset();

        return;
    }

    private gameLoop = (tFrame: DOMHighResTimeStamp): void => {
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
