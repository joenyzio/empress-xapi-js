import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const listAllExtensions = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const extensions = await collection.distinct('object.extensions');

    logger.info(`Retrieved ${extensions.length} unique extensions.`);
    return extensions;
  } catch (error) {
    logger.error('Error listing all extensions:', error);
    return null;
  } finally {
    await client.close();
  }
};
