import Canvas from "./canvas";

export default class Shape {
    private dirs: number[];
    private color: string;
    private currentDir: number;
    private yOffset: number = 0;
    private squareOccupied: boolean = true;

    constructor(dirs, color, currentDir) {
        this.dirs = dirs;
        this.color = color;
        this.currentDir = this.dirs[currentDir];
    }

    public mapShapeMatrix(callback): void {
        let row = 0, col = 0;
        let x = 0, y = 0;

        for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
            x = (col + 1) * 20;
            y = (row + 1) * 20;

            if (this.currentDir & bit) {
                callback(x, y)
            }
            if (++col === 4) {
                col = 0;
                ++row;
            }
        }
    }

    private clearShape(): void {
        this.mapShapeMatrix(
            (x, y): void => {
                Canvas.clearRect(x, y + (20 * this.yOffset), 20, 20,);
            }
        )
    }

    public drawShape(): void {
        this.mapShapeMatrix(
            (x, y): void => {
                Canvas.fillRect(x, y + (20 * this.yOffset), 20, 20, this.color);
            }
        );
    }

    public lowerShape(): void {
        // TODO clear shape before redraw
        this.clearShape();
        this.yOffset += 1;
        this.drawShape();
    }
}
