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
                this.gameCanvas.fillRoundedRect(x * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, y * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH - 1.5, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT - 1.5, 3, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_STROKE_COLOR, 3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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dUIsK0JBQStCO0FBQ3RELDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbURBQU07QUFDL0M7QUFDQTtBQUNBLDhDQUE4QyxtREFBTTtBQUNwRDtBQUNBO0FBQ0EsOENBQThDLG1EQUFNO0FBQ3BEO0FBQ0E7QUFDQSw4Q0FBOEMsbURBQU07QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBTTtBQUNwQyxvQ0FBb0MsK0NBQU07QUFDMUMsNkJBQTZCLG1EQUFNLGNBQWMsbURBQU07QUFDdkQsbUNBQW1DLG1EQUFNLG9CQUFvQixtREFBTTtBQUNuRSxtQ0FBbUMsbURBQU07QUFDekMseUNBQXlDLG1EQUFNO0FBQy9DO0FBQ0E7QUFDQSwyQkFBMkIsK0NBQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9nYW1lLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIGluaXQod2lkdGgsIGhlaWdodCwgY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG4gICAgZmlsbENhbnZhcyhjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgZmlsbFJlY3QoeCwgeSwgdywgaCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG4gICAgZmlsbFJvdW5kZWRSZWN0KHgsIHksIHcsIGgsIHIsIGNvbG9yLCBzdHJva2VDb2xvciwgc3Ryb2tlV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY29uc3QgZGVnID0gTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh4ICsgciwgeSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4ICsgdyAtIHIsIHkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCArIHcgLSByLCB5ICsgciwgciwgZGVnICogMjcwLCBkZWcgKiAwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHggKyB3LCB5ICsgaCAtIHIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCArIHcgLSByLCB5ICsgaCAtIHIsIHIsIGRlZyAqIDAsIGRlZyAqIDkwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHggKyByLCB5ICsgaCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4ICsgciwgeSArIGggLSByLCByLCBkZWcgKiA5MCwgZGVnICogMTgwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHgsIHkgKyByKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHggKyByLCB5ICsgciwgciwgZGVnICogMTgwLCBkZWcgKiAyNzApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBpZiAoc3Ryb2tlV2lkdGggJiYgc3Ryb2tlQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBzdHJva2VXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG4gICAgc3Ryb2tlUmVjdCh4LCB5LCB3LCBoLCBzdHJva2VXaWR0aCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbiAgICBhcmMoeCwgeSwgciwgc0FuZ2xlLCBlQW5nbGUsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHgsIHksIHIsIHNBbmdsZSwgZUFuZ2xlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuICAgIHNoYWRvdyhjb2xvciwgYmx1ciwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkb3dCbHVyID0gYmx1cjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSBvZmZzZXRZO1xyXG4gICAgfVxyXG4gICAgc2V0R2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgdGhpcy5rZXlib2FyZERvd24oZSk7IH0pO1xyXG4gICAgfVxyXG4gICAga2V5Ym9hcmREb3duKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmtleURvd25bZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAga2V5UHJlc3NlZChrZXlDb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5RG93bltrZXlDb2RlXTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENPTkZJRywgQ09MT1JTIH0gZnJvbSAnLi9nYW1lLmNvbmZpZyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCB7XHJcbiAgICBzdGF0aWMgY3JlYXRlQm9hcmRNYXRyaXgodywgaCkge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChoLS0pIHtcclxuICAgICAgICAgICAgbWF0cml4LnB1c2gobmV3IEFycmF5KHcpLmZpbGwoMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0cml4O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRyYXdNYXRyaXgobWF0cml4LCBvZmZzZXQsIGNhbnZhcykge1xyXG4gICAgICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZmlsbFJvdW5kZWRSZWN0KCh4ICsgb2Zmc2V0LngpICogQ09ORklHLlRJTEVfV0lEVEgsICh5ICsgb2Zmc2V0LnkpICogQ09ORklHLlRJTEVfSEVJR0hULCBDT05GSUcuVElMRV9XSURUSCAtIDIsIENPTkZJRy5USUxFX0hFSUdIVCAtIDIsIDMsIENPTE9SU1t2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ09ORklHID0ge1xyXG4gICAgVElMRV9XSURUSDogMzAsXHJcbiAgICBUSUxFX0hFSUdIVDogMzAsXHJcbiAgICBCT0FSRF9USUxFX1dJRFRIOiAxMCxcclxuICAgIEJPQVJEX1RJTEVfSEVJR0hUOiAyMCxcclxuICAgIGdldCBCT0FSRF9XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIHRoaXMuQk9BUkRfVElMRV9XSURUSDsgfSxcclxuICAgIGdldCBCT0FSRF9IRUlHSFQoKSB7IHJldHVybiB0aGlzLlRJTEVfSEVJR0hUICogdGhpcy5CT0FSRF9USUxFX0hFSUdIVDsgfSxcclxuICAgIGdldCBORVhUX1NIQVBFU19XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIDY7IH0sXHJcbiAgICBnZXQgTkVYVF9TSEFQRVNfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIDEwOyB9LFxyXG4gICAgQk9BUkRfQkdfQ09MT1I6ICcjNGU0ZTRlJyxcclxuICAgIEJPQVJEX1NUUk9LRV9DT0xPUjogJyMyYjJiMmInLFxyXG4gICAgVVBEQVRFX0lOVEVSVkFMOiAxMDAwLFxyXG4gICAgLy8ga2V5IGNvZGVzXHJcbiAgICBVUF9LRVk6IDM4LFxyXG4gICAgRE9XTl9LRVk6IDQwLFxyXG4gICAgTEVGVF9LRVk6IDM3LFxyXG4gICAgUklHSFRfS0VZOiAzOSxcclxufTtcclxuZXhwb3J0IGNvbnN0IFNIQVBFUyA9IHtcclxuICAgIFQ6IFtcclxuICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgWzEsIDEsIDFdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEw6IFtcclxuICAgICAgICBbMCwgMCwgMl0sXHJcbiAgICAgICAgWzIsIDIsIDJdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEo6IFtcclxuICAgICAgICBbMywgMCwgMF0sXHJcbiAgICAgICAgWzMsIDMsIDNdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIE86IFtcclxuICAgICAgICBbNCwgNF0sXHJcbiAgICAgICAgWzQsIDRdLFxyXG4gICAgXSxcclxuICAgIFM6IFtcclxuICAgICAgICBbMCwgNSwgNV0sXHJcbiAgICAgICAgWzUsIDUsIDBdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIFo6IFtcclxuICAgICAgICBbNiwgNiwgMF0sXHJcbiAgICAgICAgWzAsIDYsIDZdLFxyXG4gICAgICAgIFswLCAwLCAwXVxyXG4gICAgXSxcclxuICAgIEk6IFtcclxuICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgWzcsIDcsIDcsIDddLFxyXG4gICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMF1cclxuICAgIF1cclxufTtcclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICAgIDE6ICcjZWU4MmVlJyxcclxuICAgIDI6ICcjZWI4YjIzJyxcclxuICAgIDM6ICcjMWU5MGZmJyxcclxuICAgIDQ6ICcjZmZjNjNlJyxcclxuICAgIDU6ICcjNTljYjg2JyxcclxuICAgIDY6ICcjZGM2NTU1JyxcclxuICAgIDc6ICcjMjNlM2ViJyAvLyBjeWFuXHJcbn07XHJcbiIsImltcG9ydCB7IENPTkZJRywgU0hBUEVTIH0gZnJvbSAnLi9nYW1lLmNvbmZpZyc7XHJcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuaW1wb3J0IE1hdHJpeCBmcm9tICcuL01hdHJpeCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IENPTkZJRy5VUERBVEVfSU5URVJWQUw7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB7XHJcbiAgICAgICAgICAgIHBvczogeyB4OiAzLCB5OiAwIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGluZXMgPSAwO1xyXG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXh0U2hhcGVzID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9ICh0RnJhbWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcE1haW4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZCgyNykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUlucHV0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSh0RnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnJlc2V0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdlbmVyYXRlUmFuZG9tU2hhcGUoKSB7XHJcbiAgICAgICAgY29uc3QgcGllY2VzID0gWydJJywgJ0knLCAnSScsICdJJyxcclxuICAgICAgICAgICAgJ0onLCAnSicsICdKJywgJ0onLFxyXG4gICAgICAgICAgICAnTCcsICdMJywgJ0wnLCAnTCcsXHJcbiAgICAgICAgICAgICdPJywgJ08nLCAnTycsICdPJyxcclxuICAgICAgICAgICAgJ1MnLCAnUycsICdTJywgJ1MnLFxyXG4gICAgICAgICAgICAnVCcsICdUJywgJ1QnLCAnVCcsXHJcbiAgICAgICAgICAgICdaJywgJ1onLCAnWicsICdaJyxdO1xyXG4gICAgICAgIGNvbnN0IHBpZWNlID0gcGllY2VzLnNwbGljZSgoTWF0aC5yYW5kb20oKSAqIChwaWVjZXMubGVuZ3RoIC0gMSkpLCAxKVswXTtcclxuICAgICAgICByZXR1cm4gcGllY2U7XHJcbiAgICB9XHJcbiAgICBhZGROZXh0U2hhcGVzKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHRTaGFwZXMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTaGFwZXMucHVzaChzaGFwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd05leHRTaGFwZXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5leHRTaGFwZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBTSEFQRVNbdGhpcy5uZXh0U2hhcGVzW2ldXTtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IHNoYXBlWzBdLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgcG9zWCA9ICg2IC8gMikgLSAoKHNoYXBlV2lkdGgpIC8gMik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcGUubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zWSA9ICgzICogKGkgKyAxKSkgLSAyO1xyXG4gICAgICAgICAgICBNYXRyaXguZHJhd01hdHJpeChzaGFwZSwgeyB4OiBwb3NYLCB5OiBwb3NZIH0sIHRoaXMubmV4dFNoYXBlc0NhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd0JvYXJkKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ09ORklHLkJPQVJEX1RJTEVfV0lEVEg7ICsreCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENPTkZJRy5CT0FSRF9USUxFX0hFSUdIVDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDYW52YXMuZmlsbFJvdW5kZWRSZWN0KHggKiBDT05GSUcuVElMRV9XSURUSCwgeSAqIENPTkZJRy5USUxFX0hFSUdIVCwgQ09ORklHLlRJTEVfV0lEVEggLSAxLjUsIENPTkZJRy5USUxFX0hFSUdIVCAtIDEuNSwgMywgQ09ORklHLkJPQVJEX0JHX0NPTE9SLCBDT05GSUcuQk9BUkRfU1RST0tFX0NPTE9SLCAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXdNYXRyaWNlcygpIHtcclxuICAgICAgICBNYXRyaXguZHJhd01hdHJpeCh0aGlzLmJvYXJkTWF0cml4LCB7IHg6IDAsIHk6IDAgfSwgdGhpcy5nYW1lQ2FudmFzKTtcclxuICAgICAgICBNYXRyaXguZHJhd01hdHJpeCh0aGlzLnBsYXllci5tYXRyaXgsIHRoaXMucGxheWVyLnBvcywgdGhpcy5nYW1lQ2FudmFzKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3Qm9hcmQoKTtcclxuICAgICAgICB0aGlzLm5leHRTaGFwZXNDYW52YXMuZmlsbENhbnZhcyhDT05GSUcuQk9BUkRfQkdfQ09MT1IpO1xyXG4gICAgICAgIHRoaXMuZHJhd01hdHJpY2VzKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3TmV4dFNoYXBlcygpO1xyXG4gICAgfVxyXG4gICAgcGxheWVyUmVzZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dFNoYXBlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gaXMgc3RhcnQgb2YgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLmFkZE5leHRTaGFwZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4ID0gU0hBUEVTW3RoaXMubmV4dFNoYXBlcy5zaGlmdCgpXTtcclxuICAgICAgICB0aGlzLmFkZE5leHRTaGFwZXMoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3MueCA9IE1hdGguZmxvb3IodGhpcy5ib2FyZE1hdHJpeFswXS5sZW5ndGggLyAyKSAtXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy5wbGF5ZXIubWF0cml4WzBdLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy55ID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgLy8gVE9ETyBjdXJyZW50bHkganVzdCBjbGVhcnMgdGhlIGJvYXJkLCBidXQgd2lsbFxyXG4gICAgICAgICAgICAvLyBuZWVkIHRvIGVuZCB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4LmZvckVhY2goKHJvdykgPT4gcm93LmZpbGwoMCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5saW5lcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheWVyRHJvcChzb2Z0RHJvcCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy55Kys7XHJcbiAgICAgICAgaWYgKHNvZnREcm9wICYmICF0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlSW5jcmVtZW50KDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnktLTtcclxuICAgICAgICAgICAgdGhpcy5tZXJnZVNoYXBlVG9Cb2FyZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJSZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIH1cclxuICAgIHBsYXllck1vdmUoZGlyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggKz0gZGlyO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueCAtPSBkaXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcm90YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wbGF5ZXIubWF0cml4Lmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4W3hdW3ldLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1hdHJpeFt5XVt4XVxyXG4gICAgICAgICAgICAgICAgXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tYXRyaXhbeV1beF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4W3hdW3ldXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLm1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHJvdy5yZXZlcnNlKCkpO1xyXG4gICAgfVxyXG4gICAgcm90YXRlUGxheWVyKCkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAxO1xyXG4gICAgICAgIHRoaXMucm90YXRlKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuY29sbGlkZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBvcy54ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gLShvZmZzZXQgKyAob2Zmc2V0ID4gMCA/IDEgOiAtMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUlucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5ET1dOX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJEcm9wKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5MRUZUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuUklHSFRfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlVQX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb2xsaWRlKCkge1xyXG4gICAgICAgIGNvbnN0IFttLCBvXSA9IFt0aGlzLnBsYXllci5tYXRyaXgsIHRoaXMucGxheWVyLnBvc107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbVt5XS5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1beV1beF0gIT09IDAgJiYgKHRoaXMuYm9hcmRNYXRyaXhbeSArIG8ueV0gJiYgdGhpcy5ib2FyZE1hdHJpeFt5ICsgby55XVt4ICsgby54XSkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsaW5lKCkge1xyXG4gICAgICAgIGxldCBsaW5lc1JlbW92ZWQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGxpbmVTY29yZXMgPSB7XHJcbiAgICAgICAgICAgIDE6IDQwLFxyXG4gICAgICAgICAgICAyOiAxMDAsXHJcbiAgICAgICAgICAgIDM6IDMwMCxcclxuICAgICAgICAgICAgNDogMTIwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkTWF0cml4Lmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkTWF0cml4W3ldLmV2ZXJ5KHZhbHVlID0+IHZhbHVlICE9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeC5zcGxpY2UoeSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4LnVuc2hpZnQobmV3IEFycmF5KDEwKS5maWxsKDApKTtcclxuICAgICAgICAgICAgICAgIGxpbmVzUmVtb3ZlZCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGluZXMgKz0gbGluZXNSZW1vdmVkO1xyXG4gICAgICAgIGlmIChsaW5lc1JlbW92ZWQgPiAwKVxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlSW5jcmVtZW50KGxpbmVTY29yZXNbbGluZXNSZW1vdmVkXSk7XHJcbiAgICB9XHJcbiAgICBzY29yZUluY3JlbWVudChpbmNyZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IGluY3JlbWVudDtcclxuICAgIH1cclxuICAgIG1lcmdlU2hhcGVUb0JvYXJkKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLm1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWF0cml4W3kgKyB0aGlzLnBsYXllci5wb3MueV1beCArIHRoaXMucGxheWVyLnBvcy54XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMubmV4dFNoYXBlc0NhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXMuaW5pdChDT05GSUcuQk9BUkRfV0lEVEgsIENPTkZJRy5CT0FSRF9IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNhbnZhc1wiKSk7XHJcbiAgICAgICAgdGhpcy5uZXh0U2hhcGVzQ2FudmFzLmluaXQoQ09ORklHLk5FWFRfU0hBUEVTX1dJRFRILCBDT05GSUcuTkVYVF9TSEFQRVNfSEVJR0hULCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRTaGFwZXNDYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5CT0FSRF9CR19DT0xPUik7XHJcbiAgICAgICAgdGhpcy5uZXh0U2hhcGVzQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkJPQVJEX0JHX0NPTE9SKTtcclxuICAgICAgICB0aGlzLnNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XHJcbiAgICAgICAgdGhpcy5saW5lc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVzXCIpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRNYXRyaXggPSBNYXRyaXguY3JlYXRlQm9hcmRNYXRyaXgoMTAsIDIwKTtcclxuICAgICAgICB0aGlzLnBsYXllclJlc2V0KCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3Aoc3RhcnRUaW1lKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0RnJhbWUpIHtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0RnJhbWUgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0RnJhbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiBDT05GSUcuVVBEQVRFX0lOVEVSVkFMKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRHJvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3JlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5saW5lc0VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5saW5lcy50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XHJcbiAgICB9XHJcbn1cclxuO1xyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBnYW1lLmluaXQoKTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==