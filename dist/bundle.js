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
        canvas.width = this.width;
        canvas.height = this.height;
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
        const matrix = [];
        while (h--) {
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
    drop(softDrop) {
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
    generateRandomShape() {
        const pieces = ['I', 'I', 'I', 'I',
            'J', 'J', 'J', 'J',
            'L', 'L', 'L', 'L',
            'O', 'O', 'O', 'O',
            'S', 'S', 'S', 'S',
            'T', 'T', 'T', 'T',
            'Z', 'Z', 'Z', 'Z',];
        const piece = pieces.splice((Math.random() * (pieces.length - 1)), 1)[0];
        return piece;
    }
    addNextShapes() {
        while (this.nextShapes.length < 3) {
            const shape = this.generateRandomShape();
            this.nextShapes.push(shape);
        }
    }
    drawNextShapes() {
        for (let i = 0; i < this.nextShapes.length; ++i) {
            const shape = _game_config__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][this.nextShapes[i]];
            const shapeWidth = shape[0].length;
            const posX = (6 / 2) - ((shapeWidth) / 2);
            for (let i = 0; i < shape.length; ++i) {
            }
            let posY = (3 * (i + 1)) - 2;
            _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(shape, { x: posX, y: posY }, this.nextShapesCanvas);
        }
    }
    drawBoard() {
        for (let x = 0; x < _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_TILE_WIDTH; ++x) {
            for (let y = 0; y < _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_TILE_HEIGHT; ++y) {
                this.gameCanvas.fillRoundedRect(x * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, y * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH - 1.5, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT - 1.5, 3, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_STROKE_COLOR, 3);
            }
        }
    }
    drawMatrices() {
        _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(this.boardMatrix, { x: 0, y: 0 }, this.gameCanvas);
        _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(this.player.matrix, this.player.pos, this.gameCanvas);
        this.drawNextShapes();
    }
    draw() {
        this.drawBoard();
        this.nextShapesCanvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.drawMatrices();
    }
    playerReset() {
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_4__["default"]();
        if (this.nextShapes.length === 0) {
            // is start of game
            this.addNextShapes();
        }
        this.player.matrix = _game_config__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][this.nextShapes.shift()];
        this.addNextShapes();
        this.player.pos.x = Math.floor(this.boardMatrix[0].length / 2) -
            Math.floor(this.player.matrix[0].length / 2);
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
                if (m[y][x] !== 0 && (this.boardMatrix[y + o.y] && this.boardMatrix[y + o.y][x + o.x]) !== 0) {
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
            if (this.boardMatrix[y].every(value => value !== 0)) {
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
        this.gameCanvas.init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_HEIGHT, document.getElementById("gameCanvas"));
        this.nextShapesCanvas.init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].NEXT_SHAPES_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].NEXT_SHAPES_HEIGHT, document.getElementById("nextShapesCanvas"));
        this.gameCanvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.nextShapesCanvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.scoreElement = document.getElementById("score");
        this.linesElement = document.getElementById("lines");
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
;
(() => {
    const game = new Game();
    game.init();
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBpbml0KHdpZHRoLCBoZWlnaHQsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIGZpbGxDYW52YXMoY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGZpbGxSZWN0KHgsIHksIHcsIGgsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxuICAgIGZpbGxSb3VuZGVkUmVjdCh4LCB5LCB3LCBoLCByLCBjb2xvciwgc3Ryb2tlQ29sb3IsIHN0cm9rZVdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGNvbnN0IGRlZyA9IE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCArIHIsIHkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCArIHcgLSByLCB5KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHggKyB3IC0gciwgeSArIHIsIHIsIGRlZyAqIDI3MCwgZGVnICogMCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4ICsgdywgeSArIGggLSByKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHggKyB3IC0gciwgeSArIGggLSByLCByLCBkZWcgKiAwLCBkZWcgKiA5MCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4ICsgciwgeSArIGgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCArIHIsIHkgKyBoIC0gciwgciwgZGVnICogOTAsIGRlZyAqIDE4MCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4LCB5ICsgcik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4ICsgciwgeSArIHIsIHIsIGRlZyAqIDE4MCwgZGVnICogMjcwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgaWYgKHN0cm9rZVdpZHRoICYmIHN0cm9rZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuICAgIHN0cm9rZVJlY3QoeCwgeSwgdywgaCwgc3Ryb2tlV2lkdGgsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG4gICAgYXJjKHgsIHksIHIsIHNBbmdsZSwgZUFuZ2xlLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByLCBzQW5nbGUsIGVBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBzaGFkb3coY29sb3IsIGJsdXIsIG9mZnNldFgsIG9mZnNldFkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Qmx1ciA9IGJsdXI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFggPSBvZmZzZXRYO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZID0gb2Zmc2V0WTtcclxuICAgIH1cclxuICAgIHNldEdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7IHRoaXMua2V5Ym9hcmREb3duKGUpOyB9KTtcclxuICAgIH1cclxuICAgIGtleWJvYXJkRG93bihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGtleVByZXNzZWQoa2V5Q29kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleURvd25ba2V5Q29kZV07XHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT05GSUcsIENPTE9SUyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgge1xyXG4gICAgc3RhdGljIGNyZWF0ZUJvYXJkTWF0cml4KHcsIGgpIHtcclxuICAgICAgICBjb25zdCBtYXRyaXggPSBbXTtcclxuICAgICAgICB3aGlsZSAoaC0tKSB7XHJcbiAgICAgICAgICAgIG1hdHJpeC5wdXNoKG5ldyBBcnJheSh3KS5maWxsKDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkcmF3TWF0cml4KG1hdHJpeCwgb2Zmc2V0LCBjYW52YXMpIHtcclxuICAgICAgICBtYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmZpbGxSb3VuZGVkUmVjdCgoeCArIG9mZnNldC54KSAqIENPTkZJRy5USUxFX1dJRFRILCAoeSArIG9mZnNldC55KSAqIENPTkZJRy5USUxFX0hFSUdIVCwgQ09ORklHLlRJTEVfV0lEVEggLSAyLCBDT05GSUcuVElMRV9IRUlHSFQgLSAyLCAzLCBDT0xPUlNbdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpcikge1xyXG4gICAgICAgIHRoaXMucG9zLnggKz0gZGlyO1xyXG4gICAgfVxyXG4gICAgZHJvcChzb2Z0RHJvcCkge1xyXG4gICAgICAgIHRoaXMucG9zLnkrKztcclxuICAgIH1cclxuICAgIHVwKCkge1xyXG4gICAgICAgIHRoaXMucG9zLnktLTtcclxuICAgIH1cclxuICAgIHJvdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeF1beV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeV1beF1cclxuICAgICAgICAgICAgICAgIF0gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeV1beF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbeF1beV1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRyaXguZm9yRWFjaCgocm93KSA9PiByb3cucmV2ZXJzZSgpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gICAgVElMRV9XSURUSDogMzAsXHJcbiAgICBUSUxFX0hFSUdIVDogMzAsXHJcbiAgICBCT0FSRF9USUxFX1dJRFRIOiAxMCxcclxuICAgIEJPQVJEX1RJTEVfSEVJR0hUOiAyMCxcclxuICAgIGdldCBCT0FSRF9XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIHRoaXMuQk9BUkRfVElMRV9XSURUSDsgfSxcclxuICAgIGdldCBCT0FSRF9IRUlHSFQoKSB7IHJldHVybiB0aGlzLlRJTEVfSEVJR0hUICogdGhpcy5CT0FSRF9USUxFX0hFSUdIVDsgfSxcclxuICAgIGdldCBORVhUX1NIQVBFU19XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIDY7IH0sXHJcbiAgICBnZXQgTkVYVF9TSEFQRVNfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIDEwOyB9LFxyXG4gICAgQk9BUkRfQkdfQ09MT1I6ICcjNGU0ZTRlJyxcclxuICAgIEJPQVJEX1NUUk9LRV9DT0xPUjogJyMyYjJiMmInLFxyXG4gICAgVVBEQVRFX0lOVEVSVkFMOiAxMDAwLFxyXG4gICAgLy8ga2V5IGNvZGVzXHJcbiAgICBVUF9LRVk6IDM4LFxyXG4gICAgRE9XTl9LRVk6IDQwLFxyXG4gICAgTEVGVF9LRVk6IDM3LFxyXG4gICAgUklHSFRfS0VZOiAzOSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFNIQVBFUyA9IHtcclxuICAgIFQ6IFtcclxuICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgWzEsIDEsIDFdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEw6IFtcclxuICAgICAgICBbMCwgMCwgMl0sXHJcbiAgICAgICAgWzIsIDIsIDJdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEo6IFtcclxuICAgICAgICBbMywgMCwgMF0sXHJcbiAgICAgICAgWzMsIDMsIDNdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIE86IFtcclxuICAgICAgICBbNCwgNF0sXHJcbiAgICAgICAgWzQsIDRdLFxyXG4gICAgXSxcclxuICAgIFM6IFtcclxuICAgICAgICBbMCwgNSwgNV0sXHJcbiAgICAgICAgWzUsIDUsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIFo6IFtcclxuICAgICAgICBbNiwgNiwgMF0sXHJcbiAgICAgICAgWzAsIDYsIDZdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEk6IFtcclxuICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzcsIDcsIDcsIDddLFxyXG4gICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMF1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICAgIDE6ICcjZWU4MmVlJyxcclxuICAgIDI6ICcjZWI4YjIzJyxcclxuICAgIDM6ICcjMWU5MGZmJyxcclxuICAgIDQ6ICcjZmZjNjNlJyxcclxuICAgIDU6ICcjNTljYjg2JyxcclxuICAgIDY6ICcjZGM2NTU1JyxcclxuICAgIDc6ICcjMjNlM2ViJyAvLyBjeWFuXHJcbn07XHJcbiIsImltcG9ydCB7IENPTkZJRywgU0hBUEVTIH0gZnJvbSAnLi9nYW1lLmNvbmZpZyc7XHJcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuaW1wb3J0IE1hdHJpeCBmcm9tICcuL01hdHJpeCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBDT05GSUcuVVBEQVRFX0lOVEVSVkFMO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGluZXMgPSAwO1xyXG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXh0U2hhcGVzID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9ICh0RnJhbWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcE1haW4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZCgyNykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUlucHV0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh0RnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnJlc2V0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdlbmVyYXRlUmFuZG9tU2hhcGUoKSB7XHJcbiAgICAgICAgY29uc3QgcGllY2VzID0gWydJJywgJ0knLCAnSScsICdJJyxcclxuICAgICAgICAgICAgJ0onLCAnSicsICdKJywgJ0onLFxyXG4gICAgICAgICAgICAnTCcsICdMJywgJ0wnLCAnTCcsXHJcbiAgICAgICAgICAgICdPJywgJ08nLCAnTycsICdPJyxcclxuICAgICAgICAgICAgJ1MnLCAnUycsICdTJywgJ1MnLFxyXG4gICAgICAgICAgICAnVCcsICdUJywgJ1QnLCAnVCcsXHJcbiAgICAgICAgICAgICdaJywgJ1onLCAnWicsICdaJyxdO1xyXG4gICAgICAgIGNvbnN0IHBpZWNlID0gcGllY2VzLnNwbGljZSgoTWF0aC5yYW5kb20oKSAqIChwaWVjZXMubGVuZ3RoIC0gMSkpLCAxKVswXTtcclxuICAgICAgICByZXR1cm4gcGllY2U7XHJcbiAgICB9XHJcbiAgICBhZGROZXh0U2hhcGVzKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHRTaGFwZXMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTaGFwZXMucHVzaChzaGFwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd05leHRTaGFwZXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5leHRTaGFwZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBTSEFQRVNbdGhpcy5uZXh0U2hhcGVzW2ldXTtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlWzBdLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgcG9zWCA9ICg2IC8gMikgLSAoKHNoYXBlV2lkdGgpIC8gMik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcGUubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zWSA9ICgzICogKGkgKyAxKSkgLSAyO1xyXG4gICAgICAgICAgICBNYXRyaXguZHJhd01hdHJpeChzaGFwZSwgeyB4OiBwb3NYLCB5OiBwb3NZIH0sIHRoaXMubmV4dFNoYXBlc0NhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd0JvYXJkKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ09ORklHLkJPQVJEX1RJTEVfV0lEVEg7ICsreCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENPTkZJRy5CT0FSRF9USUxFX0hFSUdIVDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDYW52YXMuZmlsbFJvdW5kZWRSZWN0KHggKiBDT05GSUcuVElMRV9XSURUSCwgeSAqIENPTkZJRy5USUxFX0hFSUdIVCwgQ09ORklHLlRJTEVfV0lEVEggLSAxLjUsIENPTkZJRy5USUxFX0hFSUdIVCAtIDEuNSwgMywgQ09ORklHLkJPQVJEX0JHX0NPTE9SLCBDT05GSUcuQk9BUkRfU1RST0tFX0NPTE9SLCAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXdNYXRyaWNlcygpIHtcclxuICAgICAgICBNYXRyaXguZHJhd01hdHJpeCh0aGlzLmJvYXJkTWF0cml4LCB7IHg6IDAsIHk6IDAgfSwgdGhpcy5nYW1lQ2FudmFzKTtcclxuICAgICAgICBNYXRyaXguZHJhd01hdHJpeCh0aGlzLnBsYXllci5tYXRyaXgsIHRoaXMucGxheWVyLnBvcywgdGhpcy5nYW1lQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmRyYXdOZXh0U2hhcGVzKCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuZHJhd0JvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0U2hhcGVzQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkJPQVJEX0JHX0NPTE9SKTtcclxuICAgICAgICB0aGlzLmRyYXdNYXRyaWNlcygpO1xyXG4gICAgfVxyXG4gICAgcGxheWVyUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dFNoYXBlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gaXMgc3RhcnQgb2YgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLmFkZE5leHRTaGFwZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4ID0gU0hBUEVTW3RoaXMubmV4dFNoYXBlcy5zaGlmdCgpXTtcclxuICAgICAgICB0aGlzLmFkZE5leHRTaGFwZXMoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3MueCA9IE1hdGguZmxvb3IodGhpcy5ib2FyZE1hdHJpeFswXS5sZW5ndGggLyAyKSAtXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy5wbGF5ZXIubWF0cml4WzBdLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy55ID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgLy8gVE9ETyBjdXJyZW50bHkganVzdCBjbGVhcnMgdGhlIGJvYXJkLCBidXQgd2lsbFxyXG4gICAgICAgICAgICAvLyBuZWVkIHRvIGVuZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4LmZvckVhY2goKHJvdykgPT4gcm93LmZpbGwoMCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5saW5lcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheWVyRHJvcChzb2Z0RHJvcCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmRyb3AoKTtcclxuICAgICAgICBpZiAoc29mdERyb3AgJiYgIXRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVJbmNyZW1lbnQoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci51cCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1lcmdlU2hhcGVUb0JvYXJkKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllclJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgfVxyXG4gICAgcGxheWVyTW92ZShkaXIpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5tb3ZlKGRpcik7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoLWRpcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcm90YXRlUGxheWVyKCkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnJvdGF0ZSgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IC0ob2Zmc2V0ICsgKG9mZnNldCA+IDAgPyAxIDogLTEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVJbnB1dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuRE9XTl9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRHJvcCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuTEVGVF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlJJR0hUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5VUF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlUGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29sbGlkZSgpIHtcclxuICAgICAgICBjb25zdCBbbSwgb10gPSBbdGhpcy5wbGF5ZXIubWF0cml4LCB0aGlzLnBsYXllci5wb3NdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbS5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1beV0ubGVuZ3RoOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtW3ldW3hdICE9PSAwICYmICh0aGlzLmJvYXJkTWF0cml4W3kgKyBvLnldICYmIHRoaXMuYm9hcmRNYXRyaXhbeSArIG8ueV1beCArIG8ueF0pICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGluZSgpIHtcclxuICAgICAgICBsZXQgbGluZXNSZW1vdmVkID0gMDtcclxuICAgICAgICBjb25zdCBsaW5lU2NvcmVzID0ge1xyXG4gICAgICAgICAgICAxOiA0MCxcclxuICAgICAgICAgICAgMjogMTAwLFxyXG4gICAgICAgICAgICAzOiAzMDAsXHJcbiAgICAgICAgICAgIDQ6IDEyMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZE1hdHJpeC5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZE1hdHJpeFt5XS5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRNYXRyaXguc3BsaWNlKHksIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC51bnNoaWZ0KG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7XHJcbiAgICAgICAgICAgICAgICBsaW5lc1JlbW92ZWQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmVzICs9IGxpbmVzUmVtb3ZlZDtcclxuICAgICAgICBpZiAobGluZXNSZW1vdmVkID4gMClcclxuICAgICAgICAgICAgdGhpcy5zY29yZUluY3JlbWVudChsaW5lU2NvcmVzW2xpbmVzUmVtb3ZlZF0pO1xyXG4gICAgfVxyXG4gICAgc2NvcmVJbmNyZW1lbnQoaW5jcmVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBpbmNyZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBtZXJnZVNoYXBlVG9Cb2FyZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeFt5ICsgdGhpcy5wbGF5ZXIucG9zLnldW3ggKyB0aGlzLnBsYXllci5wb3MueF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLm5leHRTaGFwZXNDYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmluaXQoQ09ORklHLkJPQVJEX1dJRFRILCBDT05GSUcuQk9BUkRfSEVJR0hULCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcy5pbml0KENPTkZJRy5ORVhUX1NIQVBFU19XSURUSCwgQ09ORklHLk5FWFRfU0hBUEVTX0hFSUdIVCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0U2hhcGVzQ2FudmFzXCIpKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuZmlsbENhbnZhcyhDT05GSUcuQk9BUkRfQkdfQ09MT1IpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5CT0FSRF9CR19DT0xPUik7XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1wiKTtcclxuICAgICAgICB0aGlzLmJvYXJkTWF0cml4ID0gTWF0cml4LmNyZWF0ZUJvYXJkTWF0cml4KDEwLCAyMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wKHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodEZyYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdEZyYW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdEZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gQ09ORklHLlVQREFURV9JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRyb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50LmlubmVySFRNTCA9IHRoaXMubGluZXMudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xyXG4gICAgfVxyXG59XHJcbjtcclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gICAgZ2FtZS5pbml0KCk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=