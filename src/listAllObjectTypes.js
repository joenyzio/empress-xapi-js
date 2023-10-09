import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const listAllObjectTypes = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const objectTypes = await collection.distinct('object.objectType');

    logger.info(`Retrieved ${objectTypes.length} unique object types.`);
    return objectTypes;
  } catch (error) {
    logger.error('Error fetching object types:', error);
    return null;
  } finally {
    await client.close();
  }
};
