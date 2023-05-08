
import React, { useState } from "react";
import Quiz from "./QuizBody";
import Link from "next/link";
import usePatchUsers from "./api/usePatchUsers";
import { useEffect } from "react";

const QuizForm = ({userInfo}) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [patchUsers] = usePatchUsers();

  useEffect(() => {
    if (showScore === false) return;
    patchUsers(userInfo.uuid,score)
  }, [showScore]);

  return (
    <>
      <div className="flex items-center justify-center bg-white w-[90%] h-[40rem] rounded-xl ">
        <div className="text-center">
          {showScore ? (
            <div className="">
              <div>
                <p>
                  お疲れ様でした!<br></br>
                  <span class="correct">5問中{score}問</span>正解です
                </p>
              </div>
              <div className="mt-[3rem]">
                <Link href={`/home/${userInfo.uuid}`}>
                  <button
                    className="px-[1rem] text-white bg-[#9E76B4] rounded-xl hover:opacity-50"
                  >
                    ホームに戻る
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
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizForm;