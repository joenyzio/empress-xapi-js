import { client, connect } from './connect';
import { logger } from './logger';

export const listAllObjectTypes = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const objectTypes = await collection.distinct('object.objectType');
    return objectTypes;
  } catch (error) {
    logger.error('Error fetching object types:', error);
  } finally {
    await client.close();
  }
};
