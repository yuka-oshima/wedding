"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user/[id]";
exports.ids = ["pages/api/user/[id]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongo/index.js":
/*!****************************!*\
  !*** ./lib/mongo/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGO_URI) {\n    throw new Error(\"Invalid environment variable MONGO_URI\");\n}\nconst URI = process.env.MONGO_URI;\nconst options = {};\nif (!URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env.local\");\n}\nlet client;\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(URI, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ28vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBR3RDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDMUIsTUFBTSxJQUFJQyxNQUFNLDBDQUEwQztBQUM1RCxDQUFDO0FBQ0QsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ2pDLE1BQU1HLFVBQVUsQ0FBQztBQUNqQixJQUFJLENBQUNELEtBQUs7SUFDUixNQUFNLElBQUlELE1BQ1Isc0VBQ0E7QUFDSixDQUFDO0FBQ0QsSUFBSUc7QUFDSixJQUFJQztBQUNKLElBQUlQLElBQXNDLEVBQUU7SUFDMUMsSUFBSSxDQUFDUSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkgsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLE9BQU9DLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQzdDLENBQUM7SUFDREgsZ0JBQWdCQyxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUdOO0FBRUQsaUVBQWVGLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9saWIvbW9uZ28vaW5kZXguanM/M2Y4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT19VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlIE1PTkdPX1VSSVwiKTtcclxufVxyXG5jb25zdCBVUkkgPSBwcm9jZXNzLmVudi5NT05HT19VUkk7XHJcbmNvbnN0IG9wdGlvbnMgPSB7fTtcclxuaWYgKCFVUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXHJcbiAgKTtcclxufVxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoVVJJLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChVUkksIG9wdGlvbnMpO1xyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiRXJyb3IiLCJVUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongo/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/[id].jsx":
/*!*********************************!*\
  !*** ./pages/api/user/[id].jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongo */ \"(api)/./lib/mongo/index.js\");\n\nconst handler = async (req, res)=>{\n    const mongoClient = await _lib_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const id = req.query.id;\n    //reqにstatusとcorrectが入っている場合は更新処理\n    if (req.body.status) {\n        try {\n            const data = await mongoClient.db(\"wedding\").collection(\"users\").findOneAndUpdate({\n                uuid: id\n            }, {\n                $set: {\n                    status: req.body.status,\n                    correct: req.body.correct\n                }\n            });\n            const result = res.status(200).json(JSON.parse(JSON.stringify(data)));\n            return result;\n        } catch (err) {\n            return res.status(500).json({\n                message: err.message\n            });\n        }\n    } else {\n        try {\n            const data = await mongoClient.db(\"wedding\").collection(\"users\").findOne({\n                uuid: id\n            });\n            const result = res.status(200).json(JSON.parse(JSON.stringify(data)));\n            return result;\n        } catch (err) {\n            return res.status(500).json({\n                message: err.message\n            });\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUUvQyxNQUFNQyxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDbEMsTUFBTUMsY0FBYyxNQUFNSixrREFBYUE7SUFDdkMsTUFBTUssS0FBS0gsSUFBSUksS0FBSyxDQUFDRCxFQUFFO0lBQ3ZCLGlDQUFpQztJQUNqQyxJQUFJSCxJQUFJSyxJQUFJLENBQUNDLE1BQU0sRUFBRTtRQUNuQixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNTCxZQUNoQk0sRUFBRSxDQUFDLFdBQ0hDLFVBQVUsQ0FBQyxTQUNYQyxnQkFBZ0IsQ0FDZjtnQkFBRUMsTUFBTVI7WUFBRyxHQUNYO2dCQUFFUyxNQUFNO29CQUFFTixRQUFRTixJQUFJSyxJQUFJLENBQUNDLE1BQU07b0JBQUVPLFNBQVNiLElBQUlLLElBQUksQ0FBQ1EsT0FBTztnQkFBQztZQUFFO1lBRW5FLE1BQU1DLFNBQVNiLElBQUlLLE1BQU0sQ0FBQyxLQUFLUyxJQUFJLENBQUNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDWDtZQUM5RCxPQUFPTztRQUNULEVBQUUsT0FBT0ssS0FBSztZQUNaLE9BQU9sQixJQUFJSyxNQUFNLENBQUMsS0FBS1MsSUFBSSxDQUFDO2dCQUFFSyxTQUFTRCxJQUFJQyxPQUFPO1lBQUM7UUFDckQ7SUFDRixPQUFPO1FBQ0wsSUFBSTtZQUNGLE1BQU1iLE9BQU8sTUFBTUwsWUFDaEJNLEVBQUUsQ0FBQyxXQUNIQyxVQUFVLENBQUMsU0FDWFksT0FBTyxDQUFDO2dCQUFFVixNQUFNUjtZQUFHO1lBQ3RCLE1BQU1XLFNBQVNiLElBQUlLLE1BQU0sQ0FBQyxLQUFLUyxJQUFJLENBQUNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDWDtZQUM5RCxPQUFPTztRQUNULEVBQUUsT0FBT0ssS0FBSztZQUNaLE9BQU9sQixJQUFJSyxNQUFNLENBQUMsS0FBS1MsSUFBSSxDQUFDO2dCQUFFSyxTQUFTRCxJQUFJQyxPQUFPO1lBQUM7UUFDckQ7SUFDRixDQUFDO0FBQ0g7QUFFQSxpRUFBZXJCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvdXNlci9baWRdLmpzeD83NmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29cIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBtb25nb0NsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgY29uc3QgaWQgPSByZXEucXVlcnkuaWQ7XHJcbiAgLy9yZXHjgatzdGF0dXPjgahjb3JyZWN044GM5YWl44Gj44Gm44GE44KL5aC05ZCI44Gv5pu05paw5Yem55CGXHJcbiAgaWYgKHJlcS5ib2R5LnN0YXR1cykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG1vbmdvQ2xpZW50XHJcbiAgICAgICAgLmRiKFwid2VkZGluZ1wiKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwidXNlcnNcIilcclxuICAgICAgICAuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICAgIHsgdXVpZDogaWQgfSxcclxuICAgICAgICAgIHsgJHNldDogeyBzdGF0dXM6IHJlcS5ib2R5LnN0YXR1cywgY29ycmVjdDogcmVxLmJvZHkuY29ycmVjdCB9IH1cclxuICAgICAgICApO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtb25nb0NsaWVudFxyXG4gICAgICAgIC5kYihcIndlZGRpbmdcIilcclxuICAgICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgLmZpbmRPbmUoeyB1dWlkOiBpZCB9KTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzLnN0YXR1cygyMDApLmpzb24oSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1vbmdvQ2xpZW50IiwiaWQiLCJxdWVyeSIsImJvZHkiLCJzdGF0dXMiLCJkYXRhIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZUFuZFVwZGF0ZSIsInV1aWQiLCIkc2V0IiwiY29ycmVjdCIsInJlc3VsdCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcnIiLCJtZXNzYWdlIiwiZmluZE9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/[id].jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/[id].jsx"));
module.exports = __webpack_exports__;

})();