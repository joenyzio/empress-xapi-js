import { client, connect, disconnect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const aggregateStatements = async (pipeline) => {
  let isConnected = false;

  try {
    // Connect if not already connected
    if (!client.isConnected()) {
      await connect();
      isConnected = true;
    }

    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.aggregate(pipeline).toArray();

    // For demo purposes, if this was a one-time connection
    if (isConnected) {
      await disconnect();
    }

    return result;
  } catch (error) {
    logger.error('Error during aggregation:', error);
    throw new Error('Aggregation failed. Check logs for more details.');
  }
};
