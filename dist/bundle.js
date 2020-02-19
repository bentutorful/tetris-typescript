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
    static init(width, height, canvas) {
        this.width = width;
        this.height = height;
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    }
    static fillCanvas(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }
    static fillRect(x, y, w, h, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
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
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");


class Matrix {
    static createBoardMatrix(w, h) {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    }
    static drawMatrix(matrix, offset) {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fillRect((x + offset.x) * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, (y + offset.y) * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["COLORS"][value]);
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
    TILE_WIDTH: 40,
    TILE_HEIGHT: 40,
    get BOARD_WIDTH() { return this.TILE_WIDTH * 10; },
    get BOARD_HEIGHT() { return this.TILE_HEIGHT * 20; },
    BOARD_BG_COLOR: '#000000',
    UPDATE_INTERVAL: 1000,
    // key codes
    UP_KEY: 38,
    DOWN_KEY: 40,
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
};
const SHAPES = {
    T: [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    L: [
        [0, 2, 0],
        [0, 2, 0],
        [0, 2, 2]
    ],
    J: [
        [0, 3, 0],
        [0, 3, 0],
        [3, 3, 0]
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
        [0, 7, 0, 0],
        [0, 7, 0, 0],
        [0, 7, 0, 0],
        [0, 7, 0, 0]
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
        const next = pieces.splice((Math.random() * (pieces.length - 1)), 1)[0];
        this.player.matrix = _game_config__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][next];
    }
    draw() {
        _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(this.boardMatrix, { x: 0, y: 0 });
        _Matrix__WEBPACK_IMPORTED_MODULE_3__["default"].drawMatrix(this.player.matrix, this.player.pos);
    }
    playerReset() {
        this.generateRandomShape();
        this.player.pos.x = Math.floor(this.boardMatrix[0].length / 2) -
            Math.floor(this.player.matrix[0].length / 2);
        this.player.pos.y = 0;
        if (this.collide()) {
            // TODO currently just clears the board, but will
            // need to end the game
            this.boardMatrix.forEach((row) => row.fill(0));
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
        _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].init(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_HEIGHT, document.getElementById("gameCanvas"));
        _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLHFEQUFxRCxzQkFBc0IsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBzdGF0aWMgaW5pdCh3aWR0aCwgaGVpZ2h0LCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsbENhbnZhcyhjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbGxSZWN0KHgsIHksIHcsIGgsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7IHRoaXMua2V5Ym9hcmREb3duKGUpOyB9KTtcclxuICAgIH1cclxuICAgIGtleWJvYXJkRG93bihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGtleVByZXNzZWQoa2V5Q29kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleURvd25ba2V5Q29kZV07XHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT05GSUcsIENPTE9SUyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IHtcclxuICAgIHN0YXRpYyBjcmVhdGVCb2FyZE1hdHJpeCh3LCBoKSB7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gW107XHJcbiAgICAgICAgd2hpbGUgKGgtLSkge1xyXG4gICAgICAgICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkodykuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZHJhd01hdHJpeChtYXRyaXgsIG9mZnNldCkge1xyXG4gICAgICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBDYW52YXMuZmlsbFJlY3QoKHggKyBvZmZzZXQueCkgKiBDT05GSUcuVElMRV9XSURUSCwgKHkgKyBvZmZzZXQueSkgKiBDT05GSUcuVElMRV9IRUlHSFQsIENPTkZJRy5USUxFX1dJRFRILCBDT05GSUcuVElMRV9IRUlHSFQsIENPTE9SU1t2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gICAgVElMRV9XSURUSDogNDAsXHJcbiAgICBUSUxFX0hFSUdIVDogNDAsXHJcbiAgICBnZXQgQk9BUkRfV0lEVEgoKSB7IHJldHVybiB0aGlzLlRJTEVfV0lEVEggKiAxMDsgfSxcclxuICAgIGdldCBCT0FSRF9IRUlHSFQoKSB7IHJldHVybiB0aGlzLlRJTEVfSEVJR0hUICogMjA7IH0sXHJcbiAgICBCT0FSRF9CR19DT0xPUjogJyMwMDAwMDAnLFxyXG4gICAgVVBEQVRFX0lOVEVSVkFMOiAxMDAwLFxyXG4gICAgLy8ga2V5IGNvZGVzXHJcbiAgICBVUF9LRVk6IDM4LFxyXG4gICAgRE9XTl9LRVk6IDQwLFxyXG4gICAgTEVGVF9LRVk6IDM3LFxyXG4gICAgUklHSFRfS0VZOiAzOSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFNIQVBFUyA9IHtcclxuICAgIFQ6IFtcclxuICAgICAgICBbMCwgMCwgMF0sXHJcbiAgICAgICAgWzEsIDEsIDFdLFxyXG4gICAgICAgIFswLCAxLCAwXVxyXG4gICAgXSxcclxuICAgIEw6IFtcclxuICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgIFswLCAyLCAyXVxyXG4gICAgXSxcclxuICAgIEo6IFtcclxuICAgICAgICBbMCwgMywgMF0sXHJcbiAgICAgICAgWzAsIDMsIDBdLFxyXG4gICAgICAgIFszLCAzLCAwXVxyXG4gICAgXSxcclxuICAgIE86IFtcclxuICAgICAgICBbNCwgNF0sXHJcbiAgICAgICAgWzQsIDRdLFxyXG4gICAgXSxcclxuICAgIFM6IFtcclxuICAgICAgICBbMCwgNSwgNV0sXHJcbiAgICAgICAgWzUsIDUsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIFo6IFtcclxuICAgICAgICBbNiwgNiwgMF0sXHJcbiAgICAgICAgWzAsIDYsIDZdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEk6IFtcclxuICAgICAgICBbMCwgNywgMCwgMF0sXHJcbiAgICAgICAgWzAsIDcsIDAsIDBdLFxyXG4gICAgICAgIFswLCA3LCAwLCAwXSxcclxuICAgICAgICBbMCwgNywgMCwgMF1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICAgIDE6ICdwdXJwbGUnLFxyXG4gICAgMjogJ29yYW5nZScsXHJcbiAgICAzOiAnYmx1ZScsXHJcbiAgICA0OiAneWVsbG93JyxcclxuICAgIDU6ICdncmVlbicsXHJcbiAgICA2OiAncmVkJyxcclxuICAgIDc6ICdjeWFuJ1xyXG59O1xyXG4iLCJpbXBvcnQgeyBDT05GSUcsIFNIQVBFUyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcbmltcG9ydCBNYXRyaXggZnJvbSAnLi9NYXRyaXgnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBDT05GSUcuVVBEQVRFX0lOVEVSVkFMO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0ge1xyXG4gICAgICAgICAgICBwb3M6IHsgeDogMywgeTogMCB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxpbmVzID0gMDtcclxuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3AgPSAodEZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3BNYWluID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoMjcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUodEZyYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5yZXNldCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVJhbmRvbVNoYXBlKCkge1xyXG4gICAgICAgIGNvbnN0IHBpZWNlcyA9IFsnSScsICdJJywgJ0knLCAnSScsXHJcbiAgICAgICAgICAgICdKJywgJ0onLCAnSicsICdKJyxcclxuICAgICAgICAgICAgJ0wnLCAnTCcsICdMJywgJ0wnLFxyXG4gICAgICAgICAgICAnTycsICdPJywgJ08nLCAnTycsXHJcbiAgICAgICAgICAgICdTJywgJ1MnLCAnUycsICdTJyxcclxuICAgICAgICAgICAgJ1QnLCAnVCcsICdUJywgJ1QnLFxyXG4gICAgICAgICAgICAnWicsICdaJywgJ1onLCAnWicsXTtcclxuICAgICAgICBjb25zdCBuZXh0ID0gcGllY2VzLnNwbGljZSgoTWF0aC5yYW5kb20oKSAqIChwaWVjZXMubGVuZ3RoIC0gMSkpLCAxKVswXTtcclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXggPSBTSEFQRVNbbmV4dF07XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIENhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5CT0FSRF9CR19DT0xPUik7XHJcbiAgICAgICAgTWF0cml4LmRyYXdNYXRyaXgodGhpcy5ib2FyZE1hdHJpeCwgeyB4OiAwLCB5OiAwIH0pO1xyXG4gICAgICAgIE1hdHJpeC5kcmF3TWF0cml4KHRoaXMucGxheWVyLm1hdHJpeCwgdGhpcy5wbGF5ZXIucG9zKTtcclxuICAgIH1cclxuICAgIHBsYXllclJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy54ID0gTWF0aC5mbG9vcih0aGlzLmJvYXJkTWF0cml4WzBdLmxlbmd0aCAvIDIpIC1cclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLnBsYXllci5tYXRyaXhbMF0ubGVuZ3RoIC8gMik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnkgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPIGN1cnJlbnRseSBqdXN0IGNsZWFycyB0aGUgYm9hcmQsIGJ1dCB3aWxsXHJcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gZW5kIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRNYXRyaXguZm9yRWFjaCgocm93KSA9PiByb3cuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheWVyRHJvcChzb2Z0RHJvcCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy55Kys7XHJcbiAgICAgICAgaWYgKHNvZnREcm9wICYmICF0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlSW5jcmVtZW50KDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnktLTtcclxuICAgICAgICAgICAgdGhpcy5tZXJnZVNoYXBlVG9Cb2FyZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIH1cclxuICAgIHBsYXllck1vdmUoZGlyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggKz0gZGlyO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueCAtPSBkaXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcm90YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wbGF5ZXIubWF0cml4Lmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4W3hdW3ldLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1hdHJpeFt5XVt4XVxyXG4gICAgICAgICAgICAgICAgXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tYXRyaXhbeV1beF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4W3hdW3ldXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLm1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHJvdy5yZXZlcnNlKCkpO1xyXG4gICAgfVxyXG4gICAgcm90YXRlUGxheWVyKCkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xyXG4gICAgICAgIHRoaXMucm90YXRlKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBvcy54ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gLShvZmZzZXQgKyAob2Zmc2V0ID4gMCA/IDEgOiAtMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUlucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5ET1dOX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJEcm9wKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5MRUZUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuUklHSFRfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlVQX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb2xsaWRlKCkge1xyXG4gICAgICAgIGNvbnN0IFttLCBvXSA9IFt0aGlzLnBsYXllci5tYXRyaXgsIHRoaXMucGxheWVyLnBvc107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbVt5XS5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1beV1beF0gIT09IDAgJiYgKHRoaXMuYm9hcmRNYXRyaXhbeSArIG8ueV0gJiYgdGhpcy5ib2FyZE1hdHJpeFt5ICsgby55XVt4ICsgby54XSkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsaW5lKCkge1xyXG4gICAgICAgIGxldCBsaW5lc1JlbW92ZWQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGxpbmVTY29yZXMgPSB7XHJcbiAgICAgICAgICAgIDE6IDQwLFxyXG4gICAgICAgICAgICAyOiAxMDAsXHJcbiAgICAgICAgICAgIDM6IDMwMCxcclxuICAgICAgICAgICAgNDogMTIwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkTWF0cml4Lmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkTWF0cml4W3ldLmV2ZXJ5KHZhbHVlID0+IHZhbHVlICE9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC5zcGxpY2UoeSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4LnVuc2hpZnQobmV3IEFycmF5KDEwKS5maWxsKDApKTtcclxuICAgICAgICAgICAgICAgIGxpbmVzUmVtb3ZlZCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGluZXMgKz0gbGluZXNSZW1vdmVkO1xyXG4gICAgICAgIGlmIChsaW5lc1JlbW92ZWQgPiAwKVxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlSW5jcmVtZW50KGxpbmVTY29yZXNbbGluZXNSZW1vdmVkXSk7XHJcbiAgICB9XHJcbiAgICBzY29yZUluY3JlbWVudChpbmNyZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IGluY3JlbWVudDtcclxuICAgIH1cclxuICAgIG1lcmdlU2hhcGVUb0JvYXJkKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLm1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4W3kgKyB0aGlzLnBsYXllci5wb3MueV1beCArIHRoaXMucGxheWVyLnBvcy54XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgQ2FudmFzLmluaXQoQ09ORklHLkJPQVJEX1dJRFRILCBDT05GSUcuQk9BUkRfSEVJR0hULCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIikpO1xyXG4gICAgICAgIENhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5CT0FSRF9CR19DT0xPUik7XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lc1wiKTtcclxuICAgICAgICB0aGlzLmJvYXJkTWF0cml4ID0gTWF0cml4LmNyZWF0ZUJvYXJkTWF0cml4KDEwLCAyMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wKHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodEZyYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdEZyYW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdEZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gQ09ORklHLlVQREFURV9JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRyb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29yZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGluZXNFbGVtZW50LmlubmVySFRNTCA9IHRoaXMubGluZXMudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xyXG4gICAgfVxyXG59XHJcbjtcclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gICAgZ2FtZS5pbml0KCk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=