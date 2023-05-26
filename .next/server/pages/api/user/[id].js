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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGO_URI);\n    const db = client.db();\n    const userCollection = db.collection(\"test\");\n    const id = req.query.id;\n    try {\n        const users = await userCollection.findOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id)\n        });\n        client.close();\n        const result = res.status(200).json(JSON.parse(JSON.stringify(users)));\n        return result;\n    } catch (err) {\n        return res.status(500).json({\n            message: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9baWRdL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFakMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsU0FBUyxNQUFNTCx3REFBbUIsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQzlELE1BQU1DLEtBQUtMLE9BQU9LLEVBQUU7SUFDcEIsTUFBTUMsaUJBQWlCRCxHQUFHRSxVQUFVLENBQUM7SUFDckMsTUFBTUMsS0FBS1YsSUFBSVcsS0FBSyxDQUFDRCxFQUFFO0lBQ3ZCLElBQUk7UUFDRixNQUFNRSxRQUFRLE1BQU1KLGVBQWVLLE9BQU8sQ0FBQztZQUN6Q0MsS0FBSyxJQUFJaEIsNkNBQVFBLENBQUNZO1FBQ3BCO1FBQ0FSLE9BQU9hLEtBQUs7UUFDWixNQUFNQyxTQUFTZixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNUO1FBQzlELE9BQU9JO0lBQ1QsRUFBRSxPQUFPTSxLQUFLO1FBQ1osT0FBT3JCLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVLLFNBQVNELElBQUlDLE9BQU87UUFBQztJQUNyRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWRkaW5nLy4vcGFnZXMvYXBpL3VzZXIvW2lkXS9pbmRleC5qc3g/NDQ2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IHVzZXJDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcInRlc3RcIik7XHJcbiAgY29uc3QgaWQgPSByZXEucXVlcnkuaWQ7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdXNlckNvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICAgIF9pZDogbmV3IE9iamVjdElkKGlkKSxcclxuICAgIH0pO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXJzKSkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJPYmplY3RJZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImRiIiwidXNlckNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiaWQiLCJxdWVyeSIsInVzZXJzIiwiZmluZE9uZSIsIl9pZCIsImNsb3NlIiwicmVzdWx0Iiwic3RhdHVzIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVyciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/[id]/index.jsx\n");

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