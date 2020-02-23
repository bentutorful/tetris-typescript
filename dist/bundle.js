/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Canvas.ts":
/*!***********************!*\
  !*** ./src/Canvas.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
class Canvas {
    init(width, height, canvas) {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = canvas.getContext('2d');
    }
    fillCanvas(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }
    fillRect(x, y, w, h, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }
    fillRoundedRect(x, y, w, h, r, color, strokeColor, strokeWidth) {
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
    strokeRect(x, y, w, h, strokeWidth, color) {
        this.context.strokeStyle = color;
        this.context.lineWidth = strokeWidth;
        this.context.strokeRect(x, y, w, h);
    }
    arc(x, y, r, sAngle, eAngle, color) {
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, r, sAngle, eAngle);
        this.context.closePath();
        this.context.fill();
    }
    shadow(color, blur, offsetX, offsetY) {
        this.context.shadowColor = color;
        this.context.shadowBlur = blur;
        this.context.shadowOffsetX = offsetX;
        this.context.shadowOffsetY = offsetY;
    }
    setOpacity(opacity) {
        this.context.globalAlpha = opacity;
    }
}


/***/ }),

/***/ "./src/Draw.ts":
/*!*********************!*\
  !*** ./src/Draw.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draw; });
/* harmony import */ var _game_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.config */ "./src/game.config.ts");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix */ "./src/Matrix.ts");


class Draw {
    static board(canvas) {
        for (let x = 0; x < _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_TILE_WIDTH; ++x) {
            for (let y = 0; y < _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_TILE_HEIGHT; ++y) {
                canvas.fillRoundedRect(x * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, y * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH - 1.5, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT - 1.5, 3, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_STROKE_COLOR, 3);
            }
        }
    }
    static nextShapes(canvas, nextShapes) {
        canvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        for (let i = 0; i < nextShapes.length; ++i) {
            const shape = _game_config__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][nextShapes[i]];
            const shapeWidth = shape[0].length;
            const posX = (6 / 2) - ((shapeWidth) / 2);
            // TODO make I shape centered
            const posY = (3 * (i + 1)) - 2;
            _Matrix__WEBPACK_IMPORTED_MODULE_1__["default"].drawMatrix(shape, { x: posX, y: posY }, canvas);
        }
    }
}


/***/ }),

/***/ "./src/EventHandler.ts":
/*!*****************************!*\
  !*** ./src/EventHandler.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventHandler; });
class EventHandler {
    constructor() {
        this.keyDown = {};
        document.addEventListener('keydown', (e) => { this.keyboardDown(e); });
    }
    keyboardDown(event) {
        event.preventDefault();
        this.keyDown[event.keyCode] = true;
    }
    keyPressed(keyCode) {
        return this.keyDown[keyCode];
    }
    reset() {
        this.keyDown = {};
    }
}


/***/ }),

/***/ "./src/Matrix.ts":
/*!***********************!*\
  !*** ./src/Matrix.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });
/* harmony import */ var _game_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.config */ "./src/game.config.ts");

class Matrix {
    static createBoardMatrix(w, h) {
        let height = h;
        const matrix = [];
        while (height--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    }
    static drawMatrix(matrix, offset, canvas) {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    canvas.fillRoundedRect((x + offset.x) * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, (y + offset.y) * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH - 2, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT - 2, 3, _game_config__WEBPACK_IMPORTED_MODULE_0__["COLORS"][value]);
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _game_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.config */ "./src/game.config.ts");

class Player {
    constructor(shape) {
        this.pos = { x: 0, y: 0 };
        this.matrix = shape;
        this.pos = {
            x: Math.floor(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_TILE_WIDTH / 2)
                - Math.floor(this.matrix[0].length / 2),
            y: 0
        };
    }
    setMatrix(matrix) {
        this.matrix = matrix;
    }
    move(dir) {
        this.pos.x += dir;
    }
    drop() {
        this.pos.y++;
    }
    up() {
        this.pos.y--;
    }
    rotate() {
        for (let y = 0; y < this.matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [
                    this.matrix[x][y],
                    this.matrix[y][x]
                ] = [
                    this.matrix[y][x],
                    this.matrix[x][y]
                ];
            }
        }
        this.matrix.forEach((row) => row.reverse());
    }
}


/***/ }),

