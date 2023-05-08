import { MongoClient } from "mongodb";


if (!process.env.MONGO_URI) {
  throw new Error("Invalid environment variable MONGO_URI");
}
const URI = process.env.MONGO_URI;
const options = {};
if (!URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );
}
let client;
let clientPromise;
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(URI, options);
  clientPromise = client.connect();
}

export default clientPromise;
