"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
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

/***/ 7667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);

const handler = async (req, res)=>{
    const mongoClient = await _lib_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    try {
        const data = await mongoClient.db("wedding").collection("users").find({}).toArray();
        const result = res.status(200).json(JSON.parse(JSON.stringify(data)));
        return result;
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler); // api/new-meetup
 // import { MongoClient } from "mongodb";
 // export default async function handler(req, res) {
 //   if (req.method === "POST") {
 //     const data = req.body;
 //     //const { title, image, address, description } = data;
 //     const client = await MongoClient.connect(process.env.MONGO_DB_MEETUPS);
 //     const db = client.db();
 //     const meetupsCollection = db.collection("meetups");
 //     const result = await meetupsCollection.insertOne(data);
 //     client.close();
 //     res.status(201).json({ mess
 // client.close();
 //     res.status(201).json({ message: "Meetup inserted!" });
 //   }
 // }
 // api/new-meetup
 // async function addMeetupHandler(data) {
 //   const response = await fetch("/api/new-meetup", {
 //     method: "POST",
 //     body: JSON.stringify(data),
 //     headers: {
 //       "Content-Type": "application/json",
 //     },
 //   });
 //   const resData = await response.json();
 //   router.push("/");
 // }


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