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

    public static drawMatrix (matrix: number[][] | string[][], offset: {x: number, y: number}, canvas: Canvas): void {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    canvas.fillRect(
                        (x + offset.x) * CONFIG.TILE_WIDTH + 2,
                        (y + offset.y) * CONFIG.TILE_HEIGHT + 2,
                        CONFIG.TILE_WIDTH - 4,
                        CONFIG.TILE_HEIGHT - 4,
                        COLORS[value]
                    );
                    // TODO how to create inner shadow?
                    // canvas.shadow('#000000', 3, -1, -1);
                    // canvas.setGlobalCompositeOperation('source-atop')
                    // canvas.strokeRect(
                    //     (x + offset.x) * CONFIG.TILE_WIDTH + 2,
                    //     (y + offset.y) * CONFIG.TILE_HEIGHT + 2,
                    //     CONFIG.TILE_WIDTH - 4,
                    //     CONFIG.TILE_HEIGHT - 4,
                    //     0,
                    //     '#000'
                    // );
                    // canvas.setGlobalCompositeOperation('source-over');
                }
            });
        });
    }
}
