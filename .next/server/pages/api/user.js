"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 9251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ mongo)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/mongo/index.js

if (!process.env.MONGO_URI) {
    throw new Error("Invalid environment variable MONGO_URI");
}
const URI = process.env.MONGO_URI;
const options = {};
if (!URI) {
    throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}
let client;
let clientPromise;
if (false) {} else {
    client = new external_mongodb_namespaceObject.MongoClient(URI, options);
    clientPromise = client.connect();
}
/* harmony default export */ const mongo = (clientPromise);


/***/ }),

/***/ 7667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9251);

const handler = async (req, res)=>{
    const mongoClient = await _lib_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    try {
        const data = await mongoClient.db("wedding").collection("users").find({}).toArray();
        console.log(data);
        const result = res.status(200).json(JSON.parse(JSON.stringify(data)));
        return result;
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7667));
module.exports = __webpack_exports__;

})();