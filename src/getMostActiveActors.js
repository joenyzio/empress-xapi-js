import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const getMostActiveActors = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const actors = await collection
      .aggregate([
        { $group: { _id: '$actor.mbox', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray();

    logger.info('Most active actors retrieved successfully.');
    return actors;
  } catch (error) {
    logger.error('Error fetching most active actors:', error);
    return null;
  } finally {
    await client.close();
  }
};
