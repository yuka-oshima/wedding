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

/***/ "./components/home/Greeting.jsx":
/*!**************************************!*\
  !*** ./components/home/Greeting.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// import { useInView } from \"react-intersection-observer\";\nconst Greeting = ({ userInfo  })=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { ref , inView  } = useInView({\n        rootMargin: \"100px\",\n        triggerOnce: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo.message === undefined) return;\n        const editMessage = userInfo.message.split(\"/\");\n        const editMessageElement = editMessage.map((message, index)=>{\n            //messageが\"//n\"の場合は改行\n            if (message === \"\\\\n\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 16\n                }, undefined);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"custom-font text-md\",\n                    children: message\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 16\n                }, undefined);\n            }\n        });\n        setMessage(editMessageElement);\n    }, [\n        userInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-auto py-[2em] flex items-center justify-center bg-cover bg-[#d8c0e4]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[89%] bg-white text-center bg-opacity-95\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[3em] mt-[1.5em]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"custom-title-font text-5xl font-medium tracking-wide\",\n                            children: \"Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: ref,\n                        className: inView ? \"fadeIn flex-col items-center justify-center mt-[1rem]\" : \"flex-col items-center justify-center my-[2.5rem]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"guestName\",\n                                className: \"font-semibold custom-font text-xl mt-[1em]\",\n                                children: userInfo.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            message === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    id: \"greetingBody\",\n                                    className: \"custom-font text-sm mb-[1.5em]\",\n                                    children: [\n                                        \"本日はおいそがしい中\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"私たちのパーティーにご出席していただき\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"誠にありがとうございます\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"皆様にあたたかく見守られ\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"この佳き日を迎えられたことに\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"心より感謝いたします\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"私たちは2022年8月11日に結婚し\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"夫婦となりました\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"未熟なふたりですが手を取り合い\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"ともに歩んでいきたいと思います\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"これからも末永いお付き合いを\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"よろしくお願いいたします\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"どうぞ楽しいひとときを\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"お過ごしください\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        \"啓　由華\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"custom-font text-sm mb-[1.5em]\",\n                                    children: message\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Greeting, \"I5A8OUipdKX9E3HwgJDChyhIS9s=\", true);\n_c = Greeting;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Greeting);\nvar _c;\n$RefreshReg$(_c, \"Greeting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvR3JlZXRpbmcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDbkQsMkRBQTJEO0FBRTNELE1BQU1HLFdBQVcsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSzs7SUFDakMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRUssSUFBRyxFQUFFQyxPQUFNLEVBQUUsR0FBR0MsVUFBVTtRQUNoQ0MsWUFBWTtRQUNaQyxhQUFhLElBQUk7SUFDbkI7SUFFQVYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlHLFNBQVNDLE9BQU8sS0FBS08sV0FBVztRQUNwQyxNQUFNQyxjQUFjVCxTQUFTQyxPQUFPLENBQUNTLEtBQUssQ0FBQztRQUMzQyxNQUFNQyxxQkFBcUJGLFlBQVlHLEdBQUcsQ0FBQyxDQUFDWCxTQUFTWSxRQUFVO1lBQzdELHFCQUFxQjtZQUNyQixJQUFJWixZQUFZLE9BQU87Z0JBQ3JCLHFCQUFPLDhEQUFDYTs7Ozs7WUFDVixPQUFLO2dCQUNILHFCQUFPLDhEQUFDQztvQkFBY0MsV0FBVTs4QkFBdUJmO21CQUF4Q1k7Ozs7O1lBQ2pCLENBQUM7UUFDSDtRQUNBWCxXQUFXUztJQUNiLEdBQUc7UUFBQ1g7S0FBUztJQUViLHFCQUNFO2tCQUVFLDRFQUFDaUI7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUVDLFdBQVU7c0NBQXVEOzs7Ozs7Ozs7OztrQ0FJdEUsOERBQUNDO3dCQUNDZCxLQUFLQTt3QkFDTGEsV0FDRVosU0FDSSwwREFDQSxrREFBa0Q7OzBDQUd4RCw4REFBQ2E7Z0NBQ0NDLElBQUc7Z0NBQ0hGLFdBQVU7MENBRVRoQixTQUFTbUIsSUFBSTs7Ozs7OzBDQUVoQiw4REFBQ0w7Ozs7OzRCQUNBYixZQUFZLG1CQUNYOzBDQUNFLDRFQUFDYztvQ0FBRUcsSUFBRztvQ0FBZUYsV0FBVTs7d0NBQWlDO3NEQUU5RCw4REFBQ0Y7Ozs7O3dDQUFLO3NEQUVOLDhEQUFDQTs7Ozs7d0NBQUs7c0RBRU4sOERBQUNBOzs7OztzREFDRCw4REFBQ0E7Ozs7O3dDQUFLO3NEQUVOLDhEQUFDQTs7Ozs7d0NBQUs7c0RBRU4sOERBQUNBOzs7Ozt3Q0FBSztzREFFTiw4REFBQ0E7Ozs7O3NEQUNELDhEQUFDQTs7Ozs7d0NBQUs7c0RBRU4sOERBQUNBOzs7Ozt3Q0FBSztzREFFTiw4REFBQ0E7Ozs7O3NEQUNELDhEQUFDQTs7Ozs7d0NBQUs7c0RBRU4sOERBQUNBOzs7Ozt3Q0FBSztzREFFTiw4REFBQ0E7Ozs7O3NEQUNELDhEQUFDQTs7Ozs7d0NBQUs7c0RBRU4sOERBQUNBOzs7Ozt3Q0FBSztzREFFTiw4REFBQ0E7Ozs7O3NEQUNELDhEQUFDQTs7Ozs7d0NBQUs7c0RBRU4sOERBQUNBOzs7Ozt3Q0FBSztzREFFTiw4REFBQ0E7Ozs7O3NEQUNELDhEQUFDQTs7Ozs7d0NBQUs7Ozs7Ozs7OERBS1Y7MENBQ0UsNEVBQUNDO29DQUFFQyxXQUFVOzhDQUFrQ2Y7Ozs7Ozs2Q0FFbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQWhHTUY7S0FBQUE7QUFrR04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL0dyZWV0aW5nLmpzeD84ZGQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IEdyZWV0aW5nID0gKHsgdXNlckluZm8gfSkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldyh7XHJcbiAgICByb290TWFyZ2luOiBcIjEwMHB4XCIsXHJcbiAgICB0cmlnZ2VyT25jZTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VySW5mby5tZXNzYWdlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIGNvbnN0IGVkaXRNZXNzYWdlID0gdXNlckluZm8ubWVzc2FnZS5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBlZGl0TWVzc2FnZUVsZW1lbnQgPSBlZGl0TWVzc2FnZS5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIC8vbWVzc2FnZeOBjFwiLy9uXCLjga7loLTlkIjjga/mlLnooYxcclxuICAgICAgaWYgKG1lc3NhZ2UgPT09IFwiXFxcXG5cIikge1xyXG4gICAgICAgIHJldHVybiA8YnIvPjtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImN1c3RvbS1mb250IHRleHQtbWRcIj57bWVzc2FnZX08L3A+O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNldE1lc3NhZ2UoZWRpdE1lc3NhZ2VFbGVtZW50KTtcclxuICB9LCBbdXNlckluZm9dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWNvdmVyIGdyZWV0aW5nLWJnLWltZ1wiPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWF1dG8gcHktWzJlbV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctY292ZXIgYmctWyNkOGMwZTRdXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs4OSVdIGJnLXdoaXRlIHRleHQtY2VudGVyIGJnLW9wYWNpdHktOTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzNlbV0gbXQtWzEuNWVtXVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXN0b20tdGl0bGUtZm9udCB0ZXh0LTV4bCBmb250LW1lZGl1bSB0cmFja2luZy13aWRlXCI+XHJcbiAgICAgICAgICAgICAgTWVzc2FnZVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgaW5WaWV3XHJcbiAgICAgICAgICAgICAgICA/IFwiZmFkZUluIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC1bMXJlbV1cIlxyXG4gICAgICAgICAgICAgICAgOiBcImZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS1bMi41cmVtXVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGlkPVwiZ3Vlc3ROYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGN1c3RvbS1mb250IHRleHQteGwgbXQtWzFlbV1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge21lc3NhZ2UgPT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiZ3JlZXRpbmdCb2R5XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZvbnQgdGV4dC1zbSBtYi1bMS41ZW1dXCI+XHJcbiAgICAgICAgICAgICAgICAgIOacrOaXpeOBr+OBiuOBhOOBneOBjOOBl+OBhOS4rVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg56eB44Gf44Gh44Gu44OR44O844OG44Kj44O844Gr44GU5Ye65bit44GX44Gm44GE44Gf44Gg44GNXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDoqqDjgavjgYLjgorjgYzjgajjgYbjgZTjgZbjgYTjgb7jgZlcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDnmobmp5jjgavjgYLjgZ/jgZ/jgYvjgY/opovlrojjgonjgoxcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIOOBk+OBruS9s+OBjeaXpeOCkui/juOBiOOCieOCjOOBn+OBk+OBqOOBq1xyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg5b+D44KI44KK5oSf6Kyd44GE44Gf44GX44G+44GZXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg56eB44Gf44Gh44GvMjAyMuW5tDjmnIgxMeaXpeOBq+e1kOWpmuOBl1xyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg5aSr5amm44Go44Gq44KK44G+44GX44GfXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg5pyq54af44Gq44G144Gf44KK44Gn44GZ44GM5omL44KS5Y+W44KK5ZCI44GEXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDjgajjgoLjgavmranjgpPjgafjgYTjgY3jgZ/jgYTjgajmgJ3jgYTjgb7jgZlcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDjgZPjgozjgYvjgonjgoLmnKvmsLjjgYTjgYrku5jjgY3lkIjjgYTjgpJcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIOOCiOOCjeOBl+OBj+OBiumhmOOBhOOBhOOBn+OBl+OBvuOBmVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIOOBqeOBhuOBnualveOBl+OBhOOBsuOBqOOBqOOBjeOCklxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg44GK6YGO44GU44GX44GP44Gg44GV44GEXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg5ZWT44CA55Sx6I+vXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1c3RvbS1mb250IHRleHQtc20gbWItWzEuNWVtXVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmVldGluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHcmVldGluZyIsInVzZXJJbmZvIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJyZWYiLCJpblZpZXciLCJ1c2VJblZpZXciLCJyb290TWFyZ2luIiwidHJpZ2dlck9uY2UiLCJ1bmRlZmluZWQiLCJlZGl0TWVzc2FnZSIsInNwbGl0IiwiZWRpdE1lc3NhZ2VFbGVtZW50IiwibWFwIiwiaW5kZXgiLCJiciIsInAiLCJjbGFzc05hbWUiLCJkaXYiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/Greeting.jsx\n"));

/***/ })

});