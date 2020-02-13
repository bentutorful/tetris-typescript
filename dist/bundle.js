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

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");
/* harmony import */ var _constants_game_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/game.config */ "./src/constants/game.config.ts");


class Board {
    static init() {
        this.width = _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_WIDTH;
        this.height = _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_HEIGHT;
        // setup grid
    }
    static draw() {
        _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"].fillRect(_constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_START_X, _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_START_Y, this.width, this.height, this.bgColour);
        // draw grid
    }
    static createBoardMatrix(w, h) {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    }
    static mergeShapeToMatrix(shape, matrix) {
        shape.mapShapeMatrix((col, row) => {
            matrix[row][col] = 1;
        });
    }
}
Board.bgColour = _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_BG_COLOR;


/***/ }),

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
    static strokeRect(x, y, w, h, lineWidth, color) {
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, w, h);
    }
    static clearRect(x, y, w, h) {
        this.context.clearRect(x, y, w, h);
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
        // document.addEventListener('keyup', (e) => { this.keyboardUp(e) })
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

/***/ "./src/Shape.ts":
/*!**********************!*\
  !*** ./src/Shape.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./src/Board.ts");
/* harmony import */ var _constants_game_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/game.config */ "./src/constants/game.config.ts");



class Shape {
    constructor(dirs, color, currentDir) {
        this.offset = { x: 0, y: 0 };
        this.dirs = dirs;
        this.color = color;
        this.currentDir = currentDir;
    }
    calculateXandY(col, row) {
        let x = ((col + 1 + this.offset.x) * _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_WIDTH) - _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].BOARD_START_X;
        let y = ((row + 1 + this.offset.y) * _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_HEIGHT) - _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].BOARD_START_Y;
        return { x, y };
    }
    mapShapeMatrix(callback) {
        let row = 0, col = 0;
        for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
            if (this.dirs[this.currentDir] & bit) {
                callback(col, row);
            }
            if (++col === 4) {
                col = 0;
                ++row;
            }
        }
    }
    clearShape() {
        this.mapShapeMatrix((col, row) => {
            const position = this.calculateXandY(col, row);
            _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"].clearRect(position.x, position.y, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_WIDTH, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_HEIGHT);
        });
    }
    drawShape() {
        this.mapShapeMatrix((col, row) => {
            const position = this.calculateXandY(col, row);
            // TODO work out inner stroke
            _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"].fillRect(position.x, position.y, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_WIDTH, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_HEIGHT, this.color);
            // Canvas.strokeRect(pos.x + 3, pos.y + 3, CONFIG.TILE_WIDTH - 6, CONFIG.TILE_HEIGHT - 6, 6, 'red')
        });
    }
    redraw() {
        this.clearShape();
        _Board__WEBPACK_IMPORTED_MODULE_1__["default"].draw();
        this.drawShape();
    }
    lowerShape() {
        this.offset.y += 1;
        this.redraw();
    }
    leftShape() {
        this.offset.x--;
        this.redraw();
    }
    rightShape() {
        this.offset.x++;
        this.redraw();
    }
    rotateShape() {
        if (this.currentDir === 3) {
            this.currentDir = 0;
        }
        else {
            this.currentDir++;
        }
        this.redraw();
    }
}


/***/ }),

/***/ "./src/constants/game.config.ts":
/*!**************************************!*\
  !*** ./src/constants/game.config.ts ***!
  \**************************************/
/*! exports provided: CONFIG, SHAPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
const CONFIG = {
    UPDATE_INTERVAL: 1000,
    CANVAS_HEIGHT: 840,
    CANVAS_WIDTH: 640,
    CANVAS_BG_COLOR: '#555555',
    BOARD_BG_COLOR: '#000000',
    // Board/tile sizes
    BOARD_START_X: 20,
    BOARD_START_Y: 20,
    TILE_WIDTH: 40,
    TILE_HEIGHT: 40,
    BOARD_WIDTH_TILES: 10,
    BOARD_HEIGHT_TILES: 20,
    // key codes
    UP_KEY: 38,
    DOWN_KEY: 40,
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    get BOARD_WIDTH() { return this.TILE_WIDTH * 10; },
    get BOARD_HEIGHT() { return this.TILE_HEIGHT * 20; }
};
const SHAPES = {
    i: {
        dirs: [0x0F00, 0x2222, 0x00F0, 0x4444],
        color: 'cyan'
    },
    j: {
        dirs: [0x44C0, 0x8E00, 0x6440, 0x0E20],
        color: 'blue'
    },
    l: {
        dirs: [0x4460, 0x0E80, 0xC440, 0x2E00],
        color: 'orange'
    },
    o: {
        dirs: [0xCC00, 0xCC00, 0xCC00, 0xCC00],
        color: 'yellow'
    },
    s: {
        dirs: [0x06C0, 0x8C40, 0x6C00, 0x4620],
        color: 'green'
    },
    t: {
        dirs: [0x0E40, 0x4C40, 0x4E00, 0x4640],
        color: 'purple'
    },
    z: {
        dirs: [0x0C60, 0x4C80, 0xC600, 0x2640],
        color: 'red'
    }
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
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "./src/Board.ts");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/Canvas.ts");
/* harmony import */ var _constants_game_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/game.config */ "./src/constants/game.config.ts");
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shape */ "./src/Shape.ts");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.ts");





