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
    setGlobalCompositeOperation(value) {
        this.context.globalCompositeOperation = value;
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
class Player {
    constructor() {
        this.pos = { x: 0, y: 0 };
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
        this.gameLoop = (tFrame) => {
            const stopMain = window.requestAnimationFrame(this.gameLoop);
            if (this.eventHandler.keyPressed(27)) {
                this.togglePause();
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
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_4__["default"]();
        if (this.nextShapes.length === 0) {
            // is start of game
            this.addNextShapes();
        }
        this.player.matrix = _game_config__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][this.nextShapes.shift()];
        this.addNextShapes();
        this.player.pos.x = Math.floor(this.boardMatrix[0].length / 2)
            - Math.floor(this.player.matrix[0].length / 2);
        this.player.pos.y = 0;
        if (this.collide()) {
            // TODO currently just clears the board, but will
            // need to end the game
            this.boardMatrix.forEach((row) => row.fill(0));
            this.score = 0;
            this.lines = 0;
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
    init() {
        this.gameCanvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.nextShapesCanvas = new _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.gameCanvas.init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_HEIGHT, document.getElementById('gameCanvas'));
        this.nextShapesCanvas.init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].NEXT_SHAPES_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].NEXT_SHAPES_HEIGHT, document.getElementById('nextShapesCanvas'));
        this.gameCanvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.nextShapesCanvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.scoreElement = document.getElementById('score');
        this.linesElement = document.getElementById('lines');
        this.boardMatrix = _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].createBoardMatrix(10, 20);
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
        this.draw();
    }
    togglePause() {
        this.paused = !this.paused;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1EQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pMRDtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBpbml0KHdpZHRoLCBoZWlnaHQsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBmaWxsQ2FudmFzKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBmaWxsUmVjdCh4LCB5LCB3LCBoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbiAgICBmaWxsUm91bmRlZFJlY3QoeCwgeSwgdywgaCwgciwgY29sb3IsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjb25zdCBkZWcgPSBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHggKyByLCB5KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHggKyB3IC0gciwgeSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4ICsgdyAtIHIsIHkgKyByLCByLCBkZWcgKiAyNzAsIGRlZyAqIDApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4ICsgdyAtIHIsIHkgKyBoIC0gciwgciwgZGVnICogMCwgZGVnICogOTApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCArIHIsIHkgKyBoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHggKyByLCB5ICsgaCAtIHIsIHIsIGRlZyAqIDkwLCBkZWcgKiAxODApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgeSArIHIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCArIHIsIHkgKyByLCByLCBkZWcgKiAxODAsIGRlZyAqIDI3MCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGlmIChzdHJva2VXaWR0aCAmJiBzdHJva2VDb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBzdHJva2VSZWN0KHgsIHksIHcsIGgsIHN0cm9rZVdpZHRoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBzdHJva2VXaWR0aDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxuICAgIGFyYyh4LCB5LCByLCBzQW5nbGUsIGVBbmdsZSwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgciwgc0FuZ2xlLCBlQW5nbGUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgc2hhZG93KGNvbG9yLCBibHVyLCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSBibHVyO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgICB9XHJcbiAgICBzZXRHbG9iYWxDb21wb3NpdGVPcGVyYXRpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09ORklHLCBTSEFQRVMgfSBmcm9tICcuL2dhbWUuY29uZmlnJztcclxuaW1wb3J0IE1hdHJpeCBmcm9tICcuL01hdHJpeCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcge1xyXG4gICAgc3RhdGljIGJvYXJkKGNhbnZhcykge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ09ORklHLkJPQVJEX1RJTEVfV0lEVEg7ICsreCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENPTkZJRy5CT0FSRF9USUxFX0hFSUdIVDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZmlsbFJvdW5kZWRSZWN0KHggKiBDT05GSUcuVElMRV9XSURUSCwgeSAqIENPTkZJRy5USUxFX0hFSUdIVCwgQ09ORklHLlRJTEVfV0lEVEggLSAxLjUsIENPTkZJRy5USUxFX0hFSUdIVCAtIDEuNSwgMywgQ09ORklHLkJPQVJEX0JHX0NPTE9SLCBDT05GSUcuQk9BUkRfU1RST0tFX0NPTE9SLCAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBuZXh0U2hhcGVzKGNhbnZhcywgbmV4dFNoYXBlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dFNoYXBlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IFNIQVBFU1tuZXh0U2hhcGVzW2ldXTtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlWzBdLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgcG9zWCA9ICg2IC8gMikgLSAoKHNoYXBlV2lkdGgpIC8gMik7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gbWFrZSBJIHNoYXBlIGNlbnRlcmVkXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc1kgPSAoMyAqIChpICsgMSkpIC0gMjtcclxuICAgICAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgoc2hhcGUsIHsgeDogcG9zWCwgeTogcG9zWSB9LCBjYW52YXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7IHRoaXMua2V5Ym9hcmREb3duKGUpOyB9KTtcclxuICAgIH1cclxuICAgIGtleWJvYXJkRG93bihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGtleVByZXNzZWQoa2V5Q29kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleURvd25ba2V5Q29kZV07XHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT05GSUcsIENPTE9SUyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgge1xyXG4gICAgc3RhdGljIGNyZWF0ZUJvYXJkTWF0cml4KHcsIGgpIHtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gaDtcclxuICAgICAgICBjb25zdCBtYXRyaXggPSBbXTtcclxuICAgICAgICB3aGlsZSAoaGVpZ2h0LS0pIHtcclxuICAgICAgICAgICAgbWF0cml4LnB1c2gobmV3IEFycmF5KHcpLmZpbGwoMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0cml4O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRyYXdNYXRyaXgobWF0cml4LCBvZmZzZXQsIGNhbnZhcykge1xyXG4gICAgICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZmlsbFJvdW5kZWRSZWN0KCh4ICsgb2Zmc2V0LngpICogQ09ORklHLlRJTEVfV0lEVEgsICh5ICsgb2Zmc2V0LnkpICogQ09ORklHLlRJTEVfSEVJR0hULCBDT05GSUcuVElMRV9XSURUSCAtIDIsIENPTkZJRy5USUxFX0hFSUdIVCAtIDIsIDMsIENPTE9SU1t2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIH1cclxuICAgIG1vdmUoZGlyKSB7XHJcbiAgICAgICAgdGhpcy5wb3MueCArPSBkaXI7XHJcbiAgICB9XHJcbiAgICBkcm9wKCkge1xyXG4gICAgICAgIHRoaXMucG9zLnkrKztcclxuICAgIH1cclxuICAgIHVwKCkge1xyXG4gICAgICAgIHRoaXMucG9zLnktLTtcclxuICAgIH1cclxuICAgIHJvdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeF1beV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeV1beF1cclxuICAgICAgICAgICAgICAgIF0gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeV1beF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeF1beV1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRyaXguZm9yRWFjaCgocm93KSA9PiByb3cucmV2ZXJzZSgpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gICAgVElMRV9XSURUSDogMzAsXHJcbiAgICBUSUxFX0hFSUdIVDogMzAsXHJcbiAgICBCT0FSRF9USUxFX1dJRFRIOiAxMCxcclxuICAgIEJPQVJEX1RJTEVfSEVJR0hUOiAyMCxcclxuICAgIGdldCBCT0FSRF9XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIHRoaXMuQk9BUkRfVElMRV9XSURUSDsgfSxcclxuICAgIGdldCBCT0FSRF9IRUlHSFQoKSB7IHJldHVybiB0aGlzLlRJTEVfSEVJR0hUICogdGhpcy5CT0FSRF9USUxFX0hFSUdIVDsgfSxcclxuICAgIGdldCBORVhUX1NIQVBFU19XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIDY7IH0sXHJcbiAgICBnZXQgTkVYVF9TSEFQRVNfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIDEwOyB9LFxyXG4gICAgQk9BUkRfQkdfQ09MT1I6ICcjNGU0ZTRlJyxcclxuICAgIEJPQVJEX1NUUk9LRV9DT0xPUjogJyMyYjJiMmInLFxyXG4gICAgVVBEQVRFX0lOVEVSVkFMOiAxMDAwLFxyXG4gICAgLy8ga2V5IGNvZGVzXHJcbiAgICBVUF9LRVk6IDM4LFxyXG4gICAgRE9XTl9LRVk6IDQwLFxyXG4gICAgTEVGVF9LRVk6IDM3LFxyXG4gICAgUklHSFRfS0VZOiAzOSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFNIQVBFUyA9IHtcclxuICAgIFQ6IFtcclxuICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgWzEsIDEsIDFdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEw6IFtcclxuICAgICAgICBbMCwgMCwgMl0sXHJcbiAgICAgICAgWzIsIDIsIDJdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEo6IFtcclxuICAgICAgICBbMywgMCwgMF0sXHJcbiAgICAgICAgWzMsIDMsIDNdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIE86IFtcclxuICAgICAgICBbNCwgNF0sXHJcbiAgICAgICAgWzQsIDRdLFxyXG4gICAgXSxcclxuICAgIFM6IFtcclxuICAgICAgICBbMCwgNSwgNV0sXHJcbiAgICAgICAgWzUsIDUsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIFo6IFtcclxuICAgICAgICBbNiwgNiwgMF0sXHJcbiAgICAgICAgWzAsIDYsIDZdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEk6IFtcclxuICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzcsIDcsIDcsIDddLFxyXG4gICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMF1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICAgIDE6ICcjZWU4MmVlJyxcclxuICAgIDI6ICcjZWI4YjIzJyxcclxuICAgIDM6ICcjMWU5MGZmJyxcclxuICAgIDQ6ICcjZmZjNjNlJyxcclxuICAgIDU6ICcjNTljYjg2JyxcclxuICAgIDY6ICcjZGM2NTU1JyxcclxuICAgIDc6ICcjMjNlM2ViJyAvLyBjeWFuXHJcbn07XHJcbiIsImltcG9ydCB7IENPTkZJRywgU0hBUEVTIH0gZnJvbSAnLi9nYW1lLmNvbmZpZyc7XHJcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuaW1wb3J0IE1hdHJpeCBmcm9tICcuL01hdHJpeCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgRHJhdyBmcm9tICcuL0RyYXcnO1xyXG5pbXBvcnQgZ2VuZXJhdGVSYW5kb21TaGFwZSBmcm9tICcuL2hlbHBlcnMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBDT05GSUcuVVBEQVRFX0lOVEVSVkFMO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGluZXMgPSAwO1xyXG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXh0U2hhcGVzID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9ICh0RnJhbWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcE1haW4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZCgyNykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUlucHV0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh0RnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnJlc2V0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGFkZE5leHRTaGFwZXMoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubmV4dFNoYXBlcy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTaGFwZXMucHVzaChzaGFwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBEcmF3LmJvYXJkKHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5ib2FyZE1hdHJpeCwgeyB4OiAwLCB5OiAwIH0sIHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5wbGF5ZXIubWF0cml4LCB0aGlzLnBsYXllci5wb3MsIHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgRHJhdy5uZXh0U2hhcGVzKHRoaXMubmV4dFNoYXBlc0NhbnZhcywgdGhpcy5uZXh0U2hhcGVzKTtcclxuICAgIH1cclxuICAgIHBsYXllclJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xyXG4gICAgICAgIGlmICh0aGlzLm5leHRTaGFwZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGlzIHN0YXJ0IG9mIGdhbWVcclxuICAgICAgICAgICAgdGhpcy5hZGROZXh0U2hhcGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLm1hdHJpeCA9IFNIQVBFU1t0aGlzLm5leHRTaGFwZXMuc2hpZnQoKV07XHJcbiAgICAgICAgdGhpcy5hZGROZXh0U2hhcGVzKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggPSBNYXRoLmZsb29yKHRoaXMuYm9hcmRNYXRyaXhbMF0ubGVuZ3RoIC8gMilcclxuICAgICAgICAgICAgLSBNYXRoLmZsb29yKHRoaXMucGxheWVyLm1hdHJpeFswXS5sZW5ndGggLyAyKTtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3MueSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gY3VycmVudGx5IGp1c3QgY2xlYXJzIHRoZSBib2FyZCwgYnV0IHdpbGxcclxuICAgICAgICAgICAgLy8gbmVlZCB0byBlbmQgdGhlIGdhbWVcclxuICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHJvdy5maWxsKDApKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGluZXMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYXllckRyb3Aoc29mdERyb3ApIHtcclxuICAgICAgICB0aGlzLnBsYXllci5kcm9wKCk7XHJcbiAgICAgICAgaWYgKHNvZnREcm9wICYmICF0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlSW5jcmVtZW50KDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudXAoKTtcclxuICAgICAgICAgICAgdGhpcy5tZXJnZVNoYXBlVG9Cb2FyZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIH1cclxuICAgIHBsYXllck1vdmUoZGlyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShkaXIpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKC1kaXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJvdGF0ZVBsYXllcigpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMTtcclxuICAgICAgICB0aGlzLnBsYXllci5yb3RhdGUoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAtKG9mZnNldCArIChvZmZzZXQgPiAwID8gMSA6IC0xKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5wdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLkRPV05fS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRyb3AodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLkxFRlRfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5SSUdIVF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuVVBfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVBsYXllcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbGxpZGUoKSB7XHJcbiAgICAgICAgY29uc3QgW20sIG9dID0gW3RoaXMucGxheWVyLm1hdHJpeCwgdGhpcy5wbGF5ZXIucG9zXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG0ubGVuZ3RoOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtW3ldLmxlbmd0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobVt5XVt4XSAhPT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICYmICh0aGlzLmJvYXJkTWF0cml4W3kgKyBvLnldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuYm9hcmRNYXRyaXhbeSArIG8ueV1beCArIG8ueF0pICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGluZSgpIHtcclxuICAgICAgICBsZXQgbGluZXNSZW1vdmVkID0gMDtcclxuICAgICAgICBjb25zdCBsaW5lU2NvcmVzID0ge1xyXG4gICAgICAgICAgICAxOiA0MCxcclxuICAgICAgICAgICAgMjogMTAwLFxyXG4gICAgICAgICAgICAzOiAzMDAsXHJcbiAgICAgICAgICAgIDQ6IDEyMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZE1hdHJpeC5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZE1hdHJpeFt5XS5ldmVyeSgodmFsdWUpID0+IHZhbHVlICE9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC5zcGxpY2UoeSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4LnVuc2hpZnQobmV3IEFycmF5KDEwKS5maWxsKDApKTtcclxuICAgICAgICAgICAgICAgIGxpbmVzUmVtb3ZlZCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGluZXMgKz0gbGluZXNSZW1vdmVkO1xyXG4gICAgICAgIGlmIChsaW5lc1JlbW92ZWQgPiAwKVxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlSW5jcmVtZW50KGxpbmVTY29yZXNbbGluZXNSZW1vdmVkXSk7XHJcbiAgICB9XHJcbiAgICBzY29yZUluY3JlbWVudChpbmNyZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IGluY3JlbWVudDtcclxuICAgIH1cclxuICAgIG1lcmdlU2hhcGVUb0JvYXJkKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLm1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4W3kgKyB0aGlzLnBsYXllci5wb3MueV1beCArIHRoaXMucGxheWVyLnBvcy54XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuaW5pdChDT05GSUcuQk9BUkRfV0lEVEgsIENPTkZJRy5CT0FSRF9IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lQ2FudmFzJykpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcy5pbml0KENPTkZJRy5ORVhUX1NIQVBFU19XSURUSCwgQ09ORklHLk5FWFRfU0hBUEVTX0hFSUdIVCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRTaGFwZXNDYW52YXMnKSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkJPQVJEX0JHX0NPTE9SKTtcclxuICAgICAgICB0aGlzLm5leHRTaGFwZXNDYW52YXMuZmlsbENhbnZhcyhDT05GSUcuQk9BUkRfQkdfQ09MT1IpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbiAgICAgICAgdGhpcy5saW5lc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXMnKTtcclxuICAgICAgICB0aGlzLmJvYXJkTWF0cml4ID0gTWF0cml4LmNyZWF0ZUJvYXJkTWF0cml4KDEwLCAyMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wKHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodEZyYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdEZyYW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdEZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gQ09ORklHLlVQREFURV9JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRyb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50LmlubmVySFRNTCA9IHRoaXMubGluZXMudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xyXG4gICAgfVxyXG59XHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuICAgIGdhbWUuaW5pdCgpO1xyXG59KSgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVNoYXBlKCkge1xyXG4gICAgY29uc3QgcGllY2VzID0gW1xyXG4gICAgICAgICdJJywgJ0knLCAnSScsICdJJyxcclxuICAgICAgICAnSicsICdKJywgJ0onLCAnSicsXHJcbiAgICAgICAgJ0wnLCAnTCcsICdMJywgJ0wnLFxyXG4gICAgICAgICdPJywgJ08nLCAnTycsICdPJyxcclxuICAgICAgICAnUycsICdTJywgJ1MnLCAnUycsXHJcbiAgICAgICAgJ1QnLCAnVCcsICdUJywgJ1QnLFxyXG4gICAgICAgICdaJywgJ1onLCAnWicsICdaJ1xyXG4gICAgXTtcclxuICAgIGNvbnN0IHBpZWNlID0gcGllY2VzLnNwbGljZSgoTWF0aC5yYW5kb20oKSAqIChwaWVjZXMubGVuZ3RoIC0gMSkpLCAxKVswXTtcclxuICAgIHJldHVybiBwaWVjZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9