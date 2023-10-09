import { client, connect } from './connect';
import { logger } from './logger';

export const listAllActors = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const actors = await collection.distinct('actor.mbox');
    console.log(actors);
    return actors;
  } catch (error) {
    logger.error('Error fetching unique actors:', error);
  } finally {
    await client.close();
  }
};
