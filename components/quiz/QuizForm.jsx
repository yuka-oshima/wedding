import Link from "next/link";
import React, { useEffect, useState } from "react";
import Quiz from "./QuizBody";
import usePatchUsers from "./api/usePatchUsers";

const QuizForm = ({ userData }) => {
  const [score, setScore] = useState(0);
  //どの問題が正解したかを記録する
  const [correctAnswer, setCorrectAnswer] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [showScore, setShowScore] = useState(false);
  const [patchUsers] = usePatchUsers();

  useEffect(() => {
    if (showScore === false) return;
    patchUsers(userData._id, score);
  }, [showScore]);

  return (
    <>
      <div className="flex justify-center bg-white w-[90%] h-[40rem] rounded-xl ">
        <div className="text-center">
          {showScore ? (
            <div className="">
              <img
                src="/images/thankyou.png"
                className="mt-[3em] mb-[2em] w-[17em] h-[17em]"
                alt=""
              />
              <p className="mb-[1em] text-md">スコア / Score</p>
              <div className="flex justify-center">
                <table className="table-fixed">
                  <thead>
                    <tr className="border border-[#000]">
                      <th className="border-[#000] border-r px-4">1</th>
                      <th className="border-[#000] border-r px-4">2</th>
                      <th className="border-[#000] border-r px-4">3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-[#000]">
                      <td className="border-[#000] border-r px-3">
                        {correctAnswer[1] ? "○" : "×"}
                      </td>
                      <td className="border-[#000] border-r px-3">
                        {correctAnswer[2] ? "○" : "×"}
                      </td>
                      <td className="border-[#000] border-r px-3">
                        {correctAnswer[3] ? "○" : "×"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-[3rem]">
                <Link href={`/home/${userData._id}`}>
                  <button className="px-[3em] py-[0.5em] text-white font-semibold bg-[#9E76B4] rounded-xl hover:opacity-50">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <Quiz
                setScore={setScore}
                score={score}
                setShowScore={setShowScore}
                setCorrectAnswer={setCorrectAnswer}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizForm;
