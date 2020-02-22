import { CONFIG, SHAPES } from './game.config';
import Matrix from './Matrix';
import Canvas from './Canvas';

export default class Draw {
    public static board (canvas: Canvas): void {
        for (let x = 0; x < CONFIG.BOARD_TILE_WIDTH; ++x) {
            for (let y = 0; y < CONFIG.BOARD_TILE_HEIGHT; ++y) {
                canvas.fillRoundedRect(
                    x * CONFIG.TILE_WIDTH,
                    y * CONFIG.TILE_HEIGHT,
                    CONFIG.TILE_WIDTH - 1.5,
                    CONFIG.TILE_HEIGHT - 1.5,
                    3,
                    CONFIG.BOARD_BG_COLOR,
                    CONFIG.BOARD_STROKE_COLOR,
                    3
                );
            }
        }
    }

    public static nextShapes (canvas: Canvas, nextShapes: string[]): void {
        for (let i = 0; i < nextShapes.length; ++i) {
            const shape = SHAPES[nextShapes[i]];

            const shapeWidth = shape[0].length;
            const posX = (6 / 2) - ((shapeWidth) / 2);

            // TODO make I shape centered
            const posY = (3 * (i + 1)) - 2;

            Matrix.drawMatrix(shape, { x: posX, y: posY }, canvas);
        }
    }
}
