// import dynamic from "next/dynamic";
import React from "react";
import Index from "../../components/quiz/Index";

// const QuizIndex = dynamic(() => import("../../components/Quiz/QuizIndex"), {
//   ssr: false,
// });

const Quiz = () => {
  return (
    <>
      <Index />
    </>
  );
};

export default Quiz;
