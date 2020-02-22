import { CONFIG, SHAPES } from './game.config';
import Canvas from './Canvas';
import EventHandler from './EventHandler';
import Matrix from './Matrix';
import Player from './Player';
import Draw from './Draw';
import generateRandomShape from './helpers';

export default class Game {
    stopMain: DOMHighResTimeStamp;
    gameCanvas: Canvas;
    nextShapesCanvas: Canvas;
    updateInterval: number = CONFIG.UPDATE_INTERVAL;
    lastTime: number = 0;
    currentTime: number = 0;
    eventHandler: EventHandler = new EventHandler();
    scoreElement: HTMLSpanElement;
    linesElement: HTMLSpanElement;
    player: Player;
    boardMatrix: number[][];
    score: number = 0;
    lines: number = 0;
    paused: boolean = false;
    nextShapes: string[] = [];
    gameOver: boolean = false;

    private addNextShapes (): void {
        while (this.nextShapes.length < 3) {
            const shape: string = generateRandomShape();
            this.nextShapes.push(shape);
        }
    }

    private draw () {
        Draw.board(this.gameCanvas);
        Matrix.drawMatrix(this.boardMatrix, { x: 0, y: 0 }, this.gameCanvas);
        Matrix.drawMatrix(this.player.matrix, this.player.pos, this.gameCanvas);
        Draw.nextShapes(this.nextShapesCanvas, this.nextShapes);
    }

    private playerReset (): void {
        this.player = new Player(SHAPES[this.nextShapes.shift()]);

        this.addNextShapes();

        if (this.collide()) {
            this.gameIsOver();
        }
    }

    private playerDrop (softDrop?: boolean): void {
        this.player.drop();
        if (softDrop && !this.collide()) {
            this.scoreIncrement(1);
        }
        if (this.collide()) {
            this.player.up();
            this.mergeShapeToBoard();
            this.line();
            this.playerReset();
        }
        this.currentTime = 0;
    }

    private playerMove (dir: number): void {
        this.player.move(dir);
        if (this.collide()) {
            this.player.move(-dir);
        }
    }

    private rotatePlayer () {
        let offset = 1;
        this.player.rotate();
        while (this.collide()) {
            this.player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
        }
    }

    private handleInput (): void {
        if (this.eventHandler.keyPressed(CONFIG.DOWN_KEY)) {
            this.playerDrop(true);
        } else if (this.eventHandler.keyPressed(CONFIG.LEFT_KEY)) {
            this.playerMove(-1);
        } else if (this.eventHandler.keyPressed(CONFIG.RIGHT_KEY)) {
            this.playerMove(1);
        } else if (this.eventHandler.keyPressed(CONFIG.UP_KEY)) {
            this.rotatePlayer();
        }
    }

    private collide (): boolean {
        const [m, o] = [this.player.matrix, this.player.pos];
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0
                    && (this.boardMatrix[y + o.y]
                    && this.boardMatrix[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }

    private line (): void {
        let linesRemoved = 0;
        const lineScores = {
            1: 40,
            2: 100,
            3: 300,
            4: 1200
        };

        for (let y = 0; y < this.boardMatrix.length; ++y) {
            if (this.boardMatrix[y].every((value) => value !== 0)) {
                this.boardMatrix.splice(y, 1);
                this.boardMatrix.unshift(new Array(10).fill(0));
                linesRemoved += 1;
            }
        }

        this.lines += linesRemoved;
        if (linesRemoved > 0) this.scoreIncrement(lineScores[linesRemoved]);
    }

    private scoreIncrement (increment: number): void {
        this.score += increment;
    }

    private mergeShapeToBoard (): void {
        this.player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.boardMatrix[y + this.player.pos.y][x + this.player.pos.x] = value;
                }
            });
        });
    }

    private gameIsOver (): void {
        this.gameCanvas.setOpacity(0.7);
        this.gameCanvas.fillRect(
            0,
            0,
            CONFIG.BOARD_WIDTH,
            CONFIG.BOARD_HEIGHT,
            '#000'
        );
        this.gameCanvas.setOpacity(1);
        this.gameOver = true;

        const gameOverScreen = document.getElementById('gameOverScreen');
        const gameOverScore = document.getElementById('gameOverScore');
        const gameOverLines = document.getElementById('gameOverLines');
        const newGameButton = document.getElementById('newGameButton');
        gameOverScreen.style.display = 'flex';
        gameOverScore.innerHTML = this.score.toString();
        gameOverLines.innerHTML = this.lines.toString();
        newGameButton.addEventListener('click', () => {
            this.newGame();
            gameOverScreen.style.display = 'none';
        });

        window.cancelAnimationFrame(this.stopMain);
    }

    public init (): void {
        this.gameCanvas = new Canvas();
        this.nextShapesCanvas = new Canvas();

        this.gameCanvas.init(
            CONFIG.BOARD_WIDTH,
            CONFIG.BOARD_HEIGHT,
            <HTMLCanvasElement>document.getElementById('gameCanvas')
        );

        this.nextShapesCanvas.init(
            CONFIG.NEXT_SHAPES_WIDTH,
            CONFIG.NEXT_SHAPES_HEIGHT,
            <HTMLCanvasElement>document.getElementById('nextShapesCanvas')
        );

        this.gameCanvas.fillCanvas(CONFIG.BOARD_BG_COLOR);

        this.boardMatrix = Matrix.createBoardMatrix(10, 20);
        this.newGame();
    }

    private newGame (): void {
        this.gameOver = false;

        this.scoreElement = document.getElementById('score');
        this.linesElement = document.getElementById('lines');

        this.boardMatrix.forEach((row) => row.fill(0));
        this.addNextShapes();
        this.score = 0;
        this.lines = 0;
        this.playerReset();

        const startTime = window.performance.now();
        this.gameLoop(startTime);
    }

    private update (tFrame: DOMHighResTimeStamp): void {
        const deltaTime = tFrame - this.lastTime;
        this.lastTime = tFrame;

        this.currentTime += deltaTime;

        if (this.currentTime > CONFIG.UPDATE_INTERVAL) {
            this.playerDrop();
        }

        this.scoreElement.innerHTML = this.score.toString();
        this.linesElement.innerHTML = this.lines.toString();

        if (!this.gameOver) {
            this.draw();
        }
    }

    private gameLoop = (tFrame: DOMHighResTimeStamp): void => {
        this.stopMain = window.requestAnimationFrame(this.gameLoop);

        if (this.eventHandler.keyPressed(27)) {
            this.paused = !this.paused;
        }

        if (!this.paused) {
            this.handleInput();
            this.update(tFrame);
        }

        this.eventHandler.reset();
    }
}

(() => {
    const game: Game = new Game();

    game.init();
})();
