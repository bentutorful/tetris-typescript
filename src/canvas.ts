export default class {
    private static width: number;
    private static height: number;
    private static canvas: HTMLCanvasElement;
    private static context: CanvasRenderingContext2D;

    public static init(width: number, height: number, canvas: HTMLCanvasElement): void {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;
    }

    public static fillCanvas(color: string) {
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.fillStyle = color;
        this.context.fill();
    }
}
