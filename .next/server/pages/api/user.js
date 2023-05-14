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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/user/index.jsx":
/*!**********************************!*\
  !*** ./pages/api/user/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGO_URI);\n    const db = client.db();\n    const userCollection = db.collection(\"users\");\n    try {\n        const users = await userCollection.findOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(req.body.id)\n        });\n        client.close();\n        const result = res.status(200).json(JSON.parse(JSON.stringify(users)));\n        return result;\n    } catch (err) {\n        return res.status(500).json({\n            message: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRWpDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFNBQVMsTUFBTUwsd0RBQW1CLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUM5RCxNQUFNQyxLQUFLTCxPQUFPSyxFQUFFO0lBQ3BCLE1BQU1DLGlCQUFpQkQsR0FBR0UsVUFBVSxDQUFDO0lBQ3JDLElBQUk7UUFDRixNQUFNQyxRQUFRLE1BQU1GLGVBQWVHLE9BQU8sQ0FBQztZQUN6Q0MsS0FBSyxJQUFJZCw2Q0FBUUEsQ0FBQ0UsSUFBSWEsSUFBSSxDQUFDQyxFQUFFO1FBQy9CO1FBQ0FaLE9BQU9hLEtBQUs7UUFDWixNQUFNQyxTQUFTZixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNYO1FBQzlELE9BQU9NO0lBQ1QsRUFBRSxPQUFPTSxLQUFLO1FBQ1osT0FBT3JCLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVLLFNBQVNELElBQUlDLE9BQU87UUFBQztJQUNyRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWRkaW5nLWFwcC8uL3BhZ2VzL2FwaS91c2VyL2luZGV4LmpzeD85NzZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgdXNlckNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdXNlckNvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICAgIF9pZDogbmV3IE9iamVjdElkKHJlcS5ib2R5LmlkKSxcclxuICAgIH0pO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXJzKSkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJPYmplY3RJZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImRiIiwidXNlckNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwidXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiYm9keSIsImlkIiwiY2xvc2UiLCJyZXN1bHQiLCJzdGF0dXMiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXJyIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/index.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/index.jsx"));
module.exports = __webpack_exports__;

})();