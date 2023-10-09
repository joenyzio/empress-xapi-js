import { client, connect } from './connect';
import { logger } from './logger';

export const listAllExtensions = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const extensions = await collection.distinct('object.extensions');

    console.log(extensions);
    return extensions;
  } catch (error) {
    logger.error('Error listing all extensions:', error);
  } finally {
    await client.close();
  }
};
