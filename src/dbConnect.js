import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URI;

let db = null;

export const connectDB = async () => {
  if (db) return db;

  const client = new MongoClient(url);
  await client.connect();
  db = client.db();
  return db;
};
