import { MongoClient } from 'mongodb';
require('dotenv').config();

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('Environment variable MONGO_URI is not set');
}

export const client = new MongoClient(uri);
