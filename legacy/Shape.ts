import Canvas from "./Canvas";
import Board from "./Board";
import { CONFIG } from './constants/game.config';
import { IPosition } from './types/position';

export default class Shape {
    private dirs: number[];
    private color: string;
    private currentDir: number;
    public offset: IPosition = { x: 0, y: 0 };

    constructor(dirs, color, currentDir) {
        this.dirs = dirs;
        this.color = color;
        this.currentDir = currentDir;
    }

    private calculateXandY(col: number, row: number): IPosition {
        let x = ((col + 1 + this.offset.x) * CONFIG.TILE_WIDTH) - CONFIG.BOARD_START_X;
        let y = ((row + 1 + this.offset.y) * CONFIG.TILE_HEIGHT) - CONFIG.BOARD_START_Y;

        return { x, y }
    }

    public mapShapeMatrix(callback: (col: number, row: number) => any): boolean {
        let row = 0, col = 0;

        for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
            if (this.dirs[this.currentDir] & bit) {
                if (callback(col, row)) {
                    return true;
                }
            }
            if (++col === 4) {
                col = 0;
                ++row;
            }
        }

        return false;
    }

    private collide(boardMatrix: number[][]): boolean {
        return this.mapShapeMatrix(
            (col: number, row: number): boolean => {
                if ((boardMatrix[row + this.offset.y] &&
                    boardMatrix[row + this.offset.y][col + this.offset.x]) !== 0) {
                    return true;
                }
            }
        )
    }

    private clearShape(): void {
        this.mapShapeMatrix(
            (col: number, row: number): void => {
                const position = this.calculateXandY(col, row);

                Canvas.clearRect(
                    position.x,
                    position.y,
                    CONFIG.TILE_WIDTH,
                    CONFIG.TILE_HEIGHT
                );
            }
        )
    }

    public drawShape(): void {
        this.mapShapeMatrix(
            (col: number, row: number): void => {
                const position = this.calculateXandY(col, row);

                // TODO work out inner stroke
                Canvas.fillRect(
                    position.x,
                    position.y,
                    CONFIG.TILE_WIDTH,
                    CONFIG.TILE_HEIGHT,
                    this.color
                );
                // Canvas.strokeRect(pos.x + 3, pos.y + 3, CONFIG.TILE_WIDTH - 6, CONFIG.TILE_HEIGHT - 6, 6, 'red')
            }
        );
    }

    private redraw(boardMatrix?: number[][]): void {
        // Board.draw();
        this.drawShape();
    }

    public lowerShape(boardMatrix: number[][]): void {
        this.offset.y += 1;
        if (this.collide(boardMatrix)) {
            this.offset.y -= 1;
            Board.mergeShapeToMatrix(this, boardMatrix);
            Board.mapBoardMatrix(boardMatrix,
                (x: number, y: number): void => {
                    const posX = (x * 40) + CONFIG.BOARD_START_X;
                    const posY = (y * 40) + CONFIG.BOARD_START_Y;

                    Canvas.fillRect(
                        posX,
                        posY,
                        CONFIG.TILE_WIDTH,
                        CONFIG.TILE_HEIGHT,
                        this.color
                    );
                }
            )
            this.offset.y = 0;
        } else {
            this.clearShape();
            Board.draw();
        }
        this.redraw();
    }

    public leftShape(): void {
        this.offset.x--;
        this.clearShape();
        this.redraw();
    }

    public rightShape(): void {
        this.offset.x++;
        this.clearShape();
        this.redraw();
    }

    public rotateShape(): void {
        if (this.currentDir === 3) {
            this.currentDir = 0;
        } else {
            this.currentDir++;
        }

        this.clearShape();
        this.redraw();
    }
}
