import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME; // If needed elsewhere
const YOUR_MAX_SIZE = parseInt(process.env.DB_MAX_SIZE || '1000000000', 10);

export const checkDatabaseHealth = async () => {
  let isConnected = false;

  try {
    await connect();
    isConnected = true;

    const stats = await client.db(dbName).stats();

    if (stats.storageSize > YOUR_MAX_SIZE) {
      logger.warn('Database size exceeds recommended limit!');
    } else {
      logger.info('Database health is good.');
    }
  } catch (error) {
    logger.error('Error during health check:', error);
  } finally {
    if (isConnected) {
      await client.close();
    }
  }
};
