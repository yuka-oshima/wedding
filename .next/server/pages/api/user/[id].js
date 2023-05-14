"use strict";
(() => {
var exports = {};
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

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
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(URI, options);
    clientPromise = client.connect();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ }),

/***/ 9753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);


const handler = async (req, res)=>{
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const userCollection = db.collection("users");
    try {
        const users = await userCollection.findOneAndUpdate({
            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(req.body.id)
        }, {
            $set: {
                status: req.body.status,
                correct: req.body.correct
            }
        });
        client.close();
        const result = res.status(200).json(JSON.parse(JSON.stringify(users)));
        return result;
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
// const mongoClient = await clientPromise;
// const id = req.body.id;
//   try {
//     const data = await mongoClient
//       .db("wedding")
//       .collection("users")
//       .findOneAndUpdate(
//         { _id: id },
//         { $set: { status: req.body.status, correct: req.body.correct } }
//       );
//     const result = res.status(200).json(JSON.parse(JSON.stringify(data)));
//     return result;
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9753));
module.exports = __webpack_exports__;

})();