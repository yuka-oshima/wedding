import React from "react";
import clientPromise from "../../../lib/mongo";
import Index from "../../../components/home/Index";

export async function getServerSideProps(context){
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

const Home = (data) => {
  return (
    <>
      <Index data={data}/>
    </>
  );
};

export default Home;
