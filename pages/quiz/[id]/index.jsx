import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import Index from "../../../components/quiz/Index";

export default function UserDetails() {
  return (
    <>
     <Index/>
    </>
  );
}


export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const userCollection = db.collection("users");
  const users = await userCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: users.map((user) => ({
      params: { id: user._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const userCollection = db.collection("users");

  const selectedUser = await userCollection.findOne({
    _id: new ObjectId(id),
  });

  client.close();


  return {
    props: {
      userData: {
        id: selectedUser._id.toString(),
        name: selectedUser.name,
        status: selectedUser.status,
        correct: selectedUser.correct,
        message: selectedUser.message,
      },
    },
  };

};
