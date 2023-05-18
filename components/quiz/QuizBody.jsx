import React, { useEffect, useState } from "react";
import { BsCircle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import questions from "./Questions";

const Quiz = ({ setScore, score, setShowScore,setCorrectAnswer}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [question, setQuestion] = useState("");
  const [enQuestionEn, setEnQuestion] = useState("");

  const handleAnswerButtonClick = (isCorrect) => {
    setIsActive(true);
    if (isCorrect === true) {
      setIsCorrect(true);
      setScore(score + 1);
      setCorrectAnswer((prev) => {
        return { ...prev, [currentQuestion + 1]: true };
      });
    } else {
      setIsCorrect(false);
      setCorrectAnswer((prev) => {
        return { ...prev, [currentQuestion + 1]: false };
      }
      );
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setIsCorrect(false);
        setIsActive(false);
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, "2000");
  };

  useEffect(() => {
    const splitQuestion = questions[currentQuestion].questionText.split("/");
    const splitEnQuestion =
      questions[currentQuestion].questionEnText.split("/");
    const editEnQuestion = splitEnQuestion.map((editEnQuestion, index) => {
      if (editEnQuestion === "\\n") {
        return <br />;
      } else {
        return (
          <p key={index} className="custom-font text-md">
            {editEnQuestion}
          </p>
        );
      }
    });
    const editQuestion = splitQuestion.map((editQuestion, index) => {
      if (editQuestion === "\\n") {
        return <br />;
      } else {
        return (
          <p key={index} className="custom-font text-md">
            {editQuestion}
          </p>
        );
      }
    });
    setQuestion(editQuestion);
    setEnQuestion(editEnQuestion);
  }, [currentQuestion]);

  return (
    <>
      <div className="">
        <div className="mt-[4em] mb-[3em]">
          <p className="mb-[1em] text-2xl font-semibold">第{currentQuestion + 1}問</p>
          <br />
          <div className="mb-[0.5em]"> {question}</div>
          <div>{enQuestionEn}</div>
        </div>
        <ul className="mt-[3rem] mb-[4em]">
          {isCorrect && isActive ? (
            <BsCircle
              size={200}
              color={"#ff0000"}
              className="absolute inset-0 m-auto "
            />
          ) : null}
          {!isCorrect && isActive ? (
            <RxCross2
              size={280}
              color={"#0000ff"}
              className="absolute inset-0 m-auto "
            />
          ) : null}

          {questions[currentQuestion].answerOptions.map((answerOption, key) => (
            <div className="my-[2em] mx-[1rem]">
              <button
                className="w-[11em] h-[2.25em] bg-[#9E76B4] text-white rounded-xl"
                key={key}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Quiz;
