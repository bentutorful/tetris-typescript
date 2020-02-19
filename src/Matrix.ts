import { CONFIG, COLORS } from './game.config';
import Canvas from './Canvas';

export default class Matrix {
    public static createBoardMatrix (w, h): number[][] {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }

        return matrix;
    }

    public static drawMatrix (matrix: number[][] | string[][], offset: {x: number, y: number}): void {
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
}
