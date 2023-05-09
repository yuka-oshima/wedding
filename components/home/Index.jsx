import React, { useEffect, useState } from "react";
import { Loader } from "../lib/useLoadingSpinner";
import Greeting from "./Greeting";
import HomeTitle from "./HomeTitle";
import Information from "./Information";
import useGetUser from "./api/useGetUser";
import clientPromise from "../../lib/mongo";

export async function getStaticPaths(context){
  const id = context.query.id;
  const mongoClient = await clientPromise;
  const data = await mongoClient
  .db("wedding")
  .collection("users")
  .findOne({ uuid: id });
  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    }
  }
}

const Index = ({data}) => {
  const [isActiveLoader, setIsActiveLoader] = useState(true);
  // const [, userInfo] = useGetUser();

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
          <Greeting userInfo={data} />
          <Information userInfo={data} />
        </>
      )}
    </>
  );
};

export default Index;
