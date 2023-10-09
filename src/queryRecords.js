import { client, connect } from './connect';
import { logger } from './logger';

export const queryRecords = async (filter) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const results = await collection.find(JSON.parse(filter)).toArray();
    console.log(results);
  } catch (error) {
    logger.error('Error while querying records:', error);
  }
};
