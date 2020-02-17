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
            matrix[row + shape.offset.y][col + shape.offset.x] = 1;
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
    collide(boardMatrix) {
        // TODO figure out a way to return true or false properly
        let collided = false;
        this.mapShapeMatrix((col, row) => {
            if ((boardMatrix[row + this.offset.y] &&
                boardMatrix[row + this.offset.y][col + this.offset.x]) !== 0) {
                collided = true;
            }
        });
        return collided;
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
    lowerShape(boardMatrix) {
        this.offset.y += 1;
        if (this.collide(boardMatrix)) {
            this.offset.y -= 1;
            _Board__WEBPACK_IMPORTED_MODULE_1__["default"].mergeShapeToMatrix(this, boardMatrix);
            this.offset.y = 0;
        }
        console.log(this.offset.y);
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
            this.currentShape.lowerShape(this.boardMatrix);
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
            this.currentShape.lowerShape(this.boardMatrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9nYW1lLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ21CO0FBQ2xDO0FBQ2Y7QUFDQSxxQkFBcUIsNkRBQU07QUFDM0Isc0JBQXNCLDZEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU0sVUFBVSw2REFBTSxnQkFBZ0IsNkRBQU07QUFD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QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTSxZQUFZLDZEQUFNO0FBQ2hDO0FBQ0EsUUFBUSw4Q0FBSztBQUNiLFFBQVEsOENBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxREFBWTtBQUM1QztBQUNBLDJCQUEyQiw4Q0FBSyxtQkFBbUIsNkRBQU0sb0JBQW9CLDZEQUFNO0FBQ25GLFFBQVEsOENBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9nYW1lLnRzXCIpO1xuIiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5jb25maWcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gQ09ORklHLkJPQVJEX1dJRFRIO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQ09ORklHLkJPQVJEX0hFSUdIVDtcclxuICAgICAgICAvLyBzZXR1cCBncmlkXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZHJhdygpIHtcclxuICAgICAgICBDYW52YXMuZmlsbFJlY3QoQ09ORklHLkJPQVJEX1NUQVJUX1gsIENPTkZJRy5CT0FSRF9TVEFSVF9ZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5iZ0NvbG91cik7XHJcbiAgICAgICAgLy8gZHJhdyBncmlkXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlQm9hcmRNYXRyaXgodywgaCkge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChoLS0pIHtcclxuICAgICAgICAgICAgbWF0cml4LnB1c2gobmV3IEFycmF5KHcpLmZpbGwoMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0cml4O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG1lcmdlU2hhcGVUb01hdHJpeChzaGFwZSwgbWF0cml4KSB7XHJcbiAgICAgICAgc2hhcGUubWFwU2hhcGVNYXRyaXgoKGNvbCwgcm93KSA9PiB7XHJcbiAgICAgICAgICAgIG1hdHJpeFtyb3cgKyBzaGFwZS5vZmZzZXQueV1bY29sICsgc2hhcGUub2Zmc2V0LnhdID0gMTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5Cb2FyZC5iZ0NvbG91ciA9IENPTkZJRy5CT0FSRF9CR19DT0xPUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIHN0YXRpYyBpbml0KHdpZHRoLCBoZWlnaHQsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWxsQ2FudmFzKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsbFJlY3QoeCwgeSwgdywgaCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHN0cm9rZVJlY3QoeCwgeSwgdywgaCwgbGluZVdpZHRoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xlYXJSZWN0KHgsIHksIHcsIGgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgdGhpcy5rZXlib2FyZERvd24oZSk7IH0pO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHsgdGhpcy5rZXlib2FyZFVwKGUpIH0pXHJcbiAgICB9XHJcbiAgICBrZXlib2FyZERvd24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMua2V5RG93bltldmVudC5rZXlDb2RlXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBrZXlQcmVzc2VkKGtleUNvZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlEb3duW2tleUNvZGVdO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkXCI7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoZGlycywgY29sb3IsIGN1cnJlbnREaXIpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgIHRoaXMuZGlycyA9IGRpcnM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpciA9IGN1cnJlbnREaXI7XHJcbiAgICB9XHJcbiAgICBjb2xsaWRlKGJvYXJkTWF0cml4KSB7XHJcbiAgICAgICAgLy8gVE9ETyBmaWd1cmUgb3V0IGEgd2F5IHRvIHJldHVybiB0cnVlIG9yIGZhbHNlIHByb3Blcmx5XHJcbiAgICAgICAgbGV0IGNvbGxpZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXBTaGFwZU1hdHJpeCgoY29sLCByb3cpID0+IHtcclxuICAgICAgICAgICAgaWYgKChib2FyZE1hdHJpeFtyb3cgKyB0aGlzLm9mZnNldC55XSAmJlxyXG4gICAgICAgICAgICAgICAgYm9hcmRNYXRyaXhbcm93ICsgdGhpcy5vZmZzZXQueV1bY29sICsgdGhpcy5vZmZzZXQueF0pICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29sbGlkZWQ7XHJcbiAgICB9XHJcbiAgICBjYWxjdWxhdGVYYW5kWShjb2wsIHJvdykge1xyXG4gICAgICAgIGxldCB4ID0gKChjb2wgKyAxICsgdGhpcy5vZmZzZXQueCkgKiBDT05GSUcuVElMRV9XSURUSCkgLSBDT05GSUcuQk9BUkRfU1RBUlRfWDtcclxuICAgICAgICBsZXQgeSA9ICgocm93ICsgMSArIHRoaXMub2Zmc2V0LnkpICogQ09ORklHLlRJTEVfSEVJR0hUKSAtIENPTkZJRy5CT0FSRF9TVEFSVF9ZO1xyXG4gICAgICAgIHJldHVybiB7IHgsIHkgfTtcclxuICAgIH1cclxuICAgIG1hcFNoYXBlTWF0cml4KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IDAsIGNvbCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgYml0ID0gMHg4MDAwOyBiaXQgPiAwOyBiaXQgPSBiaXQgPj4gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJzW3RoaXMuY3VycmVudERpcl0gJiBiaXQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKytjb2wgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgICAgICAgICArK3JvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFyU2hhcGUoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBTaGFwZU1hdHJpeCgoY29sLCByb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVhhbmRZKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgQ2FudmFzLmNsZWFyUmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBDT05GSUcuVElMRV9XSURUSCwgQ09ORklHLlRJTEVfSEVJR0hUKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRyYXdTaGFwZSgpIHtcclxuICAgICAgICB0aGlzLm1hcFNoYXBlTWF0cml4KChjb2wsIHJvdykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlWGFuZFkoY29sLCByb3cpO1xyXG4gICAgICAgICAgICAvLyBUT0RPIHdvcmsgb3V0IGlubmVyIHN0cm9rZVxyXG4gICAgICAgICAgICBDYW52YXMuZmlsbFJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgQ09ORklHLlRJTEVfV0lEVEgsIENPTkZJRy5USUxFX0hFSUdIVCwgdGhpcy5jb2xvcik7XHJcbiAgICAgICAgICAgIC8vIENhbnZhcy5zdHJva2VSZWN0KHBvcy54ICsgMywgcG9zLnkgKyAzLCBDT05GSUcuVElMRV9XSURUSCAtIDYsIENPTkZJRy5USUxFX0hFSUdIVCAtIDYsIDYsICdyZWQnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTaGFwZSgpO1xyXG4gICAgICAgIEJvYXJkLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTaGFwZSgpO1xyXG4gICAgfVxyXG4gICAgbG93ZXJTaGFwZShib2FyZE1hdHJpeCkge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnkgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKGJvYXJkTWF0cml4KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldC55IC09IDE7XHJcbiAgICAgICAgICAgIEJvYXJkLm1lcmdlU2hhcGVUb01hdHJpeCh0aGlzLCBib2FyZE1hdHJpeCk7XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0LnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9mZnNldC55KTtcclxuICAgICAgICB0aGlzLnJlZHJhdygpO1xyXG4gICAgfVxyXG4gICAgbGVmdFNoYXBlKCkge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LngtLTtcclxuICAgICAgICB0aGlzLnJlZHJhdygpO1xyXG4gICAgfVxyXG4gICAgcmlnaHRTaGFwZSgpIHtcclxuICAgICAgICB0aGlzLm9mZnNldC54Kys7XHJcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcclxuICAgIH1cclxuICAgIHJvdGF0ZVNoYXBlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXIgPT09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgICBVUERBVEVfSU5URVJWQUw6IDEwMDAsXHJcbiAgICBDQU5WQVNfSEVJR0hUOiA4NDAsXHJcbiAgICBDQU5WQVNfV0lEVEg6IDY0MCxcclxuICAgIENBTlZBU19CR19DT0xPUjogJyM1NTU1NTUnLFxyXG4gICAgQk9BUkRfQkdfQ09MT1I6ICcjMDAwMDAwJyxcclxuICAgIC8vIEJvYXJkL3RpbGUgc2l6ZXNcclxuICAgIEJPQVJEX1NUQVJUX1g6IDIwLFxyXG4gICAgQk9BUkRfU1RBUlRfWTogMjAsXHJcbiAgICBUSUxFX1dJRFRIOiA0MCxcclxuICAgIFRJTEVfSEVJR0hUOiA0MCxcclxuICAgIEJPQVJEX1dJRFRIX1RJTEVTOiAxMCxcclxuICAgIEJPQVJEX0hFSUdIVF9USUxFUzogMjAsXHJcbiAgICAvLyBrZXkgY29kZXNcclxuICAgIFVQX0tFWTogMzgsXHJcbiAgICBET1dOX0tFWTogNDAsXHJcbiAgICBMRUZUX0tFWTogMzcsXHJcbiAgICBSSUdIVF9LRVk6IDM5LFxyXG4gICAgZ2V0IEJPQVJEX1dJRFRIKCkgeyByZXR1cm4gdGhpcy5USUxFX1dJRFRIICogMTA7IH0sXHJcbiAgICBnZXQgQk9BUkRfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIDIwOyB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBTSEFQRVMgPSB7XHJcbiAgICBpOiB7XHJcbiAgICAgICAgZGlyczogWzB4MEYwMCwgMHgyMjIyLCAweDAwRjAsIDB4NDQ0NF0sXHJcbiAgICAgICAgY29sb3I6ICdjeWFuJ1xyXG4gICAgfSxcclxuICAgIGo6IHtcclxuICAgICAgICBkaXJzOiBbMHg0NEMwLCAweDhFMDAsIDB4NjQ0MCwgMHgwRTIwXSxcclxuICAgICAgICBjb2xvcjogJ2JsdWUnXHJcbiAgICB9LFxyXG4gICAgbDoge1xyXG4gICAgICAgIGRpcnM6IFsweDQ0NjAsIDB4MEU4MCwgMHhDNDQwLCAweDJFMDBdLFxyXG4gICAgICAgIGNvbG9yOiAnb3JhbmdlJ1xyXG4gICAgfSxcclxuICAgIG86IHtcclxuICAgICAgICBkaXJzOiBbMHhDQzAwLCAweENDMDAsIDB4Q0MwMCwgMHhDQzAwXSxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdydcclxuICAgIH0sXHJcbiAgICBzOiB7XHJcbiAgICAgICAgZGlyczogWzB4MDZDMCwgMHg4QzQwLCAweDZDMDAsIDB4NDYyMF0sXHJcbiAgICAgICAgY29sb3I6ICdncmVlbidcclxuICAgIH0sXHJcbiAgICB0OiB7XHJcbiAgICAgICAgZGlyczogWzB4MEU0MCwgMHg0QzQwLCAweDRFMDAsIDB4NDY0MF0sXHJcbiAgICAgICAgY29sb3I6ICdwdXJwbGUnXHJcbiAgICB9LFxyXG4gICAgejoge1xyXG4gICAgICAgIGRpcnM6IFsweDBDNjAsIDB4NEM4MCwgMHhDNjAwLCAweDI2NDBdLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vQm9hcmRcIjtcclxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IHsgQ09ORklHLCBTSEFQRVMgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmNvbmZpZyc7XHJcbmltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9ICh0RnJhbWUpID0+IHtcclxuICAgICAgICAgICAgLy8gWW91IGNhbiBzdG9wIHRoZSBnYW1lIGF0IGFueSBwb2ludCB3aXRoOlxyXG4gICAgICAgICAgICAvLyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoR2FtZS5zdG9wTWFpbik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE1haW4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0RnJhbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVJhbmRvbVNoYXBlKCkge1xyXG4gICAgICAgIC8vIFRPRE86IE1vdmUgdGhpcyBmdW5jdGlvbiwgYW5kIHBvc3NpYmx5IGNoYW5nZSByYW5kb20gYWxnb3JpdGhtXHJcbiAgICAgICAgY29uc3QgcGllY2VzID0gWydpJywgJ2onLCAnbCcsICdvJywgJ3MnLCAndCcsICd6J107XHJcbiAgICAgICAgY29uc3QgbmV4dCA9IHBpZWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocGllY2VzLmxlbmd0aCAtIDApKSArIDBdO1xyXG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0gbmV3IFNoYXBlKFNIQVBFU1tuZXh0XS5kaXJzLCBTSEFQRVNbbmV4dF0uY29sb3IsIDApO1xyXG4gICAgICAgIHJldHVybiBuZXdTaGFwZTtcclxuICAgIH1cclxuICAgIGhhbmRsZUlucHV0KCkge1xyXG4gICAgICAgIC8vIFRPRE8gbW92ZSB0aGlzIGVsc2V3aGVyZT9cclxuICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuRE9XTl9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoYXBlLmxvd2VyU2hhcGUodGhpcy5ib2FyZE1hdHJpeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLkxFRlRfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5sZWZ0U2hhcGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuUklHSFRfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5yaWdodFNoYXBlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlVQX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUucm90YXRlU2hhcGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgQ2FudmFzLmluaXQoQ09ORklHLkNBTlZBU19XSURUSCwgQ09ORklHLkNBTlZBU19IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNhbnZhc1wiKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IENPTkZJRy5VUERBVEVfSU5URVJWQUw7XHJcbiAgICAgICAgdGhpcy5yZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgLy8gRmlsbCB0aGUgY2FudmFzXHJcbiAgICAgICAgQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkNBTlZBU19CR19DT0xPUik7XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZ2FtZSBib2FyZCB0byB0aGUgY2FudmFzXHJcbiAgICAgICAgQm9hcmQuaW5pdCgpO1xyXG4gICAgICAgIEJvYXJkLmRyYXcoKTtcclxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgZmlyc3Qgc2hhcGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZSA9IHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNoYXBlLmRyYXdTaGFwZSgpO1xyXG4gICAgICAgIC8vIFNldCB1cCBvdXIgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIG1hdHJpeCBmb3IgdGhlIGJvYXJkIHRvIGhvbGQgc2hhcGVzXHJcbiAgICAgICAgdGhpcy5ib2FyZE1hdHJpeCA9IEJvYXJkLmNyZWF0ZUJvYXJkTWF0cml4KENPTkZJRy5CT0FSRF9XSURUSF9USUxFUywgQ09ORklHLkJPQVJEX0hFSUdIVF9USUxFUyk7XHJcbiAgICAgICAgQm9hcmQubWVyZ2VTaGFwZVRvTWF0cml4KHRoaXMuY3VycmVudFNoYXBlLCB0aGlzLmJvYXJkTWF0cml4KTtcclxuICAgICAgICAvLyBHZXQgdGhlIGluaXRpYWwgZ2FtZSB0aW1lXHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBzdGFydFRpbWU7XHJcbiAgICAgICAgLy8gU3RhcnQgdGhlIGdhbWVcclxuICAgICAgICB0aGlzLmdhbWVMb29wKHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodEZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRGcmFtZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRGcmFtZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IHRoaXMudXBkYXRlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUubG93ZXJTaGFwZSh0aGlzLmJvYXJkTWF0cml4KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbjtcclxuKCgpID0+IHtcclxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gICAgZ2FtZS5pbml0KCk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=