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
    (function () {
      var second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
      var birthday = "Jan 20, 2021 00:00:00",
          countDown = new Date(birthday).getTime(),
          x = setInterval(function () {
        var now = new Date().getTime(),
            distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / day), document.getElementById("hours").innerText = Math.floor(distance % day / hour), document.getElementById("minutes").innerText = Math.floor(distance % hour / minute), document.getElementById("seconds").innerText = Math.floor(distance % minute / second); //do something later when date is reached

        if (distance < 0) {
          var headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");
          headline.innerText = "Here We Are .. ";
          countdown.style.display = "none";
          clearInterval(x);
        } //seconds

      }, 0);
    })();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      id: "headline",
      children: "Countdown to the launch"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "countdown",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), "days"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "hours"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), "Hours"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "minutes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), "Minutes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "seconds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), "Seconds"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0Iiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsImJpcnRoZGF5IiwiY291bnREb3duIiwiRGF0ZSIsImdldFRpbWUiLCJ4Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJNYXRoIiwiZmxvb3IiLCJoZWFkbGluZSIsImNvdW50ZG93biIsImNvbnRlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDYkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsS0FBQyxZQUFZO0FBQ1gsVUFBTUMsTUFBTSxHQUFHLElBQWY7QUFBQSxVQUNFQyxNQUFNLEdBQUdELE1BQU0sR0FBRyxFQURwQjtBQUFBLFVBRUVFLElBQUksR0FBR0QsTUFBTSxHQUFHLEVBRmxCO0FBQUEsVUFHRUUsR0FBRyxHQUFHRCxJQUFJLEdBQUcsRUFIZjtBQUtBLFVBQUlFLFFBQVEsR0FBRyx1QkFBZjtBQUFBLFVBQ0VDLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVNGLFFBQVQsRUFBbUJHLE9BQW5CLEVBRGQ7QUFBQSxVQUVFQyxDQUFDLEdBQUdDLFdBQVcsQ0FBQyxZQUFZO0FBQzFCLFlBQUlDLEdBQUcsR0FBRyxJQUFJSixJQUFKLEdBQVdDLE9BQVgsRUFBVjtBQUFBLFlBQ0VJLFFBQVEsR0FBR04sU0FBUyxHQUFHSyxHQUR6QjtBQUdDRSxnQkFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxTQUFoQyxHQUE0Q0MsSUFBSSxDQUFDQyxLQUFMLENBQzNDTCxRQUFRLEdBQUdSLEdBRGdDLENBQTdDLEVBR0dTLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsU0FBakMsR0FBNkNDLElBQUksQ0FBQ0MsS0FBTCxDQUMzQ0wsUUFBUSxHQUFHUixHQUFaLEdBQW1CRCxJQUR5QixDQUhoRCxFQU1HVSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLFNBQW5DLEdBQStDQyxJQUFJLENBQUNDLEtBQUwsQ0FDN0NMLFFBQVEsR0FBR1QsSUFBWixHQUFvQkQsTUFEMEIsQ0FObEQsRUFTR1csUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxTQUFuQyxHQUErQ0MsSUFBSSxDQUFDQyxLQUFMLENBQzdDTCxRQUFRLEdBQUdWLE1BQVosR0FBc0JELE1BRHdCLENBVGxELENBSjBCLENBaUIxQjs7QUFDQSxZQUFJVyxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQixjQUFJTSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQUEsY0FDRUssU0FBUyxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FEZDtBQUFBLGNBRUVNLE9BQU8sR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBRlo7QUFJQUksa0JBQVEsQ0FBQ0gsU0FBVCxHQUFxQixpQkFBckI7QUFDQUksbUJBQVMsQ0FBQ0UsS0FBVixDQUFnQkMsT0FBaEIsR0FBMEIsTUFBMUI7QUFFQUMsdUJBQWEsQ0FBQ2QsQ0FBRCxDQUFiO0FBQ0QsU0EzQnlCLENBNEIxQjs7QUFDRCxPQTdCYyxFQTZCWixDQTdCWSxDQUZqQjtBQWdDRCxLQXRDRDtBQXVDRCxHQXhDUSxFQXdDTixFQXhDTSxDQUFUO0FBeUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRTtBQUFJLFFBQUUsRUFBQyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLFFBQUUsRUFBQyxXQUFSO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQU0sY0FBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBLGtDQUNFO0FBQU0sY0FBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFPRTtBQUFBLGtDQUNFO0FBQU0sY0FBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFVRTtBQUFBLGtDQUNFO0FBQU0sY0FBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQWhFUVYsRzs7S0FBQUEsRztBQWtFTUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjEwMDAzMTFiMjZmYWU0YjYxOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vQXBwLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3Qgc2Vjb25kID0gMTAwMCxcclxuICAgICAgICBtaW51dGUgPSBzZWNvbmQgKiA2MCxcclxuICAgICAgICBob3VyID0gbWludXRlICogNjAsXHJcbiAgICAgICAgZGF5ID0gaG91ciAqIDI0O1xyXG5cclxuICAgICAgbGV0IGJpcnRoZGF5ID0gXCJKYW4gMjAsIDIwMjEgMDA6MDA6MDBcIixcclxuICAgICAgICBjb3VudERvd24gPSBuZXcgRGF0ZShiaXJ0aGRheSkuZ2V0VGltZSgpLFxyXG4gICAgICAgIHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duIC0gbm93O1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheXNcIikuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgZGlzdGFuY2UgLyBkYXlcclxuICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3Vyc1wiKS5pbm5lclRleHQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgIChkaXN0YW5jZSAlIGRheSkgLyBob3VyXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW51dGVzXCIpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgKGRpc3RhbmNlICUgaG91cikgLyBtaW51dGVcclxuICAgICAgICAgICAgKSksXHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZHNcIikuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAoZGlzdGFuY2UgJSBtaW51dGUpIC8gc2Vjb25kXHJcbiAgICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICAgIC8vZG8gc29tZXRoaW5nIGxhdGVyIHdoZW4gZGF0ZSBpcyByZWFjaGVkXHJcbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGxpbmVcIiksXHJcbiAgICAgICAgICAgICAgY291bnRkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGRvd25cIiksXHJcbiAgICAgICAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGhlYWRsaW5lLmlubmVyVGV4dCA9IFwiSGVyZSBXZSBBcmUgLi4gXCI7XHJcbiAgICAgICAgICAgIGNvdW50ZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9zZWNvbmRzXHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgzIGlkPVwiaGVhZGxpbmVcIj5Db3VudGRvd24gdG8gdGhlIGxhdW5jaDwvaDM+XHJcbiAgICAgIDxkaXYgaWQ9XCJjb3VudGRvd25cIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZGF5c1wiPjwvc3Bhbj5kYXlzXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cImhvdXJzXCI+PC9zcGFuPkhvdXJzXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cIm1pbnV0ZXNcIj48L3NwYW4+TWludXRlc1xyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJzZWNvbmRzXCI+PC9zcGFuPlNlY29uZHNcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9