"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home/[id]",{

/***/ "./components/home/Index.jsx":
/*!***********************************!*\
  !*** ./components/home/Index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useLoadingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useLoadingSpinner */ \"./components/lib/useLoadingSpinner.jsx\");\n/* harmony import */ var _Greeting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Greeting */ \"./components/home/Greeting.jsx\");\n/* harmony import */ var _HomeTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeTitle */ \"./components/home/HomeTitle.jsx\");\n/* harmony import */ var _Information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Information */ \"./components/home/Information.jsx\");\n/* harmony import */ var _api_useGetUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/useGetUser */ \"./components/home/api/useGetUser.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Index = ({ data  })=>{\n    _s();\n    const [isActiveLoader, setIsActiveLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // const [, userInfo] = useGetUser();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsActiveLoader(false);\n        }, 2000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isActiveLoader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-screen flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_useLoadingSpinner__WEBPACK_IMPORTED_MODULE_2__.Loader, {\n                width: 150,\n                height: 7,\n                className: \"\",\n                isLoading: isActiveLoader\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Index.jsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Index.jsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HomeTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Index.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Index.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Greeting__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: data\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Index.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Information__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    userInfo: data\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Index.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n};\n_s(Index, \"DWdK4QLpRC/fp8C15V1tfO5y8Qs=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvSW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNEO0FBQ2hCO0FBQ0U7QUFDSTtBQUNFO0FBRTFDLE1BQU1RLFFBQVEsQ0FBQyxFQUFDQyxLQUFJLEVBQUMsR0FBSzs7SUFDeEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pELHFDQUFxQztJQUdyQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVyxXQUFXLElBQU07WUFDZkQsa0JBQWtCLEtBQUs7UUFDekIsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHRCwrQkFDQyw4REFBQ0c7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ1gsMERBQU1BO2dCQUNMWSxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSRixXQUFVO2dCQUNWRyxXQUFXUDs7Ozs7Ozs7OztzQ0FJZjs7OEJBQ0UsOERBQUNMLGtEQUFTQTs7Ozs7OEJBQ1YsOERBQUNROzs7Ozs4QkFDRCw4REFBQ1QsaURBQVFBO29CQUFDSyxNQUFNQTs7Ozs7OzhCQUNoQiw4REFBQ0gsb0RBQVdBO29CQUFDWSxVQUFVVDs7Ozs7Ozt3QkFFMUI7O0FBR1A7R0FoQ01EO0tBQUFBO0FBa0NOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9JbmRleC5qc3g/MDYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi4vbGliL3VzZUxvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBHcmVldGluZyBmcm9tIFwiLi9HcmVldGluZ1wiO1xyXG5pbXBvcnQgSG9tZVRpdGxlIGZyb20gXCIuL0hvbWVUaXRsZVwiO1xyXG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSBcIi4vSW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHVzZUdldFVzZXIgZnJvbSBcIi4vYXBpL3VzZUdldFVzZXJcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHtkYXRhfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZUxvYWRlciwgc2V0SXNBY3RpdmVMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgLy8gY29uc3QgWywgdXNlckluZm9dID0gdXNlR2V0VXNlcigpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRJc0FjdGl2ZUxvYWRlcihmYWxzZSk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNBY3RpdmVMb2FkZXIgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxMb2FkZXJcclxuICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICBpc0xvYWRpbmc9e2lzQWN0aXZlTG9hZGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEhvbWVUaXRsZSAvPlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxHcmVldGluZyBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgICAgPEluZm9ybWF0aW9uIHVzZXJJbmZvPXtkYXRhfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRlciIsIkdyZWV0aW5nIiwiSG9tZVRpdGxlIiwiSW5mb3JtYXRpb24iLCJ1c2VHZXRVc2VyIiwiSW5kZXgiLCJkYXRhIiwiaXNBY3RpdmVMb2FkZXIiLCJzZXRJc0FjdGl2ZUxvYWRlciIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImlzTG9hZGluZyIsInVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/Index.jsx\n"));

/***/ })

});