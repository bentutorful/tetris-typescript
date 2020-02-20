export default class Canvas {
    private width: number;
    private height: number;
    private context: CanvasRenderingContext2D;

    public init(width: number, height: number, canvas: HTMLCanvasElement): void {
        this.width = width;
        this.height = height;
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    }

    public fillCanvas(color: string): void {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    public fillRect(x: number, y: number, w: number, h: number, color: string): void {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }
}
