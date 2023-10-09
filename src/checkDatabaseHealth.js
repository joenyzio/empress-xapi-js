import { client, connect } from './connect';
import { logger } from './logger';

const YOUR_MAX_SIZE = 1000000000;

export const checkDatabaseHealth = async () => {
  try {
    await connect();
    const stats = await client.db(dbName).stats();

    if (stats.storageSize > YOUR_MAX_SIZE) {
      logger.warn('Database size exceeds recommended limit!');
    } else {
      logger.info('Database health is good.');
    }
  } catch (error) {
    logger.error('Error during health check:', error);
  } finally {
    await client.close();
  }
};
