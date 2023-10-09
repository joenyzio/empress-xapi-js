import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const getLRSStats = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const count = await collection.countDocuments();

    logger.info(`Total statements in LRS: ${count}`);
    return count;
  } catch (error) {
    logger.error('Error retrieving LRS stats:', error);
    return null;
  } finally {
    await client.close();
  }
};
