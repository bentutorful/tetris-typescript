import Canvas from "canvas";
export default class Board {
    static draw() {
        const canvas = new Canvas(640, 800);
        canvas.fill(this.bgColour);
    }
}
Board.bgColour = '#555555';
