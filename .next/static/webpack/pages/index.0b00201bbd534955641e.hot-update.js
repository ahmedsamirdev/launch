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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Portfolio\\Launch site\\Components\\App.js",
    _s = $RefreshSig$();




function App() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function makeTimer() {
      //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
      var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
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

      $("#days").html(days + "<span>Days</span>");
      $("#hours").html(hours + "<span>Hours</span>");
      $("#minutes").html(minutes + "<span>Minutes</span>");
      $("#seconds").html(seconds + "<span>Seconds</span>");
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
      lineNumber: 36,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "hours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "minutes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "seconds"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0IiwibWFrZVRpbWVyIiwiZW5kVGltZSIsIkRhdGUiLCJwYXJzZSIsIm5vdyIsInRpbWVMZWZ0IiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCIkIiwiaHRtbCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDYkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0MsU0FBVCxHQUFxQjtBQUVuQjtBQUNFLFVBQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVMsaUNBQVQsQ0FBZDtBQUNFRCxhQUFPLEdBQUlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixPQUFYLElBQXNCLElBQWpDO0FBRUEsVUFBSUcsR0FBRyxHQUFHLElBQUlGLElBQUosRUFBVjtBQUNBRSxTQUFHLEdBQUlGLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxHQUFYLElBQWtCLElBQXpCO0FBRUEsVUFBSUMsUUFBUSxHQUFHSixPQUFPLEdBQUdHLEdBQXpCO0FBRUEsVUFBSUUsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsUUFBUSxHQUFHLEtBQXRCLENBQVg7QUFDQSxVQUFJSSxLQUFLLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNILFFBQVEsR0FBSUMsSUFBSSxHQUFHLEtBQXBCLElBQThCLElBQXpDLENBQVo7QUFDQSxVQUFJSSxPQUFPLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNILFFBQVEsR0FBSUMsSUFBSSxHQUFHLEtBQW5CLEdBQTZCRyxLQUFLLEdBQUcsSUFBdEMsSUFBZ0QsRUFBM0QsQ0FBZDtBQUNBLFVBQUlFLE9BQU8sR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVlILFFBQVEsR0FBSUMsSUFBSSxHQUFHLEtBQW5CLEdBQTZCRyxLQUFLLEdBQUcsSUFBckMsR0FBOENDLE9BQU8sR0FBRyxFQUFwRSxDQUFkOztBQUVBLFVBQUlELEtBQUssR0FBRyxJQUFaLEVBQWtCO0FBQUVBLGFBQUssR0FBRyxNQUFNQSxLQUFkO0FBQXNCOztBQUMxQyxVQUFJQyxPQUFPLEdBQUcsSUFBZCxFQUFvQjtBQUFFQSxlQUFPLEdBQUcsTUFBTUEsT0FBaEI7QUFBMEI7O0FBQ2hELFVBQUlDLE9BQU8sR0FBRyxJQUFkLEVBQW9CO0FBQUVBLGVBQU8sR0FBRyxNQUFNQSxPQUFoQjtBQUEwQjs7QUFFaERDLE9BQUMsQ0FBQyxPQUFELENBQUQsQ0FBV0MsSUFBWCxDQUFnQlAsSUFBSSxHQUFHLG1CQUF2QjtBQUNBTSxPQUFDLENBQUMsUUFBRCxDQUFELENBQVlDLElBQVosQ0FBaUJKLEtBQUssR0FBRyxvQkFBekI7QUFDQUcsT0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjQyxJQUFkLENBQW1CSCxPQUFPLEdBQUcsc0JBQTdCO0FBQ0FFLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY0MsSUFBZCxDQUFtQkYsT0FBTyxHQUFHLHNCQUE3QjtBQUVIOztBQUVERyxlQUFXLENBQUMsWUFBVztBQUFFZCxlQUFTO0FBQUssS0FBNUIsRUFBOEIsSUFBOUIsQ0FBWDtBQUNILEdBN0JRLEVBNkJOLEVBN0JNLENBQVQ7QUE4QkEsc0JBQ0U7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFBLDRCQUNBO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQSxlQUlBO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBdkNRRixHOztLQUFBQSxHO0FBeUNNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjAwMjAxYmJkNTM0OTU1NjQxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBtYWtlVGltZXIoKSB7XHJcblxyXG4gICAgICAvL1x0XHR2YXIgZW5kVGltZSA9IG5ldyBEYXRlKFwiMjkgQXByaWwgMjAxOCA5OjU2OjAwIEdNVCswMTowMFwiKTtcdFxyXG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoXCIyOSBBcHJpbCAyMDIwIDk6NTY6MDAgR01UKzAxOjAwXCIpO1x0XHRcdFxyXG4gICAgICAgICAgZW5kVGltZSA9IChEYXRlLnBhcnNlKGVuZFRpbWUpIC8gMTAwMCk7XHJcbiAgICBcclxuICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgbm93ID0gKERhdGUucGFyc2Uobm93KSAvIDEwMDApO1xyXG4gICAgXHJcbiAgICAgICAgICB2YXIgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xyXG4gICAgXHJcbiAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyA4NjQwMCk7IFxyXG4gICAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSAoZGF5cyAqIDg2NDAwKSkgLyAzNjAwKTtcclxuICAgICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSAoZGF5cyAqIDg2NDAwKSAtIChob3VycyAqIDM2MDAgKSkgLyA2MCk7XHJcbiAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC0gKGRheXMgKiA4NjQwMCkgLSAoaG91cnMgKiAzNjAwKSAtIChtaW51dGVzICogNjApKSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgaWYgKGhvdXJzIDwgXCIxMFwiKSB7IGhvdXJzID0gXCIwXCIgKyBob3VyczsgfVxyXG4gICAgICAgICAgaWYgKG1pbnV0ZXMgPCBcIjEwXCIpIHsgbWludXRlcyA9IFwiMFwiICsgbWludXRlczsgfVxyXG4gICAgICAgICAgaWYgKHNlY29uZHMgPCBcIjEwXCIpIHsgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kczsgfVxyXG4gICAgXHJcbiAgICAgICAgICAkKFwiI2RheXNcIikuaHRtbChkYXlzICsgXCI8c3Bhbj5EYXlzPC9zcGFuPlwiKTtcclxuICAgICAgICAgICQoXCIjaG91cnNcIikuaHRtbChob3VycyArIFwiPHNwYW4+SG91cnM8L3NwYW4+XCIpO1xyXG4gICAgICAgICAgJChcIiNtaW51dGVzXCIpLmh0bWwobWludXRlcyArIFwiPHNwYW4+TWludXRlczwvc3Bhbj5cIik7XHJcbiAgICAgICAgICAkKFwiI3NlY29uZHNcIikuaHRtbChzZWNvbmRzICsgXCI8c3Bhbj5TZWNvbmRzPC9zcGFuPlwiKTtcdFx0XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBtYWtlVGltZXIoKTsgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidGltZXJcIj5cclxuICAgIDxkaXYgaWQ9XCJkYXlzXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwiaG91cnNcIj48L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJtaW51dGVzXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwic2Vjb25kc1wiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==