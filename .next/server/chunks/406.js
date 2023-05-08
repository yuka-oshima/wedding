"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 4943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useGetUser = ()=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    async function getUser(uuid) {
        const url = `${"http://localhost:3000"}/api/user/${uuid}`;
        const headers = {
            "Content-Type": "application/json"
        };
        setIsLoading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
                headers
            });
            setUserInfo(response.data);
        } catch (error) {
            setUserInfo([]);
            if (!error?.response) {
                console.log("Error: ", error);
            } else {
                console.log(error.response);
            }
        } finally{
            setIsLoading(false);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (router.query.id === undefined) return;
        const uuid = router.query.id;
        getUser(uuid);
    }, [
        router
    ]);
    return [
        isLoading,
        userInfo,
        getUser
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_BarLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(888);
/* harmony import */ var react_spinners_BarLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BarLoader__WEBPACK_IMPORTED_MODULE_2__);



function Loader({ height , width , isLoading , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `flex justify-center items-center ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_BarLoader__WEBPACK_IMPORTED_MODULE_2___default()), {
            color: "#9E76B4",
            height: height,
            width: width,
            loading: isLoading,
            speedMultiplier: 0.8
        })
    });
}


/***/ })

};
;