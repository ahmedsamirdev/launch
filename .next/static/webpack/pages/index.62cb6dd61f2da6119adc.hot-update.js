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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Master\\Desktop\\CD\\Components\\App.js";


function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "dot dot-1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "dot dot-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "dot dot-3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("filter", {
          id: "goo",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
            "in": "SourceGraphic",
            stdDeviation: "10",
            result: "blur"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feColorMatrix", {
            "in": "blur",
            mode: "matrix",
            values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 1
    }, this)]
  }, void 0, true);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFDYixzQkFDRTtBQUFBLDRCQUNKO0FBQUssZUFBTSxXQUFYO0FBQUEsOEJBQ0U7QUFBSyxpQkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFLLGlCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURJLGVBT0o7QUFBSyxXQUFLLEVBQUMsNEJBQVg7QUFBd0MsYUFBTyxFQUFDLEtBQWhEO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUFRLFlBQUUsRUFBQyxLQUFYO0FBQUEsa0NBQ0U7QUFBZ0Isa0JBQUcsZUFBbkI7QUFBbUMsd0JBQVksRUFBQyxJQUFoRDtBQUFxRCxrQkFBTSxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFlLGtCQUFHLE1BQWxCO0FBQXlCLGdCQUFJLEVBQUMsUUFBOUI7QUFBdUMsa0JBQU0sRUFBQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEk7QUFBQSxrQkFERjtBQWtCRDs7S0FuQlFBLEc7QUFxQk1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYyY2I2ZGQ2MWYyZGE2MTE5YWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiZG90IGRvdC0xXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImRvdCBkb3QtMlwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJkb3QgZG90LTNcIj48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCI+XHJcbiAgPGRlZnM+XHJcbiAgICA8ZmlsdGVyIGlkPVwiZ29vXCI+XHJcbiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUdyYXBoaWNcIiBzdGREZXZpYXRpb249XCIxMFwiIHJlc3VsdD1cImJsdXJcIiAvPlxyXG4gICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cImJsdXJcIiBtb2RlPVwibWF0cml4XCIgdmFsdWVzPVwiMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMjEgLTdcIi8+XHJcbiAgICA8L2ZpbHRlcj5cclxuICA8L2RlZnM+XHJcbjwvc3ZnPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9