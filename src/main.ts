import Game from "game";

class App {
    private _game: Game;

    constructor(game: Game) {
        this._game = game;
    }

    public init(): void {
        this._game.gameLoop(window.performance.now());
    }
}

;(() => {
    let app: App = new App(new Game());

    app.init();
})();
