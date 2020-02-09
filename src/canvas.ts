export default class {
    private width: number;
    private height: number;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public init(): void {
        this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    public fill(color: string) {
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.fillStyle = color;
        this.context.fill();
    }
}
