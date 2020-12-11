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
    function getTimeRemaining(endtime) {
      var total = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor(total / 1000 % 60);
      var minutes = Math.floor(total / 1000 / 60 % 60);
      var hours = Math.floor(total / (1000 * 60 * 60) % 24);
      var days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
        total: total,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }

    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector(".days");
      var hoursSpan = clock.querySelector(".hours");
      var minutesSpan = clock.querySelector(".minutes");
      var secondsSpan = clock.querySelector(".seconds");

      function updateClock() {
        var t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock("clockdiv", deadline);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "timer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "days"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "hours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "minutes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "seconds"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0IiwiZ2V0VGltZVJlbWFpbmluZyIsImVuZHRpbWUiLCJ0b3RhbCIsIkRhdGUiLCJwYXJzZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwiaW5pdGlhbGl6ZUNsb2NrIiwiaWQiLCJjbG9jayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXlzU3BhbiIsInF1ZXJ5U2VsZWN0b3IiLCJob3Vyc1NwYW4iLCJtaW51dGVzU3BhbiIsInNlY29uZHNTcGFuIiwidXBkYXRlQ2xvY2siLCJ0IiwiaW5uZXJIVE1MIiwic2xpY2UiLCJjbGVhckludGVydmFsIiwidGltZWludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJkZWFkbGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQ2JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNDLGdCQUFULENBQTBCQyxPQUExQixFQUFtQztBQUNqQyxVQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFYLElBQXNCRSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFJRCxJQUFKLEVBQVgsQ0FBcEM7QUFDQSxVQUFNRSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxLQUFLLEdBQUcsSUFBVCxHQUFpQixFQUE1QixDQUFoQjtBQUNBLFVBQU1NLE9BQU8sR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlMLEtBQUssR0FBRyxJQUFSLEdBQWUsRUFBaEIsR0FBc0IsRUFBakMsQ0FBaEI7QUFDQSxVQUFNTyxLQUFLLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxLQUFLLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBTixHQUE2QixFQUF4QyxDQUFkO0FBQ0EsVUFBTVEsSUFBSSxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0wsS0FBSyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBaEIsQ0FBYjtBQUVBLGFBQU87QUFDTEEsYUFBSyxFQUFMQSxLQURLO0FBRUxRLFlBQUksRUFBSkEsSUFGSztBQUdMRCxhQUFLLEVBQUxBLEtBSEs7QUFJTEQsZUFBTyxFQUFQQSxPQUpLO0FBS0xILGVBQU8sRUFBUEE7QUFMSyxPQUFQO0FBT0Q7O0FBRUQsYUFBU00sZUFBVCxDQUF5QkMsRUFBekIsRUFBNkJYLE9BQTdCLEVBQXNDO0FBQ3BDLFVBQU1ZLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxFQUF4QixDQUFkO0FBQ0EsVUFBTUksUUFBUSxHQUFHSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0IsT0FBcEIsQ0FBakI7QUFDQSxVQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ0ksYUFBTixDQUFvQixRQUFwQixDQUFsQjtBQUNBLFVBQU1FLFdBQVcsR0FBR04sS0FBSyxDQUFDSSxhQUFOLENBQW9CLFVBQXBCLENBQXBCO0FBQ0EsVUFBTUcsV0FBVyxHQUFHUCxLQUFLLENBQUNJLGFBQU4sQ0FBb0IsVUFBcEIsQ0FBcEI7O0FBRUEsZUFBU0ksV0FBVCxHQUF1QjtBQUNyQixZQUFNQyxDQUFDLEdBQUd0QixnQkFBZ0IsQ0FBQ0MsT0FBRCxDQUExQjtBQUVBZSxnQkFBUSxDQUFDTyxTQUFULEdBQXFCRCxDQUFDLENBQUNaLElBQXZCO0FBQ0FRLGlCQUFTLENBQUNLLFNBQVYsR0FBc0IsQ0FBQyxNQUFNRCxDQUFDLENBQUNiLEtBQVQsRUFBZ0JlLEtBQWhCLENBQXNCLENBQUMsQ0FBdkIsQ0FBdEI7QUFDQUwsbUJBQVcsQ0FBQ0ksU0FBWixHQUF3QixDQUFDLE1BQU1ELENBQUMsQ0FBQ2QsT0FBVCxFQUFrQmdCLEtBQWxCLENBQXdCLENBQUMsQ0FBekIsQ0FBeEI7QUFDQUosbUJBQVcsQ0FBQ0csU0FBWixHQUF3QixDQUFDLE1BQU1ELENBQUMsQ0FBQ2pCLE9BQVQsRUFBa0JtQixLQUFsQixDQUF3QixDQUFDLENBQXpCLENBQXhCOztBQUVBLFlBQUlGLENBQUMsQ0FBQ3BCLEtBQUYsSUFBVyxDQUFmLEVBQWtCO0FBQ2hCdUIsdUJBQWEsQ0FBQ0MsWUFBRCxDQUFiO0FBQ0Q7QUFDRjs7QUFFREwsaUJBQVc7QUFDWCxVQUFNSyxZQUFZLEdBQUdDLFdBQVcsQ0FBQ04sV0FBRCxFQUFjLElBQWQsQ0FBaEM7QUFDRDs7QUFFRCxRQUFNTyxRQUFRLEdBQUcsSUFBSXpCLElBQUosQ0FDZkEsSUFBSSxDQUFDQyxLQUFMLENBQVcsSUFBSUQsSUFBSixFQUFYLElBQXlCLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxFQUFmLEdBQW9CLElBRDlCLENBQWpCO0FBR0FRLG1CQUFlLENBQUMsVUFBRCxFQUFhaUIsUUFBYixDQUFmO0FBQ0QsR0E3Q1EsRUE2Q04sRUE3Q00sQ0FBVDtBQThDQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQUEsNEJBQ0E7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQUdBO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhBLGVBSUE7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0F2RFE5QixHOztLQUFBQSxHO0FBeURNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NWEzZTkwYWJlMThjMTA3ZTdkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBnZXRUaW1lUmVtYWluaW5nKGVuZHRpbWUpIHtcclxuICAgICAgY29uc3QgdG90YWwgPSBEYXRlLnBhcnNlKGVuZHRpbWUpIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcclxuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCkgJSA2MCk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbCAvIDEwMDAgLyA2MCkgJSA2MCk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodG90YWwgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcclxuICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodG90YWwgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b3RhbCxcclxuICAgICAgICBkYXlzLFxyXG4gICAgICAgIGhvdXJzLFxyXG4gICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgc2Vjb25kcyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQ2xvY2soaWQsIGVuZHRpbWUpIHtcclxuICAgICAgY29uc3QgY2xvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgIGNvbnN0IGRheXNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcihcIi5kYXlzXCIpO1xyXG4gICAgICBjb25zdCBob3Vyc1NwYW4gPSBjbG9jay5xdWVyeVNlbGVjdG9yKFwiLmhvdXJzXCIpO1xyXG4gICAgICBjb25zdCBtaW51dGVzU3BhbiA9IGNsb2NrLnF1ZXJ5U2VsZWN0b3IoXCIubWludXRlc1wiKTtcclxuICAgICAgY29uc3Qgc2Vjb25kc1NwYW4gPSBjbG9jay5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZHNcIik7XHJcblxyXG4gICAgICBmdW5jdGlvbiB1cGRhdGVDbG9jaygpIHtcclxuICAgICAgICBjb25zdCB0ID0gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKTtcclxuXHJcbiAgICAgICAgZGF5c1NwYW4uaW5uZXJIVE1MID0gdC5kYXlzO1xyXG4gICAgICAgIGhvdXJzU3Bhbi5pbm5lckhUTUwgPSAoXCIwXCIgKyB0LmhvdXJzKS5zbGljZSgtMik7XHJcbiAgICAgICAgbWludXRlc1NwYW4uaW5uZXJIVE1MID0gKFwiMFwiICsgdC5taW51dGVzKS5zbGljZSgtMik7XHJcbiAgICAgICAgc2Vjb25kc1NwYW4uaW5uZXJIVE1MID0gKFwiMFwiICsgdC5zZWNvbmRzKS5zbGljZSgtMik7XHJcblxyXG4gICAgICAgIGlmICh0LnRvdGFsIDw9IDApIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZWludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZUNsb2NrKCk7XHJcbiAgICAgIGNvbnN0IHRpbWVpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZUNsb2NrLCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKFxyXG4gICAgICBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpICsgMTUgKiAyNCAqIDYwICogNjAgKiAxMDAwXHJcbiAgICApO1xyXG4gICAgaW5pdGlhbGl6ZUNsb2NrKFwiY2xvY2tkaXZcIiwgZGVhZGxpbmUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInRpbWVyXCI+XHJcbiAgICA8ZGl2IGlkPVwiZGF5c1wiPjwvZGl2PlxyXG4gICAgPGRpdiBpZD1cImhvdXJzXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwibWludXRlc1wiPjwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInNlY29uZHNcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=