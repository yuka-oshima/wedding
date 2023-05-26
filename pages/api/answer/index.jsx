import clientPromise from "../../../lib/mongo";


export default async function handler(req, res) {
  const mongoClient = await clientPromise;
  try {
    const data = await mongoClient
      .db("wedding")
      .collection("test")
      .find({})
      .toArray();
    const result = res.status(200).json(JSON.parse(JSON.stringify(data)));
    return result;
  } catch (err) {
    
    return res.status(500).json({ message: err.message });
  }
};
