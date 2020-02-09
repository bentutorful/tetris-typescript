import Canvas from "canvas";

export default class Board {
    public static bgColour: string = '#555555';

    public static draw(): void {
        const canvas = new Canvas(640, 800);

        canvas.fill(this.bgColour);
    }
}
