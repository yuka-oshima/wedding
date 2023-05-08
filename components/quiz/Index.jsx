import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useGetUser from "../home/api/useGetUser";
import { Loader } from "../lib/useLoadingSpinner";
import QuizForm from "./QuizForm";

const QuizIndex = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [, userInfo, getUser] = useGetUser();
  const router = useRouter();

  useEffect(() => {
    if (router.query.index === undefined) return;
    const uuid = router.query.index;
    getUser(uuid);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [router]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader width={150} height={7} className="" isLoading={isLoading} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
          <QuizForm userInfo={userInfo} />
        </div>
      )}
    </>
  );
};

export default QuizIndex;
