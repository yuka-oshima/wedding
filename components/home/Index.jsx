import React from "react";
import { Loader } from "../lib/useLoadingSpinner";
import Greeting from "./Greeting";
import HomeTitle from "./HomeTitle";
import Information from "./Information";
import Carousel from "./Carousel";
import useGetUser from "./api/useGetUser";

const Index = () => {
  const [isLoading, userData] = useGetUser();

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader
            width={150}
            height={7}
            className=""
            isLoading={isLoading}
          />
        </div>
      ) : (
        <>
          <HomeTitle />
          <Greeting userData={userData} />
          <Carousel />
          <Information userData={userData} />
        </>
      )}
    </>
  );
};

export default Index;
