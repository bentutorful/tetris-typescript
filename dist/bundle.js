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

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
/* harmony import */ var _constants_game_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/game.config */ "./src/constants/game.config.ts");


class Board {
    static init() {
        this.width = _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_WIDTH * 40;
        this.height = _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_HEIGHT * 40;
        // setup grid
    }
    static draw() {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].fillRect(20, 20, this.width, this.height, this.bgColour);
        // draw grid
    }
}
Board.bgColour = '#555555';


/***/ }),

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
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
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.fillStyle = color;
        this.context.fill();
    }
    static fillRect(x, y, w, h, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }
    static clearRect(x, y, w, h) {
        this.context.clearRect(x, y, w, h);
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
    CANVAS_HEIGHT: 800,
    CANVAS_WIDTH: 640,
    CANVAS_BG_COLOR: '#000000',
    BOARD_WIDTH: 10,
    BOARD_HEIGHT: 20
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
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
/* harmony import */ var _constants_game_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/game.config */ "./src/constants/game.config.ts");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shape */ "./src/shape.ts");




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
        _canvas__WEBPACK_IMPORTED_MODULE_1__["default"].init(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_WIDTH, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_HEIGHT, document.getElementById("gameCanvas"));
        this.updateInterval = _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].UPDATE_INTERVAL;
        this.ready();
    }
    generateRandomShape() {
        // TODO: Move this function and create randomness
        const shape = _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["SHAPES"].i;
        const newShape = new _shape__WEBPACK_IMPORTED_MODULE_3__["default"](shape.dirs, shape.color, 0);
        return newShape;
    }
    ready() {
        _canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fillCanvas(_constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].CANVAS_BG_COLOR);
        _board__WEBPACK_IMPORTED_MODULE_0__["default"].init();
        _board__WEBPACK_IMPORTED_MODULE_0__["default"].draw();
        this.currentShape = this.generateRandomShape();
        this.currentShape.drawShape();
        const startTime = window.performance.now();
        this.lastTime = startTime;
        this.gameLoop(startTime);
    }
    update(tFrame) {
        const deltaTime = tFrame - this.lastTime;
        this.lastTime = tFrame;
        this.currentTime += deltaTime;
        if (this.currentTime > this.updateInterval) {
            this.currentShape.lowerShape();
            this.currentTime = 0;
        }
        return;
    }
}
;
(() => {
    const game = new Game();
    game.init();
})();


/***/ }),

