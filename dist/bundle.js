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
        console.log(this.currentDir);
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
    init() {
        _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].init(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_WIDTH, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_HEIGHT, document.getElementById("gameCanvas"));
        this.updateInterval = _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].UPDATE_INTERVAL;
        this.ready();
    }
    generateRandomShape() {
        // TODO: Move this function and create randomness (random is currently fukd)
        const pieces = ['i', 'j', 'l', 'o', 's', 't', 'z'];
        const next = pieces[Math.round(Math.random(0, pieces.length - 1))];
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
    ready() {
        _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fillCanvas(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_BG_COLOR);
        _Board__WEBPACK_IMPORTED_MODULE_0__["default"].init();
        _Board__WEBPACK_IMPORTED_MODULE_0__["default"].draw();
        this.currentShape = this.generateRandomShape();
        this.currentShape.drawShape();
        this.eventHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_4__["default"]();
        const startTime = window.performance.now();
        this.lastTime = startTime;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9nYW1lLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ21CO0FBQ2xDO0FBQ2Y7QUFDQSxxQkFBcUIsNkRBQU07QUFDM0Isc0JBQXNCLDZEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU0sVUFBVSw2REFBTSxnQkFBZ0IsNkRBQU07QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xyXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmNvbmZpZyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBDT05GSUcuQk9BUkRfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBDT05GSUcuQk9BUkRfSEVJR0hUO1xyXG4gICAgICAgIC8vIHNldHVwIGdyaWRcclxuICAgIH1cclxuICAgIHN0YXRpYyBkcmF3KCkge1xyXG4gICAgICAgIENhbnZhcy5maWxsUmVjdChDT05GSUcuQk9BUkRfU1RBUlRfWCwgQ09ORklHLkJPQVJEX1NUQVJUX1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmJnQ29sb3VyKTtcclxuICAgICAgICAvLyBkcmF3IGdyaWRcclxuICAgIH1cclxufVxyXG5Cb2FyZC5iZ0NvbG91ciA9IENPTkZJRy5CT0FSRF9CR19DT0xPUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcclxuICAgIHN0YXRpYyBpbml0KHdpZHRoLCBoZWlnaHQsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWxsQ2FudmFzKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsbFJlY3QoeCwgeSwgdywgaCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHN0cm9rZVJlY3QoeCwgeSwgdywgaCwgbGluZVdpZHRoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xlYXJSZWN0KHgsIHksIHcsIGgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgdGhpcy5rZXlib2FyZERvd24oZSk7IH0pO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHsgdGhpcy5rZXlib2FyZFVwKGUpIH0pXHJcbiAgICB9XHJcbiAgICBrZXlib2FyZERvd24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMua2V5RG93bltldmVudC5rZXlDb2RlXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBrZXlQcmVzc2VkKGtleUNvZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlEb3duW2tleUNvZGVdO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duID0ge307XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkXCI7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUge1xyXG4gICAgY29uc3RydWN0b3IoZGlycywgY29sb3IsIGN1cnJlbnREaXIpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgIHRoaXMuZGlycyA9IGRpcnM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpciA9IGN1cnJlbnREaXI7XHJcbiAgICB9XHJcbiAgICBjYWxjdWxhdGVYYW5kWShjb2wsIHJvdykge1xyXG4gICAgICAgIGxldCB4ID0gKChjb2wgKyAxICsgdGhpcy5vZmZzZXQueCkgKiBDT05GSUcuVElMRV9XSURUSCkgLSBDT05GSUcuQk9BUkRfU1RBUlRfWDtcclxuICAgICAgICBsZXQgeSA9ICgocm93ICsgMSArIHRoaXMub2Zmc2V0LnkpICogQ09ORklHLlRJTEVfSEVJR0hUKSAtIENPTkZJRy5CT0FSRF9TVEFSVF9ZO1xyXG4gICAgICAgIHJldHVybiB7IHgsIHkgfTtcclxuICAgIH1cclxuICAgIG1hcFNoYXBlTWF0cml4KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IDAsIGNvbCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgYml0ID0gMHg4MDAwOyBiaXQgPiAwOyBiaXQgPSBiaXQgPj4gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJzW3RoaXMuY3VycmVudERpcl0gJiBiaXQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKytjb2wgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgICAgICAgICArK3JvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFyU2hhcGUoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBTaGFwZU1hdHJpeCgoY29sLCByb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVhhbmRZKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgQ2FudmFzLmNsZWFyUmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBDT05GSUcuVElMRV9XSURUSCwgQ09ORklHLlRJTEVfSEVJR0hUKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRyYXdTaGFwZSgpIHtcclxuICAgICAgICB0aGlzLm1hcFNoYXBlTWF0cml4KChjb2wsIHJvdykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlWGFuZFkoY29sLCByb3cpO1xyXG4gICAgICAgICAgICAvLyBUT0RPIHdvcmsgb3V0IGlubmVyIHN0cm9rZVxyXG4gICAgICAgICAgICBDYW52YXMuZmlsbFJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgQ09ORklHLlRJTEVfV0lEVEgsIENPTkZJRy5USUxFX0hFSUdIVCwgdGhpcy5jb2xvcik7XHJcbiAgICAgICAgICAgIC8vIENhbnZhcy5zdHJva2VSZWN0KHBvcy54ICsgMywgcG9zLnkgKyAzLCBDT05GSUcuVElMRV9XSURUSCAtIDYsIENPTkZJRy5USUxFX0hFSUdIVCAtIDYsIDYsICdyZWQnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTaGFwZSgpO1xyXG4gICAgICAgIEJvYXJkLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdTaGFwZSgpO1xyXG4gICAgfVxyXG4gICAgbG93ZXJTaGFwZSgpIHtcclxuICAgICAgICB0aGlzLm9mZnNldC55ICs9IDE7XHJcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcclxuICAgIH1cclxuICAgIGxlZnRTaGFwZSgpIHtcclxuICAgICAgICB0aGlzLm9mZnNldC54LS07XHJcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcclxuICAgIH1cclxuICAgIHJpZ2h0U2hhcGUoKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueCsrO1xyXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XHJcbiAgICB9XHJcbiAgICByb3RhdGVTaGFwZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlyID09PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50RGlyKTtcclxuICAgICAgICB0aGlzLnJlZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgICBVUERBVEVfSU5URVJWQUw6IDEwMDAsXHJcbiAgICBDQU5WQVNfSEVJR0hUOiA4NDAsXHJcbiAgICBDQU5WQVNfV0lEVEg6IDY0MCxcclxuICAgIENBTlZBU19CR19DT0xPUjogJyM1NTU1NTUnLFxyXG4gICAgQk9BUkRfQkdfQ09MT1I6ICcjMDAwMDAwJyxcclxuICAgIC8vIEJvYXJkL3RpbGUgc2l6ZXNcclxuICAgIEJPQVJEX1NUQVJUX1g6IDIwLFxyXG4gICAgQk9BUkRfU1RBUlRfWTogMjAsXHJcbiAgICBUSUxFX1dJRFRIOiA0MCxcclxuICAgIFRJTEVfSEVJR0hUOiA0MCxcclxuICAgIC8vIGtleSBjb2Rlc1xyXG4gICAgVVBfS0VZOiAzOCxcclxuICAgIERPV05fS0VZOiA0MCxcclxuICAgIExFRlRfS0VZOiAzNyxcclxuICAgIFJJR0hUX0tFWTogMzksXHJcbiAgICBnZXQgQk9BUkRfV0lEVEgoKSB7IHJldHVybiB0aGlzLlRJTEVfV0lEVEggKiAxMDsgfSxcclxuICAgIGdldCBCT0FSRF9IRUlHSFQoKSB7IHJldHVybiB0aGlzLlRJTEVfSEVJR0hUICogMjA7IH1cclxufTtcclxuZXhwb3J0IGNvbnN0IFNIQVBFUyA9IHtcclxuICAgIGk6IHtcclxuICAgICAgICBkaXJzOiBbMHgwRjAwLCAweDIyMjIsIDB4MDBGMCwgMHg0NDQ0XSxcclxuICAgICAgICBjb2xvcjogJ2N5YW4nXHJcbiAgICB9LFxyXG4gICAgajoge1xyXG4gICAgICAgIGRpcnM6IFsweDQ0QzAsIDB4OEUwMCwgMHg2NDQwLCAweDBFMjBdLFxyXG4gICAgICAgIGNvbG9yOiAnYmx1ZSdcclxuICAgIH0sXHJcbiAgICBsOiB7XHJcbiAgICAgICAgZGlyczogWzB4NDQ2MCwgMHgwRTgwLCAweEM0NDAsIDB4MkUwMF0sXHJcbiAgICAgICAgY29sb3I6ICdvcmFuZ2UnXHJcbiAgICB9LFxyXG4gICAgbzoge1xyXG4gICAgICAgIGRpcnM6IFsweENDMDAsIDB4Q0MwMCwgMHhDQzAwLCAweENDMDBdLFxyXG4gICAgICAgIGNvbG9yOiAneWVsbG93J1xyXG4gICAgfSxcclxuICAgIHM6IHtcclxuICAgICAgICBkaXJzOiBbMHgwNkMwLCAweDhDNDAsIDB4NkMwMCwgMHg0NjIwXSxcclxuICAgICAgICBjb2xvcjogJ2dyZWVuJ1xyXG4gICAgfSxcclxuICAgIHQ6IHtcclxuICAgICAgICBkaXJzOiBbMHgwRTQwLCAweDRDNDAsIDB4NEUwMCwgMHg0NjQwXSxcclxuICAgICAgICBjb2xvcjogJ3B1cnBsZSdcclxuICAgIH0sXHJcbiAgICB6OiB7XHJcbiAgICAgICAgZGlyczogWzB4MEM2MCwgMHg0QzgwLCAweEM2MDAsIDB4MjY0MF0sXHJcbiAgICAgICAgY29sb3I6ICdyZWQnXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9Cb2FyZFwiO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xyXG5pbXBvcnQgeyBDT05GSUcsIFNIQVBFUyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuY29uZmlnJztcclxuaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVMb29wID0gKHRGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHN0b3AgdGhlIGdhbWUgYXQgYW55IHBvaW50IHdpdGg6XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShHYW1lLnN0b3BNYWluKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wTWFpbiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRGcmFtZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgQ2FudmFzLmluaXQoQ09ORklHLkNBTlZBU19XSURUSCwgQ09ORklHLkNBTlZBU19IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNhbnZhc1wiKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IENPTkZJRy5VUERBVEVfSU5URVJWQUw7XHJcbiAgICAgICAgdGhpcy5yZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVSYW5kb21TaGFwZSgpIHtcclxuICAgICAgICAvLyBUT0RPOiBNb3ZlIHRoaXMgZnVuY3Rpb24gYW5kIGNyZWF0ZSByYW5kb21uZXNzIChyYW5kb20gaXMgY3VycmVudGx5IGZ1a2QpXHJcbiAgICAgICAgY29uc3QgcGllY2VzID0gWydpJywgJ2onLCAnbCcsICdvJywgJ3MnLCAndCcsICd6J107XHJcbiAgICAgICAgY29uc3QgbmV4dCA9IHBpZWNlc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKDAsIHBpZWNlcy5sZW5ndGggLSAxKSldO1xyXG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0gbmV3IFNoYXBlKFNIQVBFU1tuZXh0XS5kaXJzLCBTSEFQRVNbbmV4dF0uY29sb3IsIDApO1xyXG4gICAgICAgIHJldHVybiBuZXdTaGFwZTtcclxuICAgIH1cclxuICAgIGhhbmRsZUlucHV0KCkge1xyXG4gICAgICAgIC8vIFRPRE8gbW92ZSB0aGlzIGVsc2V3aGVyZT9cclxuICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuRE9XTl9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoYXBlLmxvd2VyU2hhcGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuTEVGVF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoYXBlLmxlZnRTaGFwZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5SSUdIVF9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoYXBlLnJpZ2h0U2hhcGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuVVBfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5yb3RhdGVTaGFwZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIENhbnZhcy5maWxsQ2FudmFzKENPTkZJRy5DQU5WQVNfQkdfQ09MT1IpO1xyXG4gICAgICAgIEJvYXJkLmluaXQoKTtcclxuICAgICAgICBCb2FyZC5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUgPSB0aGlzLmdlbmVyYXRlUmFuZG9tU2hhcGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5kcmF3U2hhcGUoKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHN0YXJ0VGltZTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wKHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodEZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRGcmFtZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRGcmFtZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IHRoaXMudXBkYXRlSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUubG93ZXJTaGFwZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIucmVzZXQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuO1xyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBnYW1lLmluaXQoKTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==