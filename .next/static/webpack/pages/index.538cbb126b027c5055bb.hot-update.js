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
      var birthday = "Sep 30, 2021 00:00:00",
          countDown = new Date(birthday).getTime(),
          x = setInterval(function () {
        var now = new Date().getTime(),
            distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / day), document.getElementById("hours").innerText = Math.floor(distance % day / hour), document.getElementById("minutes").innerText = Math.floor(distance % hour / minute), document.getElementById("seconds").innerText = Math.floor(distance % minute / second); //do something later when date is reached

        if (distance < 0) {
          var headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");
          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";
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
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "countdown",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), "days"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "hours"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), "Hours"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "minutes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), "Minutes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "seconds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), "Seconds"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0Iiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsImJpcnRoZGF5IiwiY291bnREb3duIiwiRGF0ZSIsImdldFRpbWUiLCJ4Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJNYXRoIiwiZmxvb3IiLCJoZWFkbGluZSIsImNvdW50ZG93biIsImNvbnRlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDYkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsS0FBQyxZQUFZO0FBQ1gsVUFBTUMsTUFBTSxHQUFHLElBQWY7QUFBQSxVQUNFQyxNQUFNLEdBQUdELE1BQU0sR0FBRyxFQURwQjtBQUFBLFVBRUVFLElBQUksR0FBR0QsTUFBTSxHQUFHLEVBRmxCO0FBQUEsVUFHRUUsR0FBRyxHQUFHRCxJQUFJLEdBQUcsRUFIZjtBQUtBLFVBQUlFLFFBQVEsR0FBRyx1QkFBZjtBQUFBLFVBQ0VDLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVNGLFFBQVQsRUFBbUJHLE9BQW5CLEVBRGQ7QUFBQSxVQUVFQyxDQUFDLEdBQUdDLFdBQVcsQ0FBQyxZQUFZO0FBQzFCLFlBQUlDLEdBQUcsR0FBRyxJQUFJSixJQUFKLEdBQVdDLE9BQVgsRUFBVjtBQUFBLFlBQ0VJLFFBQVEsR0FBR04sU0FBUyxHQUFHSyxHQUR6QjtBQUdDRSxnQkFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxTQUFoQyxHQUE0Q0MsSUFBSSxDQUFDQyxLQUFMLENBQzNDTCxRQUFRLEdBQUdSLEdBRGdDLENBQTdDLEVBR0dTLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsU0FBakMsR0FBNkNDLElBQUksQ0FBQ0MsS0FBTCxDQUMzQ0wsUUFBUSxHQUFHUixHQUFaLEdBQW1CRCxJQUR5QixDQUhoRCxFQU1HVSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLFNBQW5DLEdBQStDQyxJQUFJLENBQUNDLEtBQUwsQ0FDN0NMLFFBQVEsR0FBR1QsSUFBWixHQUFvQkQsTUFEMEIsQ0FObEQsRUFTR1csUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxTQUFuQyxHQUErQ0MsSUFBSSxDQUFDQyxLQUFMLENBQzdDTCxRQUFRLEdBQUdWLE1BQVosR0FBc0JELE1BRHdCLENBVGxELENBSjBCLENBaUIxQjs7QUFDQSxZQUFJVyxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQixjQUFJTSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQUEsY0FDRUssU0FBUyxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FEZDtBQUFBLGNBRUVNLE9BQU8sR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBRlo7QUFJQUksa0JBQVEsQ0FBQ0gsU0FBVCxHQUFxQixtQkFBckI7QUFDQUksbUJBQVMsQ0FBQ0UsS0FBVixDQUFnQkMsT0FBaEIsR0FBMEIsTUFBMUI7QUFDQUYsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBRUFDLHVCQUFhLENBQUNkLENBQUQsQ0FBYjtBQUNELFNBNUJ5QixDQTZCMUI7O0FBQ0QsT0E5QmMsRUE4QlosQ0E5QlksQ0FGakI7QUFpQ0QsS0F2Q0Q7QUF3Q0QsR0F6Q1EsRUF5Q04sRUF6Q00sQ0FBVDtBQTBDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSSxRQUFFLEVBQUMsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxRQUFFLEVBQUMsV0FBUjtBQUFBLDZCQUNFO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFNLGNBQUUsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFNLGNBQUUsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBT0U7QUFBQSxrQ0FDRTtBQUFNLGNBQUUsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBVUU7QUFBQSxrQ0FDRTtBQUFNLGNBQUUsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7R0FqRVFWLEc7O0tBQUFBLEc7QUFtRU1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUzOGNiYjEyNmIwMjdjNTA1NWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL0FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHNlY29uZCA9IDEwMDAsXHJcbiAgICAgICAgbWludXRlID0gc2Vjb25kICogNjAsXHJcbiAgICAgICAgaG91ciA9IG1pbnV0ZSAqIDYwLFxyXG4gICAgICAgIGRheSA9IGhvdXIgKiAyNDtcclxuXHJcbiAgICAgIGxldCBiaXJ0aGRheSA9IFwiU2VwIDMwLCAyMDIxIDAwOjAwOjAwXCIsXHJcbiAgICAgICAgY291bnREb3duID0gbmV3IERhdGUoYmlydGhkYXkpLmdldFRpbWUoKSxcclxuICAgICAgICB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93biAtIG5vdztcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXlzXCIpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgIGRpc3RhbmNlIC8gZGF5XHJcbiAgICAgICAgICApKSxcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cnNcIikuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAoZGlzdGFuY2UgJSBkYXkpIC8gaG91clxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXRlc1wiKS5pbm5lclRleHQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgIChkaXN0YW5jZSAlIGhvdXIpIC8gbWludXRlXHJcbiAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRzXCIpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgKGRpc3RhbmNlICUgbWludXRlKSAvIHNlY29uZFxyXG4gICAgICAgICAgICApKTtcclxuXHJcbiAgICAgICAgICAvL2RvIHNvbWV0aGluZyBsYXRlciB3aGVuIGRhdGUgaXMgcmVhY2hlZFxyXG4gICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICBsZXQgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRsaW5lXCIpLFxyXG4gICAgICAgICAgICAgIGNvdW50ZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRkb3duXCIpLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBoZWFkbGluZS5pbm5lclRleHQgPSBcIkl0J3MgbXkgYmlydGhkYXkhXCI7XHJcbiAgICAgICAgICAgIGNvdW50ZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL3NlY29uZHNcclxuICAgICAgICB9LCAwKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDMgaWQ9XCJoZWFkbGluZVwiPkNvdW50ZG93biB0byB0aGUgbGF1bmNoPC9oMz5cclxuICAgICAgPGRpdiBpZD1cImNvdW50ZG93blwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJkYXlzXCI+PC9zcGFuPmRheXNcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiaG91cnNcIj48L3NwYW4+SG91cnNcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwibWludXRlc1wiPjwvc3Bhbj5NaW51dGVzXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cInNlY29uZHNcIj48L3NwYW4+U2Vjb25kc1xyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=