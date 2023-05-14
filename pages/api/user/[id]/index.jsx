import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const userCollection = db.collection("users");
  const id = req.query.id;
  try {
    const users = await userCollection.findOne({
      _id: new ObjectId(id),
    });
    client.close();
    const result = res.status(200).json(JSON.parse(JSON.stringify(users)));
    return result;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
