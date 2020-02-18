export default class Canvas {
    private static width: number;
    private static height: number;
    private static context: CanvasRenderingContext2D;

    public static init(width: number, height: number, canvas: HTMLCanvasElement): void {
        this.width = width;
        this.height = height;
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    }

    public static fillCanvas(color: string): void {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    public static fillRect(x: number, y: number, w: number, h: number, color: string): void {
        console.log(x, y, w, h, color);
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }

    public static strokeRect(x: number, y: number, w: number, h: number, lineWidth: number, color: string): void {
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, w, h);
    }

    public static clearRect(x: number, y: number, w: number, h: number): void {
        this.context.clearRect(x, y, w, h);
    }
}
