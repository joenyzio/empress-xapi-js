import { client, connect } from './connect';
import { logger } from './logger';

export const getLRSStats = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const count = await collection.countDocuments();
    console.log(`Total statements in LRS: ${count}`);
  } catch (error) {
    logger.error('Error retrieving LRS stats:', error);
  } finally {
    await client.close();
  }
};
