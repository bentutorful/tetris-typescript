import Canvas from "./canvas";

export default class Board {
    private static bgColour: string = '#000000';
    private static width: number;
    private static height: number;

    public static init(): void {
        // TODO compute height and width based on canvas size, with 20px gap
        this.width = 420;
        this.height = 760;

        // setup grid
    }

    public static draw(): void {
        Canvas.fillRect(20, 20, this.width, this.height, this.bgColour);

        // draw grid
    }
}
