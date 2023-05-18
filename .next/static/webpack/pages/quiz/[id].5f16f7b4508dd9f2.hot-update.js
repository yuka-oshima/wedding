/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz/[id]",{

/***/ "./components/quiz/Index.jsx":
/*!***********************************!*\
  !*** ./components/quiz/Index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_useLoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useLoadingSpinner */ \"./components/lib/useLoadingSpinner.jsx\");\n/* harmony import */ var _QuizForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuizForm */ \"./components/quiz/QuizForm.jsx\");\n/* harmony import */ var _QuizForm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_QuizForm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _home_api_useGetUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/api/useGetUser */ \"./components/home/api/useGetUser.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst QuizIndex = ()=>{\n    _s();\n    const [isLoading, userData, getUser] = (0,_home_api_useGetUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.query.id === undefined) return;\n        getUser(router.query.id);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-screen flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_useLoadingSpinner__WEBPACK_IMPORTED_MODULE_3__.Loader, {\n                width: 150,\n                height: 7,\n                className: \"\",\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\quiz\\\\Index.jsx\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\quiz\\\\Index.jsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_QuizForm__WEBPACK_IMPORTED_MODULE_4___default()), {\n                userData: userData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\quiz\\\\Index.jsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\quiz\\\\Index.jsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(QuizIndex, \"X72o2oqPMT8bPWa4FPfe0j8ut1E=\", false, function() {\n    return [\n        _home_api_useGetUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = QuizIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizIndex);\nvar _c;\n$RefreshReg$(_c, \"QuizIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1aXovSW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQztBQUNTO0FBQ2hCO0FBQ2M7QUFFaEQsTUFBTU0sWUFBWSxJQUFNOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLFVBQVVDLFFBQVEsR0FBR0osZ0VBQVVBO0lBQ2pELE1BQU1LLFNBQVNWLHNEQUFTQTtJQUN4QkUsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLE9BQU9DLEtBQUssQ0FBQ0MsRUFBRSxLQUFLQyxXQUFXO1FBQ25DSixRQUFRQyxPQUFPQyxLQUFLLENBQUNDLEVBQUU7SUFDekIsR0FBRyxFQUFFO0lBR0wscUJBQ0U7a0JBQ0dMLDBCQUNDLDhEQUFDTztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDWiwwREFBTUE7Z0JBQUNhLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUdGLFdBQVU7Z0JBQUdSLFdBQVdBOzs7Ozs7Ozs7O3NDQUd6RCw4REFBQ087WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ1gsa0RBQVFBO2dCQUFDSSxVQUFVQTs7Ozs7Ozs7OztxQkFFdkI7O0FBR1A7R0F0Qk1GOztRQUNtQ0QsNERBQVVBO1FBQ2xDTCxrREFBU0E7OztLQUZwQk07QUF3Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWl6L0luZGV4LmpzeD9hODhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuLi9saWIvdXNlTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IFF1aXpGb3JtIGZyb20gXCIuL1F1aXpGb3JtXCI7XHJcbmltcG9ydCB1c2VHZXRVc2VyIGZyb20gXCIuLi9ob21lL2FwaS91c2VHZXRVc2VyXCI7XHJcblxyXG5jb25zdCBRdWl6SW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgdXNlckRhdGEsIGdldFVzZXJdID0gdXNlR2V0VXNlcigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGdldFVzZXIocm91dGVyLnF1ZXJ5LmlkKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPExvYWRlciB3aWR0aD17MTUwfSBoZWlnaHQ9ezd9IGNsYXNzTmFtZT1cIlwiIGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gYmctZml4ZWQgYmctY2VudGVyIGJnLWNvdmVyIGN1c3RvbS1pbWdcIj5cclxuICAgICAgICAgIDxRdWl6Rm9ybSB1c2VyRGF0YT17dXNlckRhdGF9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpekluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMb2FkZXIiLCJRdWl6Rm9ybSIsInVzZUdldFVzZXIiLCJRdWl6SW5kZXgiLCJpc0xvYWRpbmciLCJ1c2VyRGF0YSIsImdldFVzZXIiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/quiz/Index.jsx\n"));

/***/ }),

/***/ "./components/quiz/QuizForm.jsx":
/*!**************************************!*\
  !*** ./components/quiz/QuizForm.jsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ })

});