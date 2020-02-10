import Canvas from "./canvas";
import Board from "./board";
import { CONFIG } from './constants/game.config';
import { IPosition } from './types/position';

export default class Shape {
    private dirs: number[];
    private color: string;
    private currentDir: number;
    private yOffset: number = 0;

    constructor(dirs, color, currentDir) {
        this.dirs = dirs;
        this.color = color;
        this.currentDir = this.dirs[currentDir];
    }

    private calculateXandY(col, row): IPosition {
        let x = ((col + 1) * CONFIG.TILE_WIDTH) - CONFIG.BOARD_START_X;
        let y = ((row + 1) * CONFIG.TILE_HEIGHT) - CONFIG.BOARD_START_Y;

        if (this.yOffset > 0) {
            y += CONFIG.TILE_HEIGHT * this.yOffset
        }

        return {
            x,
            y
        }
    }

    private mapShapeMatrix(callback): void {
        let row = 0, col = 0;

        for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
            if (this.currentDir & bit) {
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
            (col, row): void => {
                const pos = this.calculateXandY(col, row);

                Canvas.clearRect(pos.x, pos.y, CONFIG.TILE_WIDTH, CONFIG.TILE_HEIGHT);
            }
        )
    }

    public drawShape(): void {
        this.mapShapeMatrix(
            (col, row): void => {
                const pos = this.calculateXandY(col, row);

                // TODO work out inner stroke
                Canvas.fillRect(pos.x + 3, pos.y + 3, CONFIG.TILE_WIDTH - 6, CONFIG.TILE_HEIGHT - 6, this.color);
                Canvas.strokeRect(pos.x + 3, pos.y + 3, CONFIG.TILE_WIDTH - 6, CONFIG.TILE_HEIGHT - 6, 6, 'red')
            }
        );
    }

    public lowerShape(): void {
        this.clearShape();
        Board.draw();
        this.yOffset += 1;
        this.drawShape();
    }
}
