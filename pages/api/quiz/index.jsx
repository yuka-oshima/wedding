import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const userCollection = db.collection("users");
  try{
  const users = await userCollection.findOneAndUpdate(
            { _id: new ObjectId(req.body.id) },
            { $set: { status: req.body.status, correct: req.body.correct } }
          );
  client.close();
  const result = res.status(200).json(JSON.parse(JSON.stringify(users)));
      return result;
  }catch(err){
    return res.status(500).json({ message: err.message });
  }
  
};
