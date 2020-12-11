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
    function makeTimer() {
      //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
      var endTime = new Date("29 April 2021 9:56:00 GMT+01:00");
      endTime = Date.parse(endTime) / 1000;
      var now = new Date();
      now = Date.parse(now) / 1000;
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

      if (hours < "10") {
        hours = "0" + hours;
      }

      if (minutes < "10") {
        minutes = "0" + minutes;
      }

      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      Object(jquery__WEBPACK_IMPORTED_MODULE_2__["$"])("#days").html(days + "<span>Days</span>");
      Object(jquery__WEBPACK_IMPORTED_MODULE_2__["$"])("#hours").html(hours + "<span>Hours</span>");
      Object(jquery__WEBPACK_IMPORTED_MODULE_2__["$"])("#minutes").html(minutes + "<span>Minutes</span>");
      Object(jquery__WEBPACK_IMPORTED_MODULE_2__["$"])("#seconds").html(seconds + "<span>Seconds</span>");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "timer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "days"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "hours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "minutes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "seconds"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0IiwibWFrZVRpbWVyIiwiZW5kVGltZSIsIkRhdGUiLCJwYXJzZSIsIm5vdyIsInRpbWVMZWZ0IiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCIkIiwiaHRtbCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBQ0EsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQ2JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNDLFNBQVQsR0FBcUI7QUFDbkI7QUFDQSxVQUFJQyxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTLGlDQUFULENBQWQ7QUFDQUQsYUFBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsT0FBWCxJQUFzQixJQUFoQztBQUVBLFVBQUlHLEdBQUcsR0FBRyxJQUFJRixJQUFKLEVBQVY7QUFDQUUsU0FBRyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV0MsR0FBWCxJQUFrQixJQUF4QjtBQUVBLFVBQUlDLFFBQVEsR0FBR0osT0FBTyxHQUFHRyxHQUF6QjtBQUVBLFVBQUlFLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsR0FBRyxLQUF0QixDQUFYO0FBQ0EsVUFBSUksS0FBSyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDSCxRQUFRLEdBQUdDLElBQUksR0FBRyxLQUFuQixJQUE0QixJQUF2QyxDQUFaO0FBQ0EsVUFBSUksT0FBTyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDSCxRQUFRLEdBQUdDLElBQUksR0FBRyxLQUFsQixHQUEwQkcsS0FBSyxHQUFHLElBQW5DLElBQTJDLEVBQXRELENBQWQ7QUFDQSxVQUFJRSxPQUFPLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUNaSCxRQUFRLEdBQUdDLElBQUksR0FBRyxLQUFsQixHQUEwQkcsS0FBSyxHQUFHLElBQWxDLEdBQXlDQyxPQUFPLEdBQUcsRUFEdkMsQ0FBZDs7QUFJQSxVQUFJRCxLQUFLLEdBQUcsSUFBWixFQUFrQjtBQUNoQkEsYUFBSyxHQUFHLE1BQU1BLEtBQWQ7QUFDRDs7QUFDRCxVQUFJQyxPQUFPLEdBQUcsSUFBZCxFQUFvQjtBQUNsQkEsZUFBTyxHQUFHLE1BQU1BLE9BQWhCO0FBQ0Q7O0FBQ0QsVUFBSUMsT0FBTyxHQUFHLElBQWQsRUFBb0I7QUFDbEJBLGVBQU8sR0FBRyxNQUFNQSxPQUFoQjtBQUNEOztBQUVEQyxzREFBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXQyxJQUFYLENBQWdCUCxJQUFJLEdBQUcsbUJBQXZCO0FBQ0FNLHNEQUFDLENBQUMsUUFBRCxDQUFELENBQVlDLElBQVosQ0FBaUJKLEtBQUssR0FBRyxvQkFBekI7QUFDQUcsc0RBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY0MsSUFBZCxDQUFtQkgsT0FBTyxHQUFHLHNCQUE3QjtBQUNBRSxzREFBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjQyxJQUFkLENBQW1CRixPQUFPLEdBQUcsc0JBQTdCO0FBQ0Q7O0FBRURHLGVBQVcsQ0FBQyxZQUFZO0FBQ3RCZCxlQUFTO0FBQ1YsS0FGVSxFQUVSLElBRlEsQ0FBWDtBQUdELEdBckNRLEVBcUNOLEVBckNNLENBQVQ7QUFzQ0Esc0JBQ0U7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFBLDRCQUNFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBL0NRRixHOztLQUFBQSxHO0FBaURNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYWNiY2YwYTI5NjY4NTlmMmFmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyAkLCBqUXVlcnkgfSBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBtYWtlVGltZXIoKSB7XHJcbiAgICAgIC8vXHRcdHZhciBlbmRUaW1lID0gbmV3IERhdGUoXCIyOSBBcHJpbCAyMDE4IDk6NTY6MDAgR01UKzAxOjAwXCIpO1xyXG4gICAgICB2YXIgZW5kVGltZSA9IG5ldyBEYXRlKFwiMjkgQXByaWwgMjAyMSA5OjU2OjAwIEdNVCswMTowMFwiKTtcclxuICAgICAgZW5kVGltZSA9IERhdGUucGFyc2UoZW5kVGltZSkgLyAxMDAwO1xyXG5cclxuICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIG5vdyA9IERhdGUucGFyc2Uobm93KSAvIDEwMDA7XHJcblxyXG4gICAgICB2YXIgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xyXG5cclxuICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKHRpbWVMZWZ0IC8gODY0MDApO1xyXG4gICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAtIGRheXMgKiA4NjQwMCkgLyAzNjAwKTtcclxuICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAtIGRheXMgKiA4NjQwMCAtIGhvdXJzICogMzYwMCkgLyA2MCk7XHJcbiAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcihcclxuICAgICAgICB0aW1lTGVmdCAtIGRheXMgKiA4NjQwMCAtIGhvdXJzICogMzYwMCAtIG1pbnV0ZXMgKiA2MFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGhvdXJzIDwgXCIxMFwiKSB7XHJcbiAgICAgICAgaG91cnMgPSBcIjBcIiArIGhvdXJzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtaW51dGVzIDwgXCIxMFwiKSB7XHJcbiAgICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlcztcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2Vjb25kcyA8IFwiMTBcIikge1xyXG4gICAgICAgIHNlY29uZHMgPSBcIjBcIiArIHNlY29uZHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoXCIjZGF5c1wiKS5odG1sKGRheXMgKyBcIjxzcGFuPkRheXM8L3NwYW4+XCIpO1xyXG4gICAgICAkKFwiI2hvdXJzXCIpLmh0bWwoaG91cnMgKyBcIjxzcGFuPkhvdXJzPC9zcGFuPlwiKTtcclxuICAgICAgJChcIiNtaW51dGVzXCIpLmh0bWwobWludXRlcyArIFwiPHNwYW4+TWludXRlczwvc3Bhbj5cIik7XHJcbiAgICAgICQoXCIjc2Vjb25kc1wiKS5odG1sKHNlY29uZHMgKyBcIjxzcGFuPlNlY29uZHM8L3NwYW4+XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWFrZVRpbWVyKCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ0aW1lclwiPlxyXG4gICAgICA8ZGl2IGlkPVwiZGF5c1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaG91cnNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cIm1pbnV0ZXNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInNlY29uZHNcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==