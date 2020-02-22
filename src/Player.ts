import { CONFIG } from './game.config';

interface IPos {
    x: number;
    y: number;
}

export default class Player {
    public pos: IPos = { x: 0, y: 0 }
    public matrix: number[][];

    constructor (shape: number[][]) {
        this.matrix = shape;
        this.pos = {
            x: Math.floor(CONFIG.BOARD_TILE_WIDTH / 2)
                - Math.floor(this.matrix[0].length / 2),
            y: 0
        };
    }

    public setMatrix (matrix: number[][]) {
        this.matrix = matrix;
    }

    public move (dir: number) {
        this.pos.x += dir;
    }

    public drop (): void {
        this.pos.y++;
    }

    public up (): void {
        this.pos.y--;
    }

    public rotate (): void {
        for (let y = 0; y < this.matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [
                    this.matrix[x][y],
                    this.matrix[y][x]
                ] = [
                    this.matrix[y][x],
                    this.matrix[x][y]
                ];
            }
        }

        this.matrix.forEach((row) => row.reverse());
    }
}
