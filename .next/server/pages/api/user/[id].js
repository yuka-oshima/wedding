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

/***/ "(api)/./pages/api/user/[id]/index.jsx":
/*!***************************************!*\
  !*** ./pages/api/user/[id]/index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGO_URI);\n    const db = client.db();\n    const userCollection = db.collection(\"users\");\n    const id = req.query.id;\n    try {\n        const users = await userCollection.findOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id)\n        });\n        client.close();\n        const result = res.status(200).json(JSON.parse(JSON.stringify(users)));\n        return result;\n    } catch (err) {\n        return res.status(500).json({\n            message: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9baWRdL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFakMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsU0FBUyxNQUFNTCx3REFBbUIsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQzlELE1BQU1DLEtBQUtMLE9BQU9LLEVBQUU7SUFDcEIsTUFBTUMsaUJBQWlCRCxHQUFHRSxVQUFVLENBQUM7SUFDckMsTUFBTUMsS0FBS1YsSUFBSVcsS0FBSyxDQUFDRCxFQUFFO0lBQ3ZCLElBQUk7UUFDRixNQUFNRSxRQUFRLE1BQU1KLGVBQWVLLE9BQU8sQ0FBQztZQUN6Q0MsS0FBSyxJQUFJaEIsNkNBQVFBLENBQUNZO1FBQ3BCO1FBQ0FSLE9BQU9hLEtBQUs7UUFDWixNQUFNQyxTQUFTZixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNUO1FBQzlELE9BQU9JO0lBQ1QsRUFBRSxPQUFPTSxLQUFLO1FBQ1osT0FBT3JCLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVLLFNBQVNELElBQUlDLE9BQU87UUFBQztJQUNyRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWRkaW5nLWFwcC8uL3BhZ2VzL2FwaS91c2VyL1tpZF0vaW5kZXguanN4PzQ0NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCB1c2VyQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuICBjb25zdCBpZCA9IHJlcS5xdWVyeS5pZDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCB1c2VyQ29sbGVjdGlvbi5maW5kT25lKHtcclxuICAgICAgX2lkOiBuZXcgT2JqZWN0SWQoaWQpLFxyXG4gICAgfSk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlcnMpKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk9iamVjdElkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiZGIiLCJ1c2VyQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJpZCIsInF1ZXJ5IiwidXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiY2xvc2UiLCJyZXN1bHQiLCJzdGF0dXMiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXJyIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/[id]/index.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/[id]/index.jsx"));
module.exports = __webpack_exports__;

})();