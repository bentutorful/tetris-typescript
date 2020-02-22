export default class Canvas {
    private width: number;
    private height: number;
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    public init (width: number, height: number, canvas: HTMLCanvasElement): void {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = canvas.getContext('2d');
    }

    public fillCanvas (color: string): void {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    public fillRect (x: number, y: number, w: number, h: number, color: string): void {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }

    public fillRoundedRect (
        x: number,
        y: number,
        w: number,
        h: number,
        r: number,
        color: string,
        strokeColor?: string,
        strokeWidth?: number
    ): void {
        this.context.fillStyle = color;
        const deg = Math.PI / 180;

        this.context.beginPath();

        this.context.moveTo(x + r, y);
        this.context.lineTo(x + w - r, y);
        this.context.arc(x + w - r, y + r, r, deg * 270, deg * 0);

        this.context.lineTo(x + w, y + h - r);
        this.context.arc(x + w - r, y + h - r, r, deg * 0, deg * 90);

        this.context.lineTo(x + r, y + h);
        this.context.arc(x + r, y + h - r, r, deg * 90, deg * 180);

        this.context.lineTo(x, y + r);
        this.context.arc(x + r, y + r, r, deg * 180, deg * 270);

        this.context.closePath();

        if (strokeWidth && strokeColor) {
            this.context.strokeStyle = strokeColor;
            this.context.lineWidth = strokeWidth;
            this.context.stroke();
        }
        this.context.fill();
    }

    public strokeRect (
        x: number,
        y: number,
        w: number,
        h: number,
        strokeWidth: number,
        color: string
    ): void {
        this.context.strokeStyle = color;
        this.context.lineWidth = strokeWidth;
        this.context.strokeRect(x, y, w, h);
    }

    public arc (
        x: number,
        y: number,
        r: number,
        sAngle: number,
        eAngle: number,
        color: string
    ): void {
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, r, sAngle, eAngle);
        this.context.closePath();
        this.context.fill();
    }

    public shadow (
        color: string,
        blur: number,
        offsetX: number,
        offsetY: number
    ): void {
        this.context.shadowColor = color;
        this.context.shadowBlur = blur;
        this.context.shadowOffsetX = offsetX;
        this.context.shadowOffsetY = offsetY;
    }

    public setGlobalCompositeOperation (value: string) {
        this.context.globalCompositeOperation = value;
    }
}
