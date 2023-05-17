/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/profile/Index.jsx":
/*!**************************************!*\
  !*** ./components/profile/Index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profileContentsEn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileContentsEn */ \"./components/profile/profileContentsEn.jsx\");\n/* harmony import */ var _profileContentsJp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileContentsJp */ \"./components/profile/profileContentsJp.jsx\");\n/* harmony import */ var _profileContentsJp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profileContentsJp__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProfileIndex = ()=>{\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"JP\");\n    //JPかENのボタンを押すと、それぞれの言語のコンテンツが表示されるようにしたい\n    const changeLanguage = (e)=>{\n        //idがJPのボタンを押したら、JPのコンテンツが表示されるようにしたい\n        if (e.target.id === \"JP\") {\n            setLanguage(\"JP\");\n        }\n        //idがENのボタンを押したら、ENのコンテンツが表示されるようにしたい\n        if (e.target.id === \"EN\") {\n            setLanguage(\"EN\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full profile-bg-img\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[98%] flex justify-end mr-[0.5em]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"JP\",\n                        className: \"mr-[1em] bg-[] cursor-pointer\",\n                        onClick: (e)=>{\n                            changeLanguage(e);\n                        },\n                        children: \"JP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\profile\\\\Index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"EN\",\n                        className: \"mr-[1em] bg-[] cursor-pointer\",\n                        children: \"EN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\profile\\\\Index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\profile\\\\Index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-[0.25em] custom-title-font font-medium text-5xl\",\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\profile\\\\Index.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    language === \"JP\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_profileContentsJp__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\profile\\\\Index.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 30\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profileContentsEn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\profile\\\\Index.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 54\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\profile\\\\Index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\profile\\\\Index.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfileIndex, \"fx/at9PN4xrkbxlwZp929MS8oaI=\");\n_c = ProfileIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileIndex);\nvar _c;\n$RefreshReg$(_c, \"ProfileIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvSW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDbUI7QUFDQTtBQUNwRCxNQUFNRyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6Qyx5Q0FBeUM7SUFDekMsTUFBTU0saUJBQWlCLENBQUNDLElBQU07UUFDNUIscUNBQXFDO1FBQ3JDLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLE1BQU07WUFDeEJKLFlBQVk7UUFDZCxDQUFDO1FBQ0QscUNBQXFDO1FBQ3JDLElBQUlFLEVBQUVDLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLE1BQU07WUFDeEJKLFlBQVk7UUFDZCxDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NILElBQUc7d0JBQ0hFLFdBQVU7d0JBQ1ZFLFNBQVMsQ0FBQ04sSUFBTTs0QkFDZEQsZUFBZUM7d0JBQ2pCO2tDQUNEOzs7Ozs7a0NBR0QsOERBQUNLO3dCQUFPSCxJQUFHO3dCQUFLRSxXQUFVO2tDQUFnQzs7Ozs7Ozs7Ozs7OzBCQUk1RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBcUQ7Ozs7OztvQkFHbkVQLGFBQWEscUJBQU8sOERBQUNGLDJEQUFpQkE7Ozs7a0RBQU0sOERBQUNELDBEQUFpQkE7Ozs7aUNBQUc7Ozs7Ozs7Ozs7Ozs7QUFJMUU7R0F0Q01FO0tBQUFBO0FBd0NOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZS9JbmRleC5qc3g/YzUxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZmlsZUNvbnRlbnRzRW4gZnJvbSBcIi4vcHJvZmlsZUNvbnRlbnRzRW5cIjtcclxuaW1wb3J0IFByb2ZpbGVDb250ZW50c0pwIGZyb20gXCIuL3Byb2ZpbGVDb250ZW50c0pwXCI7XHJcbmNvbnN0IFByb2ZpbGVJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKFwiSlBcIik7XHJcbiAgLy9KUOOBi0VO44Gu44Oc44K/44Oz44KS5oq844GZ44Go44CB44Gd44KM44Ge44KM44Gu6KiA6Kqe44Gu44Kz44Oz44OG44Oz44OE44GM6KGo56S644GV44KM44KL44KI44GG44Gr44GX44Gf44GEXHJcbiAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAoZSkgPT4ge1xyXG4gICAgLy9pZOOBjEpQ44Gu44Oc44K/44Oz44KS5oq844GX44Gf44KJ44CBSlDjga7jgrPjg7Pjg4bjg7Pjg4TjgYzooajnpLrjgZXjgozjgovjgojjgYbjgavjgZfjgZ/jgYRcclxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJKUFwiKSB7XHJcbiAgICAgIHNldExhbmd1YWdlKFwiSlBcIik7XHJcbiAgICB9XHJcbiAgICAvL2lk44GMRU7jga7jg5zjgr/jg7PjgpLmirzjgZfjgZ/jgonjgIFFTuOBruOCs+ODs+ODhuODs+ODhOOBjOihqOekuuOBleOCjOOCi+OCiOOBhuOBq+OBl+OBn+OBhFxyXG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIkVOXCIpIHtcclxuICAgICAgc2V0TGFuZ3VhZ2UoXCJFTlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHByb2ZpbGUtYmctaW1nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTglXSBmbGV4IGp1c3RpZnktZW5kIG1yLVswLjVlbV1cIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBpZD1cIkpQXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLVsxZW1dIGJnLVtdIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUxhbmd1YWdlKGUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBKUFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJFTlwiIGNsYXNzTmFtZT1cIm1yLVsxZW1dIGJnLVtdIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICBFTlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC1bMC4yNWVtXSBjdXN0b20tdGl0bGUtZm9udCBmb250LW1lZGl1bSB0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtsYW5ndWFnZSA9PT0gXCJKUFwiID8gPFByb2ZpbGVDb250ZW50c0pwIC8+IDogPFByb2ZpbGVDb250ZW50c0VuIC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlByb2ZpbGVDb250ZW50c0VuIiwiUHJvZmlsZUNvbnRlbnRzSnAiLCJQcm9maWxlSW5kZXgiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/Index.jsx\n"));

/***/ }),

/***/ "./components/profile/profileContentsJp.jsx":
/*!**************************************************!*\
  !*** ./components/profile/profileContentsJp.jsx ***!
  \**************************************************/
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