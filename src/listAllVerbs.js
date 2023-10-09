import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const listAllVerbs = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const verbs = await collection.distinct('verb.id');

    logger.info(`Retrieved ${verbs.length} unique verbs.`);
    return verbs;
  } catch (error) {
    logger.error('Error fetching unique verbs:', error);
    return null;
  } finally {
    await client.close();
  }
};
