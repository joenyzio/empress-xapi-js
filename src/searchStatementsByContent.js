import { client, connect } from './connect';
import { logger } from './logger';

export const searchStatementsByContent = async (query) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const results = await collection
      .find({ $text: { $search: query } })
      .toArray();
    return results;
  } catch (error) {
    logger.error('Error during full-text search:', error);
  } finally {
    await client.close();
  }
};
