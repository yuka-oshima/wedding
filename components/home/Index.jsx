import React, { useEffect, useState } from "react";
import { Loader } from "../lib/useLoadingSpinner";
import Greeting from "./Greeting";
import HomeTitle from "./HomeTitle";
import Information from "./Information";
import useGetUser from "./api/useGetUser";

const Index = () => {
  const [isActiveLoader, setIsActiveLoader] = useState(true);
  const [, userInfo] = useGetUser();

  useEffect(() => {
    setTimeout(() => {
      setIsActiveLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {isActiveLoader ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader
            width={150}
            height={7}
            className=""
            isLoading={isActiveLoader}
          />
        </div>
      ) : (
        <>
          <HomeTitle />
          <div></div>
          <Greeting userInfo={userInfo} />
          <Information userInfo={userInfo} />
        </>
      )}
    </>
  );
};

export default Index;