/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.hiddenTextInput = '';\n    this.mole = '';\n    this.lives = 5;\n  }\n  static VERT = 1000;\n  static HORI = 1000;\n  generateRandomLetter() {\n    var letters = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"];\n    var letter = letters[Math.floor(Math.random() * letters.length)];\n    return letter;\n  }\n  makeMole(randomletter) {\n    const hole = document.getElementById(randomletter).firstElementChild;\n    hole.classList.add('pop_up_mole');\n    setTimeout(() => {\n      console.log(hole);\n      hole.classList.remove('pop_up_mole');\n      this.lives -= 1;\n    }, 2000);\n  }\n  whaccMole(key) {\n    const hole = document.getElementById(key).firstElementChild;\n    console.log(hole, key, hole.classList.contains('pop_up_mole'));\n    if (hole.classList.contains('pop_up_mole')) {\n      hole.classList.remove('pop_up_mole');\n      hole.classList.add('whacced_mole');\n      setTimeout(() => {\n        hole.classList.remove('whacced_mole');\n      }, 500);\n    }\n  }\n  start() {\n    const start = document.getElementById('startbutton');\n    start.addEventListener('click', () => {\n      setInterval(() => {\n        this.makeMole(this.generateRandomLetter());\n      }, 1000);\n      document.body.addEventListener('keydown', e => {\n        this.whaccMole(e.key);\n      });\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFFekIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0Y7QUFHSjtBQUtBLCtEQUFlM0IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3doYWMtYS1tb2xlLy4vc3JjL2dhbWUuanM/N2RlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5jbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaGlkZGVuVGV4dElucHV0ID0gJyc7XG4gICAgICAgIHRoaXMubW9sZSA9ICcnO1xuICAgICAgICB0aGlzLmxpdmVzID0gNTtcbiAgICB9XG5cbiAgICBzdGF0aWMgVkVSVCA9IDEwMDA7XG4gICAgc3RhdGljIEhPUkkgPSAxMDAwO1xuXG4gICAgZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKSB7XG4gICAgICAgIHZhciBsZXR0ZXJzID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwibVwiLCBcIm5cIiwgXCJvXCIsIFwicFwiLCBcInFcIiwgXCJyXCIsIFwic1wiLCBcInRcIiwgXCJ1XCIsIFwidlwiLCBcIndcIiwgXCJ4XCIsIFwieVwiLCBcInpcIl07XG4gICAgICAgIHZhciBsZXR0ZXIgPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldHRlcnMubGVuZ3RoKV07XG4gICAgICAgIHJldHVybiBsZXR0ZXJcbiAgICB9XG4gICAgIG1ha2VNb2xlKHJhbmRvbWxldHRlcikge1xuICAgICAgIFxuICAgICAgICBjb25zdCBob2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmFuZG9tbGV0dGVyKS5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICBcbiAgICAgICAgaG9sZS5jbGFzc0xpc3QuYWRkKCdwb3BfdXBfbW9sZScpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coaG9sZSlcbiAgICAgICAgICAgIGhvbGUuY2xhc3NMaXN0LnJlbW92ZSgncG9wX3VwX21vbGUnKSAgXG4gICAgICAgICAgICB0aGlzLmxpdmVzIC09IDE7XG4gICAgICAgIH0sIDIwMDApXG4gICAgICAgXG4gICAgfVxuXG4gICAgd2hhY2NNb2xlKGtleSl7XG4gICAgICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgICBjb25zdCBob2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KS5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgIGNvbnNvbGUubG9nKGhvbGUsIGtleSxob2xlLmNsYXNzTGlzdC5jb250YWlucygncG9wX3VwX21vbGUnKSlcblxuICAgICAgICAgIGlmKGhvbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3BfdXBfbW9sZScpKXtcbiAgICAgICAgICAgIGhvbGUuY2xhc3NMaXN0LnJlbW92ZSgncG9wX3VwX21vbGUnKVxuICAgICAgICAgICAgaG9sZS5jbGFzc0xpc3QuYWRkKCd3aGFjY2VkX21vbGUnKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7aG9sZS5jbGFzc0xpc3QucmVtb3ZlKCd3aGFjY2VkX21vbGUnKX0sIDUwMClcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0YnV0dG9uJylcbiAgICAgICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHt0aGlzLm1ha2VNb2xlKHRoaXMuZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKSl9LCAxMDAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLChlKSA9PntcbiAgICAgICAgICAgIHRoaXMud2hhY2NNb2xlKGUua2V5KVxuXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICB9XG5cbiAgICBcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwiaGlkZGVuVGV4dElucHV0IiwibW9sZSIsImxpdmVzIiwiVkVSVCIsIkhPUkkiLCJnZW5lcmF0ZVJhbmRvbUxldHRlciIsImxldHRlcnMiLCJsZXR0ZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJtYWtlTW9sZSIsInJhbmRvbWxldHRlciIsImhvbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsIndoYWNjTW9sZSIsImtleSIsImNvbnRhaW5zIiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJib2R5IiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZV92aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxRQUFRO0FBSWQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFjLWEtbW9sZS8uL3NyYy9nYW1lX3ZpZXcuanM/YTVmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lVmlld3tcblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldyJdLCJuYW1lcyI6WyJHYW1lVmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game_view.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  //   const canvasEl = document.getElementById(\"canvas\");\n  //   canvasEl.width = Game.HORI;\n  //   canvasEl.height = Game.VERT;\n\n  //   const ctx = canvasEl.getContext(\"2d\");\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  game.start();\n  //   new GameView(game, ctx).start();\n  // const img = new Image()\n  // img.src = '/Users/dali/Desktop/App Academy Projects/WHAC-A-MOLE/grassygrass.png';\n  // img.onload = () => {\n  //     ctx.drawImage(img,0,0)\n  // }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTZCO0FBQ1M7QUFHdENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNwRDtFQUNBO0VBQ0E7O0VBRUE7RUFDRSxNQUFNQyxJQUFJLEdBQUcsSUFBSUosZ0RBQUksRUFBRTtFQUN2QkksSUFBSSxDQUFDQyxLQUFLLEVBQUU7RUFDZDtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFHSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFjLWEtbW9sZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9nYW1lX3ZpZXcuanNcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4vLyAgIGNhbnZhc0VsLndpZHRoID0gR2FtZS5IT1JJO1xuLy8gICBjYW52YXNFbC5oZWlnaHQgPSBHYW1lLlZFUlQ7XG4gIFxuLy8gICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLnN0YXJ0KClcbi8vICAgbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcbiAgICAvLyBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIC8vIGltZy5zcmMgPSAnL1VzZXJzL2RhbGkvRGVza3RvcC9BcHAgQWNhZGVteSBQcm9qZWN0cy9XSEFDLUEtTU9MRS9ncmFzc3lncmFzcy5wbmcnO1xuICAgIC8vIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UoaW1nLDAsMClcbiAgICAvLyB9XG4gICAgXG4gIFxufSk7XG4iXSwibmFtZXMiOlsiR2FtZSIsIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFjLWEtbW9sZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;