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
exports.id = "pages/api/answer";
exports.ids = ["pages/api/answer"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGO_URI) {\n    throw new Error(\"Invalid environment variable MONGO_URI\");\n}\nconst URI = process.env.MONGO_URI;\nconst options = {};\nif (!URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env.local\");\n}\nlet client;\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(URI, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ28vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBR3RDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDMUIsTUFBTSxJQUFJQyxNQUFNLDBDQUEwQztBQUM1RCxDQUFDO0FBQ0QsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ2pDLE1BQU1HLFVBQVUsQ0FBQztBQUNqQixJQUFJLENBQUNELEtBQUs7SUFDUixNQUFNLElBQUlELE1BQ1Isc0VBQ0E7QUFDSixDQUFDO0FBQ0QsSUFBSUc7QUFDSixJQUFJQztBQUNKLElBQUlQLElBQXNDLEVBQUU7SUFDMUMsSUFBSSxDQUFDUSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkgsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLE9BQU9DLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQzdDLENBQUM7SUFDREgsZ0JBQWdCQyxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUdOO0FBRUQsaUVBQWVGLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWRkaW5nLWFwcC8uL2xpYi9tb25nby9pbmRleC5qcz8zZjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGUgTU9OR09fVVJJXCIpO1xyXG59XHJcbmNvbnN0IFVSSSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5pZiAoIVVSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcclxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09fVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcclxuICApO1xyXG59XHJcbmxldCBjbGllbnQ7XHJcbmxldCBjbGllbnRQcm9taXNlO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChVUkksIG9wdGlvbnMpO1xyXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KFVSSSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJFcnJvciIsIlVSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongo/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/answer/index.jsx":
/*!************************************!*\
  !*** ./pages/api/answer/index.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongo */ \"(api)/./lib/mongo/index.js\");\n\nasync function handler(req, res) {\n    const mongoClient = await _lib_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    try {\n        const data = await mongoClient.db(\"wedding\").collection(\"users\").find({}).toArray();\n        const result = res.status(200).json(JSON.parse(JSON.stringify(data)));\n        return result;\n    } catch (err) {\n        return res.status(500).json({\n            message: err.message\n        });\n    }\n}\n; // api/new-meetup\n // import { MongoClient } from \"mongodb\";\n // export default async function handler(req, res) {\n //   if (req.method === \"POST\") {\n //     const data = req.body;\n //     //const { title, image, address, description } = data;\n //     const client = await MongoClient.connect(process.env.MONGO_DB_MEETUPS);\n //     const db = client.db();\n //     const meetupsCollection = db.collection(\"meetups\");\n //     const result = await meetupsCollection.insertOne(data);\n //     client.close();\n //     res.status(201).json({ mess\n // client.close();\n //     res.status(201).json({ message: \"Meetup inserted!\" });\n //   }\n // }\n // api/new-meetup\n // async function addMeetupHandler(data) {\n //   const response = await fetch(\"/api/new-meetup\", {\n //     method: \"POST\",\n //     body: JSON.stringify(data),\n //     headers: {\n //       \"Content-Type\": \"application/json\",\n //     },\n //   });\n //   const resData = await response.json();\n //   router.push(\"/\");\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5zd2VyL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUdoQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxjQUFjLE1BQU1KLGtEQUFhQTtJQUN2QyxJQUFJO1FBQ0YsTUFBTUssT0FBTyxNQUFNRCxZQUNoQkUsRUFBRSxDQUFDLFdBQ0hDLFVBQVUsQ0FBQyxTQUNYQyxJQUFJLENBQUMsQ0FBQyxHQUNOQyxPQUFPO1FBQ1YsTUFBTUMsU0FBU1AsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNWO1FBQzlELE9BQU9LO0lBQ1QsRUFBRSxPQUFPTSxLQUFLO1FBRVosT0FBT2IsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFSyxTQUFTRCxJQUFJQyxPQUFPO1FBQUM7SUFDckQ7QUFDRixDQUFDO0VBR0QsaUJBQWlCO0NBQ2pCLHlDQUF5QztDQUV6QyxvREFBb0Q7Q0FDcEQsaUNBQWlDO0NBQ2pDLDZCQUE2QjtDQUM3Qiw2REFBNkQ7Q0FFN0QsOEVBQThFO0NBQzlFLDhCQUE4QjtDQUU5QiwwREFBMEQ7Q0FDMUQsOERBQThEO0NBRTlELHNCQUFzQjtDQUV0QixrQ0FBa0M7Q0FDbEMsa0JBQWtCO0NBRWxCLDZEQUE2RDtDQUM3RCxNQUFNO0NBQ04sSUFBSTtDQUVKLGlCQUFpQjtDQUNqQiwwQ0FBMEM7Q0FDMUMsc0RBQXNEO0NBQ3RELHNCQUFzQjtDQUN0QixrQ0FBa0M7Q0FDbEMsaUJBQWlCO0NBQ2pCLDRDQUE0QztDQUM1QyxTQUFTO0NBQ1QsUUFBUTtDQUNSLDJDQUEyQztDQUUzQyxzQkFBc0I7Q0FDdEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZGRpbmctYXBwLy4vcGFnZXMvYXBpL2Fuc3dlci9pbmRleC5qc3g/YTYzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IG1vbmdvQ2xpZW50XHJcbiAgICAgIC5kYihcIndlZGRpbmdcIilcclxuICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAuZmluZCh7fSlcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG4vLyBhcGkvbmV3LW1lZXR1cFxyXG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbi8vICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbi8vICAgICAvL2NvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcclxuXHJcbi8vICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX0RCX01FRVRVUFMpO1xyXG4vLyAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbi8vICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xyXG5cclxuLy8gICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuLy8gICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc1xyXG4vLyBjbGllbnQuY2xvc2UoKTtcclxuXHJcbi8vICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiTWVldHVwIGluc2VydGVkIVwiIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXBpL25ldy1tZWV0dXBcclxuLy8gYXN5bmMgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlcihkYXRhKSB7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbmV3LW1lZXR1cFwiLCB7XHJcbi8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbi8vICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuLy8gICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuLy8gICByb3V0ZXIucHVzaChcIi9cIik7XHJcbi8vIH0iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtb25nb0NsaWVudCIsImRhdGEiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsInJlc3VsdCIsInN0YXR1cyIsImpzb24iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/answer/index.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/answer/index.jsx"));
module.exports = __webpack_exports__;

})();