/***/ "./src/shape.ts":
/*!**********************!*\
  !*** ./src/shape.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");

class Shape {
    constructor(dirs, color, currentDir) {
        this.yOffset = 0;
        this.squareOccupied = true;
        this.dirs = dirs;
        this.color = color;
        this.currentDir = this.dirs[currentDir];
    }
    mapShapeMatrix(callback) {
        let row = 0, col = 0;
        let x = 0, y = 0;
        for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
            x = (col + 1) * 20;
            y = (row + 1) * 20;
            if (this.currentDir & bit) {
                callback(x, y);
            }
            if (++col === 4) {
                col = 0;
                ++row;
            }
        }
    }
    clearShape() {
        this.mapShapeMatrix((x, y) => {
            _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].clearRect(x, y + (20 * this.yOffset), 20, 20);
        });
    }
    drawShape() {
        this.mapShapeMatrix((x, y) => {
            _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].fillRect(x, y + (20 * this.yOffset), 20, 20, this.color);
        });
    }
    lowerShape() {
        // TODO clear shape before redraw
        this.clearShape();
        this.yOffset += 1;
        this.drawShape();
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9nYW1lLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNtQjtBQUNsQztBQUNmO0FBQ0EscUJBQXFCLDZEQUFNO0FBQzNCLHNCQUFzQiw2REFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNFO0FBQzJCO0FBQzdCO0FBQ2I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU0sTUFBTSw2REFBTSxlQUFlLDZEQUFNO0FBQy9DLDhCQUE4Qiw2REFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBTTtBQUM1Qiw2QkFBNkIsOENBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTSxZQUFZLDZEQUFNO0FBQ2hDLFFBQVEsOENBQUs7QUFDYixRQUFRLDhDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xERDtBQUFBO0FBQUE7QUFBOEI7QUFDZjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFNO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFNO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL2NhbnZhc1wiO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5jb25maWcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICB0aGlzLndpZHRoID0gQ09ORklHLkJPQVJEX1dJRFRIICogNDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQ09ORklHLkJPQVJEX0hFSUdIVCAqIDQwO1xuICAgICAgICAvLyBzZXR1cCBncmlkXG4gICAgfVxuICAgIHN0YXRpYyBkcmF3KCkge1xuICAgICAgICBDYW52YXMuZmlsbFJlY3QoMjAsIDIwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5iZ0NvbG91cik7XG4gICAgICAgIC8vIGRyYXcgZ3JpZFxuICAgIH1cbn1cbkJvYXJkLmJnQ29sb3VyID0gJyM1NTU1NTUnO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBzdGF0aWMgaW5pdCh3aWR0aCwgaGVpZ2h0LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgc3RhdGljIGZpbGxDYW52YXMoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQucmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICB9XG4gICAgc3RhdGljIGZpbGxSZWN0KHgsIHksIHcsIGgsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGVhclJlY3QoeCwgeSwgdywgaCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIHcsIGgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05GSUcgPSB7XG4gICAgVVBEQVRFX0lOVEVSVkFMOiAxMDAwLFxuICAgIENBTlZBU19IRUlHSFQ6IDgwMCxcbiAgICBDQU5WQVNfV0lEVEg6IDY0MCxcbiAgICBDQU5WQVNfQkdfQ09MT1I6ICcjMDAwMDAwJyxcbiAgICBCT0FSRF9XSURUSDogMTAsXG4gICAgQk9BUkRfSEVJR0hUOiAyMFxufTtcbmV4cG9ydCBjb25zdCBTSEFQRVMgPSB7XG4gICAgaToge1xuICAgICAgICBkaXJzOiBbMHgwRjAwLCAweDIyMjIsIDB4MDBGMCwgMHg0NDQ0XSxcbiAgICAgICAgY29sb3I6ICdjeWFuJ1xuICAgIH0sXG4gICAgajoge1xuICAgICAgICBkaXJzOiBbMHg0NEMwLCAweDhFMDAsIDB4NjQ0MCwgMHgwRTIwXSxcbiAgICAgICAgY29sb3I6ICdibHVlJ1xuICAgIH0sXG4gICAgbDoge1xuICAgICAgICBkaXJzOiBbMHg0NDYwLCAweDBFODAsIDB4QzQ0MCwgMHgyRTAwXSxcbiAgICAgICAgY29sb3I6ICdvcmFuZ2UnXG4gICAgfSxcbiAgICBvOiB7XG4gICAgICAgIGRpcnM6IFsweENDMDAsIDB4Q0MwMCwgMHhDQzAwLCAweENDMDBdLFxuICAgICAgICBjb2xvcjogJ3llbGxvdydcbiAgICB9LFxuICAgIHM6IHtcbiAgICAgICAgZGlyczogWzB4MDZDMCwgMHg4QzQwLCAweDZDMDAsIDB4NDYyMF0sXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nXG4gICAgfSxcbiAgICB0OiB7XG4gICAgICAgIGRpcnM6IFsweDBFNDAsIDB4NEM0MCwgMHg0RTAwLCAweDQ2NDBdLFxuICAgICAgICBjb2xvcjogJ3B1cnBsZSdcbiAgICB9LFxuICAgIHo6IHtcbiAgICAgICAgZGlyczogWzB4MEM2MCwgMHg0QzgwLCAweEM2MDAsIDB4MjY0MF0sXG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgIH1cbn07XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBDT05GSUcsIFNIQVBFUyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuY29uZmlnJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL3NoYXBlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9ICh0RnJhbWUpID0+IHtcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gc3RvcCB0aGUgZ2FtZSBhdCBhbnkgcG9pbnQgd2l0aDpcbiAgICAgICAgICAgIC8vIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShHYW1lLnN0b3BNYWluKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcE1haW4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3ApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodEZyYW1lKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgQ2FudmFzLmluaXQoQ09ORklHLkNBTlZBU19XSURUSCwgQ09ORklHLkNBTlZBU19IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNhbnZhc1wiKSk7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBDT05GSUcuVVBEQVRFX0lOVEVSVkFMO1xuICAgICAgICB0aGlzLnJlYWR5KCk7XG4gICAgfVxuICAgIGdlbmVyYXRlUmFuZG9tU2hhcGUoKSB7XG4gICAgICAgIC8vIFRPRE86IE1vdmUgdGhpcyBmdW5jdGlvbiBhbmQgY3JlYXRlIHJhbmRvbW5lc3NcbiAgICAgICAgY29uc3Qgc2hhcGUgPSBTSEFQRVMuaTtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSBuZXcgU2hhcGUoc2hhcGUuZGlycywgc2hhcGUuY29sb3IsIDApO1xuICAgICAgICByZXR1cm4gbmV3U2hhcGU7XG4gICAgfVxuICAgIHJlYWR5KCkge1xuICAgICAgICBDYW52YXMuZmlsbENhbnZhcyhDT05GSUcuQ0FOVkFTX0JHX0NPTE9SKTtcbiAgICAgICAgQm9hcmQuaW5pdCgpO1xuICAgICAgICBCb2FyZC5kcmF3KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoYXBlID0gdGhpcy5nZW5lcmF0ZVJhbmRvbVNoYXBlKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoYXBlLmRyYXdTaGFwZSgpO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3Aoc3RhcnRUaW1lKTtcbiAgICB9XG4gICAgdXBkYXRlKHRGcmFtZSkge1xuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0RnJhbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdEZyYW1lO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhVGltZTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiB0aGlzLnVwZGF0ZUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZS5sb3dlclNoYXBlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuO1xuKCgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBnYW1lLmluaXQoKTtcbn0pKCk7XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL2NhbnZhc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUge1xuICAgIGNvbnN0cnVjdG9yKGRpcnMsIGNvbG9yLCBjdXJyZW50RGlyKSB7XG4gICAgICAgIHRoaXMueU9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuc3F1YXJlT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpcnMgPSBkaXJzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3VycmVudERpciA9IHRoaXMuZGlyc1tjdXJyZW50RGlyXTtcbiAgICB9XG4gICAgbWFwU2hhcGVNYXRyaXgoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHJvdyA9IDAsIGNvbCA9IDA7XG4gICAgICAgIGxldCB4ID0gMCwgeSA9IDA7XG4gICAgICAgIGZvciAobGV0IGJpdCA9IDB4ODAwMDsgYml0ID4gMDsgYml0ID0gYml0ID4+IDEpIHtcbiAgICAgICAgICAgIHggPSAoY29sICsgMSkgKiAyMDtcbiAgICAgICAgICAgIHkgPSAocm93ICsgMSkgKiAyMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXIgJiBiaXQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgrK2NvbCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgKytyb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJTaGFwZSgpIHtcbiAgICAgICAgdGhpcy5tYXBTaGFwZU1hdHJpeCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgQ2FudmFzLmNsZWFyUmVjdCh4LCB5ICsgKDIwICogdGhpcy55T2Zmc2V0KSwgMjAsIDIwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTaGFwZSgpIHtcbiAgICAgICAgdGhpcy5tYXBTaGFwZU1hdHJpeCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgQ2FudmFzLmZpbGxSZWN0KHgsIHkgKyAoMjAgKiB0aGlzLnlPZmZzZXQpLCAyMCwgMjAsIHRoaXMuY29sb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG93ZXJTaGFwZSgpIHtcbiAgICAgICAgLy8gVE9ETyBjbGVhciBzaGFwZSBiZWZvcmUgcmVkcmF3XG4gICAgICAgIHRoaXMuY2xlYXJTaGFwZSgpO1xuICAgICAgICB0aGlzLnlPZmZzZXQgKz0gMTtcbiAgICAgICAgdGhpcy5kcmF3U2hhcGUoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9