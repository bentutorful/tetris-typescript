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
        this.paused = false;
        this.nextShapes = [];
        this.gameOver = false;
        this.gameLoop = (tFrame) => {
            this.stopMain = window.requestAnimationFrame(this.gameLoop);
            if (this.eventHandler.keyPressed(27)) {
                this.paused = !this.paused;
            }
            if (!this.paused) {
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
        this.gameCanvas.setOpacity(0.7);
        this.gameCanvas.fillRect(0, 0, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_HEIGHT, '#000');
        this.gameCanvas.setOpacity(1);
        this.gameOver = true;
        const gameOverScreen = document.getElementById('gameOverScreen');
        const gameOverScore = document.getElementById('gameOverScore');
        const gameOverLines = document.getElementById('gameOverLines');
        const newGameButton = document.getElementById('newGameButton');
        gameOverScreen.style.display = 'flex';
        gameOverScore.innerHTML = this.score.toString();
        gameOverLines.innerHTML = this.lines.toString();
        newGameButton.addEventListener('click', () => {
            this.newGame();
            gameOverScreen.style.display = 'none';
        });
        window.cancelAnimationFrame(this.stopMain);
    }
    init() {
        this.gameCanvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.nextShapesCanvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.gameCanvas.init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_HEIGHT, document.getElementById('gameCanvas'));
        this.nextShapesCanvas.init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].NEXT_SHAPES_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].NEXT_SHAPES_HEIGHT, document.getElementById('nextShapesCanvas'));
        this.gameCanvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.boardMatrix = _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].createBoardMatrix(10, 20);
        this.newGame();
    }
    newGame() {
        this.gameOver = false;
        this.scoreElement = document.getElementById('score');
        this.linesElement = document.getElementById('lines');
        this.boardMatrix.forEach((row) => row.fill(0));
        this.addNextShapes();
        this.score = 0;
        this.lines = 0;
        this.playerReset();
        const startTime = window.performance.now();
        this.gameLoop(startTime);
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
        if (!this.gameOver) {
            this.draw();
        }
    }
}
(() => {
    const game = new Game();
    game.init();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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K0NBQU07QUFDcEMsb0NBQW9DLCtDQUFNO0FBQzFDLDZCQUE2QixtREFBTSxjQUFjLG1EQUFNO0FBQ3ZELG1DQUFtQyxtREFBTSxvQkFBb0IsbURBQU07QUFDbkUsbUNBQW1DLG1EQUFNO0FBQ3pDLDJCQUEyQiwrQ0FBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlMRDtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBpbml0KHdpZHRoLCBoZWlnaHQsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBmaWxsQ2FudmFzKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBmaWxsUmVjdCh4LCB5LCB3LCBoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbiAgICBmaWxsUm91bmRlZFJlY3QoeCwgeSwgdywgaCwgciwgY29sb3IsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjb25zdCBkZWcgPSBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHggKyByLCB5KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHggKyB3IC0gciwgeSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4ICsgdyAtIHIsIHkgKyByLCByLCBkZWcgKiAyNzAsIGRlZyAqIDApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4ICsgdyAtIHIsIHkgKyBoIC0gciwgciwgZGVnICogMCwgZGVnICogOTApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCArIHIsIHkgKyBoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHggKyByLCB5ICsgaCAtIHIsIHIsIGRlZyAqIDkwLCBkZWcgKiAxODApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgeSArIHIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCArIHIsIHkgKyByLCByLCBkZWcgKiAxODAsIGRlZyAqIDI3MCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGlmIChzdHJva2VXaWR0aCAmJiBzdHJva2VDb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBzdHJva2VSZWN0KHgsIHksIHcsIGgsIHN0cm9rZVdpZHRoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBzdHJva2VXaWR0aDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxuICAgIGFyYyh4LCB5LCByLCBzQW5nbGUsIGVBbmdsZSwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgciwgc0FuZ2xlLCBlQW5nbGUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgc2hhZG93KGNvbG9yLCBibHVyLCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSBibHVyO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgICB9XHJcbiAgICBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENPTkZJRywgU0hBUEVTIH0gZnJvbSAnLi9nYW1lLmNvbmZpZyc7XHJcbmltcG9ydCBNYXRyaXggZnJvbSAnLi9NYXRyaXgnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IHtcclxuICAgIHN0YXRpYyBib2FyZChjYW52YXMpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IENPTkZJRy5CT0FSRF9USUxFX1dJRFRIOyArK3gpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBDT05GSUcuQk9BUkRfVElMRV9IRUlHSFQ7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpbGxSb3VuZGVkUmVjdCh4ICogQ09ORklHLlRJTEVfV0lEVEgsIHkgKiBDT05GSUcuVElMRV9IRUlHSFQsIENPTkZJRy5USUxFX1dJRFRIIC0gMS41LCBDT05GSUcuVElMRV9IRUlHSFQgLSAxLjUsIDMsIENPTkZJRy5CT0FSRF9CR19DT0xPUiwgQ09ORklHLkJPQVJEX1NUUk9LRV9DT0xPUiwgMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbmV4dFNoYXBlcyhjYW52YXMsIG5leHRTaGFwZXMpIHtcclxuICAgICAgICBjYW52YXMuZmlsbENhbnZhcyhDT05GSUcuQk9BUkRfQkdfQ09MT1IpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dFNoYXBlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IFNIQVBFU1tuZXh0U2hhcGVzW2ldXTtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlWzBdLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgcG9zWCA9ICg2IC8gMikgLSAoKHNoYXBlV2lkdGgpIC8gMik7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gbWFrZSBJIHNoYXBlIGNlbnRlcmVkXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc1kgPSAoMyAqIChpICsgMSkpIC0gMjtcclxuICAgICAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgoc2hhcGUsIHsgeDogcG9zWCwgeTogcG9zWSB9LCBjYW52YXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7IHRoaXMua2V5Ym9hcmREb3duKGUpOyB9KTtcclxuICAgIH1cclxuICAgIGtleWJvYXJkRG93bihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGtleVByZXNzZWQoa2V5Q29kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleURvd25ba2V5Q29kZV07XHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT05GSUcsIENPTE9SUyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgge1xyXG4gICAgc3RhdGljIGNyZWF0ZUJvYXJkTWF0cml4KHcsIGgpIHtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gaDtcclxuICAgICAgICBjb25zdCBtYXRyaXggPSBbXTtcclxuICAgICAgICB3aGlsZSAoaGVpZ2h0LS0pIHtcclxuICAgICAgICAgICAgbWF0cml4LnB1c2gobmV3IEFycmF5KHcpLmZpbGwoMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0cml4O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRyYXdNYXRyaXgobWF0cml4LCBvZmZzZXQsIGNhbnZhcykge1xyXG4gICAgICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZmlsbFJvdW5kZWRSZWN0KCh4ICsgb2Zmc2V0LngpICogQ09ORklHLlRJTEVfV0lEVEgsICh5ICsgb2Zmc2V0LnkpICogQ09ORklHLlRJTEVfSEVJR0hULCBDT05GSUcuVElMRV9XSURUSCAtIDIsIENPTkZJRy5USUxFX0hFSUdIVCAtIDIsIDMsIENPTE9SU1t2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2dhbWUuY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IHNoYXBlO1xyXG4gICAgICAgIHRoaXMucG9zID0ge1xyXG4gICAgICAgICAgICB4OiBNYXRoLmZsb29yKENPTkZJRy5CT0FSRF9USUxFX1dJRFRIIC8gMilcclxuICAgICAgICAgICAgICAgIC0gTWF0aC5mbG9vcih0aGlzLm1hdHJpeFswXS5sZW5ndGggLyAyKSxcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRNYXRyaXgobWF0cml4KSB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpcikge1xyXG4gICAgICAgIHRoaXMucG9zLnggKz0gZGlyO1xyXG4gICAgfVxyXG4gICAgZHJvcCgpIHtcclxuICAgICAgICB0aGlzLnBvcy55Kys7XHJcbiAgICB9XHJcbiAgICB1cCgpIHtcclxuICAgICAgICB0aGlzLnBvcy55LS07XHJcbiAgICB9XHJcbiAgICByb3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHk7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3hdW3ldLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3ldW3hdXHJcbiAgICAgICAgICAgICAgICBdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3ldW3hdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3hdW3ldXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWF0cml4LmZvckVhY2goKHJvdykgPT4gcm93LnJldmVyc2UoKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAgIFRJTEVfV0lEVEg6IDMwLFxyXG4gICAgVElMRV9IRUlHSFQ6IDMwLFxyXG4gICAgQk9BUkRfVElMRV9XSURUSDogMTAsXHJcbiAgICBCT0FSRF9USUxFX0hFSUdIVDogMjAsXHJcbiAgICBnZXQgQk9BUkRfV0lEVEgoKSB7IHJldHVybiB0aGlzLlRJTEVfV0lEVEggKiB0aGlzLkJPQVJEX1RJTEVfV0lEVEg7IH0sXHJcbiAgICBnZXQgQk9BUkRfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIHRoaXMuQk9BUkRfVElMRV9IRUlHSFQ7IH0sXHJcbiAgICBnZXQgTkVYVF9TSEFQRVNfV0lEVEgoKSB7IHJldHVybiB0aGlzLlRJTEVfV0lEVEggKiA2OyB9LFxyXG4gICAgZ2V0IE5FWFRfU0hBUEVTX0hFSUdIVCgpIHsgcmV0dXJuIHRoaXMuVElMRV9IRUlHSFQgKiAxMDsgfSxcclxuICAgIEJPQVJEX0JHX0NPTE9SOiAnIzRlNGU0ZScsXHJcbiAgICBCT0FSRF9TVFJPS0VfQ09MT1I6ICcjMmIyYjJiJyxcclxuICAgIFVQREFURV9JTlRFUlZBTDogMTAwMCxcclxuICAgIC8vIGtleSBjb2Rlc1xyXG4gICAgVVBfS0VZOiAzOCxcclxuICAgIERPV05fS0VZOiA0MCxcclxuICAgIExFRlRfS0VZOiAzNyxcclxuICAgIFJJR0hUX0tFWTogMzksXHJcbn07XHJcbmV4cG9ydCBjb25zdCBTSEFQRVMgPSB7XHJcbiAgICBUOiBbXHJcbiAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgIFsxLCAxLCAxXSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBMOiBbXHJcbiAgICAgICAgWzAsIDAsIDJdLFxyXG4gICAgICAgIFsyLCAyLCAyXSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBKOiBbXHJcbiAgICAgICAgWzMsIDAsIDBdLFxyXG4gICAgICAgIFszLCAzLCAzXSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBPOiBbXHJcbiAgICAgICAgWzQsIDRdLFxyXG4gICAgICAgIFs0LCA0XSxcclxuICAgIF0sXHJcbiAgICBTOiBbXHJcbiAgICAgICAgWzAsIDUsIDVdLFxyXG4gICAgICAgIFs1LCA1LCAwXSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBaOiBbXHJcbiAgICAgICAgWzYsIDYsIDBdLFxyXG4gICAgICAgIFswLCA2LCA2XSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBJOiBbXHJcbiAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFs3LCA3LCA3LCA3XSxcclxuICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDBdXHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICAxOiAnI2VlODJlZScsXHJcbiAgICAyOiAnI2ViOGIyMycsXHJcbiAgICAzOiAnIzFlOTBmZicsXHJcbiAgICA0OiAnI2ZmYzYzZScsXHJcbiAgICA1OiAnIzU5Y2I4NicsXHJcbiAgICA2OiAnI2RjNjU1NScsXHJcbiAgICA3OiAnIzIzZTNlYicgLy8gY3lhblxyXG59O1xyXG4iLCJpbXBvcnQgeyBDT05GSUcsIFNIQVBFUyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcbmltcG9ydCBNYXRyaXggZnJvbSAnLi9NYXRyaXgnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IERyYXcgZnJvbSAnLi9EcmF3JztcclxuaW1wb3J0IGdlbmVyYXRlUmFuZG9tU2hhcGUgZnJvbSAnLi9oZWxwZXJzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gQ09ORklHLlVQREFURV9JTlRFUlZBTDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxpbmVzID0gMDtcclxuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wID0gKHRGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BNYWluID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoMjcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUlucHV0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh0RnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnJlc2V0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGFkZE5leHRTaGFwZXMoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubmV4dFNoYXBlcy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTaGFwZXMucHVzaChzaGFwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBEcmF3LmJvYXJkKHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5ib2FyZE1hdHJpeCwgeyB4OiAwLCB5OiAwIH0sIHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5wbGF5ZXIubWF0cml4LCB0aGlzLnBsYXllci5wb3MsIHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgRHJhdy5uZXh0U2hhcGVzKHRoaXMubmV4dFNoYXBlc0NhbnZhcywgdGhpcy5uZXh0U2hhcGVzKTtcclxuICAgIH1cclxuICAgIHBsYXllclJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihTSEFQRVNbdGhpcy5uZXh0U2hhcGVzLnNoaWZ0KCldKTtcclxuICAgICAgICB0aGlzLmFkZE5leHRTaGFwZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSXNPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheWVyRHJvcChzb2Z0RHJvcCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmRyb3AoKTtcclxuICAgICAgICBpZiAoc29mdERyb3AgJiYgIXRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVJbmNyZW1lbnQoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci51cCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1lcmdlU2hhcGVUb0JvYXJkKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllclJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgfVxyXG4gICAgcGxheWVyTW92ZShkaXIpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5tb3ZlKGRpcik7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoLWRpcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcm90YXRlUGxheWVyKCkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJvdGF0ZSgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IC0ob2Zmc2V0ICsgKG9mZnNldCA+IDAgPyAxIDogLTEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVJbnB1dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuRE9XTl9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRHJvcCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuTEVGVF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlJJR0hUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5VUF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlUGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29sbGlkZSgpIHtcclxuICAgICAgICBjb25zdCBbbSwgb10gPSBbdGhpcy5wbGF5ZXIubWF0cml4LCB0aGlzLnBsYXllci5wb3NdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbS5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1beV0ubGVuZ3RoOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtW3ldW3hdICE9PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMuYm9hcmRNYXRyaXhbeSArIG8ueV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5ib2FyZE1hdHJpeFt5ICsgby55XVt4ICsgby54XSkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsaW5lKCkge1xyXG4gICAgICAgIGxldCBsaW5lc1JlbW92ZWQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGxpbmVTY29yZXMgPSB7XHJcbiAgICAgICAgICAgIDE6IDQwLFxyXG4gICAgICAgICAgICAyOiAxMDAsXHJcbiAgICAgICAgICAgIDM6IDMwMCxcclxuICAgICAgICAgICAgNDogMTIwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkTWF0cml4Lmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkTWF0cml4W3ldLmV2ZXJ5KCh2YWx1ZSkgPT4gdmFsdWUgIT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4LnNwbGljZSh5LCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRNYXRyaXgudW5zaGlmdChuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xyXG4gICAgICAgICAgICAgICAgbGluZXNSZW1vdmVkICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saW5lcyArPSBsaW5lc1JlbW92ZWQ7XHJcbiAgICAgICAgaWYgKGxpbmVzUmVtb3ZlZCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVJbmNyZW1lbnQobGluZVNjb3Jlc1tsaW5lc1JlbW92ZWRdKTtcclxuICAgIH1cclxuICAgIHNjb3JlSW5jcmVtZW50KGluY3JlbWVudCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gaW5jcmVtZW50O1xyXG4gICAgfVxyXG4gICAgbWVyZ2VTaGFwZVRvQm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRNYXRyaXhbeSArIHRoaXMucGxheWVyLnBvcy55XVt4ICsgdGhpcy5wbGF5ZXIucG9zLnhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2FtZUlzT3ZlcigpIHtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuc2V0T3BhY2l0eSgwLjcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcy5maWxsUmVjdCgwLCAwLCBDT05GSUcuQk9BUkRfV0lEVEgsIENPTkZJRy5CT0FSRF9IRUlHSFQsICcjMDAwJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLnNldE9wYWNpdHkoMSk7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgZ2FtZU92ZXJTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZU92ZXJTY3JlZW4nKTtcclxuICAgICAgICBjb25zdCBnYW1lT3ZlclNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVPdmVyU2NvcmUnKTtcclxuICAgICAgICBjb25zdCBnYW1lT3ZlckxpbmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVPdmVyTGluZXMnKTtcclxuICAgICAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0dhbWVCdXR0b24nKTtcclxuICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGdhbWVPdmVyU2NvcmUuaW5uZXJIVE1MID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIGdhbWVPdmVyTGluZXMuaW5uZXJIVE1MID0gdGhpcy5saW5lcy50b1N0cmluZygpO1xyXG4gICAgICAgIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3R2FtZSgpO1xyXG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnN0b3BNYWluKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuaW5pdChDT05GSUcuQk9BUkRfV0lEVEgsIENPTkZJRy5CT0FSRF9IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lQ2FudmFzJykpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcy5pbml0KENPTkZJRy5ORVhUX1NIQVBFU19XSURUSCwgQ09ORklHLk5FWFRfU0hBUEVTX0hFSUdIVCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRTaGFwZXNDYW52YXMnKSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkJPQVJEX0JHX0NPTE9SKTtcclxuICAgICAgICB0aGlzLmJvYXJkTWF0cml4ID0gTWF0cml4LmNyZWF0ZUJvYXJkTWF0cml4KDEwLCAyMCk7XHJcbiAgICAgICAgdGhpcy5uZXdHYW1lKCk7XHJcbiAgICB9XHJcbiAgICBuZXdHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVzJyk7XHJcbiAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHJvdy5maWxsKDApKTtcclxuICAgICAgICB0aGlzLmFkZE5leHRTaGFwZXMoKTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxpbmVzID0gMDtcclxuICAgICAgICB0aGlzLnBsYXllclJlc2V0KCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3Aoc3RhcnRUaW1lKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0RnJhbWUpIHtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0RnJhbWUgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0RnJhbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiBDT05GSUcuVVBEQVRFX0lOVEVSVkFMKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRHJvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3JlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5saW5lc0VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5saW5lcy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gICAgZ2FtZS5pbml0KCk7XHJcbn0pKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU2hhcGUoKSB7XHJcbiAgICBjb25zdCBwaWVjZXMgPSBbXHJcbiAgICAgICAgJ0knLCAnSScsICdJJywgJ0knLFxyXG4gICAgICAgICdKJywgJ0onLCAnSicsICdKJyxcclxuICAgICAgICAnTCcsICdMJywgJ0wnLCAnTCcsXHJcbiAgICAgICAgJ08nLCAnTycsICdPJywgJ08nLFxyXG4gICAgICAgICdTJywgJ1MnLCAnUycsICdTJyxcclxuICAgICAgICAnVCcsICdUJywgJ1QnLCAnVCcsXHJcbiAgICAgICAgJ1onLCAnWicsICdaJywgJ1onXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcGllY2UgPSBwaWVjZXMuc3BsaWNlKChNYXRoLnJhbmRvbSgpICogKHBpZWNlcy5sZW5ndGggLSAxKSksIDEpWzBdO1xyXG4gICAgcmV0dXJuIHBpZWNlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=