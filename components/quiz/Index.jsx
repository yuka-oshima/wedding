import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Loader } from "../lib/useLoadingSpinner";
import QuizForm from "./QuizForm";
import useGetUser from "../home/api/useGetUser";

const QuizIndex = () => {
  const [isLoading, userData, getUser] = useGetUser();
  const router = useRouter();
  useEffect(() => {
    if (router.query.id === undefined) return;
    getUser(router.query.id);
  }, []);


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
