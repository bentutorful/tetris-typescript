import Canvas from "./Canvas";
import Shape from "./Shape";
import { CONFIG } from './constants/game.config';

export default class Board {
    private static bgColour: string = CONFIG.BOARD_BG_COLOR;
    private static width: number;
    private static height: number;

    public static init(): void {
        this.width = CONFIG.BOARD_WIDTH;
        this.height = CONFIG.BOARD_HEIGHT;

        // setup grid
    }

    public static draw(): void {
        Canvas.fillRect(CONFIG.BOARD_START_X, CONFIG.BOARD_START_Y, this.width, this.height, this.bgColour);

        // draw grid
    }

    public static createBoardMatrix(w: number, h: number): number[][] {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w). fill(0));
        }
        return matrix;
    }

    public static mergeShapeToMatrix(shape: Shape, matrix: number[][]) {
        shape.mapShapeMatrix(
            (col: number, row: number): void => {
                matrix[row + shape.offset.y][col + shape.offset.x] = 1;
            }
        )
    }
}
