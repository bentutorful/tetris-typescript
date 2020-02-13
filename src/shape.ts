import Canvas from "./Canvas";
import Board from "./Board";
import { CONFIG } from './constants/game.config';
import { IPosition } from './types/position';

export default class Shape {
    private dirs: number[];
    private color: string;
    private currentDir: number;
    private offset: IPosition = { x: 0, y: 0 };

    constructor(dirs, color, currentDir) {
        this.dirs = dirs;
        this.color = color;
        this.currentDir = currentDir;
    }

    private calculateXandY(col, row): IPosition {
        let x = ((col + 1 + this.offset.x) * CONFIG.TILE_WIDTH) - CONFIG.BOARD_START_X;
        let y = ((row + 1 + this.offset.y) * CONFIG.TILE_HEIGHT) - CONFIG.BOARD_START_Y;

        return { x, y }
    }

    public mapShapeMatrix(callback): void {
        let row = 0, col = 0;

        for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
            if (this.dirs[this.currentDir] & bit) {
                callback(col, row)
            }
            if (++col === 4) {
                col = 0;
                ++row;
            }
        }
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

    public collide

    private redraw(): void {
        this.clearShape();
        Board.draw();
        this.drawShape();
    }

    public lowerShape(): void {
        this.offset.y += 1;
        this.redraw();
    }

    public leftShape(): void {
        this.offset.x--;
        this.redraw();
    }

    public rightShape(): void {
        this.offset.x++;
        this.redraw();
    }

    public rotateShape(): void {
        if (this.currentDir === 3) {
            this.currentDir = 0;
        } else {
            this.currentDir++;
        }

        this.redraw();
    }
}
