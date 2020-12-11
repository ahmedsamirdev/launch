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
    window.$ = jquery__WEBPACK_IMPORTED_MODULE_2__["$"];
    window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2__["jQuery"];

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
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "hours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "minutes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "seconds"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0Iiwid2luZG93IiwiJCIsImpRdWVyeSIsIm1ha2VUaW1lciIsImVuZFRpbWUiLCJEYXRlIiwicGFyc2UiLCJub3ciLCJ0aW1lTGVmdCIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaHRtbCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQ2JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLENBQVAsR0FBV0Esd0NBQVg7QUFDSkQsVUFBTSxDQUFDRSxNQUFQLEdBQWdCQSw2Q0FBaEI7O0FBQ0ksYUFBU0MsU0FBVCxHQUFxQjtBQUNuQjtBQUNBLFVBQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVMsaUNBQVQsQ0FBZDtBQUNBRCxhQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixPQUFYLElBQXNCLElBQWhDO0FBRUEsVUFBSUcsR0FBRyxHQUFHLElBQUlGLElBQUosRUFBVjtBQUNBRSxTQUFHLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxHQUFYLElBQWtCLElBQXhCO0FBRUEsVUFBSUMsUUFBUSxHQUFHSixPQUFPLEdBQUdHLEdBQXpCO0FBRUEsVUFBSUUsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsUUFBUSxHQUFHLEtBQXRCLENBQVg7QUFDQSxVQUFJSSxLQUFLLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNILFFBQVEsR0FBR0MsSUFBSSxHQUFHLEtBQW5CLElBQTRCLElBQXZDLENBQVo7QUFDQSxVQUFJSSxPQUFPLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNILFFBQVEsR0FBR0MsSUFBSSxHQUFHLEtBQWxCLEdBQTBCRyxLQUFLLEdBQUcsSUFBbkMsSUFBMkMsRUFBdEQsQ0FBZDtBQUNBLFVBQUlFLE9BQU8sR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQ1pILFFBQVEsR0FBR0MsSUFBSSxHQUFHLEtBQWxCLEdBQTBCRyxLQUFLLEdBQUcsSUFBbEMsR0FBeUNDLE9BQU8sR0FBRyxFQUR2QyxDQUFkOztBQUlBLFVBQUlELEtBQUssR0FBRyxJQUFaLEVBQWtCO0FBQ2hCQSxhQUFLLEdBQUcsTUFBTUEsS0FBZDtBQUNEOztBQUNELFVBQUlDLE9BQU8sR0FBRyxJQUFkLEVBQW9CO0FBQ2xCQSxlQUFPLEdBQUcsTUFBTUEsT0FBaEI7QUFDRDs7QUFDRCxVQUFJQyxPQUFPLEdBQUcsSUFBZCxFQUFvQjtBQUNsQkEsZUFBTyxHQUFHLE1BQU1BLE9BQWhCO0FBQ0Q7O0FBRURiLHNEQUFDLENBQUMsT0FBRCxDQUFELENBQVdjLElBQVgsQ0FBZ0JOLElBQUksR0FBRyxtQkFBdkI7QUFDQVIsc0RBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWMsSUFBWixDQUFpQkgsS0FBSyxHQUFHLG9CQUF6QjtBQUNBWCxzREFBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjYyxJQUFkLENBQW1CRixPQUFPLEdBQUcsc0JBQTdCO0FBQ0FaLHNEQUFDLENBQUMsVUFBRCxDQUFELENBQWNjLElBQWQsQ0FBbUJELE9BQU8sR0FBRyxzQkFBN0I7QUFDRDs7QUFFREUsZUFBVyxDQUFDLFlBQVk7QUFDdEJiLGVBQVM7QUFDVixLQUZVLEVBRVIsSUFGUSxDQUFYO0FBR0QsR0F2Q1EsRUF1Q04sRUF2Q00sQ0FBVDtBQXdDQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQUEsNEJBQ0U7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0FqRFFMLEc7O0tBQUFBLEc7QUFtRE1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzY2UyYTMxZGU1Nzg0NGM0ZGM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL0FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7ICQsIGpRdWVyeSB9IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LiQgPSAkO1xyXG53aW5kb3cualF1ZXJ5ID0galF1ZXJ5O1xyXG4gICAgZnVuY3Rpb24gbWFrZVRpbWVyKCkge1xyXG4gICAgICAvL1x0XHR2YXIgZW5kVGltZSA9IG5ldyBEYXRlKFwiMjkgQXByaWwgMjAxOCA5OjU2OjAwIEdNVCswMTowMFwiKTtcclxuICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZShcIjI5IEFwcmlsIDIwMjEgOTo1NjowMCBHTVQrMDE6MDBcIik7XHJcbiAgICAgIGVuZFRpbWUgPSBEYXRlLnBhcnNlKGVuZFRpbWUpIC8gMTAwMDtcclxuXHJcbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBub3cgPSBEYXRlLnBhcnNlKG5vdykgLyAxMDAwO1xyXG5cclxuICAgICAgdmFyIHRpbWVMZWZ0ID0gZW5kVGltZSAtIG5vdztcclxuXHJcbiAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvIDg2NDAwKTtcclxuICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSBkYXlzICogODY0MDApIC8gMzYwMCk7XHJcbiAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSBkYXlzICogODY0MDAgLSBob3VycyAqIDM2MDApIC8gNjApO1xyXG4gICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgdGltZUxlZnQgLSBkYXlzICogODY0MDAgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChob3VycyA8IFwiMTBcIikge1xyXG4gICAgICAgIGhvdXJzID0gXCIwXCIgKyBob3VycztcclxuICAgICAgfVxyXG4gICAgICBpZiAobWludXRlcyA8IFwiMTBcIikge1xyXG4gICAgICAgIG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlY29uZHMgPCBcIjEwXCIpIHtcclxuICAgICAgICBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKFwiI2RheXNcIikuaHRtbChkYXlzICsgXCI8c3Bhbj5EYXlzPC9zcGFuPlwiKTtcclxuICAgICAgJChcIiNob3Vyc1wiKS5odG1sKGhvdXJzICsgXCI8c3Bhbj5Ib3Vyczwvc3Bhbj5cIik7XHJcbiAgICAgICQoXCIjbWludXRlc1wiKS5odG1sKG1pbnV0ZXMgKyBcIjxzcGFuPk1pbnV0ZXM8L3NwYW4+XCIpO1xyXG4gICAgICAkKFwiI3NlY29uZHNcIikuaHRtbChzZWNvbmRzICsgXCI8c3Bhbj5TZWNvbmRzPC9zcGFuPlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1ha2VUaW1lcigpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidGltZXJcIj5cclxuICAgICAgPGRpdiBpZD1cImRheXNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImhvdXJzXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJtaW51dGVzXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJzZWNvbmRzXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=