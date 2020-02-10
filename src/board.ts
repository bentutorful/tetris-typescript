import Canvas from "./canvas";
import { CONFIG } from './constants/game.config';

export default class Board {
    private static bgColour: string = '#555555';
    private static width: number;
    private static height: number;

    public static init(): void {
        this.width = CONFIG.BOARD_WIDTH * 40;
        this.height = CONFIG.BOARD_HEIGHT * 40;

        // setup grid
    }

    public static draw(): void {
        Canvas.fillRect(20, 20, this.width, this.height, this.bgColour);

        // draw grid
    }
}
