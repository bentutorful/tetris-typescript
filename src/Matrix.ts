import { CONFIG, COLORS } from './game.config';
import Canvas from './Canvas';

export default class Matrix {
    public static createBoardMatrix (w, h): number[][] {
        let height = h;
        const matrix = [];
        while (height--) {
            matrix.push(new Array(w).fill(0));
        }

        return matrix;
    }

    public static drawMatrix (
        matrix: number[][] | string[][],
        offset: {x: number, y: number},
        canvas: Canvas
    ): void {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    canvas.fillRoundedRect(
                        (x + offset.x) * CONFIG.TILE_WIDTH,
                        (y + offset.y) * CONFIG.TILE_HEIGHT,
                        CONFIG.TILE_WIDTH - 2,
                        CONFIG.TILE_HEIGHT - 2,
                        3,
                        COLORS[value]
                    );
                }
            });
        });
    }
}
