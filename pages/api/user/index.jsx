import clientPromise from "../../../lib/mongo";


const handler = async (req, res) => {
  const mongoClient = await clientPromise;
  try {
    const data = await mongoClient
      .db("wedding")
      .collection("users")
      .find({})
      .toArray();
    const result = res.status(200).json(JSON.parse(JSON.stringify(data)));
    return result;
  } catch (err) {
    
    return res.status(500).json({ message: err.message });
  }
};

export default handler;

// api/new-meetup
// import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     //const { title, image, address, description } = data;

//     const client = await MongoClient.connect(process.env.MONGO_DB_MEETUPS);
//     const db = client.db();

//     const meetupsCollection = db.collection("meetups");
//     const result = await meetupsCollection.insertOne(data);

//     client.close();

//     res.status(201).json({ mess
// client.close();

//     res.status(201).json({ message: "Meetup inserted!" });
//   }
// }

// api/new-meetup
// async function addMeetupHandler(data) {
//   const response = await fetch("/api/new-meetup", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const resData = await response.json();

//   router.push("/");
// }