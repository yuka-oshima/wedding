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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGO_URI);\n    const db = client.db();\n    const userCollection = db.collection(\"users\");\n    try {\n        const users = await userCollection.findOneAndUpdate({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(req.body.id)\n        }, {\n            $set: {\n                status: req.body.status,\n                correct: req.body.correct\n            }\n        });\n        client.close();\n        const result = res.status(200).json(JSON.parse(JSON.stringify(users)));\n        return result;\n    } catch (err) {\n        return res.status(500).json({\n            message: err.message\n        });\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVpei9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRWpDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFNBQVMsTUFBTUwsd0RBQW1CLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUM5RCxNQUFNQyxLQUFLTCxPQUFPSyxFQUFFO0lBQ3BCLE1BQU1DLGlCQUFpQkQsR0FBR0UsVUFBVSxDQUFDO0lBQ3JDLElBQUc7UUFDSCxNQUFNQyxRQUFRLE1BQU1GLGVBQWVHLGdCQUFnQixDQUN6QztZQUFFQyxLQUFLLElBQUlkLDZDQUFRQSxDQUFDRSxJQUFJYSxJQUFJLENBQUNDLEVBQUU7UUFBRSxHQUNqQztZQUFFQyxNQUFNO2dCQUFFQyxRQUFRaEIsSUFBSWEsSUFBSSxDQUFDRyxNQUFNO2dCQUFFQyxTQUFTakIsSUFBSWEsSUFBSSxDQUFDSSxPQUFPO1lBQUM7UUFBRTtRQUV6RWYsT0FBT2dCLEtBQUs7UUFDWixNQUFNQyxTQUFTbEIsSUFBSWUsTUFBTSxDQUFDLEtBQUtJLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNiO1FBQzFELE9BQU9TO0lBQ1gsRUFBQyxPQUFNSyxLQUFJO1FBQ1QsT0FBT3ZCLElBQUllLE1BQU0sQ0FBQyxLQUFLSSxJQUFJLENBQUM7WUFBRUssU0FBU0QsSUFBSUMsT0FBTztRQUFDO0lBQ3JEO0FBRUYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZGRpbmctYXBwLy4vcGFnZXMvYXBpL3F1aXovaW5kZXguanN4P2YzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCB1c2VyQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuICB0cnl7XHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCB1c2VyQ29sbGVjdGlvbi5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgICAgICAgICB7IF9pZDogbmV3IE9iamVjdElkKHJlcS5ib2R5LmlkKSB9LFxyXG4gICAgICAgICAgICB7ICRzZXQ6IHsgc3RhdHVzOiByZXEuYm9keS5zdGF0dXMsIGNvcnJlY3Q6IHJlcS5ib2R5LmNvcnJlY3QgfSB9XHJcbiAgICAgICAgICApO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlcnMpKSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfWNhdGNoKGVycil7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICB9XHJcbiAgXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk9iamVjdElkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiZGIiLCJ1c2VyQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJ1c2VycyIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCJib2R5IiwiaWQiLCIkc2V0Iiwic3RhdHVzIiwiY29ycmVjdCIsImNsb3NlIiwicmVzdWx0IiwianNvbiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVyciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/quiz/index.jsx\n");

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