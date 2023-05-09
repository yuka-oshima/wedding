import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import Index from "../../../components/home/Index";

export default function UserDetails(props) {
  return (
    <>
      <p>{props.userData.id}</p>
    </>
  );
}

// export default ({ post }) => {
//   return (
//     <>
//       <Index data={post} />
//     </>
//   );
// };

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

  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`);
  // const posts = await res.json();
  // const paths = posts.map((post) => ({
  //   params: {
  //     id: post.id.toString(),
  //   },
  // }));
  // return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const userCollection = db.collection("users");

  const selectedUser = await userCollection.findOne({
    _id: new ObjectId(id),
  });

  console.log(selectedUser);
  client.close();

  //6454d3020cfa5737e3472c87

  return {
    props: {
      userData: {
        id: selectedUser._id.toString(),
      },
    },
  };

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/user/${params}`
  // );
  // const post = await res.json();
  // return {
  //   props: {
  //     post,
  //   },
  // };
};
