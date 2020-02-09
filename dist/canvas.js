export default class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    init() {
        this.canvas = document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    fill(color) {
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.fillStyle = color;
        this.context.fill();
    }
}
