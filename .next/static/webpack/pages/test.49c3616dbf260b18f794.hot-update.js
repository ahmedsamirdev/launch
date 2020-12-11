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
          lineNumber: 90,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "florinpop17",
            id: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-check-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-exclamation-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Error message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "username",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            placeholder: "a@florin-pop.com",
            id: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-check-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-exclamation-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Error message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "username",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            placeholder: "Password",
            id: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-check-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-exclamation-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Error message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "username",
            children: "Password check"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            placeholder: "Password two",
            id: "password2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-check-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-exclamation-circle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: "Error message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
            lineNumber: 128,
            columnNumber: 26
          }, this), " by", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://florin-pop.com",
            children: "Florin Pop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "close-btn",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-times"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Get in touch on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
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
                lineNumber: 140,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://twitter.com/florinpop1705",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://linkedin.com/in/florinpop17",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-linkedin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://facebook.com/florinpop17",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "https://instagram.com/florinpop17",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "floating-btn",
      children: "Get in Touch"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "floating-text",
      children: ["Part of", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://florin-pop.com/blog/2019/09/100-days-100-projects",
        target: "_blank",
        children: "#100Days100Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJ0ZXN0IiwidXNlRWZmZWN0IiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZDIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tJbnB1dHMiLCJ1c2VybmFtZVZhbHVlIiwidmFsdWUiLCJ0cmltIiwiZW1haWxWYWx1ZSIsInBhc3N3b3JkVmFsdWUiLCJwYXNzd29yZDJWYWx1ZSIsInNldEVycm9yRm9yIiwic2V0U3VjY2Vzc0ZvciIsImlzRW1haWwiLCJpbnB1dCIsIm1lc3NhZ2UiLCJmb3JtQ29udHJvbCIsInBhcmVudEVsZW1lbnQiLCJzbWFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJpbm5lclRleHQiLCJmbG9hdGluZ19idG4iLCJjbG9zZV9idG4iLCJzb2NpYWxfcGFuZWxfY29udGFpbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNkQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxRQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsUUFBTUcsUUFBUSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxRQUFNSSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFsQjtBQUVBRixRQUFJLENBQUNP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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhGLGVBZ0JFO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLGtDQUFSO0FBQTJDLG9CQUFNLEVBQUMsUUFBbEQ7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJGLGVBcUJFO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLG1DQUFSO0FBQTRDLG9CQUFNLEVBQUMsUUFBbkQ7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdENGLGVBK0VFO0FBQVEsZUFBUyxFQUFDLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0VGLGVBaUZFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDVSxHQURWLGVBRUU7QUFDRSxZQUFJLEVBQUMsMkRBRFA7QUFFRSxjQUFNLEVBQUMsUUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZGRDs7R0FoTFFuQyxJOztBQWtMTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC40OWMzNjE2ZGJmMjYwYjE4Zjc5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmZ1bmN0aW9uIHRlc3QoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIik7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XHJcbiAgICBjb25zdCBwYXNzd29yZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkMlwiKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY2hlY2tJbnB1dHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG4gICAgICAvLyB0cmltIHRvIHJlbW92ZSB0aGUgd2hpdGVzcGFjZXNcclxuICAgICAgY29uc3QgdXNlcm5hbWVWYWx1ZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcclxuICAgICAgY29uc3QgZW1haWxWYWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKTtcclxuICAgICAgY29uc3QgcGFzc3dvcmRWYWx1ZSA9IHBhc3N3b3JkLnZhbHVlLnRyaW0oKTtcclxuICAgICAgY29uc3QgcGFzc3dvcmQyVmFsdWUgPSBwYXNzd29yZDIudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgaWYgKHVzZXJuYW1lVmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBzZXRFcnJvckZvcih1c2VybmFtZSwgXCJVc2VybmFtZSBjYW5ub3QgYmUgYmxhbmtcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3VjY2Vzc0Zvcih1c2VybmFtZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbWFpbFZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0RXJyb3JGb3IoZW1haWwsIFwiRW1haWwgY2Fubm90IGJlIGJsYW5rXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKCFpc0VtYWlsKGVtYWlsVmFsdWUpKSB7XHJcbiAgICAgICAgc2V0RXJyb3JGb3IoZW1haWwsIFwiTm90IGEgdmFsaWQgZW1haWxcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3VjY2Vzc0ZvcihlbWFpbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXNzd29yZFZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0RXJyb3JGb3IocGFzc3dvcmQsIFwiUGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFN1Y2Nlc3NGb3IocGFzc3dvcmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFzc3dvcmQyVmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBzZXRFcnJvckZvcihwYXNzd29yZDIsIFwiUGFzc3dvcmQyIGNhbm5vdCBiZSBibGFua1wiKTtcclxuICAgICAgfSBlbHNlIGlmIChwYXNzd29yZFZhbHVlICE9PSBwYXNzd29yZDJWYWx1ZSkge1xyXG4gICAgICAgIHNldEVycm9yRm9yKHBhc3N3b3JkMiwgXCJQYXNzd29yZHMgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3VjY2Vzc0ZvcihwYXNzd29yZDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBjb25zdCBzbWFsbCA9IGZvcm1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbFwiKTtcclxuICAgICAgZm9ybUNvbnRyb2wuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgZXJyb3JcIjtcclxuICAgICAgc21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdWNjZXNzRm9yKGlucHV0KSB7XHJcbiAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgICAgZm9ybUNvbnRyb2wuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgc3VjY2Vzc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcclxuICAgICAgcmV0dXJuIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QoXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTT0NJQUwgUEFORUwgSlNcclxuICAgIGNvbnN0IGZsb2F0aW5nX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxvYXRpbmctYnRuXCIpO1xyXG4gICAgY29uc3QgY2xvc2VfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbiAgICBjb25zdCBzb2NpYWxfcGFuZWxfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuc29jaWFsLXBhbmVsLWNvbnRhaW5lclwiXHJcbiAgICApO1xyXG5cclxuICAgIGZsb2F0aW5nX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzb2NpYWxfcGFuZWxfY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNvY2lhbF9wYW5lbF9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxoMj5DcmVhdGUgQWNjb3VudDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJmb3JtXCIgY2xhc3NOYW1lPVwiZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImZsb3JpbnBvcDE3XCIgaWQ9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJhQGZsb3Jpbi1wb3AuY29tXCIgaWQ9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxzbWFsbD5FcnJvciBtZXNzYWdlPC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlBhc3N3b3JkIGNoZWNrPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgdHdvXCIgaWQ9XCJwYXNzd29yZDJcIiAvPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICA8c21hbGw+RXJyb3IgbWVzc2FnZTwvc21hbGw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLXBhbmVsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLXBhbmVsXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgQ3JlYXRlZCB3aXRoIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCI+PC9pPiBieVxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9mbG9yaW4tcG9wLmNvbVwiPlxyXG4gICAgICAgICAgICAgIEZsb3JpbiBQb3BcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idG5cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8aDQ+R2V0IGluIHRvdWNoIG9uPC9oND5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wYXRyZW9uLmNvbS9mbG9yaW5wb3AxN1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWRpc2NvcmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZmxvcmlucG9wMTcwNVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGlua2VkaW4uY29tL2luL2Zsb3JpbnBvcDE3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tL2Zsb3JpbnBvcDE3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9mbG9yaW5wb3AxN1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbG9hdGluZy1idG5cIj5HZXQgaW4gVG91Y2g8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmctdGV4dFwiPlxyXG4gICAgICAgIFBhcnQgb2Z7XCIgXCJ9XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Zsb3Jpbi1wb3AuY29tL2Jsb2cvMjAxOS8wOS8xMDAtZGF5cy0xMDAtcHJvamVjdHNcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAjMTAwRGF5czEwMFByb2plY3RzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=