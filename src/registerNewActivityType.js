import { client, connect } from './connect';
import { logger } from './logger';

export const registerNewActivityType = async (type, definition) => {
  try {
    await connect();
    const collection = client.db(dbName).collection('activityTypes');
    await collection.insertOne({ type, definition });
    logger.info(`Registered new activity type: ${type}`);
  } catch (error) {
    logger.error('Error during activity type registration:', error);
  } finally {
    await client.close();
  }
};
