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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// import { useInView } from \"react-intersection-observer\";\nconst Greeting = ({ userInfo  })=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const { ref, inView } = useInView({\n    //   rootMargin: \"100px\",\n    //   triggerOnce: true,\n    // });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo.message === undefined) return;\n        const editMessage = userInfo.message.split(\"/\");\n        const editMessageElement = editMessage.map((message, index)=>{\n            //messageが\"//n\"の場合は改行\n            if (message === \"\\\\n\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 16\n                }, undefined);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"custom-font text-md\",\n                    children: message\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 16\n                }, undefined);\n            }\n        });\n        setMessage(editMessageElement);\n    }, [\n        userInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-auto py-[2em] flex items-center justify-center bg-cover bg-[#d8c0e4]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[89%] bg-white text-center bg-opacity-95\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[3em] mt-[1.5em]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"custom-title-font text-5xl font-medium tracking-wide\",\n                            children: \"Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fadeIn flex-col items-center justify-center mt-[1rem]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"guestName\",\n                        className: \"font-semibold custom-font text-xl mt-[1em]\",\n                        children: userInfo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined),\n                    message === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: \"greetingBody\",\n                            className: \"custom-font text-sm mb-[1.5em]\",\n                            children: [\n                                \"本日はおいそがしい中\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"私たちのパーティーにご出席していただき\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"誠にありがとうございます\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"皆様にあたたかく見守られ\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"この佳き日を迎えられたことに\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"心より感謝いたします\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"私たちは2022年8月11日に結婚し\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"夫婦となりました\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"未熟なふたりですが手を取り合い\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"ともに歩んでいきたいと思います\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"これからも末永いお付き合いを\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"よろしくお願いいたします\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"どうぞ楽しいひとときを\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"お過ごしください\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"啓　由華\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"custom-font text-sm mb-[1.5em]\",\n                            children: message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wb-Yamaguchi-01\\\\Desktop\\\\プライベート\\\\結婚パーティー\\\\wedding-app\\\\components\\\\home\\\\Greeting.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Greeting, \"ClLa+zvPL6vd0LAuHSvav3BaFBg=\");\n_c = Greeting;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Greeting);\nvar _c;\n$RefreshReg$(_c, \"Greeting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvR3JlZXRpbmcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDbkQsMkRBQTJEO0FBRTNELE1BQU1HLFdBQVcsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSzs7SUFDakMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3ZDLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLE1BQU07SUFFTkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlHLFNBQVNDLE9BQU8sS0FBS0UsV0FBVztRQUNwQyxNQUFNQyxjQUFjSixTQUFTQyxPQUFPLENBQUNJLEtBQUssQ0FBQztRQUMzQyxNQUFNQyxxQkFBcUJGLFlBQVlHLEdBQUcsQ0FBQyxDQUFDTixTQUFTTyxRQUFVO1lBQzdELHFCQUFxQjtZQUNyQixJQUFJUCxZQUFZLE9BQU87Z0JBQ3JCLHFCQUFPLDhEQUFDUTs7Ozs7WUFDVixPQUFLO2dCQUNILHFCQUFPLDhEQUFDQztvQkFBY0MsV0FBVTs4QkFBdUJWO21CQUF4Q087Ozs7O1lBQ2pCLENBQUM7UUFDSDtRQUNBTixXQUFXSTtJQUNiLEdBQUc7UUFBQ047S0FBUztJQUViLHFCQUNFO2tCQUVFLDRFQUFDWTtZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBRUMsV0FBVTtzQ0FBdUQ7Ozs7Ozs7Ozs7O2tDQVl0RSw4REFBQ0M7d0JBQ0NELFdBQVc7Ozs7OztrQ0FHWCw4REFBQ0M7d0JBQ0NDLElBQUc7d0JBQ0hGLFdBQVU7a0NBRVRYOzs7Ozs7a0NBRUgsOERBQUNTOzs7OztvQkFDQVIsWUFBWSxtQkFDWDtrQ0FDRSw0RUFBQ1M7NEJBQUVHLElBQUc7NEJBQWVGLFdBQVU7O2dDQUFpQzs4Q0FFOUQsOERBQUNGOzs7OztnQ0FBSzs4Q0FFTiw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7OENBQ0QsOERBQUNBOzs7OztnQ0FBSzs4Q0FFTiw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7O2dDQUFLOzhDQUVOLDhEQUFDQTs7Ozs7Z0NBQUs7OENBRU4sOERBQUNBOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7O2dDQUFLOzs7Ozs7O3NEQUtWO2tDQUNFLDRFQUFDQzs0QkFBRUMsV0FBVTtzQ0FBa0NWOzs7Ozs7cUNBRWxEOzs7Ozs7Ozs7Ozs7O0FBS2I7R0FuR01GO0tBQUFBO0FBcUdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9HcmVldGluZy5qc3g/OGRkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XHJcblxyXG5jb25zdCBHcmVldGluZyA9ICh7IHVzZXJJbmZvIH0pID0+IHtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoe1xyXG4gIC8vICAgcm9vdE1hcmdpbjogXCIxMDBweFwiLFxyXG4gIC8vICAgdHJpZ2dlck9uY2U6IHRydWUsXHJcbiAgLy8gfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlckluZm8ubWVzc2FnZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBjb25zdCBlZGl0TWVzc2FnZSA9IHVzZXJJbmZvLm1lc3NhZ2Uuc3BsaXQoXCIvXCIpO1xyXG4gICAgY29uc3QgZWRpdE1lc3NhZ2VFbGVtZW50ID0gZWRpdE1lc3NhZ2UubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICAvL21lc3NhZ2XjgYxcIi8vblwi44Gu5aC05ZCI44Gv5pS56KGMXHJcbiAgICAgIGlmIChtZXNzYWdlID09PSBcIlxcXFxuXCIpIHtcclxuICAgICAgICByZXR1cm4gPGJyLz47XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiA8cCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjdXN0b20tZm9udCB0ZXh0LW1kXCI+e21lc3NhZ2V9PC9wPjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZXRNZXNzYWdlKGVkaXRNZXNzYWdlRWxlbWVudCk7XHJcbiAgfSwgW3VzZXJJbmZvXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1jb3ZlciBncmVldGluZy1iZy1pbWdcIj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1hdXRvIHB5LVsyZW1dIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWNvdmVyIGJnLVsjZDhjMGU0XVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bODklXSBiZy13aGl0ZSB0ZXh0LWNlbnRlciBiZy1vcGFjaXR5LTk1XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVszZW1dIG10LVsxLjVlbV1cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3VzdG9tLXRpdGxlLWZvbnQgdGV4dC01eGwgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICAgICAgICAgIE1lc3NhZ2VcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBpblZpZXdcclxuICAgICAgICAgICAgICAgID8gXCJmYWRlSW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LVsxcmVtXVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG15LVsyLjVyZW1dXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPiAqL31cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZhZGVJbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtWzFyZW1dXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgaWQ9XCJndWVzdE5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgY3VzdG9tLWZvbnQgdGV4dC14bCBtdC1bMWVtXVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dXNlckluZm99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge21lc3NhZ2UgPT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiZ3JlZXRpbmdCb2R5XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZvbnQgdGV4dC1zbSBtYi1bMS41ZW1dXCI+XHJcbiAgICAgICAgICAgICAgICAgIOacrOaXpeOBr+OBiuOBhOOBneOBjOOBl+OBhOS4rVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg56eB44Gf44Gh44Gu44OR44O844OG44Kj44O844Gr44GU5Ye65bit44GX44Gm44GE44Gf44Gg44GNXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDoqqDjgavjgYLjgorjgYzjgajjgYbjgZTjgZbjgYTjgb7jgZlcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDnmobmp5jjgavjgYLjgZ/jgZ/jgYvjgY/opovlrojjgonjgoxcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIOOBk+OBruS9s+OBjeaXpeOCkui/juOBiOOCieOCjOOBn+OBk+OBqOOBq1xyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg5b+D44KI44KK5oSf6Kyd44GE44Gf44GX44G+44GZXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg56eB44Gf44Gh44GvMjAyMuW5tDjmnIgxMeaXpeOBq+e1kOWpmuOBl1xyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg5aSr5amm44Go44Gq44KK44G+44GX44GfXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg5pyq54af44Gq44G144Gf44KK44Gn44GZ44GM5omL44KS5Y+W44KK5ZCI44GEXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDjgajjgoLjgavmranjgpPjgafjgYTjgY3jgZ/jgYTjgajmgJ3jgYTjgb7jgZlcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDjgZPjgozjgYvjgonjgoLmnKvmsLjjgYTjgYrku5jjgY3lkIjjgYTjgpJcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIOOCiOOCjeOBl+OBj+OBiumhmOOBhOOBhOOBn+OBl+OBvuOBmVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIOOBqeOBhuOBnualveOBl+OBhOOBsuOBqOOBqOOBjeOCklxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg44GK6YGO44GU44GX44GP44Gg44GV44GEXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAg5ZWT44CA55Sx6I+vXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1c3RvbS1mb250IHRleHQtc20gbWItWzEuNWVtXVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyZWV0aW5nO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdyZWV0aW5nIiwidXNlckluZm8iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVuZGVmaW5lZCIsImVkaXRNZXNzYWdlIiwic3BsaXQiLCJlZGl0TWVzc2FnZUVsZW1lbnQiLCJtYXAiLCJpbmRleCIsImJyIiwicCIsImNsYXNzTmFtZSIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/Greeting.jsx\n"));

/***/ })

});