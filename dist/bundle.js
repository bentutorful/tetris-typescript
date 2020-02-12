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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9nYW1lLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ21CO0FBQ2xDO0FBQ2Y7QUFDQSxxQkFBcUIsNkRBQU07QUFDM0Isc0JBQXNCLDZEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU0sVUFBVSw2REFBTSxnQkFBZ0IsNkRBQU07QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5jb25maWcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICB0aGlzLndpZHRoID0gQ09ORklHLkJPQVJEX1dJRFRIO1xuICAgICAgICB0aGlzLmhlaWdodCA9IENPTkZJRy5CT0FSRF9IRUlHSFQ7XG4gICAgICAgIC8vIHNldHVwIGdyaWRcbiAgICB9XG4gICAgc3RhdGljIGRyYXcoKSB7XG4gICAgICAgIENhbnZhcy5maWxsUmVjdChDT05GSUcuQk9BUkRfU1RBUlRfWCwgQ09ORklHLkJPQVJEX1NUQVJUX1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmJnQ29sb3VyKTtcbiAgICAgICAgLy8gZHJhdyBncmlkXG4gICAgfVxufVxuQm9hcmQuYmdDb2xvdXIgPSBDT05GSUcuQk9BUkRfQkdfQ09MT1I7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAgIHN0YXRpYyBpbml0KHdpZHRoLCBoZWlnaHQsIGNhbnZhcykge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICBzdGF0aWMgZmlsbENhbnZhcyhjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIHN0YXRpYyBmaWxsUmVjdCh4LCB5LCB3LCBoLCBjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gICAgc3RhdGljIHN0cm9rZVJlY3QoeCwgeSwgdywgaCwgbGluZVdpZHRoLCBjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGVhclJlY3QoeCwgeSwgdywgaCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIHcsIGgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgdGhpcy5rZXlib2FyZERvd24oZSk7IH0pO1xuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7IHRoaXMua2V5Ym9hcmRVcChlKSB9KVxuICAgIH1cbiAgICBrZXlib2FyZERvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5rZXlEb3duW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcbiAgICB9XG4gICAga2V5UHJlc3NlZChrZXlDb2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleURvd25ba2V5Q29kZV07XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkXCI7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmNvbmZpZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSB7XG4gICAgY29uc3RydWN0b3IoZGlycywgY29sb3IsIGN1cnJlbnREaXIpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgdGhpcy5kaXJzID0gZGlycztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN1cnJlbnREaXIgPSBjdXJyZW50RGlyO1xuICAgIH1cbiAgICBjYWxjdWxhdGVYYW5kWShjb2wsIHJvdykge1xuICAgICAgICBsZXQgeCA9ICgoY29sICsgMSArIHRoaXMub2Zmc2V0LngpICogQ09ORklHLlRJTEVfV0lEVEgpIC0gQ09ORklHLkJPQVJEX1NUQVJUX1g7XG4gICAgICAgIGxldCB5ID0gKChyb3cgKyAxICsgdGhpcy5vZmZzZXQueSkgKiBDT05GSUcuVElMRV9IRUlHSFQpIC0gQ09ORklHLkJPQVJEX1NUQVJUX1k7XG4gICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICB9XG4gICAgbWFwU2hhcGVNYXRyaXgoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHJvdyA9IDAsIGNvbCA9IDA7XG4gICAgICAgIGZvciAobGV0IGJpdCA9IDB4ODAwMDsgYml0ID4gMDsgYml0ID0gYml0ID4+IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnNbdGhpcy5jdXJyZW50RGlyXSAmIGJpdCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNvbCwgcm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgrK2NvbCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgKytyb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJTaGFwZSgpIHtcbiAgICAgICAgdGhpcy5tYXBTaGFwZU1hdHJpeCgoY29sLCByb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVYYW5kWShjb2wsIHJvdyk7XG4gICAgICAgICAgICBDYW52YXMuY2xlYXJSZWN0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIENPTkZJRy5USUxFX1dJRFRILCBDT05GSUcuVElMRV9IRUlHSFQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1NoYXBlKCkge1xuICAgICAgICB0aGlzLm1hcFNoYXBlTWF0cml4KChjb2wsIHJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVhhbmRZKGNvbCwgcm93KTtcbiAgICAgICAgICAgIC8vIFRPRE8gd29yayBvdXQgaW5uZXIgc3Ryb2tlXG4gICAgICAgICAgICBDYW52YXMuZmlsbFJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgQ09ORklHLlRJTEVfV0lEVEgsIENPTkZJRy5USUxFX0hFSUdIVCwgdGhpcy5jb2xvcik7XG4gICAgICAgICAgICAvLyBDYW52YXMuc3Ryb2tlUmVjdChwb3MueCArIDMsIHBvcy55ICsgMywgQ09ORklHLlRJTEVfV0lEVEggLSA2LCBDT05GSUcuVElMRV9IRUlHSFQgLSA2LCA2LCAncmVkJylcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgdGhpcy5jbGVhclNoYXBlKCk7XG4gICAgICAgIEJvYXJkLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3U2hhcGUoKTtcbiAgICB9XG4gICAgbG93ZXJTaGFwZSgpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQueSArPSAxO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBsZWZ0U2hhcGUoKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0LngtLTtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmlnaHRTaGFwZSgpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQueCsrO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByb3RhdGVTaGFwZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERpciA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpcisrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudERpcik7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcbiAgICBVUERBVEVfSU5URVJWQUw6IDEwMDAsXG4gICAgQ0FOVkFTX0hFSUdIVDogODQwLFxuICAgIENBTlZBU19XSURUSDogNjQwLFxuICAgIENBTlZBU19CR19DT0xPUjogJyM1NTU1NTUnLFxuICAgIEJPQVJEX0JHX0NPTE9SOiAnIzAwMDAwMCcsXG4gICAgLy8gQm9hcmQvdGlsZSBzaXplc1xuICAgIEJPQVJEX1NUQVJUX1g6IDIwLFxuICAgIEJPQVJEX1NUQVJUX1k6IDIwLFxuICAgIFRJTEVfV0lEVEg6IDQwLFxuICAgIFRJTEVfSEVJR0hUOiA0MCxcbiAgICAvLyBrZXkgY29kZXNcbiAgICBVUF9LRVk6IDM4LFxuICAgIERPV05fS0VZOiA0MCxcbiAgICBMRUZUX0tFWTogMzcsXG4gICAgUklHSFRfS0VZOiAzOSxcbiAgICBnZXQgQk9BUkRfV0lEVEgoKSB7IHJldHVybiB0aGlzLlRJTEVfV0lEVEggKiAxMDsgfSxcbiAgICBnZXQgQk9BUkRfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIDIwOyB9XG59O1xuZXhwb3J0IGNvbnN0IFNIQVBFUyA9IHtcbiAgICBpOiB7XG4gICAgICAgIGRpcnM6IFsweDBGMDAsIDB4MjIyMiwgMHgwMEYwLCAweDQ0NDRdLFxuICAgICAgICBjb2xvcjogJ2N5YW4nXG4gICAgfSxcbiAgICBqOiB7XG4gICAgICAgIGRpcnM6IFsweDQ0QzAsIDB4OEUwMCwgMHg2NDQwLCAweDBFMjBdLFxuICAgICAgICBjb2xvcjogJ2JsdWUnXG4gICAgfSxcbiAgICBsOiB7XG4gICAgICAgIGRpcnM6IFsweDQ0NjAsIDB4MEU4MCwgMHhDNDQwLCAweDJFMDBdLFxuICAgICAgICBjb2xvcjogJ29yYW5nZSdcbiAgICB9LFxuICAgIG86IHtcbiAgICAgICAgZGlyczogWzB4Q0MwMCwgMHhDQzAwLCAweENDMDAsIDB4Q0MwMF0sXG4gICAgICAgIGNvbG9yOiAneWVsbG93J1xuICAgIH0sXG4gICAgczoge1xuICAgICAgICBkaXJzOiBbMHgwNkMwLCAweDhDNDAsIDB4NkMwMCwgMHg0NjIwXSxcbiAgICAgICAgY29sb3I6ICdncmVlbidcbiAgICB9LFxuICAgIHQ6IHtcbiAgICAgICAgZGlyczogWzB4MEU0MCwgMHg0QzQwLCAweDRFMDAsIDB4NDY0MF0sXG4gICAgICAgIGNvbG9yOiAncHVycGxlJ1xuICAgIH0sXG4gICAgejoge1xuICAgICAgICBkaXJzOiBbMHgwQzYwLCAweDRDODAsIDB4QzYwMCwgMHgyNjQwXSxcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgfVxufTtcbiIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9Cb2FyZFwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7IENPTkZJRywgU0hBUEVTIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5jb25maWcnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL0V2ZW50SGFuZGxlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3AgPSAodEZyYW1lKSA9PiB7XG4gICAgICAgICAgICAvLyBZb3UgY2FuIHN0b3AgdGhlIGdhbWUgYXQgYW55IHBvaW50IHdpdGg6XG4gICAgICAgICAgICAvLyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoR2FtZS5zdG9wTWFpbik7XG4gICAgICAgICAgICB0aGlzLnN0b3BNYWluID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRGcmFtZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIENhbnZhcy5pbml0KENPTkZJRy5DQU5WQVNfV0lEVEgsIENPTkZJRy5DQU5WQVNfSEVJR0hULCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIikpO1xuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gQ09ORklHLlVQREFURV9JTlRFUlZBTDtcbiAgICAgICAgdGhpcy5yZWFkeSgpO1xuICAgIH1cbiAgICBnZW5lcmF0ZVJhbmRvbVNoYXBlKCkge1xuICAgICAgICAvLyBUT0RPOiBNb3ZlIHRoaXMgZnVuY3Rpb24sIGFuZCBwb3NzaWJseSBjaGFuZ2UgcmFuZG9tIGFsZ29yaXRobVxuICAgICAgICBjb25zdCBwaWVjZXMgPSBbJ2knLCAnaicsICdsJywgJ28nLCAncycsICd0JywgJ3onXTtcbiAgICAgICAgY29uc3QgbmV4dCA9IHBpZWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocGllY2VzLmxlbmd0aCAtIDApKSArIDBdO1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IG5ldyBTaGFwZShTSEFQRVNbbmV4dF0uZGlycywgU0hBUEVTW25leHRdLmNvbG9yLCAwKTtcbiAgICAgICAgcmV0dXJuIG5ld1NoYXBlO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dCgpIHtcbiAgICAgICAgLy8gVE9ETyBtb3ZlIHRoaXMgZWxzZXdoZXJlP1xuICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuRE9XTl9LRVkpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5sb3dlclNoYXBlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuTEVGVF9LRVkpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5sZWZ0U2hhcGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5SSUdIVF9LRVkpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5yaWdodFNoYXBlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuVVBfS0VZKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUucm90YXRlU2hhcGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWFkeSgpIHtcbiAgICAgICAgQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkNBTlZBU19CR19DT0xPUik7XG4gICAgICAgIEJvYXJkLmluaXQoKTtcbiAgICAgICAgQm9hcmQuZHJhdygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZSA9IHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5kcmF3U2hhcGUoKTtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5nYW1lTG9vcChzdGFydFRpbWUpO1xuICAgIH1cbiAgICB1cGRhdGUodEZyYW1lKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdEZyYW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRGcmFtZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSArPSBkZWx0YVRpbWU7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gdGhpcy51cGRhdGVJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUubG93ZXJTaGFwZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbjtcbigoKSA9PiB7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgZ2FtZS5pbml0KCk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==