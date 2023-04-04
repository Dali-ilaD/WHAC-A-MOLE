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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.hiddenTextInput = '';\n  }\n  static VERT = 1000;\n  static HORI = 1000;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsSUFBSSxDQUFDO0VBRVBDLFdBQVdBLENBQUEsRUFBRTtJQUNULElBQUksQ0FBQ0MsZUFBZSxHQUFHLEVBQUU7RUFDN0I7RUFFQSxPQUFPQyxJQUFJLEdBQUcsSUFBSTtFQUNsQixPQUFPQyxJQUFJLEdBQUcsSUFBSTtBQUd0QjtBQUdBLCtEQUFlSixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5oaWRkZW5UZXh0SW5wdXQgPSAnJztcbiAgICB9XG5cbiAgICBzdGF0aWMgVkVSVCA9IDEwMDA7XG4gICAgc3RhdGljIEhPUkkgPSAxMDAwO1xuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJoaWRkZW5UZXh0SW5wdXQiLCJWRVJUIiwiSE9SSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"canvas\");\n  canvasEl.width = _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HORI;\n  canvasEl.height = _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].VERT;\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  //   new GameView(game, ctx).start();\n  const img = new Image();\n  img.src = '/Users/dali/Desktop/App Academy Projects/WHAC-A-MOLE/grassygrass.png';\n  img.onload = () => {\n    ctx.drawImage(img, 0, 0);\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTZCO0FBQ1M7QUFFdENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNsREQsUUFBUSxDQUFDRSxLQUFLLEdBQUdOLHFEQUFTO0VBQzFCSSxRQUFRLENBQUNJLE1BQU0sR0FBR1IscURBQVM7RUFFM0IsTUFBTVUsR0FBRyxHQUFHTixRQUFRLENBQUNPLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDckMsTUFBTUMsSUFBSSxHQUFHLElBQUlaLGdEQUFJLEVBQUU7RUFDekI7RUFDSSxNQUFNYSxHQUFHLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0VBQ3ZCRCxHQUFHLENBQUNFLEdBQUcsR0FBRyxzRUFBc0U7RUFDaEZGLEdBQUcsQ0FBQ0csTUFBTSxHQUFHLE1BQU07SUFDZk4sR0FBRyxDQUFDTyxTQUFTLENBQUNKLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0VBQzFCLENBQUM7QUFFTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFjLWEtbW9sZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9nYW1lX3ZpZXcuanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjYW52YXNFbC53aWR0aCA9IEdhbWUuSE9SSTtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gR2FtZS5WRVJUO1xuICBcbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbi8vICAgbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSAnL1VzZXJzL2RhbGkvRGVza3RvcC9BcHAgQWNhZGVteSBQcm9qZWN0cy9XSEFDLUEtTU9MRS9ncmFzc3lncmFzcy5wbmcnO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLDAsMClcbiAgICB9XG4gIFxufSk7XG4iXSwibmFtZXMiOlsiR2FtZSIsIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiSE9SSSIsImhlaWdodCIsIlZFUlQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZSIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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