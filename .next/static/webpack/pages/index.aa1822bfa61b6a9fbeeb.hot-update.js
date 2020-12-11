webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/App.js":
/*!***************************!*\
  !*** ./Components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.css */ "./Components/App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Portfolio\\Launch site\\Components\\App.js",
    _s = $RefreshSig$();





function App() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function updateTimer() {
      future = Date.parse("sept 2, 2020 11:30:00");
      now = new Date();
      diff = future - now;
      days = Math.floor(diff / (1000 * 60 * 60 * 24));
      hours = Math.floor(diff / (1000 * 60 * 60));
      mins = Math.floor(diff / (1000 * 60));
      secs = Math.floor(diff / 1000);
      d = days;
      h = hours - days * 24;
      m = mins - hours * 60;
      s = secs - mins * 60;
      document.getElementById("timer").innerHTML = '<div>' + d + '<span>days</span></div>' + '<div>' + h + '<span>hours</span></div>' + '<div>' + m + '<span>minutes</span></div>' + '<div>' + s + '<span>seconds</span></div>';
    }

    setInterval('updateTimer()', 1000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "timer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "days"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "hours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "minutes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "seconds"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(App, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0IiwidXBkYXRlVGltZXIiLCJmdXR1cmUiLCJEYXRlIiwicGFyc2UiLCJub3ciLCJkaWZmIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWlucyIsInNlY3MiLCJkIiwiaCIsIm0iLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQ2JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNDLFdBQVQsR0FBdUI7QUFDckJDLFlBQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsdUJBQVgsQ0FBVDtBQUNBQyxTQUFHLEdBQUcsSUFBSUYsSUFBSixFQUFOO0FBQ0FHLFVBQUksR0FBR0osTUFBTSxHQUFHRyxHQUFoQjtBQUVBRSxVQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFmLENBQVA7QUFDQUksV0FBSyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBSSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQWYsQ0FBUjtBQUNBSyxVQUFJLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLElBQUksT0FBTyxFQUFYLENBQWYsQ0FBUDtBQUNBTSxVQUFJLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLEdBQUcsSUFBbEIsQ0FBUDtBQUVBTyxPQUFDLEdBQUdOLElBQUo7QUFDQU8sT0FBQyxHQUFHSixLQUFLLEdBQUdILElBQUksR0FBRyxFQUFuQjtBQUNBUSxPQUFDLEdBQUdKLElBQUksR0FBR0QsS0FBSyxHQUFHLEVBQW5CO0FBQ0FNLE9BQUMsR0FBR0osSUFBSSxHQUFHRCxJQUFJLEdBQUcsRUFBbEI7QUFFQU0sY0FBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQ0tDLFNBREwsR0FFSSxVQUFVTixDQUFWLEdBQWMseUJBQWQsR0FDQSxPQURBLEdBQ1VDLENBRFYsR0FDYywwQkFEZCxHQUVBLE9BRkEsR0FFVUMsQ0FGVixHQUVjLDRCQUZkLEdBR0EsT0FIQSxHQUdVQyxDQUhWLEdBR2MsNEJBTGxCO0FBTUg7O0FBQ0RJLGVBQVcsQ0FBQyxlQUFELEVBQWtCLElBQWxCLENBQVg7QUFDQyxHQXhCUSxFQXdCTixFQXhCTSxDQUFUO0FBeUJBLHNCQUNFO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBQSw0QkFDRTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQWxDUXJCLEc7O0tBQUFBLEc7QUFvQ01BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhMTgyMmJmYTYxYjZhOWZiZWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL0FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7ICQsIGpRdWVyeSB9IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XHJcbiAgICAgIGZ1dHVyZSA9IERhdGUucGFyc2UoXCJzZXB0IDIsIDIwMjAgMTE6MzA6MDBcIik7XHJcbiAgICAgIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGRpZmYgPSBmdXR1cmUgLSBub3c7XHJcbiAgXHJcbiAgICAgIGRheXMgPSBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICBob3VycyA9IE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICBtaW5zID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICBzZWNzID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XHJcbiAgXHJcbiAgICAgIGQgPSBkYXlzO1xyXG4gICAgICBoID0gaG91cnMgLSBkYXlzICogMjQ7XHJcbiAgICAgIG0gPSBtaW5zIC0gaG91cnMgKiA2MDtcclxuICAgICAgcyA9IHNlY3MgLSBtaW5zICogNjA7XHJcbiAgXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXJcIilcclxuICAgICAgICAgIC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgJzxkaXY+JyArIGQgKyAnPHNwYW4+ZGF5czwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICc8ZGl2PicgKyBoICsgJzxzcGFuPmhvdXJzPC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgJzxkaXY+JyArIG0gKyAnPHNwYW4+bWludXRlczwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICc8ZGl2PicgKyBzICsgJzxzcGFuPnNlY29uZHM8L3NwYW4+PC9kaXY+JztcclxuICB9XHJcbiAgc2V0SW50ZXJ2YWwoJ3VwZGF0ZVRpbWVyKCknLCAxMDAwKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ0aW1lclwiPlxyXG4gICAgICA8ZGl2IGlkPVwiZGF5c1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaG91cnNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cIm1pbnV0ZXNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInNlY29uZHNcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==