import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Loader } from "../lib/useLoadingSpinner";
import QuizForm from "./QuizForm";

const QuizIndex = ({userData}) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [router]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader width={150} height={7} className="" isLoading={isLoading} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
          <QuizForm userData={userData} />
        </div>
      )}
    </>
  );
};

export default QuizIndex;
