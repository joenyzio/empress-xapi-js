import { MongoClient } from 'mongodb';

let clientInstance = null;

// Dynamically import and configure dotenv
import('dotenv/config')
  .then(() => {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error('Environment variable MONGO_URI is not set');
    }

    clientInstance = new MongoClient(uri);
  })
  .catch((error) => {
    console.error("Error importing 'dotenv/config':", error);
  });

export const client = clientInstance;
