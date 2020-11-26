module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/App.js":
/*!***************************!*\
  !*** ./Components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown-circle-timer */ "react-countdown-circle-timer");
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.module.css */ "./Components/App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Master\\Desktop\\CD\\Components\\App.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "time-wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "time",
      children: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: dimension
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

const getTimeSeconds = time => minuteSeconds - time / 1000 | 0;

const getTimeMinutes = time => time % hourSeconds / minuteSeconds | 0;

const getTimeHours = time => time % daySeconds / hourSeconds | 0;

const getTimeDays = time => time / daySeconds | 0;

function App() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds

  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Almost there.. Stay Tuned"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], _objectSpread(_objectSpread({}, timerProps), {}, {
        colors: [["#7E2E84"]],
        duration: daysDuration,
        initialRemainingTime: remainingTime,
        children: ({
          elapsedTime
        }) => renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], _objectSpread(_objectSpread({}, timerProps), {}, {
        colors: [["#D14081"]],
        duration: daySeconds,
        initialRemainingTime: remainingTime % daySeconds,
        onComplete: totalElapsedTime => [remainingTime - totalElapsedTime > hourSeconds],
        children: ({
          elapsedTime
        }) => renderTime("hours", getTimeHours(daySeconds - elapsedTime / 1000))
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], _objectSpread(_objectSpread({}, timerProps), {}, {
        colors: [["#EF798A"]],
        duration: hourSeconds,
        initialRemainingTime: remainingTime % 500000,
        onComplete: totalElapsedTime => [remainingTime - totalElapsedTime > minuteSeconds],
        children: ({
          elapsedTime
        }) => renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime / 1000))
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], _objectSpread(_objectSpread({}, timerProps), {}, {
        colors: [["#218380"]],
        duration: minuteSeconds,
        initialRemainingTime: remainingTime % minuteSeconds,
        onComplete: totalElapsedTime => [remainingTime - totalElapsedTime > 0],
        children: ({
          elapsedTime
        }) => renderTime("seconds", getTimeSeconds(elapsedTime))
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./Components/App.module.css":
/*!***********************************!*\
  !*** ./Components/App.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/App */ "./Components/App.js");


var _jsxFileName = "C:\\Users\\Master\\Desktop\\CD\\pages\\index.js";


function index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown-circle-timer":
/*!***********************************************!*\
  !*** external "react-countdown-circle-timer" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown-circle-timer");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudGRvd24tY2lyY2xlLXRpbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsibWludXRlU2Vjb25kcyIsImhvdXJTZWNvbmRzIiwiZGF5U2Vjb25kcyIsInRpbWVyUHJvcHMiLCJpc1BsYXlpbmciLCJzaXplIiwic3Ryb2tlV2lkdGgiLCJyZW5kZXJUaW1lIiwiZGltZW5zaW9uIiwidGltZSIsImdldFRpbWVTZWNvbmRzIiwiZ2V0VGltZU1pbnV0ZXMiLCJnZXRUaW1lSG91cnMiLCJnZXRUaW1lRGF5cyIsIkFwcCIsInN0cmF0VGltZSIsIkRhdGUiLCJub3ciLCJlbmRUaW1lIiwicmVtYWluaW5nVGltZSIsImRheXMiLCJNYXRoIiwiY2VpbCIsImRheXNEdXJhdGlvbiIsImVsYXBzZWRUaW1lIiwidG90YWxFbGFwc2VkVGltZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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RyxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREgsbUJBREo7QUFLSDs7QUFFY0Esb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNWQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvdW50ZG93bkNpcmNsZVRpbWVyIH0gZnJvbSBcInJlYWN0LWNvdW50ZG93bi1jaXJjbGUtdGltZXJcIjtcclxuaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgbWludXRlU2Vjb25kcyA9IDYwO1xyXG5jb25zdCBob3VyU2Vjb25kcyA9IDM2MDA7XHJcbmNvbnN0IGRheVNlY29uZHMgPSA4NjQwMDtcclxuXHJcbmNvbnN0IHRpbWVyUHJvcHMgPSB7XHJcbiAgaXNQbGF5aW5nOiB0cnVlLFxyXG4gIHNpemU6IDEyMCxcclxuICBzdHJva2VXaWR0aDogNixcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlclRpbWUgPSAoZGltZW5zaW9uLCB0aW1lKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPnt0aW1lfTwvZGl2PlxyXG4gICAgICA8ZGl2PntkaW1lbnNpb259PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZVNlY29uZHMgPSAodGltZSkgPT4gKG1pbnV0ZVNlY29uZHMgLSB0aW1lIC8gMTAwMCkgfCAwO1xyXG5jb25zdCBnZXRUaW1lTWludXRlcyA9ICh0aW1lKSA9PiAoKHRpbWUgJSBob3VyU2Vjb25kcykgLyBtaW51dGVTZWNvbmRzKSB8IDA7XHJcbmNvbnN0IGdldFRpbWVIb3VycyA9ICh0aW1lKSA9PiAoKHRpbWUgJSBkYXlTZWNvbmRzKSAvIGhvdXJTZWNvbmRzKSB8IDA7XHJcbmNvbnN0IGdldFRpbWVEYXlzID0gKHRpbWUpID0+ICh0aW1lIC8gZGF5U2Vjb25kcykgfCAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHN0cmF0VGltZSA9IERhdGUubm93KCkgLyAxMDAwOyAvLyB1c2UgVU5JWCB0aW1lc3RhbXAgaW4gc2Vjb25kc1xyXG4gIGNvbnN0IGVuZFRpbWUgPSBzdHJhdFRpbWUgKyAyNDMyNDg7IC8vIHVzZSBVTklYIHRpbWVzdGFtcCBpbiBzZWNvbmRzXHJcblxyXG4gIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBlbmRUaW1lIC0gc3RyYXRUaW1lO1xyXG4gIGNvbnN0IGRheXMgPSBNYXRoLmNlaWwocmVtYWluaW5nVGltZSAvIGRheVNlY29uZHMpO1xyXG4gIGNvbnN0IGRheXNEdXJhdGlvbiA9IGRheXMgKiBkYXlTZWNvbmRzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICAgIDxoMT5BbG1vc3QgdGhlcmUuLiBTdGF5IFR1bmVkPC9oMT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8Q291bnRkb3duQ2lyY2xlVGltZXJcclxuICAgICAgICB7Li4udGltZXJQcm9wc31cclxuICAgICAgICBjb2xvcnM9e1tbXCIjN0UyRTg0XCJdXX1cclxuICAgICAgICBkdXJhdGlvbj17ZGF5c0R1cmF0aW9ufVxyXG4gICAgICAgIGluaXRpYWxSZW1haW5pbmdUaW1lPXtyZW1haW5pbmdUaW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGVsYXBzZWRUaW1lIH0pID0+XHJcbiAgICAgICAgICByZW5kZXJUaW1lKFwiZGF5c1wiLCBnZXRUaW1lRGF5cyhkYXlzRHVyYXRpb24gLSBlbGFwc2VkVGltZSAvIDEwMDApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Db3VudGRvd25DaXJjbGVUaW1lcj5cclxuICAgICAgPENvdW50ZG93bkNpcmNsZVRpbWVyXHJcbiAgICAgICAgey4uLnRpbWVyUHJvcHN9XHJcbiAgICAgICAgY29sb3JzPXtbW1wiI0QxNDA4MVwiXV19XHJcbiAgICAgICAgZHVyYXRpb249e2RheVNlY29uZHN9XHJcbiAgICAgICAgaW5pdGlhbFJlbWFpbmluZ1RpbWU9e3JlbWFpbmluZ1RpbWUgJSBkYXlTZWNvbmRzfVxyXG4gICAgICAgIG9uQ29tcGxldGU9eyh0b3RhbEVsYXBzZWRUaW1lKSA9PiBbXHJcbiAgICAgICAgICByZW1haW5pbmdUaW1lIC0gdG90YWxFbGFwc2VkVGltZSA+IGhvdXJTZWNvbmRzLFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgZWxhcHNlZFRpbWUgfSkgPT5cclxuICAgICAgICAgIHJlbmRlclRpbWUoXCJob3Vyc1wiLCBnZXRUaW1lSG91cnMoZGF5U2Vjb25kcyAtIGVsYXBzZWRUaW1lIC8gMTAwMCkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvdW50ZG93bkNpcmNsZVRpbWVyPlxyXG4gICAgICA8Q291bnRkb3duQ2lyY2xlVGltZXJcclxuICAgICAgICB7Li4udGltZXJQcm9wc31cclxuICAgICAgICBjb2xvcnM9e1tbXCIjRUY3OThBXCJdXX1cclxuICAgICAgICBkdXJhdGlvbj17aG91clNlY29uZHN9XHJcbiAgICAgICAgaW5pdGlhbFJlbWFpbmluZ1RpbWU9e3JlbWFpbmluZ1RpbWUgJSA1MDAwMDB9XHJcbiAgICAgICAgb25Db21wbGV0ZT17KHRvdGFsRWxhcHNlZFRpbWUpID0+IFtcclxuICAgICAgICAgIHJlbWFpbmluZ1RpbWUgLSB0b3RhbEVsYXBzZWRUaW1lID4gbWludXRlU2Vjb25kcyxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGVsYXBzZWRUaW1lIH0pID0+XHJcbiAgICAgICAgICByZW5kZXJUaW1lKFxyXG4gICAgICAgICAgICBcIm1pbnV0ZXNcIixcclxuICAgICAgICAgICAgZ2V0VGltZU1pbnV0ZXMoaG91clNlY29uZHMgLSBlbGFwc2VkVGltZSAvIDEwMDApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvdW50ZG93bkNpcmNsZVRpbWVyPlxyXG4gICAgICA8Q291bnRkb3duQ2lyY2xlVGltZXJcclxuICAgICAgICB7Li4udGltZXJQcm9wc31cclxuICAgICAgICBjb2xvcnM9e1tbXCIjMjE4MzgwXCJdXX1cclxuICAgICAgICBkdXJhdGlvbj17bWludXRlU2Vjb25kc31cclxuICAgICAgICBpbml0aWFsUmVtYWluaW5nVGltZT17cmVtYWluaW5nVGltZSAlIG1pbnV0ZVNlY29uZHN9XHJcbiAgICAgICAgb25Db21wbGV0ZT17KHRvdGFsRWxhcHNlZFRpbWUpID0+IFtcclxuICAgICAgICAgIHJlbWFpbmluZ1RpbWUgLSB0b3RhbEVsYXBzZWRUaW1lID4gMCxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGVsYXBzZWRUaW1lIH0pID0+XHJcbiAgICAgICAgICByZW5kZXJUaW1lKFwic2Vjb25kc1wiLCBnZXRUaW1lU2Vjb25kcyhlbGFwc2VkVGltZSkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvdW50ZG93bkNpcmNsZVRpbWVyPlxyXG4gICAgPC9kaXY+XHJcbjwvPiAgKTtcclxufVxyXG4iLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9Db21wb25lbnRzL0FwcFwiO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgPEFwcC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50ZG93bi1jaXJjbGUtdGltZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=