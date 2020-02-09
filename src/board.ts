import Canvas from "./canvas";

export default class Board {
    public static bgColour: string = '#000000';

    public static draw(): void {
        Canvas.fillCanvas(this.bgColour);

        // fill with bg colour
        // draw lines
    }
}
