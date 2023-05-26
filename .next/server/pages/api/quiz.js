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
exports.id = "pages/api/quiz";
exports.ids = ["pages/api/quiz"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/quiz/index.jsx":
/*!**********************************!*\
  !*** ./pages/api/quiz/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGO_URI);\n    const db = client.db();\n    const userCollection = db.collection(\"test\");\n    try {\n        const users = await userCollection.findOneAndUpdate({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(req.body.id)\n        }, {\n            $set: {\n                status: req.body.status,\n                correct: req.body.correct\n            }\n        });\n        client.close();\n        const result = res.status(200).json(JSON.parse(JSON.stringify(users)));\n        return result;\n    } catch (err) {\n        return res.status(500).json({\n            message: err.message\n        });\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVpei9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRWpDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFNBQVMsTUFBTUwsd0RBQW1CLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUM5RCxNQUFNQyxLQUFLTCxPQUFPSyxFQUFFO0lBQ3BCLE1BQU1DLGlCQUFpQkQsR0FBR0UsVUFBVSxDQUFDO0lBQ3JDLElBQUc7UUFDSCxNQUFNQyxRQUFRLE1BQU1GLGVBQWVHLGdCQUFnQixDQUN6QztZQUFFQyxLQUFLLElBQUlkLDZDQUFRQSxDQUFDRSxJQUFJYSxJQUFJLENBQUNDLEVBQUU7UUFBRSxHQUNqQztZQUFFQyxNQUFNO2dCQUFFQyxRQUFRaEIsSUFBSWEsSUFBSSxDQUFDRyxNQUFNO2dCQUFFQyxTQUFTakIsSUFBSWEsSUFBSSxDQUFDSSxPQUFPO1lBQUM7UUFBRTtRQUV6RWYsT0FBT2dCLEtBQUs7UUFDWixNQUFNQyxTQUFTbEIsSUFBSWUsTUFBTSxDQUFDLEtBQUtJLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNiO1FBQzFELE9BQU9TO0lBQ1gsRUFBQyxPQUFNSyxLQUFJO1FBQ1QsT0FBT3ZCLElBQUllLE1BQU0sQ0FBQyxLQUFLSSxJQUFJLENBQUM7WUFBRUssU0FBU0QsSUFBSUMsT0FBTztRQUFDO0lBQ3JEO0FBRUYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZGRpbmcvLi9wYWdlcy9hcGkvcXVpei9pbmRleC5qc3g/ZjNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IHVzZXJDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcInRlc3RcIik7XHJcbiAgdHJ5e1xyXG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgdXNlckNvbGxlY3Rpb24uZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJZChyZXEuYm9keS5pZCkgfSxcclxuICAgICAgICAgICAgeyAkc2V0OiB7IHN0YXR1czogcmVxLmJvZHkuc3RhdHVzLCBjb3JyZWN0OiByZXEuYm9keS5jb3JyZWN0IH0gfVxyXG4gICAgICAgICAgKTtcclxuICBjbGllbnQuY2xvc2UoKTtcclxuICBjb25zdCByZXN1bHQgPSByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXJzKSkpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1jYXRjaChlcnIpe1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG4gIFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJPYmplY3RJZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImRiIiwidXNlckNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwidXNlcnMiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiYm9keSIsImlkIiwiJHNldCIsInN0YXR1cyIsImNvcnJlY3QiLCJjbG9zZSIsInJlc3VsdCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/quiz/index.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/quiz/index.jsx"));
module.exports = __webpack_exports__;

})();