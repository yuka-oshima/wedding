import clientPromise from "../../../lib/mongo";

export async function getServerSideProps(context){
  const mongoClient = await clientPromise;
  const data = await mongoClient
  .db("wedding")
  .collection("users")
  .find({})
  .toArray();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    }
  }
}


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
