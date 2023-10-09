import { client, connect } from './connect';
import { logger } from './logger';

export const listAllVerbs = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const verbs = await collection.distinct('verb.id');
    console.log(verbs);
    return verbs;
  } catch (error) {
    logger.error('Error fetching unique verbs:', error);
  } finally {
    await client.close();
  }
};