class Game {
    constructor() {
        this.currentTime = 0;
        this.gameLoop = (tFrame) => {
            // You can stop the game at any point with:
            // window.cancelAnimationFrame(Game.stopMain);
            this.stopMain = window.requestAnimationFrame(this.gameLoop);
            this.update(tFrame);
        };
    }
    generateRandomShape() {
        // TODO: Move this function, and possibly change random algorithm
        const pieces = ['i', 'j', 'l', 'o', 's', 't', 'z'];
        const next = pieces[Math.floor(Math.random() * (pieces.length - 0)) + 0];
        const newShape = new _Shape__WEBPACK_IMPORTED_MODULE_3__["default"](_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["SHAPES"][next].dirs, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["SHAPES"][next].color, 0);
        return newShape;
    }
    handleInput() {
        // TODO move this elsewhere?
        if (this.eventHandler.keyPressed(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].DOWN_KEY)) {
            this.currentShape.lowerShape();
        }
        else if (this.eventHandler.keyPressed(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].LEFT_KEY)) {
            this.currentShape.leftShape();
        }
        else if (this.eventHandler.keyPressed(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].RIGHT_KEY)) {
            this.currentShape.rightShape();
        }
        else if (this.eventHandler.keyPressed(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].UP_KEY)) {
            this.currentShape.rotateShape();
        }
    }
    collide() {
        this.currentShape.mapShapeMatrix((col, row) => {
            if (this.boardMatrix[row] && this.boardMatrix[row][col] !== 0) {
                return true;
            }
            return false;
        });
    }
    ////////////////////////
    init() {
        _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].init(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_WIDTH, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_HEIGHT, document.getElementById("gameCanvas"));
        this.updateInterval = _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].UPDATE_INTERVAL;
        this.ready();
    }
    ready() {
        // Fill the canvas
        _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fillCanvas(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_BG_COLOR);
        // Draw the game board to the canvas
        _Board__WEBPACK_IMPORTED_MODULE_0__["default"].init();
        _Board__WEBPACK_IMPORTED_MODULE_0__["default"].draw();
        // Generate the first shape
        this.currentShape = this.generateRandomShape();
        this.currentShape.drawShape();
        // Set up our event handler
        this.eventHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_4__["default"]();
        // Create a matrix for the board to hold shapes
        this.boardMatrix = _Board__WEBPACK_IMPORTED_MODULE_0__["default"].createBoardMatrix(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].BOARD_WIDTH_TILES, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].BOARD_HEIGHT_TILES);
        _Board__WEBPACK_IMPORTED_MODULE_0__["default"].mergeShapeToMatrix(this.currentShape, this.boardMatrix);
        console.table(this.boardMatrix);
        // Get the initial game time
        const startTime = window.performance.now();
        this.lastTime = startTime;
        // Start the game
        this.gameLoop(startTime);
    }
    update(tFrame) {
        this.handleInput();
        const deltaTime = tFrame - this.lastTime;
        this.lastTime = tFrame;
        this.currentTime += deltaTime;
        if (this.currentTime > this.updateInterval) {
            this.currentShape.lowerShape();
            this.currentTime = 0;
        }
        this.eventHandler.reset();
        return;
    }
}
;
(() => {
    const game = new Game();
    game.init();
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9nYW1lLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ21CO0FBQ2xDO0FBQ2Y7QUFDQSxxQkFBcUIsNkRBQU07QUFDM0Isc0JBQXNCLDZEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU0sVUFBVSw2REFBTSxnQkFBZ0IsNkRBQU07QUFD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SztBQUNiLFFBQVEsOENBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxREFBWTtBQUM1QztBQUNBLDJCQUEyQiw4Q0FBSyxtQkFBbUIsNkRBQU0sb0JBQW9CLDZEQUFNO0FBQ25GLFFBQVEsOENBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmNvbmZpZyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBDT05GSUcuQk9BUkRfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBDT05GSUcuQk9BUkRfSEVJR0hUO1xyXG4gICAgICAgIC8vIHNldHVwIGdyaWRcclxuICAgIH1cclxuICAgIHN0YXRpYyBkcmF3KCkge1xyXG4gICAgICAgIENhbnZhcy5maWxsUmVjdChDT05GSUcuQk9BUkRfU1RBUlRfWCwgQ09ORklHLkJPQVJEX1NUQVJUX1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmJnQ29sb3VyKTtcclxuICAgICAgICAvLyBkcmF3IGdyaWRcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVCb2FyZE1hdHJpeCh3LCBoKSB7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gW107XHJcbiAgICAgICAgd2hpbGUgKGgtLSkge1xyXG4gICAgICAgICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkodykuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWVyZ2VTaGFwZVRvTWF0cml4KHNoYXBlLCBtYXRyaXgpIHtcclxuICAgICAgICBzaGFwZS5tYXBTaGFwZU1hdHJpeCgoY29sLCByb3cpID0+IHtcclxuICAgICAgICAgICAgbWF0cml4W3Jvd11bY29sXSA9IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuQm9hcmQuYmdDb2xvdXIgPSBDT05GSUcuQk9BUkRfQkdfQ09MT1I7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBzdGF0aWMgaW5pdCh3aWR0aCwgaGVpZ2h0LCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsbENhbnZhcyhjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbGxSZWN0KHgsIHksIHcsIGgsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzdHJva2VSZWN0KHgsIHksIHcsIGgsIGxpbmVXaWR0aCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNsZWFyUmVjdCh4LCB5LCB3LCBoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7IHRoaXMua2V5Ym9hcmREb3duKGUpOyB9KTtcclxuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7IHRoaXMua2V5Ym9hcmRVcChlKSB9KVxyXG4gICAgfVxyXG4gICAga2V5Ym9hcmREb3duKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmtleURvd25bZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAga2V5UHJlc3NlZChrZXlDb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5RG93bltrZXlDb2RlXTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9Cb2FyZFwiO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmNvbmZpZyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpcnMsIGNvbG9yLCBjdXJyZW50RGlyKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICB0aGlzLmRpcnMgPSBkaXJzO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaXIgPSBjdXJyZW50RGlyO1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlWGFuZFkoY29sLCByb3cpIHtcclxuICAgICAgICBsZXQgeCA9ICgoY29sICsgMSArIHRoaXMub2Zmc2V0LngpICogQ09ORklHLlRJTEVfV0lEVEgpIC0gQ09ORklHLkJPQVJEX1NUQVJUX1g7XHJcbiAgICAgICAgbGV0IHkgPSAoKHJvdyArIDEgKyB0aGlzLm9mZnNldC55KSAqIENPTkZJRy5USUxFX0hFSUdIVCkgLSBDT05GSUcuQk9BUkRfU1RBUlRfWTtcclxuICAgICAgICByZXR1cm4geyB4LCB5IH07XHJcbiAgICB9XHJcbiAgICBtYXBTaGFwZU1hdHJpeChjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCByb3cgPSAwLCBjb2wgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGJpdCA9IDB4ODAwMDsgYml0ID4gMDsgYml0ID0gYml0ID4+IDEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyc1t0aGlzLmN1cnJlbnREaXJdICYgYml0KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjb2wsIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCsrY29sID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgICAgICAgICAgKytyb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhclNoYXBlKCkge1xyXG4gICAgICAgIHRoaXMubWFwU2hhcGVNYXRyaXgoKGNvbCwgcm93KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVYYW5kWShjb2wsIHJvdyk7XHJcbiAgICAgICAgICAgIENhbnZhcy5jbGVhclJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgQ09ORklHLlRJTEVfV0lEVEgsIENPTkZJRy5USUxFX0hFSUdIVCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkcmF3U2hhcGUoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBTaGFwZU1hdHJpeCgoY29sLCByb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVhhbmRZKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgLy8gVE9ETyB3b3JrIG91dCBpbm5lciBzdHJva2VcclxuICAgICAgICAgICAgQ2FudmFzLmZpbGxSZWN0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIENPTkZJRy5USUxFX1dJRFRILCBDT05GSUcuVElMRV9IRUlHSFQsIHRoaXMuY29sb3IpO1xyXG4gICAgICAgICAgICAvLyBDYW52YXMuc3Ryb2tlUmVjdChwb3MueCArIDMsIHBvcy55ICsgMywgQ09ORklHLlRJTEVfV0lEVEggLSA2LCBDT05GSUcuVElMRV9IRUlHSFQgLSA2LCA2LCAncmVkJylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZHJhdygpIHtcclxuICAgICAgICB0aGlzLmNsZWFyU2hhcGUoKTtcclxuICAgICAgICBCb2FyZC5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U2hhcGUoKTtcclxuICAgIH1cclxuICAgIGxvd2VyU2hhcGUoKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueSArPSAxO1xyXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XHJcbiAgICB9XHJcbiAgICBsZWZ0U2hhcGUoKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueC0tO1xyXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XHJcbiAgICB9XHJcbiAgICByaWdodFNoYXBlKCkge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LngrKztcclxuICAgICAgICB0aGlzLnJlZHJhdygpO1xyXG4gICAgfVxyXG4gICAgcm90YXRlU2hhcGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERpciA9PT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAgIFVQREFURV9JTlRFUlZBTDogMTAwMCxcclxuICAgIENBTlZBU19IRUlHSFQ6IDg0MCxcclxuICAgIENBTlZBU19XSURUSDogNjQwLFxyXG4gICAgQ0FOVkFTX0JHX0NPTE9SOiAnIzU1NTU1NScsXHJcbiAgICBCT0FSRF9CR19DT0xPUjogJyMwMDAwMDAnLFxyXG4gICAgLy8gQm9hcmQvdGlsZSBzaXplc1xyXG4gICAgQk9BUkRfU1RBUlRfWDogMjAsXHJcbiAgICBCT0FSRF9TVEFSVF9ZOiAyMCxcclxuICAgIFRJTEVfV0lEVEg6IDQwLFxyXG4gICAgVElMRV9IRUlHSFQ6IDQwLFxyXG4gICAgQk9BUkRfV0lEVEhfVElMRVM6IDEwLFxyXG4gICAgQk9BUkRfSEVJR0hUX1RJTEVTOiAyMCxcclxuICAgIC8vIGtleSBjb2Rlc1xyXG4gICAgVVBfS0VZOiAzOCxcclxuICAgIERPV05fS0VZOiA0MCxcclxuICAgIExFRlRfS0VZOiAzNyxcclxuICAgIFJJR0hUX0tFWTogMzksXHJcbiAgICBnZXQgQk9BUkRfV0lEVEgoKSB7IHJldHVybiB0aGlzLlRJTEVfV0lEVEggKiAxMDsgfSxcclxuICAgIGdldCBCT0FSRF9IRUlHSFQoKSB7IHJldHVybiB0aGlzLlRJTEVfSEVJR0hUICogMjA7IH1cclxufTtcclxuZXhwb3J0IGNvbnN0IFNIQVBFUyA9IHtcclxuICAgIGk6IHtcclxuICAgICAgICBkaXJzOiBbMHgwRjAwLCAweDIyMjIsIDB4MDBGMCwgMHg0NDQ0XSxcclxuICAgICAgICBjb2xvcjogJ2N5YW4nXHJcbiAgICB9LFxyXG4gICAgajoge1xyXG4gICAgICAgIGRpcnM6IFsweDQ0QzAsIDB4OEUwMCwgMHg2NDQwLCAweDBFMjBdLFxyXG4gICAgICAgIGNvbG9yOiAnYmx1ZSdcclxuICAgIH0sXHJcbiAgICBsOiB7XHJcbiAgICAgICAgZGlyczogWzB4NDQ2MCwgMHgwRTgwLCAweEM0NDAsIDB4MkUwMF0sXHJcbiAgICAgICAgY29sb3I6ICdvcmFuZ2UnXHJcbiAgICB9LFxyXG4gICAgbzoge1xyXG4gICAgICAgIGRpcnM6IFsweENDMDAsIDB4Q0MwMCwgMHhDQzAwLCAweENDMDBdLFxyXG4gICAgICAgIGNvbG9yOiAneWVsbG93J1xyXG4gICAgfSxcclxuICAgIHM6IHtcclxuICAgICAgICBkaXJzOiBbMHgwNkMwLCAweDhDNDAsIDB4NkMwMCwgMHg0NjIwXSxcclxuICAgICAgICBjb2xvcjogJ2dyZWVuJ1xyXG4gICAgfSxcclxuICAgIHQ6IHtcclxuICAgICAgICBkaXJzOiBbMHgwRTQwLCAweDRDNDAsIDB4NEUwMCwgMHg0NjQwXSxcclxuICAgICAgICBjb2xvcjogJ3B1cnBsZSdcclxuICAgIH0sXHJcbiAgICB6OiB7XHJcbiAgICAgICAgZGlyczogWzB4MEM2MCwgMHg0QzgwLCAweEM2MDAsIDB4MjY0MF0sXHJcbiAgICAgICAgY29sb3I6ICdyZWQnXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9Cb2FyZFwiO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xyXG5pbXBvcnQgeyBDT05GSUcsIFNIQVBFUyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuY29uZmlnJztcclxuaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVMb29wID0gKHRGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHN0b3AgdGhlIGdhbWUgYXQgYW55IHBvaW50IHdpdGg6XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShHYW1lLnN0b3BNYWluKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wTWFpbiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRGcmFtZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdlbmVyYXRlUmFuZG9tU2hhcGUoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogTW92ZSB0aGlzIGZ1bmN0aW9uLCBhbmQgcG9zc2libHkgY2hhbmdlIHJhbmRvbSBhbGdvcml0aG1cclxuICAgICAgICBjb25zdCBwaWVjZXMgPSBbJ2knLCAnaicsICdsJywgJ28nLCAncycsICd0JywgJ3onXTtcclxuICAgICAgICBjb25zdCBuZXh0ID0gcGllY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwaWVjZXMubGVuZ3RoIC0gMCkpICsgMF07XHJcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSBuZXcgU2hhcGUoU0hBUEVTW25leHRdLmRpcnMsIFNIQVBFU1tuZXh0XS5jb2xvciwgMCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1NoYXBlO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5wdXQoKSB7XHJcbiAgICAgICAgLy8gVE9ETyBtb3ZlIHRoaXMgZWxzZXdoZXJlP1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5ET1dOX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUubG93ZXJTaGFwZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5MRUZUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUubGVmdFNoYXBlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlJJR0hUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUucmlnaHRTaGFwZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5VUF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoYXBlLnJvdGF0ZVNoYXBlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29sbGlkZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5tYXBTaGFwZU1hdHJpeCgoY29sLCByb3cpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRNYXRyaXhbcm93XSAmJiB0aGlzLmJvYXJkTWF0cml4W3Jvd11bY29sXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIENhbnZhcy5pbml0KENPTkZJRy5DQU5WQVNfV0lEVEgsIENPTkZJRy5DQU5WQVNfSEVJR0hULCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIikpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBDT05GSUcuVVBEQVRFX0lOVEVSVkFMO1xyXG4gICAgICAgIHRoaXMucmVhZHkoKTtcclxuICAgIH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIC8vIEZpbGwgdGhlIGNhbnZhc1xyXG4gICAgICAgIENhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5DQU5WQVNfQkdfQ09MT1IpO1xyXG4gICAgICAgIC8vIERyYXcgdGhlIGdhbWUgYm9hcmQgdG8gdGhlIGNhbnZhc1xyXG4gICAgICAgIEJvYXJkLmluaXQoKTtcclxuICAgICAgICBCb2FyZC5kcmF3KCk7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIGZpcnN0IHNoYXBlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUgPSB0aGlzLmdlbmVyYXRlUmFuZG9tU2hhcGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5kcmF3U2hhcGUoKTtcclxuICAgICAgICAvLyBTZXQgdXAgb3VyIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAvLyBDcmVhdGUgYSBtYXRyaXggZm9yIHRoZSBib2FyZCB0byBob2xkIHNoYXBlc1xyXG4gICAgICAgIHRoaXMuYm9hcmRNYXRyaXggPSBCb2FyZC5jcmVhdGVCb2FyZE1hdHJpeChDT05GSUcuQk9BUkRfV0lEVEhfVElMRVMsIENPTkZJRy5CT0FSRF9IRUlHSFRfVElMRVMpO1xyXG4gICAgICAgIEJvYXJkLm1lcmdlU2hhcGVUb01hdHJpeCh0aGlzLmN1cnJlbnRTaGFwZSwgdGhpcy5ib2FyZE1hdHJpeCk7XHJcbiAgICAgICAgY29uc29sZS50YWJsZSh0aGlzLmJvYXJkTWF0cml4KTtcclxuICAgICAgICAvLyBHZXQgdGhlIGluaXRpYWwgZ2FtZSB0aW1lXHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBzdGFydFRpbWU7XHJcbiAgICAgICAgLy8gU3RhcnQgdGhlIGdhbWVcclxuICAgICAgICB0aGlzLmdhbWVMb29wKHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodEZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRGcmFtZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRGcmFtZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IHRoaXMudXBkYXRlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUubG93ZXJTaGFwZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIucmVzZXQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuO1xyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBnYW1lLmluaXQoKTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==