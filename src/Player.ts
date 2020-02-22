interface IPos {
    x: number;
    y: number;
}

export default class Player {
    pos: IPos = { x: 0, y: 0 }
    matrix: number[][];

    public move (dir: number) {
        this.pos.x += dir;
    }

    public drop (softDrop?: boolean): void {
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
