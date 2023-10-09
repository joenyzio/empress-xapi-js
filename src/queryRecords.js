import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const queryRecords = async (filter) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const results = await collection.find(JSON.parse(filter)).toArray();

    logger.info(`Queried ${results.length} records.`);
    return results;
  } catch (error) {
    logger.error('Error while querying records:', error);
    return null;
  } finally {
    await client.close();
  }
};
