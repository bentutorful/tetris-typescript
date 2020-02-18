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
    static fillRect(x, y, w, h) {
        this.context.fillStyle = 'red';
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

/***/ "./src/game.config.ts":
/*!****************************!*\
  !*** ./src/game.config.ts ***!
  \****************************/
/*! exports provided: CONFIG, SHAPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
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
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    J: [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ],
    O: [
        [1, 1],
        [1, 1],
    ],
    S: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    Z: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    I: [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ]
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



class Game {
    constructor() {
        this.updateInterval = _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].UPDATE_INTERVAL;
        this.lastTime = 0;
        this.currentTime = 0;
        this.eventHandler = new _EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.player = {
            pos: { x: 3, y: 0 }
        };
        this.gameLoop = (tFrame) => {
            const stopMain = window.requestAnimationFrame(this.gameLoop);
            this.update(tFrame);
        };
    }
    generateRandomShape() {
        // TODO: possibly change random algorithm
        const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
        const next = pieces[Math.floor(Math.random() * (pieces.length - 0)) + 0];
        this.player.matrix = _game_config__WEBPACK_IMPORTED_MODULE_0__["SHAPES"][next];
    }
    createBoardMatrix(w, h) {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        this.boardMatrix = matrix;
    }
    drawMatrix(matrix, offset) {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fillRect((x + offset.x) * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, (y + offset.y) * _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_WIDTH, _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].TILE_HEIGHT);
                }
            });
        });
    }
    draw() {
        _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fillCanvas(_game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].BOARD_BG_COLOR);
        this.drawMatrix(this.boardMatrix, { x: 0, y: 0 });
        this.drawMatrix(this.player.matrix, this.player.pos);
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
    playerDrop() {
        this.player.pos.y++;
        if (this.collide()) {
            this.player.pos.y--;
            this.mergeShapeToBoard();
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
            this.playerDrop();
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
        this.createBoardMatrix(10, 20);
        this.playerReset();
        const startTime = window.performance.now();
        this.gameLoop(startTime);
    }
    update(tFrame) {
        this.handleInput();
        const deltaTime = tFrame - this.lastTime;
        this.lastTime = tFrame;
        this.currentTime += deltaTime;
        if (this.currentTime > _game_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].UPDATE_INTERVAL) {
            this.playerDrop();
        }
        this.draw();
        this.eventHandler.reset();
    }
}
;
(() => {
    const game = new Game();
    game.init();
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxxREFBcUQsc0JBQXNCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QixFQUFFO0FBQ3RELHdCQUF3Qiw4QkFBOEIsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNqQjtBQUNZO0FBQzNCO0FBQ2Y7QUFDQSw4QkFBOEIsbURBQU07QUFDcEM7QUFDQTtBQUNBLGdDQUFnQyxxREFBWTtBQUM1QztBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtREFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQU0sMkJBQTJCLG1EQUFNLDhCQUE4QixtREFBTSxjQUFjLG1EQUFNLGFBQWEsbURBQU07QUFDdEk7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLCtDQUFNLFlBQVksbURBQU07QUFDaEMsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtREFBTTtBQUMvQztBQUNBO0FBQ0EsOENBQThDLG1EQUFNO0FBQ3BEO0FBQ0E7QUFDQSw4Q0FBOEMsbURBQU07QUFDcEQ7QUFDQTtBQUNBLDhDQUE4QyxtREFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckMsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsK0NBQU0sTUFBTSxtREFBTSxjQUFjLG1EQUFNO0FBQzlDLFFBQVEsK0NBQU0sWUFBWSxtREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBzdGF0aWMgaW5pdCh3aWR0aCwgaGVpZ2h0LCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsbENhbnZhcyhjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbGxSZWN0KHgsIHksIHcsIGgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleURvd24gPSB7fTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgdGhpcy5rZXlib2FyZERvd24oZSk7IH0pO1xyXG4gICAgfVxyXG4gICAga2V5Ym9hcmREb3duKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmtleURvd25bZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAga2V5UHJlc3NlZChrZXlDb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5RG93bltrZXlDb2RlXTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMua2V5RG93biA9IHt9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDT05GSUcgPSB7XHJcbiAgICBUSUxFX1dJRFRIOiA0MCxcclxuICAgIFRJTEVfSEVJR0hUOiA0MCxcclxuICAgIGdldCBCT0FSRF9XSURUSCgpIHsgcmV0dXJuIHRoaXMuVElMRV9XSURUSCAqIDEwOyB9LFxyXG4gICAgZ2V0IEJPQVJEX0hFSUdIVCgpIHsgcmV0dXJuIHRoaXMuVElMRV9IRUlHSFQgKiAyMDsgfSxcclxuICAgIEJPQVJEX0JHX0NPTE9SOiAnIzAwMDAwMCcsXHJcbiAgICBVUERBVEVfSU5URVJWQUw6IDEwMDAsXHJcbiAgICAvLyBrZXkgY29kZXNcclxuICAgIFVQX0tFWTogMzgsXHJcbiAgICBET1dOX0tFWTogNDAsXHJcbiAgICBMRUZUX0tFWTogMzcsXHJcbiAgICBSSUdIVF9LRVk6IDM5LFxyXG59O1xyXG5leHBvcnQgY29uc3QgU0hBUEVTID0ge1xyXG4gICAgVDogW1xyXG4gICAgICAgIFswLCAwLCAwXSxcclxuICAgICAgICBbMSwgMSwgMV0sXHJcbiAgICAgICAgWzAsIDEsIDBdXHJcbiAgICBdLFxyXG4gICAgTDogW1xyXG4gICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgWzAsIDEsIDFdXHJcbiAgICBdLFxyXG4gICAgSjogW1xyXG4gICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgWzEsIDEsIDBdXHJcbiAgICBdLFxyXG4gICAgTzogW1xyXG4gICAgICAgIFsxLCAxXSxcclxuICAgICAgICBbMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgUzogW1xyXG4gICAgICAgIFswLCAxLCAxXSxcclxuICAgICAgICBbMSwgMSwgMF0sXHJcbiAgICAgICAgWzAsIDAsIDBdXHJcbiAgICBdLFxyXG4gICAgWjogW1xyXG4gICAgICAgIFsxLCAxLCAwXSxcclxuICAgICAgICBbMCwgMSwgMV0sXHJcbiAgICAgICAgWzAsIDAsIDBdXHJcbiAgICBdLFxyXG4gICAgSTogW1xyXG4gICAgICAgIFswLCAxLCAwLCAwXSxcclxuICAgICAgICBbMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgIFswLCAxLCAwLCAwXVxyXG4gICAgXVxyXG59O1xyXG4iLCJpbXBvcnQgeyBDT05GSUcsIFNIQVBFUyB9IGZyb20gJy4vZ2FtZS5jb25maWcnO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IENPTkZJRy5VUERBVEVfSU5URVJWQUw7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB7XHJcbiAgICAgICAgICAgIHBvczogeyB4OiAzLCB5OiAwIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3AgPSAodEZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3BNYWluID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUodEZyYW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVSYW5kb21TaGFwZSgpIHtcclxuICAgICAgICAvLyBUT0RPOiBwb3NzaWJseSBjaGFuZ2UgcmFuZG9tIGFsZ29yaXRobVxyXG4gICAgICAgIGNvbnN0IHBpZWNlcyA9IFsnSScsICdKJywgJ0wnLCAnTycsICdTJywgJ1QnLCAnWiddO1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSBwaWVjZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBpZWNlcy5sZW5ndGggLSAwKSkgKyAwXTtcclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXggPSBTSEFQRVNbbmV4dF07XHJcbiAgICB9XHJcbiAgICBjcmVhdGVCb2FyZE1hdHJpeCh3LCBoKSB7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gW107XHJcbiAgICAgICAgd2hpbGUgKGgtLSkge1xyXG4gICAgICAgICAgICBtYXRyaXgucHVzaChuZXcgQXJyYXkodykuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9hcmRNYXRyaXggPSBtYXRyaXg7XHJcbiAgICB9XHJcbiAgICBkcmF3TWF0cml4KG1hdHJpeCwgb2Zmc2V0KSB7XHJcbiAgICAgICAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENhbnZhcy5maWxsUmVjdCgoeCArIG9mZnNldC54KSAqIENPTkZJRy5USUxFX1dJRFRILCAoeSArIG9mZnNldC55KSAqIENPTkZJRy5USUxFX0hFSUdIVCwgQ09ORklHLlRJTEVfV0lEVEgsIENPTkZJRy5USUxFX0hFSUdIVCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBDYW52YXMuZmlsbENhbnZhcyhDT05GSUcuQk9BUkRfQkdfQ09MT1IpO1xyXG4gICAgICAgIHRoaXMuZHJhd01hdHJpeCh0aGlzLmJvYXJkTWF0cml4LCB7IHg6IDAsIHk6IDAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3TWF0cml4KHRoaXMucGxheWVyLm1hdHJpeCwgdGhpcy5wbGF5ZXIucG9zKTtcclxuICAgIH1cclxuICAgIHBsYXllclJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb21TaGFwZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy54ID0gTWF0aC5mbG9vcih0aGlzLmJvYXJkTWF0cml4WzBdLmxlbmd0aCAvIDIpIC1cclxuICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLnBsYXllci5tYXRyaXhbMF0ubGVuZ3RoIC8gMik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnkgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPIGN1cnJlbnRseSBqdXN0IGNsZWFycyB0aGUgYm9hcmQsIGJ1dCB3aWxsXHJcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gZW5kIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRNYXRyaXguZm9yRWFjaCgocm93KSA9PiByb3cuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheWVyRHJvcCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3MueSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueS0tO1xyXG4gICAgICAgICAgICB0aGlzLm1lcmdlU2hhcGVUb0JvYXJkKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyUmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXJNb3ZlKGRpcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvcy54ICs9IGRpcjtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnggLT0gZGlyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJvdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGxheWVyLm1hdHJpeC5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHk7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1hdHJpeFt4XVt5XSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tYXRyaXhbeV1beF1cclxuICAgICAgICAgICAgICAgIF0gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubWF0cml4W3ldW3hdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1hdHJpeFt4XVt5XVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXguZm9yRWFjaCgocm93KSA9PiByb3cucmV2ZXJzZSgpKTtcclxuICAgIH1cclxuICAgIHJvdGF0ZVBsYXllcigpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMTtcclxuICAgICAgICB0aGlzLnJvdGF0ZSgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmNvbGxpZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wb3MueCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IC0ob2Zmc2V0ICsgKG9mZnNldCA+IDAgPyAxIDogLTEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVJbnB1dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuRE9XTl9LRVkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyRHJvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50SGFuZGxlci5rZXlQcmVzc2VkKENPTkZJRy5MRUZUX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudEhhbmRsZXIua2V5UHJlc3NlZChDT05GSUcuUklHSFRfS0VZKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXZlbnRIYW5kbGVyLmtleVByZXNzZWQoQ09ORklHLlVQX0tFWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb2xsaWRlKCkge1xyXG4gICAgICAgIGNvbnN0IFttLCBvXSA9IFt0aGlzLnBsYXllci5tYXRyaXgsIHRoaXMucGxheWVyLnBvc107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbVt5XS5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1beV1beF0gIT09IDAgJiYgKHRoaXMuYm9hcmRNYXRyaXhbeSArIG8ueV0gJiYgdGhpcy5ib2FyZE1hdHJpeFt5ICsgby55XVt4ICsgby54XSkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBtZXJnZVNoYXBlVG9Cb2FyZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5tYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hdHJpeFt5ICsgdGhpcy5wbGF5ZXIucG9zLnldW3ggKyB0aGlzLnBsYXllci5wb3MueF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIENhbnZhcy5pbml0KENPTkZJRy5CT0FSRF9XSURUSCwgQ09ORklHLkJPQVJEX0hFSUdIVCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lQ2FudmFzXCIpKTtcclxuICAgICAgICBDYW52YXMuZmlsbENhbnZhcyhDT05GSUcuQk9BUkRfQkdfQ09MT1IpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQm9hcmRNYXRyaXgoMTAsIDIwKTtcclxuICAgICAgICB0aGlzLnBsYXllclJlc2V0KCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3Aoc3RhcnRUaW1lKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0RnJhbWUpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUlucHV0KCk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdEZyYW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdEZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gQ09ORklHLlVQREFURV9JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckRyb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIucmVzZXQoKTtcclxuICAgIH1cclxufVxyXG47XHJcbigoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuICAgIGdhbWUuaW5pdCgpO1xyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9