/***/ "./src/game.config.ts":
/*!****************************!*\
  !*** ./src/game.config.ts ***!
  \****************************/
/*! exports provided: CONFIG, SHAPES, COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
const CONFIG = {
    TILE_WIDTH: 30,
    TILE_HEIGHT: 30,
    BOARD_TILE_WIDTH: 10,
    BOARD_TILE_HEIGHT: 20,
    get BOARD_WIDTH() { return this.TILE_WIDTH * this.BOARD_TILE_WIDTH; },
    get BOARD_HEIGHT() { return this.TILE_HEIGHT * this.BOARD_TILE_HEIGHT; },
    get NEXT_SHAPES_WIDTH() { return this.TILE_WIDTH * 6; },
    get NEXT_SHAPES_HEIGHT() { return this.TILE_HEIGHT * 10; },
    BOARD_BG_COLOR: '#4e4e4e',
    BOARD_STROKE_COLOR: '#2b2b2b',
    UPDATE_INTERVAL: 1000,
    // key codes
    UP_KEY: 38,
    DOWN_KEY: 40,
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
};
const SHAPES = {
    T: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    L: [
        [0, 0, 2],
        [2, 2, 2],
        [0, 0, 0]
    ],
    J: [
        [3, 0, 0],
        [3, 3, 3],
        [0, 0, 0]
    ],
    O: [
        [4, 4],
        [4, 4],
    ],
    S: [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0]
    ],
    Z: [
        [6, 6, 0],
        [0, 6, 6],
        [0, 0, 0]
    ],
    I: [
        [0, 0, 0, 0],
        [7, 7, 7, 7],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
};
const COLORS = {
    1: '#ee82ee',
    2: '#eb8b23',
    3: '#1e90ff',
    4: '#ffc63e',
    5: '#59cb86',
    6: '#dc6555',
    7: '#23e3eb' // cyan
};


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _game_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.config */ "./src/game.config.ts");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.ts");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Matrix */ "./src/Matrix.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./src/Player.ts");
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Draw */ "./src/Draw.ts");






