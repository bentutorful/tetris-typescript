import Game from "game";
class App {
    constructor(game) {
        this._game = game;
    }
    init() {
        this._game.gameLoop(window.performance.now());
    }
}
;
(() => {
    let app = new App(new Game());
    app.init();
})();
