import { CONFIG, SHAPES, COLORS } from './game.config';
import Canvas from './Canvas';
import EventHandler from './EventHandler';

interface IPlayer {
    pos: { x: number, y: number },
    matrix?: number[][]
}

export default class Game {
    updateInterval: number = CONFIG.UPDATE_INTERVAL;
    lastTime: number = 0;
    currentTime: number = 0;
    eventHandler: EventHandler = new EventHandler();

    player: IPlayer = {
        pos: { x: 3, y: 0 }
    };
    boardMatrix: number[][];


    private generateRandomShape(): void {
        // TODO: possibly change random algorithm
        const pieces = ['I','I','I','I',
                        'J','J','J','J',
                        'L','L','L','L',
                        'O','O','O','O',
                        'S','S','S','S',
                        'T','T','T','T',
                        'Z','Z','Z','Z',]
        const next = pieces.splice((Math.random() * (pieces.length - 1)), 1)[0];

        this.player.matrix = SHAPES[next];
    }

    private createBoardMatrix (w, h): void {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }

        this.boardMatrix = matrix;
    }

    private drawMatrix (matrix: number[][] | string[][], offset: {x: number, y: number}): void {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    Canvas.fillRect(
                        (x + offset.x) * CONFIG.TILE_WIDTH,
                        (y + offset.y) * CONFIG.TILE_HEIGHT,
                        CONFIG.TILE_WIDTH,
                        CONFIG.TILE_HEIGHT,
                        COLORS[value]
                    );
                }
            });
        });
    }

    private draw () {
        Canvas.fillCanvas(CONFIG.BOARD_BG_COLOR);

        this.drawMatrix(this.boardMatrix, { x: 0, y: 0 });
        this.drawMatrix(this.player.matrix, this.player.pos);
    }

    private playerReset (): void {
        this.generateRandomShape();
        this.player.pos.x = Math.floor(this.boardMatrix[0].length / 2) -
                            Math.floor(this.player.matrix[0].length / 2);
        this.player.pos.y = 0;
        if (this.collide()) {
            // TODO currently just clears the board, but will
            // need to end the game
            this.boardMatrix.forEach((row) => row.fill(0))
        }
    }

    private playerDrop (): void {
        this.player.pos.y++
        if (this.collide()) {
            this.player.pos.y--;
            this.mergeShapeToBoard();
            this.playerReset();
        }
        this.currentTime = 0;
    }

    private playerMove (dir: number): void {
        this.player.pos.x += dir;
        if (this.collide()) {
            this.player.pos.x -= dir;
        }
    }

    private rotate () {
        for (let y = 0; y < this.player.matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [
                    this.player.matrix[x][y],
                    this.player.matrix[y][x]
                ] = [
                    this.player.matrix[y][x],
                    this.player.matrix[x][y]
                ];
            }
        }

        this.player.matrix.forEach((row) => row.reverse());
    }

    private rotatePlayer () {
        let offset = 1;
        this.rotate();
        while (this.collide()) {
            this.player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
        }
    }

    private handleInput (): void {
        if (this.eventHandler.keyPressed(CONFIG.DOWN_KEY)) {
            this.playerDrop();
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
                if (m[y][x] !== 0 && (this.boardMatrix[y + o.y] && this.boardMatrix[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }

    private mergeShapeToBoard (): void {
        this.player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.boardMatrix[y + this.player.pos.y][x + this.player.pos.x] = value;
                }
            })
        })
    }

    public init (): void {
        Canvas.init(
            CONFIG.BOARD_WIDTH,
            CONFIG.BOARD_HEIGHT,
            <HTMLCanvasElement>document.getElementById("gameCanvas")
        );

        Canvas.fillCanvas(CONFIG.BOARD_BG_COLOR);

        this.createBoardMatrix(10, 20);
        this.playerReset();

        const startTime = window.performance.now();
        this.gameLoop(startTime);
    }

    private update (tFrame: DOMHighResTimeStamp): void {
        this.handleInput();

        const deltaTime = tFrame - this.lastTime;
        this.lastTime = tFrame;

        this.currentTime += deltaTime;

        if (this.currentTime > CONFIG.UPDATE_INTERVAL) {
            this.playerDrop()
        }

        this.draw();
        this.eventHandler.reset();
    }

    private gameLoop = (tFrame: DOMHighResTimeStamp): void => {
        const stopMain = window.requestAnimationFrame(this.gameLoop);

        this.update(tFrame);
    }
}

;(() => {
    const game: Game = new Game();

    game.init();
})();