class Game {
    constructor() {
        this.updateInterval = _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].UPDATE_INTERVAL;
        this.lastTime = 0;
        this.currentTime = 0;
        this.eventHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.score = 0;
        this.lines = 0;
        this.running = false;
        this.nextShapes = [];
        this.bag = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
        this.gameLoop = (tFrame) => {
            this.stopMain = window.requestAnimationFrame(this.gameLoop);
            if (this.eventHandler.keyPressed(27)) {
                this.running = !this.running;
            }
            if (this.running) {
                this.handleInput();
                this.update(tFrame);
            }
            this.eventHandler.reset();
        };
    }
    addNextShapes() {
        if (this.bag.length === 0) {
            this.bag = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
        }
        while (this.nextShapes.length < 3) {
            const shape = this.bag.splice((Math.floor(Math.random() * this.bag.length)), 1)[0];
            this.nextShapes.push(shape);
        }
    }
    draw() {
        _Draw__WEBPACK_IMPORTED_MODULE_5__["default"].board(this.gameCanvas);
        _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(this.boardMatrix, { x: 0, y: 0 }, this.gameCanvas);
        _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(this.player.matrix, this.player.pos, this.gameCanvas);
        _Draw__WEBPACK_IMPORTED_MODULE_5__["default"].nextShapes(this.nextShapesCanvas, this.nextShapes);
    }
    playerReset() {
        const newShapeMatrix = _game_config__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][this.nextShapes.shift()];
        const newShape = [];
        for (let i = 0; i < newShapeMatrix.length; ++i) {
            newShape[i] = [...newShapeMatrix[i]];
        }
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_4__["default"](newShape);
        this.addNextShapes();
        if (this.collide()) {
            this.gameIsOver();
        }
    }
    playerDrop(softDrop) {
        this.player.drop();
        if (softDrop && !this.collide()) {
            this.scoreIncrement(1);
        }
        if (this.collide()) {
            this.player.up();
            this.mergeShapeToBoard();
            this.line();
            this.playerReset();
        }
        this.currentTime = 0;
    }
    playerMove(dir) {
        this.player.move(dir);
        if (this.collide()) {
            this.player.move(-dir);
        }
    }
    rotatePlayer() {
        let offset = 1;
        this.player.rotate();
        while (this.collide()) {
            this.player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
        }
    }
    handleInput() {
        if (this.eventHandler.keyPressed(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].DOWN_KEY)) {
            this.playerDrop(true);
        }
        else if (this.eventHandler.keyPressed(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].LEFT_KEY)) {
            this.playerMove(-1);
        }
        else if (this.eventHandler.keyPressed(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].RIGHT_KEY)) {
            this.playerMove(1);
        }
        else if (this.eventHandler.keyPressed(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].UP_KEY)) {
            this.rotatePlayer();
        }
    }
    collide() {
        const [m, o] = [this.player.matrix, this.player.pos];
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0
                    && (this.boardMatrix[y + o.y]
                        && this.boardMatrix[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }
    line() {
        let linesRemoved = 0;
        const lineScores = {
            1: 40,
            2: 100,
            3: 300,
            4: 1200
        };
        for (let y = 0; y < this.boardMatrix.length; ++y) {
            if (this.boardMatrix[y].every((value) => value !== 0)) {
                this.boardMatrix.splice(y, 1);
                this.boardMatrix.unshift(new Array(10).fill(0));
                linesRemoved += 1;
            }
        }
        this.lines += linesRemoved;
        if (linesRemoved > 0)
            this.scoreIncrement(lineScores[linesRemoved]);
    }
    scoreIncrement(increment) {
        this.score += increment;
    }
    mergeShapeToBoard() {
        this.player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.boardMatrix[y + this.player.pos.y][x + this.player.pos.x] = value;
                }
            });
        });
    }
    gameIsOver() {
        this.running = false;
        this.gameCanvas.setOpacity(0.7);
        this.gameCanvas.fillRect(0, 0, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_HEIGHT, '#000');
        this.gameCanvas.setOpacity(1);
        const gameOverScreen = document.getElementById('gameOverScreen');
        const gameOverScore = document.getElementById('gameOverScore');
        const gameOverLines = document.getElementById('gameOverLines');
        const newGameButton = document.getElementById('gameOverNewGame');
        const mainMenuButton = document.getElementById('mainMenuButton');
        gameOverScreen.style.display = 'flex';
        gameOverScore.innerHTML = this.score.toString();
        gameOverLines.innerHTML = this.lines.toString();
        newGameButton.addEventListener('click', () => {
            this.newGame();
            gameOverScreen.style.display = 'none';
        });
        mainMenuButton.addEventListener('click', () => {
            this.mainMenu();
            gameOverScreen.style.display = 'none';
        });
    }
    mainMenu() {
        const mainMenuScreen = document.getElementById('mainMenuScreen');
        const newGameButton = document.getElementById('mainMenuNewGame');
        mainMenuScreen.style.display = 'flex';
        this.gameCanvas.setOpacity(0.7);
        this.gameCanvas.fillRect(0, 0, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_HEIGHT, '#000');
        this.gameCanvas.setOpacity(1);
        newGameButton.addEventListener('click', () => {
            this.newGame();
            mainMenuScreen.style.display = 'none';
        });
    }
    init() {
        this.gameCanvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.nextShapesCanvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.gameCanvas.init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_HEIGHT, document.getElementById('gameCanvas'));
        this.nextShapesCanvas.init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].NEXT_SHAPES_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].NEXT_SHAPES_HEIGHT, document.getElementById('nextShapesCanvas'));
        this.gameCanvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.boardMatrix = _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].createBoardMatrix(10, 20);
        const startTime = window.performance.now();
        this.gameLoop(startTime);
    }
    newGame() {
        this.scoreElement = document.getElementById('score');
        this.linesElement = document.getElementById('lines');
        this.boardMatrix.forEach((row) => row.fill(0));
        this.addNextShapes();
        this.score = 0;
        this.lines = 0;
        this.playerReset();
        this.running = true;
    }
    update(tFrame) {
        const deltaTime = tFrame - this.lastTime;
        this.lastTime = tFrame;
        this.currentTime += deltaTime;
        if (this.currentTime > _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].UPDATE_INTERVAL) {
            this.playerDrop();
        }
        this.scoreElement.innerHTML = this.score.toString();
        this.linesElement.innerHTML = this.lines.toString();
        if (this.running) {
            this.draw();
        }
    }
}
(() => {
    const game = new Game();
    game.init();
    game.mainMenu();
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1EQUFNLGNBQWMsbURBQU07QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBTTtBQUNwQyxvQ0FBb0MsK0NBQU07QUFDMUMsNkJBQTZCLG1EQUFNLGNBQWMsbURBQU07QUFDdkQsbUNBQW1DLG1EQUFNLG9CQUFvQixtREFBTTtBQUNuRSxtQ0FBbUMsbURBQU07QUFDekMsMkJBQTJCLCtDQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xyXG4gICAgaW5pdCh3aWR0aCwgaGVpZ2h0LCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG4gICAgZmlsbENhbnZhcyhjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgZmlsbFJlY3QoeCwgeSwgdywgaCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG4gICAgZmlsbFJvdW5kZWRSZWN0KHgsIHksIHcsIGgsIHIsIGNvbG9yLCBzdHJva2VDb2xvciwgc3Ryb2tlV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY29uc3QgZGVnID0gTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh4ICsgciwgeSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4ICsgdyAtIHIsIHkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCArIHcgLSByLCB5ICsgciwgciwgZGVnICogMjcwLCBkZWcgKiAwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHggKyB3LCB5ICsgaCAtIHIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCArIHcgLSByLCB5ICsgaCAtIHIsIHIsIGRlZyAqIDAsIGRlZyAqIDkwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHggKyByLCB5ICsgaCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4ICsgciwgeSArIGggLSByLCByLCBkZWcgKiA5MCwgZGVnICogMTgwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHgsIHkgKyByKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHggKyByLCB5ICsgciwgciwgZGVnICogMTgwLCBkZWcgKiAyNzApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBpZiAoc3Ryb2tlV2lkdGggJiYgc3Ryb2tlQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBzdHJva2VXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgc3Ryb2tlUmVjdCh4LCB5LCB3LCBoLCBzdHJva2VXaWR0aCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbiAgICBhcmMoeCwgeSwgciwgc0FuZ2xlLCBlQW5nbGUsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHgsIHksIHIsIHNBbmdsZSwgZUFuZ2xlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuICAgIHNoYWRvdyhjb2xvciwgYmx1ciwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dCbHVyID0gYmx1cjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSBvZmZzZXRZO1xyXG4gICAgfVxyXG4gICAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT05GSUcsIFNIQVBFUyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5pbXBvcnQgTWF0cml4IGZyb20gJy4vTWF0cml4JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyB7XHJcbiAgICBzdGF0aWMgYm9hcmQoY2FudmFzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBDT05GSUcuQk9BUkRfVElMRV9XSURUSDsgKyt4KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ09ORklHLkJPQVJEX1RJTEVfSEVJR0hUOyArK3kpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsUm91bmRlZFJlY3QoeCAqIENPTkZJRy5USUxFX1dJRFRILCB5ICogQ09ORklHLlRJTEVfSEVJR0hULCBDT05GSUcuVElMRV9XSURUSCAtIDEuNSwgQ09ORklHLlRJTEVfSEVJR0hUIC0gMS41LCAzLCBDT05GSUcuQk9BUkRfQkdfQ09MT1IsIENPTkZJRy5CT0FSRF9TVFJPS0VfQ09MT1IsIDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIG5leHRTaGFwZXMoY2FudmFzLCBuZXh0U2hhcGVzKSB7XHJcbiAgICAgICAgY2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkJPQVJEX0JHX0NPTE9SKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5leHRTaGFwZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBTSEFQRVNbbmV4dFNoYXBlc1tpXV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlV2lkdGggPSBzaGFwZVswXS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc1ggPSAoNiAvIDIpIC0gKChzaGFwZVdpZHRoKSAvIDIpO1xyXG4gICAgICAgICAgICAvLyBUT0RPIG1ha2UgSSBzaGFwZSBjZW50ZXJlZFxyXG4gICAgICAgICAgICBjb25zdCBwb3NZID0gKDMgKiAoaSArIDEpKSAtIDI7XHJcbiAgICAgICAgICAgIE1hdHJpeC5kcmF3TWF0cml4KHNoYXBlLCB7IHg6IHBvc1gsIHk6IHBvc1kgfSwgY2FudmFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4geyB0aGlzLmtleWJvYXJkRG93bihlKTsgfSk7XHJcbiAgICB9XHJcbiAgICBrZXlib2FyZERvd24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMua2V5RG93bltldmVudC5rZXlDb2RlXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBrZXlQcmVzc2VkKGtleUNvZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlEb3duW2tleUNvZGVdO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09ORklHLCBDT0xPUlMgfSBmcm9tICcuL2dhbWUuY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IHtcclxuICAgIHN0YXRpYyBjcmVhdGVCb2FyZE1hdHJpeCh3LCBoKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGg7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gW107XHJcbiAgICAgICAgd2hpbGUgKGhlaWdodC0tKSB7XHJcbiAgICAgICAgICAgIG1hdHJpeC5wdXNoKG5ldyBBcnJheSh3KS5maWxsKDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkcmF3TWF0cml4KG1hdHJpeCwgb2Zmc2V0LCBjYW52YXMpIHtcclxuICAgICAgICBtYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmZpbGxSb3VuZGVkUmVjdCgoeCArIG9mZnNldC54KSAqIENPTkZJRy5USUxFX1dJRFRILCAoeSArIG9mZnNldC55KSAqIENPTkZJRy5USUxFX0hFSUdIVCwgQ09ORklHLlRJTEVfV0lEVEggLSAyLCBDT05GSUcuVElMRV9IRUlHSFQgLSAyLCAzLCBDT0xPUlNbdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9nYW1lLmNvbmZpZyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xyXG4gICAgICAgIHRoaXMucG9zID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBzaGFwZTtcclxuICAgICAgICB0aGlzLnBvcyA9IHtcclxuICAgICAgICAgICAgeDogTWF0aC5mbG9vcihDT05GSUcuQk9BUkRfVElMRV9XSURUSCAvIDIpXHJcbiAgICAgICAgICAgICAgICAtIE1hdGguZmxvb3IodGhpcy5tYXRyaXhbMF0ubGVuZ3RoIC8gMiksXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0TWF0cml4KG1hdHJpeCkge1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xyXG4gICAgfVxyXG4gICAgbW92ZShkaXIpIHtcclxuICAgICAgICB0aGlzLnBvcy54ICs9IGRpcjtcclxuICAgIH1cclxuICAgIGRyb3AoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MueSsrO1xyXG4gICAgfVxyXG4gICAgdXAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MueS0tO1xyXG4gICAgfVxyXG4gICAgcm90YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5tYXRyaXgubGVuZ3RoOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB5OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFt4XVt5XSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFt5XVt4XVxyXG4gICAgICAgICAgICAgICAgXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFt5XVt4XSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFt4XVt5XVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHJvdy5yZXZlcnNlKCkpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgICBUSUxFX1dJRFRIOiAzMCxcclxuICAgIFRJTEVfSEVJR0hUOiAzMCxcclxuICAgIEJPQVJEX1RJTEVfV0lEVEg6IDEwLFxyXG4gICAgQk9BUkRfVElMRV9IRUlHSFQ6IDIwLFxyXG4gICAgZ2V0IEJPQVJEX1dJRFRIKCkgeyByZXR1cm4gdGhpcy5USUxFX1dJRFRIICogdGhpcy5CT0FSRF9USUxFX1dJRFRIOyB9LFxyXG4gICAgZ2V0IEJPQVJEX0hFSUdIVCgpIHsgcmV0dXJuIHRoaXMuVElMRV9IRUlHSFQgKiB0aGlzLkJPQVJEX1RJTEVfSEVJR0hUOyB9LFxyXG4gICAgZ2V0IE5FWFRfU0hBUEVTX1dJRFRIKCkgeyByZXR1cm4gdGhpcy5USUxFX1dJRFRIICogNjsgfSxcclxuICAgIGdldCBORVhUX1NIQVBFU19IRUlHSFQoKSB7IHJldHVybiB0aGlzLlRJTEVfSEVJR0hUICogMTA7IH0sXHJcbiAgICBCT0FSRF9CR19DT0xPUjogJyM0ZTRlNGUnLFxyXG4gICAgQk9BUkRfU1RST0tFX0NPTE9SOiAnIzJiMmIyYicsXHJcbiAgICBVUERBVEVfSU5URVJWQUw6IDEwMDAsXHJcbiAgICAvLyBrZXkgY29kZXNcclxuICAgIFVQX0tFWTogMzgsXHJcbiAgICBET1dOX0tFWTogNDAsXHJcbiAgICBMRUZUX0tFWTogMzcsXHJcbiAgICBSSUdIVF9LRVk6IDM5LFxyXG59O1xyXG5leHBvcnQgY29uc3QgU0hBUEVTID0ge1xyXG4gICAgVDogW1xyXG4gICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICBbMSwgMSwgMV0sXHJcbiAgICAgICAgWzAsIDAsIDBdXHJcbiAgICBdLFxyXG4gICAgTDogW1xyXG4gICAgICAgIFswLCAwLCAyXSxcclxuICAgICAgICBbMiwgMiwgMl0sXHJcbiAgICAgICAgWzAsIDAsIDBdXHJcbiAgICBdLFxyXG4gICAgSjogW1xyXG4gICAgICAgIFszLCAwLCAwXSxcclxuICAgICAgICBbMywgMywgM10sXHJcbiAgICAgICAgWzAsIDAsIDBdXHJcbiAgICBdLFxyXG4gICAgTzogW1xyXG4gICAgICAgIFs0LCA0XSxcclxuICAgICAgICBbNCwgNF0sXHJcbiAgICBdLFxyXG4gICAgUzogW1xyXG4gICAgICAgIFswLCA1LCA1XSxcclxuICAgICAgICBbNSwgNSwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDBdXHJcbiAgICBdLFxyXG4gICAgWjogW1xyXG4gICAgICAgIFs2LCA2LCAwXSxcclxuICAgICAgICBbMCwgNiwgNl0sXHJcbiAgICAgICAgWzAsIDAsIDBdXHJcbiAgICBdLFxyXG4gICAgSTogW1xyXG4gICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICBbNywgNywgNywgN10sXHJcbiAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwXVxyXG4gICAgXVxyXG59O1xyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gICAgMTogJyNlZTgyZWUnLFxyXG4gICAgMjogJyNlYjhiMjMnLFxyXG4gICAgMzogJyMxZTkwZmYnLFxyXG4gICAgNDogJyNmZmM2M2UnLFxyXG4gICAgNTogJyM1OWNiODYnLFxyXG4gICAgNjogJyNkYzY1NTUnLFxyXG4gICAgNzogJyMyM2UzZWInIC8vIGN5YW5cclxufTtcclxuIiwiaW1wb3J0IHsgQ09ORklHLCBTSEFQRVMgfSBmcm9tICcuL2dhbWUuY29uZmlnJztcclxuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XHJcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9FdmVudEhhbmRsZXInO1xyXG5pbXBvcnQgTWF0cml4IGZyb20gJy4vTWF0cml4JztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBEcmF3IGZyb20gJy4vRHJhdyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IENPTkZJRy5VUERBVEVfSU5URVJWQUw7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXh0U2hhcGVzID0gW107XHJcbiAgICAgICAgdGhpcy5iYWcgPSBbJ0knLCAnSicsICdMJywgJ08nLCAnUycsICdUJywgJ1onXTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wID0gKHRGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BNYWluID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoMjcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAhdGhpcy5ydW5uaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKHRGcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIucmVzZXQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgYWRkTmV4dFNoYXBlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5iYWcubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFnID0gWydJJywgJ0onLCAnTCcsICdPJywgJ1MnLCAnVCcsICdaJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHRTaGFwZXMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuYmFnLnNwbGljZSgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5iYWcubGVuZ3RoKSksIDEpWzBdO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTaGFwZXMucHVzaChzaGFwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBEcmF3LmJvYXJkKHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5ib2FyZE1hdHJpeCwgeyB4OiAwLCB5OiAwIH0sIHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5wbGF5ZXIubWF0cml4LCB0aGlzLnBsYXllci5wb3MsIHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgRHJhdy5uZXh0U2hhcGVzKHRoaXMubmV4dFNoYXBlc0NhbnZhcywgdGhpcy5uZXh0U2hhcGVzKTtcclxuICAgIH1cclxuICAgIHBsYXllclJlc2V0KCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1NoYXBlTWF0cml4ID0gU0hBUEVTW3RoaXMubmV4dFNoYXBlcy5zaGlmdCgpXTtcclxuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2hhcGVNYXRyaXgubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbmV3U2hhcGVbaV0gPSBbLi4ubmV3U2hhcGVNYXRyaXhbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIobmV3U2hhcGUpO1xyXG4gICAgICAgIHRoaXMuYWRkTmV4dFNoYXBlcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJc092ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGF5ZXJEcm9wKHNvZnREcm9wKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJvcCgpO1xyXG4gICAgICAgIGlmIChzb2Z0RHJvcCAmJiAhdGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUluY3JlbWVudCgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVyZ2VTaGFwZVRvQm9hcmQoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyUmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXJNb3ZlKGRpcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyLm1vdmUoZGlyKTtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgtZGlyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByb3RhdGVQbGF5ZXIoKSB7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDE7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucm90YXRlKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBvcy54ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gLShvZmZzZXQgKyAob2Zmc2V0ID4gMCA/IDEgOiAtMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUlucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5ET1dOX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJEcm9wKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5MRUZUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuUklHSFRfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlVQX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb2xsaWRlKCkge1xyXG4gICAgICAgIGNvbnN0IFttLCBvXSA9IFt0aGlzLnBsYXllci5tYXRyaXgsIHRoaXMucGxheWVyLnBvc107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbVt5XS5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1beV1beF0gIT09IDBcclxuICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib2FyZE1hdHJpeFt5ICsgby55XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmJvYXJkTWF0cml4W3kgKyBvLnldW3ggKyBvLnhdKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxpbmUoKSB7XHJcbiAgICAgICAgbGV0IGxpbmVzUmVtb3ZlZCA9IDA7XHJcbiAgICAgICAgY29uc3QgbGluZVNjb3JlcyA9IHtcclxuICAgICAgICAgICAgMTogNDAsXHJcbiAgICAgICAgICAgIDI6IDEwMCxcclxuICAgICAgICAgICAgMzogMzAwLFxyXG4gICAgICAgICAgICA0OiAxMjAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuYm9hcmRNYXRyaXgubGVuZ3RoOyArK3kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRNYXRyaXhbeV0uZXZlcnkoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRNYXRyaXguc3BsaWNlKHksIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC51bnNoaWZ0KG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7XHJcbiAgICAgICAgICAgICAgICBsaW5lc1JlbW92ZWQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmVzICs9IGxpbmVzUmVtb3ZlZDtcclxuICAgICAgICBpZiAobGluZXNSZW1vdmVkID4gMClcclxuICAgICAgICAgICAgdGhpcy5zY29yZUluY3JlbWVudChsaW5lU2NvcmVzW2xpbmVzUmVtb3ZlZF0pO1xyXG4gICAgfVxyXG4gICAgc2NvcmVJbmNyZW1lbnQoaW5jcmVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBpbmNyZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBtZXJnZVNoYXBlVG9Cb2FyZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeFt5ICsgdGhpcy5wbGF5ZXIucG9zLnldW3ggKyB0aGlzLnBsYXllci5wb3MueF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnYW1lSXNPdmVyKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcy5zZXRPcGFjaXR5KDAuNyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmZpbGxSZWN0KDAsIDAsIENPTkZJRy5CT0FSRF9XSURUSCwgQ09ORklHLkJPQVJEX0hFSUdIVCwgJyMwMDAnKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuc2V0T3BhY2l0eSgxKTtcclxuICAgICAgICBjb25zdCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lT3ZlclNjcmVlbicpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVPdmVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZU92ZXJTY29yZScpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVPdmVyTGluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZU92ZXJMaW5lcycpO1xyXG4gICAgICAgIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZU92ZXJOZXdHYW1lJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbk1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVCdXR0b24nKTtcclxuICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGdhbWVPdmVyU2NvcmUuaW5uZXJIVE1MID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIGdhbWVPdmVyTGluZXMuaW5uZXJIVE1MID0gdGhpcy5saW5lcy50b1N0cmluZygpO1xyXG4gICAgICAgIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3R2FtZSgpO1xyXG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1haW5NZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5NZW51KCk7XHJcbiAgICAgICAgICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBtYWluTWVudSgpIHtcclxuICAgICAgICBjb25zdCBtYWluTWVudVNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudVNjcmVlbicpO1xyXG4gICAgICAgIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbk1lbnVOZXdHYW1lJyk7XHJcbiAgICAgICAgbWFpbk1lbnVTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuc2V0T3BhY2l0eSgwLjcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcy5maWxsUmVjdCgwLCAwLCBDT05GSUcuQk9BUkRfV0lEVEgsIENPTkZJRy5CT0FSRF9IRUlHSFQsICcjMDAwJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLnNldE9wYWNpdHkoMSk7XHJcbiAgICAgICAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXdHYW1lKCk7XHJcbiAgICAgICAgICAgIG1haW5NZW51U2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLm5leHRTaGFwZXNDYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmluaXQoQ09ORklHLkJPQVJEX1dJRFRILCBDT05GSUcuQk9BUkRfSEVJR0hULCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUNhbnZhcycpKTtcclxuICAgICAgICB0aGlzLm5leHRTaGFwZXNDYW52YXMuaW5pdChDT05GSUcuTkVYVF9TSEFQRVNfV0lEVEgsIENPTkZJRy5ORVhUX1NIQVBFU19IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0U2hhcGVzQ2FudmFzJykpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5CT0FSRF9CR19DT0xPUik7XHJcbiAgICAgICAgdGhpcy5ib2FyZE1hdHJpeCA9IE1hdHJpeC5jcmVhdGVCb2FyZE1hdHJpeCgxMCwgMjApO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wKHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICBuZXdHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbiAgICAgICAgdGhpcy5saW5lc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXMnKTtcclxuICAgICAgICB0aGlzLmJvYXJkTWF0cml4LmZvckVhY2goKHJvdykgPT4gcm93LmZpbGwoMCkpO1xyXG4gICAgICAgIHRoaXMuYWRkTmV4dFNoYXBlcygpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGluZXMgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyUmVzZXQoKTtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHRGcmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRGcmFtZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRGcmFtZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IENPTkZJRy5VUERBVEVfSU5URVJWQUwpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJEcm9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmxpbmVzRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmxpbmVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gICAgZ2FtZS5pbml0KCk7XHJcbiAgICBnYW1lLm1haW5NZW51KCk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=