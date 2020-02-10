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
        this.width = _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_WIDTH;
        this.height = _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_HEIGHT;
        // setup grid
    }
    static draw() {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].fillRect(_constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_START_X, _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_START_Y, this.width, this.height, this.bgColour);
        // draw grid
    }
}
Board.bgColour = _constants_game_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].BOARD_BG_COLOR;


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
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.ts");
/* harmony import */ var _constants_game_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/game.config */ "./src/constants/game.config.ts");



class Shape {
    constructor(dirs, color, currentDir) {
        this.yOffset = 0;
        this.dirs = dirs;
        this.color = color;
        this.currentDir = this.dirs[currentDir];
    }
    calculateXandY(col, row) {
        let x = ((col + 1) * _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_WIDTH) - _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].BOARD_START_X;
        let y = ((row + 1) * _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_HEIGHT) - _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].BOARD_START_Y;
        if (this.yOffset > 0) {
            y += _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_HEIGHT * this.yOffset;
        }
        return {
            x,
            y
        };
    }
    mapShapeMatrix(callback) {
        let row = 0, col = 0;
        for (let bit = 0x8000; bit > 0; bit = bit >> 1) {
            if (this.currentDir & bit) {
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
            const pos = this.calculateXandY(col, row);
            _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].clearRect(pos.x, pos.y, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_WIDTH, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_HEIGHT);
        });
    }
    drawShape() {
        this.mapShapeMatrix((col, row) => {
            const pos = this.calculateXandY(col, row);
            // TODO work out inner stroke
            _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].fillRect(pos.x + 3, pos.y + 3, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_WIDTH - 6, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_HEIGHT - 6, this.color);
            _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].strokeRect(pos.x + 3, pos.y + 3, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_WIDTH - 6, _constants_game_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].TILE_HEIGHT - 6, 6, 'red');
        });
    }
    lowerShape() {
        this.clearShape();
        _board__WEBPACK_IMPORTED_MODULE_1__["default"].draw();
        this.yOffset += 1;
        this.drawShape();
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9nYW1lLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNtQjtBQUNsQztBQUNmO0FBQ0EscUJBQXFCLDZEQUFNO0FBQzNCLHNCQUFzQiw2REFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFNLFVBQVUsNkRBQU0sZ0JBQWdCLDZEQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBTTs7Ozs7Ozs7Ozs7OztBQ2J2QjtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkIsRUFBRTtBQUN0RCx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNFO0FBQzJCO0FBQzdCO0FBQ2I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU0sTUFBTSw2REFBTSxlQUFlLDZEQUFNO0FBQy9DLDhCQUE4Qiw2REFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBTTtBQUM1Qiw2QkFBNkIsOENBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTSxZQUFZLDZEQUFNO0FBQ2hDLFFBQVEsOENBQUs7QUFDYixRQUFRLDhDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0Y7QUFDcUI7QUFDbEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2REFBTSxlQUFlLDZEQUFNO0FBQ3hELDZCQUE2Qiw2REFBTSxnQkFBZ0IsNkRBQU07QUFDekQ7QUFDQSxpQkFBaUIsNkRBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0NBQU0seUJBQXlCLDZEQUFNLGFBQWEsNkRBQU07QUFDcEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFNLGdDQUFnQyw2REFBTSxpQkFBaUIsNkRBQU07QUFDL0UsWUFBWSwrQ0FBTSxrQ0FBa0MsNkRBQU0saUJBQWlCLDZEQUFNO0FBQ2pGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS50c1wiKTtcbiIsImltcG9ydCBDYW52YXMgZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IENPTkZJRy5CT0FSRF9XSURUSDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IENPTkZJRy5CT0FSRF9IRUlHSFQ7XHJcbiAgICAgICAgLy8gc2V0dXAgZ3JpZFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGRyYXcoKSB7XHJcbiAgICAgICAgQ2FudmFzLmZpbGxSZWN0KENPTkZJRy5CT0FSRF9TVEFSVF9YLCBDT05GSUcuQk9BUkRfU1RBUlRfWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuYmdDb2xvdXIpO1xyXG4gICAgICAgIC8vIGRyYXcgZ3JpZFxyXG4gICAgfVxyXG59XHJcbkJvYXJkLmJnQ29sb3VyID0gQ09ORklHLkJPQVJEX0JHX0NPTE9SO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xyXG4gICAgc3RhdGljIGluaXQod2lkdGgsIGhlaWdodCwgY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbGxDYW52YXMoY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWxsUmVjdCh4LCB5LCB3LCBoLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc3Ryb2tlUmVjdCh4LCB5LCB3LCBoLCBsaW5lV2lkdGgsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjbGVhclJlY3QoeCwgeSwgdywgaCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENPTkZJRyA9IHtcclxuICAgIFVQREFURV9JTlRFUlZBTDogMTAwMCxcclxuICAgIENBTlZBU19IRUlHSFQ6IDg0MCxcclxuICAgIENBTlZBU19XSURUSDogNjQwLFxyXG4gICAgQ0FOVkFTX0JHX0NPTE9SOiAnIzU1NTU1NScsXHJcbiAgICBCT0FSRF9CR19DT0xPUjogJyMwMDAwMDAnLFxyXG4gICAgLy8gQm9hcmQvdGlsZSBzaXplc1xyXG4gICAgQk9BUkRfU1RBUlRfWDogMjAsXHJcbiAgICBCT0FSRF9TVEFSVF9ZOiAyMCxcclxuICAgIFRJTEVfV0lEVEg6IDQwLFxyXG4gICAgVElMRV9IRUlHSFQ6IDQwLFxyXG4gICAgZ2V0IEJPQVJEX1dJRFRIKCkgeyByZXR1cm4gdGhpcy5USUxFX1dJRFRIICogMTA7IH0sXHJcbiAgICBnZXQgQk9BUkRfSEVJR0hUKCkgeyByZXR1cm4gdGhpcy5USUxFX0hFSUdIVCAqIDIwOyB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBTSEFQRVMgPSB7XHJcbiAgICBpOiB7XHJcbiAgICAgICAgZGlyczogWzB4MEYwMCwgMHgyMjIyLCAweDAwRjAsIDB4NDQ0NF0sXHJcbiAgICAgICAgY29sb3I6ICdjeWFuJ1xyXG4gICAgfSxcclxuICAgIGo6IHtcclxuICAgICAgICBkaXJzOiBbMHg0NEMwLCAweDhFMDAsIDB4NjQ0MCwgMHgwRTIwXSxcclxuICAgICAgICBjb2xvcjogJ2JsdWUnXHJcbiAgICB9LFxyXG4gICAgbDoge1xyXG4gICAgICAgIGRpcnM6IFsweDQ0NjAsIDB4MEU4MCwgMHhDNDQwLCAweDJFMDBdLFxyXG4gICAgICAgIGNvbG9yOiAnb3JhbmdlJ1xyXG4gICAgfSxcclxuICAgIG86IHtcclxuICAgICAgICBkaXJzOiBbMHhDQzAwLCAweENDMDAsIDB4Q0MwMCwgMHhDQzAwXSxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdydcclxuICAgIH0sXHJcbiAgICBzOiB7XHJcbiAgICAgICAgZGlyczogWzB4MDZDMCwgMHg4QzQwLCAweDZDMDAsIDB4NDYyMF0sXHJcbiAgICAgICAgY29sb3I6ICdncmVlbidcclxuICAgIH0sXHJcbiAgICB0OiB7XHJcbiAgICAgICAgZGlyczogWzB4MEU0MCwgMHg0QzQwLCAweDRFMDAsIDB4NDY0MF0sXHJcbiAgICAgICAgY29sb3I6ICdwdXJwbGUnXHJcbiAgICB9LFxyXG4gICAgejoge1xyXG4gICAgICAgIGRpcnM6IFsweDBDNjAsIDB4NEM4MCwgMHhDNjAwLCAweDI2NDBdLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcclxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHsgQ09ORklHLCBTSEFQRVMgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmNvbmZpZyc7XHJcbmltcG9ydCBTaGFwZSBmcm9tICcuL3NoYXBlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVMb29wID0gKHRGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHN0b3AgdGhlIGdhbWUgYXQgYW55IHBvaW50IHdpdGg6XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShHYW1lLnN0b3BNYWluKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wTWFpbiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRGcmFtZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgQ2FudmFzLmluaXQoQ09ORklHLkNBTlZBU19XSURUSCwgQ09ORklHLkNBTlZBU19IRUlHSFQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNhbnZhc1wiKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IENPTkZJRy5VUERBVEVfSU5URVJWQUw7XHJcbiAgICAgICAgdGhpcy5yZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVSYW5kb21TaGFwZSgpIHtcclxuICAgICAgICAvLyBUT0RPOiBNb3ZlIHRoaXMgZnVuY3Rpb24gYW5kIGNyZWF0ZSByYW5kb21uZXNzXHJcbiAgICAgICAgY29uc3Qgc2hhcGUgPSBTSEFQRVMuaTtcclxuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IG5ldyBTaGFwZShzaGFwZS5kaXJzLCBzaGFwZS5jb2xvciwgMCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1NoYXBlO1xyXG4gICAgfVxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgQ2FudmFzLmZpbGxDYW52YXMoQ09ORklHLkNBTlZBU19CR19DT0xPUik7XHJcbiAgICAgICAgQm9hcmQuaW5pdCgpO1xyXG4gICAgICAgIEJvYXJkLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZSA9IHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNoYXBlLmRyYXdTaGFwZSgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3Aoc3RhcnRUaW1lKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0RnJhbWUpIHtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0RnJhbWUgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0RnJhbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiB0aGlzLnVwZGF0ZUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoYXBlLmxvd2VyU2hhcGUoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG47XHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuICAgIGdhbWUuaW5pdCgpO1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcclxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5jb25maWcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXJzLCBjb2xvciwgY3VycmVudERpcikge1xyXG4gICAgICAgIHRoaXMueU9mZnNldCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJzID0gZGlycztcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyID0gdGhpcy5kaXJzW2N1cnJlbnREaXJdO1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlWGFuZFkoY29sLCByb3cpIHtcclxuICAgICAgICBsZXQgeCA9ICgoY29sICsgMSkgKiBDT05GSUcuVElMRV9XSURUSCkgLSBDT05GSUcuQk9BUkRfU1RBUlRfWDtcclxuICAgICAgICBsZXQgeSA9ICgocm93ICsgMSkgKiBDT05GSUcuVElMRV9IRUlHSFQpIC0gQ09ORklHLkJPQVJEX1NUQVJUX1k7XHJcbiAgICAgICAgaWYgKHRoaXMueU9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgeSArPSBDT05GSUcuVElMRV9IRUlHSFQgKiB0aGlzLnlPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgIHlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbWFwU2hhcGVNYXRyaXgoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgcm93ID0gMCwgY29sID0gMDtcclxuICAgICAgICBmb3IgKGxldCBiaXQgPSAweDgwMDA7IGJpdCA+IDA7IGJpdCA9IGJpdCA+PiAxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXIgJiBiaXQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKytjb2wgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbCA9IDA7XHJcbiAgICAgICAgICAgICAgICArK3JvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFyU2hhcGUoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBTaGFwZU1hdHJpeCgoY29sLCByb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5jYWxjdWxhdGVYYW5kWShjb2wsIHJvdyk7XHJcbiAgICAgICAgICAgIENhbnZhcy5jbGVhclJlY3QocG9zLngsIHBvcy55LCBDT05GSUcuVElMRV9XSURUSCwgQ09ORklHLlRJTEVfSEVJR0hUKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRyYXdTaGFwZSgpIHtcclxuICAgICAgICB0aGlzLm1hcFNoYXBlTWF0cml4KChjb2wsIHJvdykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmNhbGN1bGF0ZVhhbmRZKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgLy8gVE9ETyB3b3JrIG91dCBpbm5lciBzdHJva2VcclxuICAgICAgICAgICAgQ2FudmFzLmZpbGxSZWN0KHBvcy54ICsgMywgcG9zLnkgKyAzLCBDT05GSUcuVElMRV9XSURUSCAtIDYsIENPTkZJRy5USUxFX0hFSUdIVCAtIDYsIHRoaXMuY29sb3IpO1xyXG4gICAgICAgICAgICBDYW52YXMuc3Ryb2tlUmVjdChwb3MueCArIDMsIHBvcy55ICsgMywgQ09ORklHLlRJTEVfV0lEVEggLSA2LCBDT05GSUcuVElMRV9IRUlHSFQgLSA2LCA2LCAncmVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb3dlclNoYXBlKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTaGFwZSgpO1xyXG4gICAgICAgIEJvYXJkLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnlPZmZzZXQgKz0gMTtcclxuICAgICAgICB0aGlzLmRyYXdTaGFwZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=