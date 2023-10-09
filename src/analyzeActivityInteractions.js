import { client, connect } from './connect';
import { logger } from './logger';

export const analyzeActivityInteractions = async (activityId) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const interactions = await collection
      .find({ 'object.id': activityId })
      .toArray();
    console.log(interactions);
    return interactions;
  } catch (error) {
    logger.error('Error analyzing activity interactions:', error);
  } finally {
    await client.close();
  }
};
