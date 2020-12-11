webpackHotUpdate_N_E("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _test_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.module.css */ "./pages/test.module.css");
/* harmony import */ var _test_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Portfolio\\Launch site\\pages\\test.js",
    _s = $RefreshSig$();





function test() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var form = document.getElementById("form");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      checkInputs();
    });

    function checkInputs() {
      // trim to remove the whitespaces
      var usernameValue = username.value.trim();
      var emailValue = email.value.trim();
      var passwordValue = password.value.trim();
      var password2Value = password2.value.trim();

      if (usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
      } else {
        setSuccessFor(username);
      }

      if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email");
      } else {
        setSuccessFor(email);
      }

      if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
      } else {
        setSuccessFor(password);
      }

      if (password2Value === "") {
        setErrorFor(password2, "Password2 cannot be blank");
      } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords does not match");
      } else {
        setSuccessFor(password2);
      }
    }

    function setErrorFor(input, message) {
      var formControl = input.parentElement;
      var small = formControl.querySelector("small");
      formControl.className = "form-control error";
      small.innerText = message;
    }

    function setSuccessFor(input) {
      var formControl = input.parentElement;
      formControl.className = "form-control success";
    }

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    } // SOCIAL PANEL JS


    var floating_btn = document.querySelector(".floating-btn");
    var close_btn = document.querySelector(".close-btn");
    var social_panel_container = document.querySelector(".social-panel-container");
    floating_btn.addEventListener("click", function () {
      social_panel_container.classList.toggle("visible");
    });
    close_btn.addEventListener("click", function () {
      social_panel_container.classList.remove("visible");
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        id: "form",
        className: "form",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "username",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "florinpop17",
            id: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-check-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-exclamation-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Error message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "username",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            placeholder: "a@florin-pop.com",
            id: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-check-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-exclamation-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Error message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "username",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            placeholder: "Password",
            id: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-check-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-exclamation-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Error message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "username",
            children: "Password check"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            placeholder: "Password two",
            id: "password2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-check-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-exclamation-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Error message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "social-panel-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "social-panel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Created with ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fa fa-heart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 26
          }, this), " by", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://florin-pop.com",
            children: "Florin Pop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "close-btn",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-times"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Get in touch on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://www.patreon.com/florinpop17",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-discord"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://twitter.com/florinpop1705",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://linkedin.com/in/florinpop17",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-linkedin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://facebook.com/florinpop17",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://instagram.com/florinpop17",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "floating-btn",
      children: "Get in Touch"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "floating-text",
      children: ["Part of", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://florin-pop.com/blog/2019/09/100-days-100-projects",
        target: "_blank",
        children: "#100Days100Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

_s(test, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (test);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJ0ZXN0IiwidXNlRWZmZWN0IiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZDIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tJbnB1dHMiLCJ1c2VybmFtZVZhbHVlIiwidmFsdWUiLCJ0cmltIiwiZW1haWxWYWx1ZSIsInBhc3N3b3JkVmFsdWUiLCJwYXNzd29yZDJWYWx1ZSIsInNldEVycm9yRm9yIiwic2V0U3VjY2Vzc0ZvciIsImlzRW1haWwiLCJpbnB1dCIsIm1lc3NhZ2UiLCJmb3JtQ29udHJvbCIsInBhcmVudEVsZW1lbnQiLCJzbWFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJpbm5lclRleHQiLCJmbG9hdGluZ19idG4iLCJjbG9zZV9idG4iLCJzb2NpYWxfcGFuZWxfY29udGFpbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDZEMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLFFBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsUUFBTUUsS0FBSyxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLFFBQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsUUFBTUksU0FBUyxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBbEI7QUFFQUYsUUFB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QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRixlQWdCRTtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxrQ0FBUjtBQUEyQyxvQkFBTSxFQUFDLFFBQWxEO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhCRixlQXFCRTtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxtQ0FBUjtBQUE0QyxvQkFBTSxFQUFDLFFBQW5EO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRDRixlQStFRTtBQUFRLGVBQVMsRUFBQyxjQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9FRixlQWlGRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNEJBQ1UsR0FEVixlQUVFO0FBQ0UsWUFBSSxFQUFDLDJEQURQO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2RkQ7O0dBaExRbkMsSTs7QUFrTE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuNjEwZGQ5NzM0MjBhOGM1YTA5YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi90ZXN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKTtcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmQyXCIpO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjaGVja0lucHV0cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tJbnB1dHMoKSB7XHJcbiAgICAgIC8vIHRyaW0gdG8gcmVtb3ZlIHRoZSB3aGl0ZXNwYWNlc1xyXG4gICAgICBjb25zdCB1c2VybmFtZVZhbHVlID0gdXNlcm5hbWUudmFsdWUudHJpbSgpO1xyXG4gICAgICBjb25zdCBlbWFpbFZhbHVlID0gZW1haWwudmFsdWUudHJpbSgpO1xyXG4gICAgICBjb25zdCBwYXNzd29yZFZhbHVlID0gcGFzc3dvcmQudmFsdWUudHJpbSgpO1xyXG4gICAgICBjb25zdCBwYXNzd29yZDJWYWx1ZSA9IHBhc3N3b3JkMi52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgICBpZiAodXNlcm5hbWVWYWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHNldEVycm9yRm9yKHVzZXJuYW1lLCBcIlVzZXJuYW1lIGNhbm5vdCBiZSBibGFua1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTdWNjZXNzRm9yKHVzZXJuYW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVtYWlsVmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBzZXRFcnJvckZvcihlbWFpbCwgXCJFbWFpbCBjYW5ub3QgYmUgYmxhbmtcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWlzRW1haWwoZW1haWxWYWx1ZSkpIHtcclxuICAgICAgICBzZXRFcnJvckZvcihlbWFpbCwgXCJOb3QgYSB2YWxpZCBlbWFpbFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTdWNjZXNzRm9yKGVtYWlsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhc3N3b3JkVmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBzZXRFcnJvckZvcihwYXNzd29yZCwgXCJQYXNzd29yZCBjYW5ub3QgYmUgYmxhbmtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3VjY2Vzc0ZvcihwYXNzd29yZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXNzd29yZDJWYWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHNldEVycm9yRm9yKHBhc3N3b3JkMiwgXCJQYXNzd29yZDIgY2Fubm90IGJlIGJsYW5rXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkVmFsdWUgIT09IHBhc3N3b3JkMlZhbHVlKSB7XHJcbiAgICAgICAgc2V0RXJyb3JGb3IocGFzc3dvcmQyLCBcIlBhc3N3b3JkcyBkb2VzIG5vdCBtYXRjaFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTdWNjZXNzRm9yKHBhc3N3b3JkMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRFcnJvckZvcihpbnB1dCwgbWVzc2FnZSkge1xyXG4gICAgICBjb25zdCBmb3JtQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHNtYWxsID0gZm9ybUNvbnRyb2wucXVlcnlTZWxlY3RvcihcInNtYWxsXCIpO1xyXG4gICAgICBmb3JtQ29udHJvbC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBlcnJvclwiO1xyXG4gICAgICBzbWFsbC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN1Y2Nlc3NGb3IoaW5wdXQpIHtcclxuICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBmb3JtQ29udHJvbC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBzdWNjZXNzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xyXG4gICAgICByZXR1cm4gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdChcclxuICAgICAgICBlbWFpbFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNPQ0lBTCBQQU5FTCBKU1xyXG4gICAgY29uc3QgZmxvYXRpbmdfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbG9hdGluZy1idG5cIik7XHJcbiAgICBjb25zdCBjbG9zZV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuICAgIGNvbnN0IHNvY2lhbF9wYW5lbF9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5zb2NpYWwtcGFuZWwtY29udGFpbmVyXCJcclxuICAgICk7XHJcblxyXG4gICAgZmxvYXRpbmdfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNvY2lhbF9wYW5lbF9jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9zZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc29jaWFsX3BhbmVsX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGgyPkNyZWF0ZSBBY2NvdW50PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZmxvcmlucG9wMTdcIiBpZD1cInVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImFAZmxvcmluLXBvcC5jb21cIiBpZD1cImVtYWlsXCIgLz5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgPHNtYWxsPkVycm9yIG1lc3NhZ2U8L3NtYWxsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+UGFzc3dvcmQgY2hlY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCB0d29cIiBpZD1cInBhc3N3b3JkMlwiIC8+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtcGFuZWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtcGFuZWxcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBDcmVhdGVkIHdpdGggPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIj48L2k+IGJ5XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Zsb3Jpbi1wb3AuY29tXCI+XHJcbiAgICAgICAgICAgICAgRmxvcmluIFBvcFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxoND5HZXQgaW4gdG91Y2ggb248L2g0PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhdHJlb24uY29tL2Zsb3JpbnBvcDE3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZGlzY29yZFwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9mbG9yaW5wb3AxNzA1XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vZmxvcmlucG9wMTdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpblwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vZmxvcmlucG9wMTdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9va1wiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2Zsb3JpbnBvcDE3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsb2F0aW5nLWJ0blwiPkdldCBpbiBUb3VjaDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZy10ZXh0XCI+XHJcbiAgICAgICAgUGFydCBvZntcIiBcIn1cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmxvcmluLXBvcC5jb20vYmxvZy8yMDE5LzA5LzEwMC1kYXlzLTEwMC1wcm9qZWN0c1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICMxMDBEYXlzMTAwUHJvamVjdHNcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==