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
                    canvas.fillRect((x + offset.x) * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH + 2, (y + offset.y) * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT + 2, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH - 4, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT - 4, _game_config__WEBPACK_IMPORTED_MODULE_0__["COLORS"][value]);
                    // TODO how to create inner shadow?
                    // canvas.shadow('#000000', 3, -1, -1);
                    // canvas.setGlobalCompositeOperation('source-atop')
                    // canvas.strokeRect(
                    //     (x + offset.x) * CONFIG.TILE_WIDTH + 2,
                    //     (y + offset.y) * CONFIG.TILE_HEIGHT + 2,
                    //     CONFIG.TILE_WIDTH - 4,
                    //     CONFIG.TILE_HEIGHT - 4,
                    //     0,
                    //     '#000'
                    // );
                    // canvas.setGlobalCompositeOperation('source-over');
                }
            });
        });
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
    BOARD_BG_COLOR: '#2b2b2b',
    BOARD_STROKE_COLOR: '#9c9c9c',
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
    1: 'purple',
    2: 'orange',
    3: 'blue',
    4: 'yellow',
    5: 'green',
    6: 'red',
    7: 'cyan'
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




class Game {
    constructor() {
        this.updateInterval = _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].UPDATE_INTERVAL;
        this.lastTime = 0;
        this.currentTime = 0;
        this.eventHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.player = {
            pos: { x: 3, y: 0 }
        };
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
                this.gameCanvas.fillRect(x * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, y * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
                this.gameCanvas.strokeRect(x * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, y * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, 1, '#9c9c9c');
                this.gameCanvas.arc(x * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, y * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, 2, 0, Math.PI * 2, '#9c9c9c');
            }
        }
    }
    drawMatrices() {
        _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(this.boardMatrix, { x: 0, y: 0 }, this.gameCanvas);
        _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(this.player.matrix, this.player.pos, this.gameCanvas);
    }
    draw() {
        this.drawBoard();
        this.nextShapesCanvas.fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.drawMatrices();
        this.drawNextShapes();
    }
    playerReset() {
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
        this.player.pos.y++;
        if (softDrop && !this.collide()) {
            this.scoreIncrement(1);
        }
        if (this.collide()) {
            this.player.pos.y--;
            this.mergeShapeToBoard();
            this.line();
            this.playerReset();
        }
        this.currentTime = 0;
    }
    playerMove(dir) {
        this.player.pos.x += dir;
        if (this.collide()) {
            this.player.pos.x -= dir;
        }
    }
    rotate() {
        for (let y = 0; y < this.player.matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [
                    this.player.matrix[x][y],
                    this.player.matrix[y][x]
                ] = [
                    this.player.matrix[y][x],
                    this.player.matrix[x][y]
                ];
            }
        }
        this.player.matrix.forEach((row) => row.reverse());
    }
    rotatePlayer() {
        let offset = 1;
        this.rotate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xyXG4gICAgaW5pdCh3aWR0aCwgaGVpZ2h0LCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBmaWxsQ2FudmFzKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBmaWxsUmVjdCh4LCB5LCB3LCBoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbiAgICBzdHJva2VSZWN0KHgsIHksIHcsIGgsIHN0cm9rZVdpZHRoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBzdHJva2VXaWR0aDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxuICAgIGFyYyh4LCB5LCByLCBzQW5nbGUsIGVBbmdsZSwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgciwgc0FuZ2xlLCBlQW5nbGUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgc2hhZG93KGNvbG9yLCBibHVyLCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSBibHVyO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgICB9XHJcbiAgICBzZXRHbG9iYWxDb21wb3NpdGVPcGVyYXRpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4geyB0aGlzLmtleWJvYXJkRG93bihlKTsgfSk7XHJcbiAgICB9XHJcbiAgICBrZXlib2FyZERvd24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMua2V5RG93bltldmVudC5rZXlDb2RlXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBrZXlQcmVzc2VkKGtleUNvZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlEb3duW2tleUNvZGVdO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09ORklHLCBDT0xPUlMgfSBmcm9tICcuL2dhbWUuY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IHtcclxuICAgIHN0YXRpYyBjcmVhdGVCb2FyZE1hdHJpeCh3LCBoKSB7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gW107XHJcbiAgICAgICAgd2hpbGUgKGgtLSkge1xyXG4gICAgICAgICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkodykuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZHJhd01hdHJpeChtYXRyaXgsIG9mZnNldCwgY2FudmFzKSB7XHJcbiAgICAgICAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsUmVjdCgoeCArIG9mZnNldC54KSAqIENPTkZJRy5USUxFX1dJRFRIICsgMiwgKHkgKyBvZmZzZXQueSkgKiBDT05GSUcuVElMRV9IRUlHSFQgKyAyLCBDT05GSUcuVElMRV9XSURUSCAtIDQsIENPTkZJRy5USUxFX0hFSUdIVCAtIDQsIENPTE9SU1t2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gaG93IHRvIGNyZWF0ZSBpbm5lciBzaGFkb3c/XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FudmFzLnNoYWRvdygnIzAwMDAwMCcsIDMsIC0xLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FudmFzLnNldEdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbignc291cmNlLWF0b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbnZhcy5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAoeCArIG9mZnNldC54KSAqIENPTkZJRy5USUxFX1dJRFRIICsgMixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgKHkgKyBvZmZzZXQueSkgKiBDT05GSUcuVElMRV9IRUlHSFQgKyAyLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBDT05GSUcuVElMRV9XSURUSCAtIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIENPTkZJRy5USUxFX0hFSUdIVCAtIDQsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICcjMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FudmFzLnNldEdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbignc291cmNlLW92ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAgIFRJTEVfV0lEVEg6IDMwLFxyXG4gICAgVElMRV9IRUlHSFQ6IDMwLFxyXG4gICAgQk9BUkRfVElMRV9XSURUSDogMTAsXHJcbiAgICBCT0FSRF9USUxFX0hFSUdIVDogMjAsXHJcbiAgICBnZXQgQk9BUkRfV0lEVEgoKSB7IHJldHVybiB0aGlzLlRJTEVfV0lEVEggKiB0aGlzLkJPQVJEX1RJTEVfV0lEVEg7IH0sXHJcbiAgICBnZXQgQk9BUkRfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIHRoaXMuQk9BUkRfVElMRV9IRUlHSFQ7IH0sXHJcbiAgICBnZXQgTkVYVF9TSEFQRVNfV0lEVEgoKSB7IHJldHVybiB0aGlzLlRJTEVfV0lEVEggKiA2OyB9LFxyXG4gICAgZ2V0IE5FWFRfU0hBUEVTX0hFSUdIVCgpIHsgcmV0dXJuIHRoaXMuVElMRV9IRUlHSFQgKiAxMDsgfSxcclxuICAgIEJPQVJEX0JHX0NPTE9SOiAnIzJiMmIyYicsXHJcbiAgICBCT0FSRF9TVFJPS0VfQ09MT1I6ICcjOWM5YzljJyxcclxuICAgIFVQREFURV9JTlRFUlZBTDogMTAwMCxcclxuICAgIC8vIGtleSBjb2Rlc1xyXG4gICAgVVBfS0VZOiAzOCxcclxuICAgIERPV05fS0VZOiA0MCxcclxuICAgIExFRlRfS0VZOiAzNyxcclxuICAgIFJJR0hUX0tFWTogMzksXHJcbn07XHJcbmV4cG9ydCBjb25zdCBTSEFQRVMgPSB7XHJcbiAgICBUOiBbXHJcbiAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgIFsxLCAxLCAxXSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBMOiBbXHJcbiAgICAgICAgWzAsIDAsIDJdLFxyXG4gICAgICAgIFsyLCAyLCAyXSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBKOiBbXHJcbiAgICAgICAgWzMsIDAsIDBdLFxyXG4gICAgICAgIFszLCAzLCAzXSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBPOiBbXHJcbiAgICAgICAgWzQsIDRdLFxyXG4gICAgICAgIFs0LCA0XSxcclxuICAgIF0sXHJcbiAgICBTOiBbXHJcbiAgICAgICAgWzAsIDUsIDVdLFxyXG4gICAgICAgIFs1LCA1LCAwXSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBaOiBbXHJcbiAgICAgICAgWzYsIDYsIDBdLFxyXG4gICAgICAgIFswLCA2LCA2XSxcclxuICAgICAgICBbMCwgMCwgMF1cclxuICAgIF0sXHJcbiAgICBJOiBbXHJcbiAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgIFs3LCA3LCA3LCA3XSxcclxuICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDAsIDBdXHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICAxOiAncHVycGxlJyxcclxuICAgIDI6ICdvcmFuZ2UnLFxyXG4gICAgMzogJ2JsdWUnLFxyXG4gICAgNDogJ3llbGxvdycsXHJcbiAgICA1OiAnZ3JlZW4nLFxyXG4gICAgNjogJ3JlZCcsXHJcbiAgICA3OiAnY3lhbidcclxufTtcclxuIiwiaW1wb3J0IHsgQ09ORklHLCBTSEFQRVMgfSBmcm9tICcuL2dhbWUuY29uZmlnJztcclxuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XHJcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9FdmVudEhhbmRsZXInO1xyXG5pbXBvcnQgTWF0cml4IGZyb20gJy4vTWF0cml4JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gQ09ORklHLlVQREFURV9JTlRFUlZBTDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgICAgICAgcG9zOiB7IHg6IDMsIHk6IDAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5leHRTaGFwZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wID0gKHRGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdG9wTWFpbiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKDI3KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKHRGcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIucmVzZXQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVSYW5kb21TaGFwZSgpIHtcclxuICAgICAgICBjb25zdCBwaWVjZXMgPSBbJ0knLCAnSScsICdJJywgJ0knLFxyXG4gICAgICAgICAgICAnSicsICdKJywgJ0onLCAnSicsXHJcbiAgICAgICAgICAgICdMJywgJ0wnLCAnTCcsICdMJyxcclxuICAgICAgICAgICAgJ08nLCAnTycsICdPJywgJ08nLFxyXG4gICAgICAgICAgICAnUycsICdTJywgJ1MnLCAnUycsXHJcbiAgICAgICAgICAgICdUJywgJ1QnLCAnVCcsICdUJyxcclxuICAgICAgICAgICAgJ1onLCAnWicsICdaJywgJ1onLF07XHJcbiAgICAgICAgY29uc3QgcGllY2UgPSBwaWVjZXMuc3BsaWNlKChNYXRoLnJhbmRvbSgpICogKHBpZWNlcy5sZW5ndGggLSAxKSksIDEpWzBdO1xyXG4gICAgICAgIHJldHVybiBwaWVjZTtcclxuICAgIH1cclxuICAgIGFkZE5leHRTaGFwZXMoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubmV4dFNoYXBlcy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5nZW5lcmF0ZVJhbmRvbVNoYXBlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFNoYXBlcy5wdXNoKHNoYXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3TmV4dFNoYXBlcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmV4dFNoYXBlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IFNIQVBFU1t0aGlzLm5leHRTaGFwZXNbaV1dO1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZVdpZHRoID0gc2hhcGVbMF0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NYID0gKDYgLyAyKSAtICgoc2hhcGVXaWR0aCkgLyAyKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFwZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3NZID0gKDMgKiAoaSArIDEpKSAtIDI7XHJcbiAgICAgICAgICAgIE1hdHJpeC5kcmF3TWF0cml4KHNoYXBlLCB7IHg6IHBvc1gsIHk6IHBvc1kgfSwgdGhpcy5uZXh0U2hhcGVzQ2FudmFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3Qm9hcmQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBDT05GSUcuQk9BUkRfVElMRV9XSURUSDsgKyt4KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ09ORklHLkJPQVJEX1RJTEVfSEVJR0hUOyArK3kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNhbnZhcy5maWxsUmVjdCh4ICogQ09ORklHLlRJTEVfV0lEVEgsIHkgKiBDT05GSUcuVElMRV9IRUlHSFQsIENPTkZJRy5USUxFX1dJRFRILCBDT05GSUcuVElMRV9IRUlHSFQsIENPTkZJRy5CT0FSRF9CR19DT0xPUik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDYW52YXMuc3Ryb2tlUmVjdCh4ICogQ09ORklHLlRJTEVfV0lEVEgsIHkgKiBDT05GSUcuVElMRV9IRUlHSFQsIENPTkZJRy5USUxFX1dJRFRILCBDT05GSUcuVElMRV9IRUlHSFQsIDEsICcjOWM5YzljJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDYW52YXMuYXJjKHggKiBDT05GSUcuVElMRV9XSURUSCwgeSAqIENPTkZJRy5USUxFX0hFSUdIVCwgMiwgMCwgTWF0aC5QSSAqIDIsICcjOWM5YzljJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3TWF0cmljZXMoKSB7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5ib2FyZE1hdHJpeCwgeyB4OiAwLCB5OiAwIH0sIHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5wbGF5ZXIubWF0cml4LCB0aGlzLnBsYXllci5wb3MsIHRoaXMuZ2FtZUNhbnZhcyk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuZHJhd0JvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0U2hhcGVzQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkJPQVJEX0JHX0NPTE9SKTtcclxuICAgICAgICB0aGlzLmRyYXdNYXRyaWNlcygpO1xyXG4gICAgICAgIHRoaXMuZHJhd05leHRTaGFwZXMoKTtcclxuICAgIH1cclxuICAgIHBsYXllclJlc2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5leHRTaGFwZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGlzIHN0YXJ0IG9mIGdhbWVcclxuICAgICAgICAgICAgdGhpcy5hZGROZXh0U2hhcGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLm1hdHJpeCA9IFNIQVBFU1t0aGlzLm5leHRTaGFwZXMuc2hpZnQoKV07XHJcbiAgICAgICAgdGhpcy5hZGROZXh0U2hhcGVzKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggPSBNYXRoLmZsb29yKHRoaXMuYm9hcmRNYXRyaXhbMF0ubGVuZ3RoIC8gMikgLVxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKHRoaXMucGxheWVyLm1hdHJpeFswXS5sZW5ndGggLyAyKTtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3MueSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gY3VycmVudGx5IGp1c3QgY2xlYXJzIHRoZSBib2FyZCwgYnV0IHdpbGxcclxuICAgICAgICAgICAgLy8gbmVlZCB0byBlbmQgdGhlIGdhbWVcclxuICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHJvdy5maWxsKDApKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGluZXMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYXllckRyb3Aoc29mdERyb3ApIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3MueSsrO1xyXG4gICAgICAgIGlmIChzb2Z0RHJvcCAmJiAhdGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUluY3JlbWVudCgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBvcy55LS07XHJcbiAgICAgICAgICAgIHRoaXMubWVyZ2VTaGFwZVRvQm9hcmQoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyUmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXJNb3ZlKGRpcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy54ICs9IGRpcjtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggLT0gZGlyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJvdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGxheWVyLm1hdHJpeC5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHk7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1hdHJpeFt4XVt5XSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tYXRyaXhbeV1beF1cclxuICAgICAgICAgICAgICAgIF0gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4W3ldW3hdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1hdHJpeFt4XVt5XVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXguZm9yRWFjaCgocm93KSA9PiByb3cucmV2ZXJzZSgpKTtcclxuICAgIH1cclxuICAgIHJvdGF0ZVBsYXllcigpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMTtcclxuICAgICAgICB0aGlzLnJvdGF0ZSgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IC0ob2Zmc2V0ICsgKG9mZnNldCA+IDAgPyAxIDogLTEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVJbnB1dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuRE9XTl9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRHJvcCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuTEVGVF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlJJR0hUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5VUF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlUGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29sbGlkZSgpIHtcclxuICAgICAgICBjb25zdCBbbSwgb10gPSBbdGhpcy5wbGF5ZXIubWF0cml4LCB0aGlzLnBsYXllci5wb3NdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbS5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1beV0ubGVuZ3RoOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtW3ldW3hdICE9PSAwICYmICh0aGlzLmJvYXJkTWF0cml4W3kgKyBvLnldICYmIHRoaXMuYm9hcmRNYXRyaXhbeSArIG8ueV1beCArIG8ueF0pICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGluZSgpIHtcclxuICAgICAgICBsZXQgbGluZXNSZW1vdmVkID0gMDtcclxuICAgICAgICBjb25zdCBsaW5lU2NvcmVzID0ge1xyXG4gICAgICAgICAgICAxOiA0MCxcclxuICAgICAgICAgICAgMjogMTAwLFxyXG4gICAgICAgICAgICAzOiAzMDAsXHJcbiAgICAgICAgICAgIDQ6IDEyMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZE1hdHJpeC5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZE1hdHJpeFt5XS5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRNYXRyaXguc3BsaWNlKHksIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC51bnNoaWZ0KG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7XHJcbiAgICAgICAgICAgICAgICBsaW5lc1JlbW92ZWQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmVzICs9IGxpbmVzUmVtb3ZlZDtcclxuICAgICAgICBpZiAobGluZXNSZW1vdmVkID4gMClcclxuICAgICAgICAgICAgdGhpcy5zY29yZUluY3JlbWVudChsaW5lU2NvcmVzW2xpbmVzUmVtb3ZlZF0pO1xyXG4gICAgfVxyXG4gICAgc2NvcmVJbmNyZW1lbnQoaW5jcmVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSBpbmNyZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBtZXJnZVNoYXBlVG9Cb2FyZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeFt5ICsgdGhpcy5wbGF5ZXIucG9zLnldW3ggKyB0aGlzLnBsYXllci5wb3MueF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLm5leHRTaGFwZXNDYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmluaXQoQ09ORklHLkJPQVJEX1dJRFRILCBDT05GSUcuQk9BUkRfSEVJR0hULCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcy5pbml0KENPTkZJRy5ORVhUX1NIQVBFU19XSURUSCwgQ09ORklHLk5FWFRfU0hBUEVTX0hFSUdIVCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0U2hhcGVzQ2FudmFzXCIpKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuZmlsbENhbnZhcyhDT05GSUcuQk9BUkRfQkdfQ09MT1IpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5CT0FSRF9CR19DT0xPUik7XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1wiKTtcclxuICAgICAgICB0aGlzLmJvYXJkTWF0cml4ID0gTWF0cml4LmNyZWF0ZUJvYXJkTWF0cml4KDEwLCAyMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wKHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodEZyYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdEZyYW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdEZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gQ09ORklHLlVQREFURV9JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRyb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50LmlubmVySFRNTCA9IHRoaXMubGluZXMudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xyXG4gICAgfVxyXG59XHJcbjtcclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gICAgZ2FtZS5pbml0KCk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=