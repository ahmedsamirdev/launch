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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      id: "headline",
      children: "Countdown to my birthday:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "countdown",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "days"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), "days"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "hours"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), "Hours"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "minutes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), "Minutes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            id: "seconds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), "Seconds"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "message",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "emoji",
          children: "\uD83E\uDD73"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "emoji",
          children: "\uD83C\uDF89"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "emoji",
          children: "\uD83C\uDF82"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0Iiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsImJpcnRoZGF5IiwiY291bnREb3duIiwiRGF0ZSIsImdldFRpbWUiLCJ4Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJNYXRoIiwiZmxvb3IiLCJoZWFkbGluZSIsImNvdW50ZG93biIsImNvbnRlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDYkMseURBQVMsQ0FBQyxZQUFNO0FBQ2IsaUJBQVk7QUFDWCxVQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUFBLFVBQ01DLE1BQU0sR0FBR0QsTUFBTSxHQUFHLEVBRHhCO0FBQUEsVUFFTUUsSUFBSSxHQUFHRCxNQUFNLEdBQUcsRUFGdEI7QUFBQSxVQUdNRSxHQUFHLEdBQUdELElBQUksR0FBRyxFQUhuQjtBQUtBLFVBQUlFLFFBQVEsR0FBRyx1QkFBZjtBQUFBLFVBQ0lDLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVNGLFFBQVQsRUFBbUJHLE9BQW5CLEVBRGhCO0FBQUEsVUFFSUMsQ0FBQyxHQUFHQyxXQUFXLENBQUMsWUFBVztBQUV6QixZQUFJQyxHQUFHLEdBQUcsSUFBSUosSUFBSixHQUFXQyxPQUFYLEVBQVY7QUFBQSxZQUNJSSxRQUFRLEdBQUdOLFNBQVMsR0FBR0ssR0FEM0I7QUFHQUUsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsU0FBaEMsR0FBNENDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxRQUFRLEdBQUlSLEdBQXZCLENBQTVDLEVBQ0VTLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsU0FBakMsR0FBNkNDLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxRQUFRLEdBQUlSLEdBQWIsR0FBc0JELElBQWpDLENBRC9DLEVBRUVVLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsU0FBbkMsR0FBK0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxRQUFRLEdBQUlULElBQWIsR0FBdUJELE1BQWxDLENBRmpELEVBR0VXLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsU0FBbkMsR0FBK0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxRQUFRLEdBQUlWLE1BQWIsR0FBd0JELE1BQW5DLENBSGpELENBTHlCLENBVXpCOztBQUNBLFlBQUlXLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2hCLGNBQUlNLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFBQSxjQUNJSyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQURoQjtBQUFBLGNBRUlNLE9BQU8sR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBRmQ7QUFJQUksa0JBQVEsQ0FBQ0gsU0FBVCxHQUFxQixtQkFBckI7QUFDQUksbUJBQVMsQ0FBQ0UsS0FBVixDQUFnQkMsT0FBaEIsR0FBMEIsTUFBMUI7QUFDQUYsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBRUFDLHVCQUFhLENBQUNkLENBQUQsQ0FBYjtBQUNELFNBckJ3QixDQXNCekI7O0FBQ0QsT0F2QmMsRUF1QlosQ0F2QlksQ0FGbkI7QUEwQkMsS0FoQ0YsR0FBRDtBQWlDRCxHQWxDUSxFQWtDTixFQWxDTSxDQUFUO0FBbUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRTtBQUFJLFFBQUUsRUFBQyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLFFBQUUsRUFBQyxXQUFSO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQU0sY0FBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBLGtDQUNFO0FBQU0sY0FBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFPRTtBQUFBLGtDQUNFO0FBQU0sY0FBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFVRTtBQUFBLGtDQUNFO0FBQU0sY0FBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBa0JFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDRTtBQUFLLFVBQUUsRUFBQyxTQUFSO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBTSxtQkFBUyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBaEVRVixHOztLQUFBQSxHO0FBa0VNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNmY0NjU2MTk4MzAwZmMwNjEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBzZWNvbmQgPSAxMDAwLFxyXG4gICAgICAgICAgICBtaW51dGUgPSBzZWNvbmQgKiA2MCxcclxuICAgICAgICAgICAgaG91ciA9IG1pbnV0ZSAqIDYwLFxyXG4gICAgICAgICAgICBkYXkgPSBob3VyICogMjQ7XHJcbiAgICBcclxuICAgICAgbGV0IGJpcnRoZGF5ID0gXCJTZXAgMzAsIDIwMjEgMDA6MDA6MDBcIixcclxuICAgICAgICAgIGNvdW50RG93biA9IG5ldyBEYXRlKGJpcnRoZGF5KS5nZXRUaW1lKCksXHJcbiAgICAgICAgICB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7ICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duIC0gbm93O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5c1wiKS5pbm5lclRleHQgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKGRheSkpLFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cnNcIikuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoZGF5KSkgLyAoaG91cikpLFxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXRlc1wiKS5pbm5lclRleHQgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlIChob3VyKSkgLyAobWludXRlKSksXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRzXCIpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKG1pbnV0ZSkpIC8gc2Vjb25kKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvL2RvIHNvbWV0aGluZyBsYXRlciB3aGVuIGRhdGUgaXMgcmVhY2hlZFxyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkbGluZVwiKSxcclxuICAgICAgICAgICAgICAgICAgY291bnRkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGRvd25cIiksXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgICBoZWFkbGluZS5pbm5lclRleHQgPSBcIkl0J3MgbXkgYmlydGhkYXkhXCI7XHJcbiAgICAgICAgICAgICAgY291bnRkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc2Vjb25kc1xyXG4gICAgICAgICAgfSwgMClcclxuICAgICAgfSgpKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMSBpZD1cImhlYWRsaW5lXCI+Q291bnRkb3duIHRvIG15IGJpcnRoZGF5OjwvaDE+XHJcbiAgICAgIDxkaXYgaWQ9XCJjb3VudGRvd25cIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZGF5c1wiPjwvc3Bhbj5kYXlzXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cImhvdXJzXCI+PC9zcGFuPkhvdXJzXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cIm1pbnV0ZXNcIj48L3NwYW4+TWludXRlc1xyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJzZWNvbmRzXCI+PC9zcGFuPlNlY29uZHNcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbW9qaVwiPvCfpbM8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbW9qaVwiPvCfjok8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbW9qaVwiPvCfjoI8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9