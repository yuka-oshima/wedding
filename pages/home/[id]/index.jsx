import React from "react";
import Index from "../../../components/home/Index";
import clientPromise from "../../../lib/mongo";


export default function ({post}){
  return (
    <>
      <Index data={post}/>
    </>
  );
}

export const getStaticPaths = async () => {
  const mongoClient = await clientPromise;
  const data = await mongoClient
    .db("wedding")
    .collection("users")
    .find({})
    .toArray();
  const posts = JSON.parse(JSON.stringify(data));

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }))
  return { paths, fallback: false }
}


export const getStaticProps = async ({ params }) => {  
  const mongoClient = await clientPromise;
  const data = await mongoClient
    .db("wedding")
    .collection("users")
    .findOne({ id: Number(params.id) } )
    .toArray()
  const post = JSON.parse(JSON.stringify(data));

  return {
    props: {
      post
    },
  }
}