"use strict";
(() => {
var exports = {};
exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 3237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_useLoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3299);
/* harmony import */ var _QuizForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8227);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_QuizForm__WEBPACK_IMPORTED_MODULE_4__]);
_QuizForm__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const QuizIndex = ({ userData  })=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-screen flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_useLoadingSpinner__WEBPACK_IMPORTED_MODULE_3__/* .Loader */ .a, {
                width: 150,
                height: 7,
                className: "",
                isLoading: isLoading
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuizForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                userData: userData
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizIndex);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ QuizBody)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: external "react-icons/rx"
const rx_namespaceObject = require("react-icons/rx");
;// CONCATENATED MODULE: ./components/quiz/Questions.js
const questions = [
    {
        questionText: "二人が初めて会った場所は池袋の何口？",
        questionEnText: "Where did the bride and groom /\n/ first meet at Ikebukuro Station?",
        answerOptions: [
            {
                answerText: "北口 / North exit",
                isCorrect: false
            },
            {
                answerText: "西口 / West exit",
                isCorrect: true
            },
            {
                answerText: "南口 / South exit",
                isCorrect: false
            },
            {
                answerText: "東口 / East exit",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "二人が出会ってから今日は何日目？",
        questionEnText: "How many days are today /\n/ since the bride and groom met?",
        answerOptions: [
            {
                answerText: "1020日 / 1020 days",
                isCorrect: false
            },
            {
                answerText: "3020日 / 3020 days",
                isCorrect: false
            },
            {
                answerText: "920日 / 920 days",
                isCorrect: false
            },
            {
                answerText: "2020日 / 2020 days",
                isCorrect: true
            }
        ]
    },
    {
        questionText: "この中で二人が行ったことのない国は？",
        questionEnText: "Which country has the bride and groom /\n/ never been to together?",
        answerOptions: [
            {
                answerText: "イタリア / Italy",
                isCorrect: false
            },
            {
                answerText: "オランダ / Netherlands",
                isCorrect: false
            },
            {
                answerText: "ドイツ / Germany",
                isCorrect: true
            },
            {
                answerText: "アイルランド / Ireland",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "新郎がプロポーズ時に新婦に/\n/プレゼントしたバラの本数は何本？",
        questionEnText: "How many roses did the groom /\n/ give the bride when he proposed?",
        answerOptions: [
            {
                answerText: "1本 / One rose",
                isCorrect: false
            },
            {
                answerText: "108本 / 108 roses",
                isCorrect: false
            },
            {
                answerText: "24本 / 24 roses",
                isCorrect: true
            },
            {
                answerText: "12本 / Dozen rose",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "",
        questionEnText: "",
        answerOptions: [
            {
                answerText: "",
                isCorrect: true
            },
            {
                answerText: "",
                isCorrect: true
            },
            {
                answerText: "",
                isCorrect: true
            },
            {
                answerText: "",
                isCorrect: true
            }
        ]
    }
];
/* harmony default export */ const Questions = (questions);

;// CONCATENATED MODULE: ./components/quiz/QuizBody.jsx





const Quiz = ({ setScore , score , setShowScore  })=>{
    const [currentQuestion, setCurrentQuestion] = (0,external_react_.useState)(0);
    const [isCorrect, setIsCorrect] = (0,external_react_.useState)(false);
    const [isActive, setIsActive] = (0,external_react_.useState)(false);
    const [question, setQuestion] = (0,external_react_.useState)("");
    const [enQuestionEn, setEnQuestion] = (0,external_react_.useState)("");
    const handleAnswerButtonClick = (isCorrect)=>{
        setIsActive(true);
        if (isCorrect === true) {
            setIsCorrect(true);
            setScore(score + 1);
        } else {
            setIsCorrect(false);
        }
        setTimeout(()=>{
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < Questions.length) {
                setIsCorrect(false);
                setIsActive(false);
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }, "2000");
    };
    (0,external_react_.useEffect)(()=>{
        const splitQuestion = Questions[currentQuestion].questionText.split("/");
        const splitEnQuestion = Questions[currentQuestion].questionEnText.split("/");
        const editEnQuestion = splitEnQuestion.map((editEnQuestion, index)=>{
            if (editEnQuestion === "\\n") {
                return /*#__PURE__*/ jsx_runtime.jsx("br", {});
            } else {
                return /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "custom-font text-md",
                    children: editEnQuestion
                }, index);
            }
        });
        const editQuestion = splitQuestion.map((editQuestion, index)=>{
            if (editQuestion === "\\n") {
                return /*#__PURE__*/ jsx_runtime.jsx("br", {});
            } else {
                return /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "custom-font text-md",
                    children: editQuestion
                }, index);
            }
        });
        setQuestion(editQuestion);
        setEnQuestion(editEnQuestion);
    }, [
        currentQuestion
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mt-[4em] mb-[3em]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "mb-[1em] text-2xl font-semibold",
                            children: [
                                "第",
                                currentQuestion + 1,
                                "問"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-[0.5em]",
                            children: [
                                " ",
                                question
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: enQuestionEn
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "mt-[3rem] mb-[4em]",
                    children: [
                        isCorrect && isActive ? /*#__PURE__*/ jsx_runtime.jsx(bs_namespaceObject.BsCircle, {
                            size: 200,
                            color: "#ff0000",
                            className: "absolute inset-0 m-auto "
                        }) : null,
                        !isCorrect && isActive ? /*#__PURE__*/ jsx_runtime.jsx(rx_namespaceObject.RxCross2, {
                            size: 280,
                            color: "#0000ff",
                            className: "absolute inset-0 m-auto "
                        }) : null,
                        Questions[currentQuestion].answerOptions.map((answerOption, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "my-[2em] mx-[1rem]",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "w-[11em] h-[2.25em] bg-[#9E76B4] text-white rounded-xl",
                                    onClick: ()=>handleAnswerButtonClick(answerOption.isCorrect),
                                    children: answerOption.answerText
                                }, key)
                            }))
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const QuizBody = (Quiz);


/***/ }),

/***/ 8227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuizBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6763);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_usePatchUsers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_usePatchUsers__WEBPACK_IMPORTED_MODULE_4__]);
_api_usePatchUsers__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const QuizForm = ({ userData  })=>{
    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [showScore, setShowScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [patchUsers] = (0,_api_usePatchUsers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (showScore === false) return;
        patchUsers(userData.id, score);
    }, [
        showScore
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center justify-center bg-white w-[90%] h-[40rem] rounded-xl ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center",
                children: showScore ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "お疲れ様でした!",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        class: "correct",
                                        children: [
                                            "5問中",
                                            score,
                                            "問"
                                        ]
                                    }),
                                    "正解です"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-[3rem]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/home/${userData.id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "px-[1rem] text-white bg-[#9E76B4] rounded-xl hover:opacity-50",
                                    children: "ホームに戻る"
                                })
                            })
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuizBody__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        setScore: setScore,
                        score: score,
                        setShowScore: setShowScore
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const usePatchUsers = ()=>{
    const [isPatchLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    async function patchUsers(id, score) {
        const headers = {
            "Content-Type": "application/json"
        };
        const body = {
            id: id,
            correct: score,
            status: 1
        };
        setIsLoading(true);
        const url = `${"http://localhost:3000"}/api/user/${id}`;
        try {
            await axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(url, body, {
                headers: headers
            });
        } catch (error) {
            if (!error?.response) {
                console.log("Error: ", error);
            } else {
                console.log(error.response);
            }
        } finally{
            setIsLoading(false);
        }
    }
    return [
        patchUsers,
        isPatchLoading
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePatchUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserDetails),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_quiz_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_quiz_Index__WEBPACK_IMPORTED_MODULE_3__]);
_components_quiz_Index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function UserDetails(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_quiz_Index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            userData: props.userData
        })
    });
}
const getStaticPaths = async ()=>{
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const userCollection = db.collection("users");
    const users = await userCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: "blocking",
        paths: users.map((user)=>({
                params: {
                    id: user._id.toString()
                }
            }))
    };
};
const getStaticProps = async (context)=>{
    const id = context.params.id;
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const userCollection = db.collection("users");
    const selectedUser = await userCollection.findOne({
        _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)
    });
    client.close();
    return {
        props: {
            userData: {
                id: selectedUser._id.toString(),
                name: selectedUser.name,
                status: selectedUser.status,
                correct: selectedUser.correct,
                message: selectedUser.message
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 888:
/***/ ((module) => {

module.exports = require("react-spinners/BarLoader");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,299], () => (__webpack_exec__(597)));
module.exports = __webpack_exports__;

})();