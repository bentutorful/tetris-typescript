export default class EventHandler {
    private keyDown: { [keyCode: number]: boolean; } = {};

    constructor () {
        document.addEventListener('keydown', (e) => { this.keyboardDown(e) });
    }

    private keyboardDown (event: KeyboardEvent): void {
        event.preventDefault();
        this.keyDown[event.keyCode] = true;
    }

    public keyPressed (keyCode: number) {
        return this.keyDown[keyCode];
    }

    public reset (): void {
        this.keyDown = {};
    }
}
