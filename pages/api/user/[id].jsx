import clientPromise from "../../../lib/mongo";

const handler = async (req, res) => {
  const mongoClient = await clientPromise;
  const id = req.query.id;
  //reqにstatusとcorrectが入っている場合は更新処理
  if (req.body.status) {
    try {
      const data = await mongoClient
        .db("wedding")
        .collection("users")
        .findOneAndUpdate(
          { uuid: id },
          { $set: { status: req.body.status, correct: req.body.correct } }
        );
      const result = res.status(200).json(JSON.parse(JSON.stringify(data)));
      return result;
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  } else {
    try {
      const data = await mongoClient
        .db("wedding")
        .collection("users")
        .findOne({ uuid: id });
      const result = res.status(200).json(JSON.parse(JSON.stringify(data)));
      return result;
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

export default handler;
