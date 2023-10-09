import { client, connect, disconnect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const analyzeActivityInteractions = async (activityId) => {
  let isConnected = false;

  try {
    // Connect if not already connected
    if (!client.isConnected()) {
      await connect();
      isConnected = true;
    }

    const collection = client.db(dbName).collection(collectionName);
    const interactions = await collection
      .find({ 'object.id': activityId })
      .toArray();

    // Optionally log interactions or process them further
    logger.info(interactions);

    // For demo purposes, if this was a one-time connection
    if (isConnected) {
      await disconnect();
    }

    return interactions;
  } catch (error) {
    logger.error('Error analyzing activity interactions:', error);
    throw new Error(
      'Failed to analyze activity interactions. Check logs for more details.',
    );
  }
};
