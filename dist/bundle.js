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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");







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
        while (this.nextShapes.length < 3) {
            const shape = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["default"])();
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
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_4__["default"](_game_config__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][this.nextShapes.shift()]);
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


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateRandomShape; });
function generateRandomShape() {
    const pieces = [
        'I', 'I', 'I', 'I',
        'J', 'J', 'J', 'J',
        'L', 'L', 'L', 'L',
        'O', 'O', 'O', 'O',
        'S', 'S', 'S', 'S',
        'T', 'T', 'T', 'T',
        'Z', 'Z', 'Z', 'Z'
    ];
    const piece = pieces.splice((Math.random() * (pieces.length - 1)), 1)[0];
    return piece;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1EQUFNLGNBQWMsbURBQU07QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBTTtBQUNwQyxvQ0FBb0MsK0NBQU07QUFDMUMsNkJBQTZCLG1EQUFNLGNBQWMsbURBQU07QUFDdkQsbUNBQW1DLG1EQUFNLG9CQUFvQixtREFBTTtBQUNuRSxtQ0FBbUMsbURBQU07QUFDekMsMkJBQTJCLCtDQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN01EO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9nYW1lLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIGluaXQod2lkdGgsIGhlaWdodCwgY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIGZpbGxDYW52YXMoY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGZpbGxSZWN0KHgsIHksIHcsIGgsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxuICAgIGZpbGxSb3VuZGVkUmVjdCh4LCB5LCB3LCBoLCByLCBjb2xvciwgc3Ryb2tlQ29sb3IsIHN0cm9rZVdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGNvbnN0IGRlZyA9IE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCArIHIsIHkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCArIHcgLSByLCB5KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHggKyB3IC0gciwgeSArIHIsIHIsIGRlZyAqIDI3MCwgZGVnICogMCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4ICsgdywgeSArIGggLSByKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHggKyB3IC0gciwgeSArIGggLSByLCByLCBkZWcgKiAwLCBkZWcgKiA5MCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4ICsgciwgeSArIGgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCArIHIsIHkgKyBoIC0gciwgciwgZGVnICogOTAsIGRlZyAqIDE4MCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4LCB5ICsgcik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4ICsgciwgeSArIHIsIHIsIGRlZyAqIDE4MCwgZGVnICogMjcwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgaWYgKHN0cm9rZVdpZHRoICYmIHN0cm9rZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuICAgIHN0cm9rZVJlY3QoeCwgeSwgdywgaCwgc3Ryb2tlV2lkdGgsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG4gICAgYXJjKHgsIHksIHIsIHNBbmdsZSwgZUFuZ2xlLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByLCBzQW5nbGUsIGVBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBzaGFkb3coY29sb3IsIGJsdXIsIG9mZnNldFgsIG9mZnNldFkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Qmx1ciA9IGJsdXI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFggPSBvZmZzZXRYO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZID0gb2Zmc2V0WTtcclxuICAgIH1cclxuICAgIHNldE9wYWNpdHkob3BhY2l0eSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09ORklHLCBTSEFQRVMgfSBmcm9tICcuL2dhbWUuY29uZmlnJztcclxuaW1wb3J0IE1hdHJpeCBmcm9tICcuL01hdHJpeCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcge1xyXG4gICAgc3RhdGljIGJvYXJkKGNhbnZhcykge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ09ORklHLkJPQVJEX1RJTEVfV0lEVEg7ICsreCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENPTkZJRy5CT0FSRF9USUxFX0hFSUdIVDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZmlsbFJvdW5kZWRSZWN0KHggKiBDT05GSUcuVElMRV9XSURUSCwgeSAqIENPTkZJRy5USUxFX0hFSUdIVCwgQ09ORklHLlRJTEVfV0lEVEggLSAxLjUsIENPTkZJRy5USUxFX0hFSUdIVCAtIDEuNSwgMywgQ09ORklHLkJPQVJEX0JHX0NPTE9SLCBDT05GSUcuQk9BUkRfU1RST0tFX0NPTE9SLCAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBuZXh0U2hhcGVzKGNhbnZhcywgbmV4dFNoYXBlcykge1xyXG4gICAgICAgIGNhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5CT0FSRF9CR19DT0xPUik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0U2hhcGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gU0hBUEVTW25leHRTaGFwZXNbaV1dO1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZVdpZHRoID0gc2hhcGVbMF0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NYID0gKDYgLyAyKSAtICgoc2hhcGVXaWR0aCkgLyAyKTtcclxuICAgICAgICAgICAgLy8gVE9ETyBtYWtlIEkgc2hhcGUgY2VudGVyZWRcclxuICAgICAgICAgICAgY29uc3QgcG9zWSA9ICgzICogKGkgKyAxKSkgLSAyO1xyXG4gICAgICAgICAgICBNYXRyaXguZHJhd01hdHJpeChzaGFwZSwgeyB4OiBwb3NYLCB5OiBwb3NZIH0sIGNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgdGhpcy5rZXlib2FyZERvd24oZSk7IH0pO1xyXG4gICAgfVxyXG4gICAga2V5Ym9hcmREb3duKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmtleURvd25bZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAga2V5UHJlc3NlZChrZXlDb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5RG93bltrZXlDb2RlXTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENPTkZJRywgQ09MT1JTIH0gZnJvbSAnLi9nYW1lLmNvbmZpZyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCB7XHJcbiAgICBzdGF0aWMgY3JlYXRlQm9hcmRNYXRyaXgodywgaCkge1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBoO1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChoZWlnaHQtLSkge1xyXG4gICAgICAgICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkodykuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZHJhd01hdHJpeChtYXRyaXgsIG9mZnNldCwgY2FudmFzKSB7XHJcbiAgICAgICAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsUm91bmRlZFJlY3QoKHggKyBvZmZzZXQueCkgKiBDT05GSUcuVElMRV9XSURUSCwgKHkgKyBvZmZzZXQueSkgKiBDT05GSUcuVElMRV9IRUlHSFQsIENPTkZJRy5USUxFX1dJRFRIIC0gMiwgQ09ORklHLlRJTEVfSEVJR0hUIC0gMiwgMywgQ09MT1JTW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2hhcGUpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gc2hhcGU7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB7XHJcbiAgICAgICAgICAgIHg6IE1hdGguZmxvb3IoQ09ORklHLkJPQVJEX1RJTEVfV0lEVEggLyAyKVxyXG4gICAgICAgICAgICAgICAgLSBNYXRoLmZsb29yKHRoaXMubWF0cml4WzBdLmxlbmd0aCAvIDIpLFxyXG4gICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldE1hdHJpeChtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcclxuICAgIH1cclxuICAgIG1vdmUoZGlyKSB7XHJcbiAgICAgICAgdGhpcy5wb3MueCArPSBkaXI7XHJcbiAgICB9XHJcbiAgICBkcm9wKCkge1xyXG4gICAgICAgIHRoaXMucG9zLnkrKztcclxuICAgIH1cclxuICAgIHVwKCkge1xyXG4gICAgICAgIHRoaXMucG9zLnktLTtcclxuICAgIH1cclxuICAgIHJvdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeF1beV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeV1beF1cclxuICAgICAgICAgICAgICAgIF0gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeV1beF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeF1beV1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRyaXguZm9yRWFjaCgocm93KSA9PiByb3cucmV2ZXJzZSgpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gICAgVElMRV9XSURUSDogMzAsXHJcbiAgICBUSUxFX0hFSUdIVDogMzAsXHJcbiAgICBCT0FSRF9USUxFX1dJRFRIOiAxMCxcclxuICAgIEJPQVJEX1RJTEVfSEVJR0hUOiAyMCxcclxuICAgIGdldCBCT0FSRF9XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIHRoaXMuQk9BUkRfVElMRV9XSURUSDsgfSxcclxuICAgIGdldCBCT0FSRF9IRUlHSFQoKSB7IHJldHVybiB0aGlzLlRJTEVfSEVJR0hUICogdGhpcy5CT0FSRF9USUxFX0hFSUdIVDsgfSxcclxuICAgIGdldCBORVhUX1NIQVBFU19XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIDY7IH0sXHJcbiAgICBnZXQgTkVYVF9TSEFQRVNfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIDEwOyB9LFxyXG4gICAgQk9BUkRfQkdfQ09MT1I6ICcjNGU0ZTRlJyxcclxuICAgIEJPQVJEX1NUUk9LRV9DT0xPUjogJyMyYjJiMmInLFxyXG4gICAgVVBEQVRFX0lOVEVSVkFMOiAxMDAwLFxyXG4gICAgLy8ga2V5IGNvZGVzXHJcbiAgICBVUF9LRVk6IDM4LFxyXG4gICAgRE9XTl9LRVk6IDQwLFxyXG4gICAgTEVGVF9LRVk6IDM3LFxyXG4gICAgUklHSFRfS0VZOiAzOSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFNIQVBFUyA9IHtcclxuICAgIFQ6IFtcclxuICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgWzEsIDEsIDFdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEw6IFtcclxuICAgICAgICBbMCwgMCwgMl0sXHJcbiAgICAgICAgWzIsIDIsIDJdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEo6IFtcclxuICAgICAgICBbMywgMCwgMF0sXHJcbiAgICAgICAgWzMsIDMsIDNdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIE86IFtcclxuICAgICAgICBbNCwgNF0sXHJcbiAgICAgICAgWzQsIDRdLFxyXG4gICAgXSxcclxuICAgIFM6IFtcclxuICAgICAgICBbMCwgNSwgNV0sXHJcbiAgICAgICAgWzUsIDUsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIFo6IFtcclxuICAgICAgICBbNiwgNiwgMF0sXHJcbiAgICAgICAgWzAsIDYsIDZdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEk6IFtcclxuICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzcsIDcsIDcsIDddLFxyXG4gICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMF1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICAgIDE6ICcjZWU4MmVlJyxcclxuICAgIDI6ICcjZWI4YjIzJyxcclxuICAgIDM6ICcjMWU5MGZmJyxcclxuICAgIDQ6ICcjZmZjNjNlJyxcclxuICAgIDU6ICcjNTljYjg2JyxcclxuICAgIDY6ICcjZGM2NTU1JyxcclxuICAgIDc6ICcjMjNlM2ViJyAvLyBjeWFuXHJcbn07XHJcbiIsImltcG9ydCB7IENPTkZJRywgU0hBUEVTIH0gZnJvbSAnLi9nYW1lLmNvbmZpZyc7XHJcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuaW1wb3J0IE1hdHJpeCBmcm9tICcuL01hdHJpeCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgRHJhdyBmcm9tICcuL0RyYXcnO1xyXG5pbXBvcnQgZ2VuZXJhdGVSYW5kb21TaGFwZSBmcm9tICcuL2hlbHBlcnMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBDT05GSUcuVVBEQVRFX0lOVEVSVkFMO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGluZXMgPSAwO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3AgPSAodEZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE1haW4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZCgyNykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9ICF0aGlzLnJ1bm5pbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUodEZyYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5yZXNldCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBhZGROZXh0U2hhcGVzKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHRTaGFwZXMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IGdlbmVyYXRlUmFuZG9tU2hhcGUoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0U2hhcGVzLnB1c2goc2hhcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgRHJhdy5ib2FyZCh0aGlzLmdhbWVDYW52YXMpO1xyXG4gICAgICAgIE1hdHJpeC5kcmF3TWF0cml4KHRoaXMuYm9hcmRNYXRyaXgsIHsgeDogMCwgeTogMCB9LCB0aGlzLmdhbWVDYW52YXMpO1xyXG4gICAgICAgIE1hdHJpeC5kcmF3TWF0cml4KHRoaXMucGxheWVyLm1hdHJpeCwgdGhpcy5wbGF5ZXIucG9zLCB0aGlzLmdhbWVDYW52YXMpO1xyXG4gICAgICAgIERyYXcubmV4dFNoYXBlcyh0aGlzLm5leHRTaGFwZXNDYW52YXMsIHRoaXMubmV4dFNoYXBlcyk7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXJSZXNldCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoU0hBUEVTW3RoaXMubmV4dFNoYXBlcy5zaGlmdCgpXSk7XHJcbiAgICAgICAgdGhpcy5hZGROZXh0U2hhcGVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlzT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYXllckRyb3Aoc29mdERyb3ApIHtcclxuICAgICAgICB0aGlzLnBsYXllci5kcm9wKCk7XHJcbiAgICAgICAgaWYgKHNvZnREcm9wICYmICF0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlSW5jcmVtZW50KDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudXAoKTtcclxuICAgICAgICAgICAgdGhpcy5tZXJnZVNoYXBlVG9Cb2FyZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIH1cclxuICAgIHBsYXllck1vdmUoZGlyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShkaXIpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKC1kaXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJvdGF0ZVBsYXllcigpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMTtcclxuICAgICAgICB0aGlzLnBsYXllci5yb3RhdGUoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAtKG9mZnNldCArIChvZmZzZXQgPiAwID8gMSA6IC0xKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5wdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLkRPV05fS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRyb3AodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLkxFRlRfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5SSUdIVF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuVVBfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVBsYXllcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbGxpZGUoKSB7XHJcbiAgICAgICAgY29uc3QgW20sIG9dID0gW3RoaXMucGxheWVyLm1hdHJpeCwgdGhpcy5wbGF5ZXIucG9zXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG0ubGVuZ3RoOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtW3ldLmxlbmd0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobVt5XVt4XSAhPT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICYmICh0aGlzLmJvYXJkTWF0cml4W3kgKyBvLnldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuYm9hcmRNYXRyaXhbeSArIG8ueV1beCArIG8ueF0pICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGluZSgpIHtcclxuICAgICAgICBsZXQgbGluZXNSZW1vdmVkID0gMDtcclxuICAgICAgICBjb25zdCBsaW5lU2NvcmVzID0ge1xyXG4gICAgICAgICAgICAxOiA0MCxcclxuICAgICAgICAgICAgMjogMTAwLFxyXG4gICAgICAgICAgICAzOiAzMDAsXHJcbiAgICAgICAgICAgIDQ6IDEyMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZE1hdHJpeC5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZE1hdHJpeFt5XS5ldmVyeSgodmFsdWUpID0+IHZhbHVlICE9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC5zcGxpY2UoeSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4LnVuc2hpZnQobmV3IEFycmF5KDEwKS5maWxsKDApKTtcclxuICAgICAgICAgICAgICAgIGxpbmVzUmVtb3ZlZCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGluZXMgKz0gbGluZXNSZW1vdmVkO1xyXG4gICAgICAgIGlmIChsaW5lc1JlbW92ZWQgPiAwKVxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlSW5jcmVtZW50KGxpbmVTY29yZXNbbGluZXNSZW1vdmVkXSk7XHJcbiAgICB9XHJcbiAgICBzY29yZUluY3JlbWVudChpbmNyZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IGluY3JlbWVudDtcclxuICAgIH1cclxuICAgIG1lcmdlU2hhcGVUb0JvYXJkKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLm1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4W3kgKyB0aGlzLnBsYXllci5wb3MueV1beCArIHRoaXMucGxheWVyLnBvcy54XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdhbWVJc092ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLnNldE9wYWNpdHkoMC43KTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuZmlsbFJlY3QoMCwgMCwgQ09ORklHLkJPQVJEX1dJRFRILCBDT05GSUcuQk9BUkRfSEVJR0hULCAnIzAwMCcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcy5zZXRPcGFjaXR5KDEpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVPdmVyU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVPdmVyU2NyZWVuJyk7XHJcbiAgICAgICAgY29uc3QgZ2FtZU92ZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lT3ZlclNjb3JlJyk7XHJcbiAgICAgICAgY29uc3QgZ2FtZU92ZXJMaW5lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lT3ZlckxpbmVzJyk7XHJcbiAgICAgICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lT3Zlck5ld0dhbWUnKTtcclxuICAgICAgICBjb25zdCBtYWluTWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudUJ1dHRvbicpO1xyXG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgZ2FtZU92ZXJTY29yZS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZ2FtZU92ZXJMaW5lcy5pbm5lckhUTUwgPSB0aGlzLmxpbmVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXdHYW1lKCk7XHJcbiAgICAgICAgICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWFpbk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbk1lbnUoKTtcclxuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG1haW5NZW51KCkge1xyXG4gICAgICAgIGNvbnN0IG1haW5NZW51U2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5NZW51U2NyZWVuJyk7XHJcbiAgICAgICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluTWVudU5ld0dhbWUnKTtcclxuICAgICAgICBtYWluTWVudVNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcy5zZXRPcGFjaXR5KDAuNyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmZpbGxSZWN0KDAsIDAsIENPTkZJRy5CT0FSRF9XSURUSCwgQ09ORklHLkJPQVJEX0hFSUdIVCwgJyMwMDAnKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuc2V0T3BhY2l0eSgxKTtcclxuICAgICAgICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5ld0dhbWUoKTtcclxuICAgICAgICAgICAgbWFpbk1lbnVTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuaW5pdChDT05GSUcuQk9BUkRfV0lEVEgsIENPTkZJRy5CT0FSRF9IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lQ2FudmFzJykpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcy5pbml0KENPTkZJRy5ORVhUX1NIQVBFU19XSURUSCwgQ09ORklHLk5FWFRfU0hBUEVTX0hFSUdIVCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRTaGFwZXNDYW52YXMnKSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkJPQVJEX0JHX0NPTE9SKTtcclxuICAgICAgICB0aGlzLmJvYXJkTWF0cml4ID0gTWF0cml4LmNyZWF0ZUJvYXJkTWF0cml4KDEwLCAyMCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3Aoc3RhcnRUaW1lKTtcclxuICAgIH1cclxuICAgIG5ld0dhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcclxuICAgICAgICB0aGlzLmxpbmVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lcycpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRNYXRyaXguZm9yRWFjaCgocm93KSA9PiByb3cuZmlsbCgwKSk7XHJcbiAgICAgICAgdGhpcy5hZGROZXh0U2hhcGVzKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodEZyYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdEZyYW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdEZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gQ09ORklHLlVQREFURV9JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRyb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50LmlubmVySFRNTCA9IHRoaXMubGluZXMudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBnYW1lLmluaXQoKTtcclxuICAgIGdhbWUubWFpbk1lbnUoKTtcclxufSkoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TaGFwZSgpIHtcclxuICAgIGNvbnN0IHBpZWNlcyA9IFtcclxuICAgICAgICAnSScsICdJJywgJ0knLCAnSScsXHJcbiAgICAgICAgJ0onLCAnSicsICdKJywgJ0onLFxyXG4gICAgICAgICdMJywgJ0wnLCAnTCcsICdMJyxcclxuICAgICAgICAnTycsICdPJywgJ08nLCAnTycsXHJcbiAgICAgICAgJ1MnLCAnUycsICdTJywgJ1MnLFxyXG4gICAgICAgICdUJywgJ1QnLCAnVCcsICdUJyxcclxuICAgICAgICAnWicsICdaJywgJ1onLCAnWidcclxuICAgIF07XHJcbiAgICBjb25zdCBwaWVjZSA9IHBpZWNlcy5zcGxpY2UoKE1hdGgucmFuZG9tKCkgKiAocGllY2VzLmxlbmd0aCAtIDEpKSwgMSlbMF07XHJcbiAgICByZXR1cm4gcGllY2U7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==