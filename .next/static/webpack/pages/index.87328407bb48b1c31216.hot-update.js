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
        document.getElementByclassName("days").innerText = Math.floor(distance / day), document.getElementByclassName("hours").innerText = Math.floor(distance % day / hour), document.getElementByclassName("minutes").innerText = Math.floor(distance % hour / minute), document.getElementByclassName("seconds").innerText = Math.floor(distance % minute / second); //do something later when date is reached

        if (distance < 0) {
          var headline = document.getElementByclassName("headline"),
              countdown = document.getElementByclassName("countdown"),
              content = document.getElementByclassName("content");
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
      className: "headline",
      children: "Countdown to the launch"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "countdown",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "days"
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
            className: "hours"
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
            className: "minutes"
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
            className: "seconds"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0Iiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsImJpcnRoZGF5IiwiY291bnREb3duIiwiRGF0ZSIsImdldFRpbWUiLCJ4Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5Y2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiTWF0aCIsImZsb29yIiwiaGVhZGxpbmUiLCJjb3VudGRvd24iLCJjb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQ2JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLEtBQUMsWUFBWTtBQUNYLFVBQU1DLE1BQU0sR0FBRyxJQUFmO0FBQUEsVUFDRUMsTUFBTSxHQUFHRCxNQUFNLEdBQUcsRUFEcEI7QUFBQSxVQUVFRSxJQUFJLEdBQUdELE1BQU0sR0FBRyxFQUZsQjtBQUFBLFVBR0VFLEdBQUcsR0FBR0QsSUFBSSxHQUFHLEVBSGY7QUFLQSxVQUFJRSxRQUFRLEdBQUcsdUJBQWY7QUFBQSxVQUNFQyxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTRixRQUFULEVBQW1CRyxPQUFuQixFQURkO0FBQUEsVUFFRUMsQ0FBQyxHQUFHQyxXQUFXLENBQUMsWUFBWTtBQUMxQixZQUFJQyxHQUFHLEdBQUcsSUFBSUosSUFBSixHQUFXQyxPQUFYLEVBQVY7QUFBQSxZQUNFSSxRQUFRLEdBQUdOLFNBQVMsR0FBR0ssR0FEekI7QUFHQ0UsZ0JBQVEsQ0FBQ0MscUJBQVQsQ0FBK0IsTUFBL0IsRUFBdUNDLFNBQXZDLEdBQW1EQyxJQUFJLENBQUNDLEtBQUwsQ0FDbERMLFFBQVEsR0FBR1IsR0FEdUMsQ0FBcEQsRUFHR1MsUUFBUSxDQUFDQyxxQkFBVCxDQUErQixPQUEvQixFQUF3Q0MsU0FBeEMsR0FBb0RDLElBQUksQ0FBQ0MsS0FBTCxDQUNsREwsUUFBUSxHQUFHUixHQUFaLEdBQW1CRCxJQURnQyxDQUh2RCxFQU1HVSxRQUFRLENBQUNDLHFCQUFULENBQStCLFNBQS9CLEVBQTBDQyxTQUExQyxHQUFzREMsSUFBSSxDQUFDQyxLQUFMLENBQ3BETCxRQUFRLEdBQUdULElBQVosR0FBb0JELE1BRGlDLENBTnpELEVBU0dXLFFBQVEsQ0FBQ0MscUJBQVQsQ0FBK0IsU0FBL0IsRUFBMENDLFNBQTFDLEdBQXNEQyxJQUFJLENBQUNDLEtBQUwsQ0FDcERMLFFBQVEsR0FBR1YsTUFBWixHQUFzQkQsTUFEK0IsQ0FUekQsQ0FKMEIsQ0FpQjFCOztBQUNBLFlBQUlXLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2hCLGNBQUlNLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxxQkFBVCxDQUErQixVQUEvQixDQUFmO0FBQUEsY0FDRUssU0FBUyxHQUFHTixRQUFRLENBQUNDLHFCQUFULENBQStCLFdBQS9CLENBRGQ7QUFBQSxjQUVFTSxPQUFPLEdBQUdQLFFBQVEsQ0FBQ0MscUJBQVQsQ0FBK0IsU0FBL0IsQ0FGWjtBQUlBSSxrQkFBUSxDQUFDSCxTQUFULEdBQXFCLG1CQUFyQjtBQUNBSSxtQkFBUyxDQUFDRSxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixNQUExQjtBQUNBRixpQkFBTyxDQUFDQyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFFQUMsdUJBQWEsQ0FBQ2QsQ0FBRCxDQUFiO0FBQ0QsU0E1QnlCLENBNkIxQjs7QUFDRCxPQTlCYyxFQThCWixDQTlCWSxDQUZqQjtBQWlDRCxLQXZDRDtBQXdDRCxHQXpDUSxFQXlDTixFQXpDTSxDQUFUO0FBMENBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBT0U7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFVRTtBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBakVRVixHOztLQUFBQSxHO0FBbUVNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NzMyODQwN2JiNDhiMWMzMTIxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBzZWNvbmQgPSAxMDAwLFxyXG4gICAgICAgIG1pbnV0ZSA9IHNlY29uZCAqIDYwLFxyXG4gICAgICAgIGhvdXIgPSBtaW51dGUgKiA2MCxcclxuICAgICAgICBkYXkgPSBob3VyICogMjQ7XHJcblxyXG4gICAgICBsZXQgYmlydGhkYXkgPSBcIlNlcCAzMCwgMjAyMSAwMDowMDowMFwiLFxyXG4gICAgICAgIGNvdW50RG93biA9IG5ldyBEYXRlKGJpcnRoZGF5KS5nZXRUaW1lKCksXHJcbiAgICAgICAgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZGlzdGFuY2UgPSBjb3VudERvd24gLSBub3c7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeWNsYXNzTmFtZShcImRheXNcIikuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgZGlzdGFuY2UgLyBkYXlcclxuICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5Y2xhc3NOYW1lKFwiaG91cnNcIikuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAoZGlzdGFuY2UgJSBkYXkpIC8gaG91clxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeWNsYXNzTmFtZShcIm1pbnV0ZXNcIikuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAoZGlzdGFuY2UgJSBob3VyKSAvIG1pbnV0ZVxyXG4gICAgICAgICAgICApKSxcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeWNsYXNzTmFtZShcInNlY29uZHNcIikuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAoZGlzdGFuY2UgJSBtaW51dGUpIC8gc2Vjb25kXHJcbiAgICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICAgIC8vZG8gc29tZXRoaW5nIGxhdGVyIHdoZW4gZGF0ZSBpcyByZWFjaGVkXHJcbiAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeWNsYXNzTmFtZShcImhlYWRsaW5lXCIpLFxyXG4gICAgICAgICAgICAgIGNvdW50ZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeWNsYXNzTmFtZShcImNvdW50ZG93blwiKSxcclxuICAgICAgICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5Y2xhc3NOYW1lKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGhlYWRsaW5lLmlubmVyVGV4dCA9IFwiSXQncyBteSBiaXJ0aGRheSFcIjtcclxuICAgICAgICAgICAgY291bnRkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vc2Vjb25kc1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfSkoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkbGluZVwiPkNvdW50ZG93biB0byB0aGUgbGF1bmNoPC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRheXNcIj48L3NwYW4+ZGF5c1xyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG91cnNcIj48L3NwYW4+SG91cnNcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1pbnV0ZXNcIj48L3NwYW4+TWludXRlc1xyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vjb25kc1wiPjwvc3Bhbj5TZWNvbmRzXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==