import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const listAllActors = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const actors = await collection.distinct('actor.mbox');

    logger.info(`Retrieved ${actors.length} unique actors.`);
    return actors;
  } catch (error) {
    logger.error('Error fetching unique actors:', error);
    return null;
  } finally {
    await client.close();
  }
};
