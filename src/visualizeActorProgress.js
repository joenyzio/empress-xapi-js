import { client, connect } from './connect';
import { logger } from './logger';

export const visualizeActorProgress = async (actorId) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const progressData = await collection
      .find({ 'actor.id': actorId })
      .sort({ timestamp: 1 })
      .toArray();

    console.log(progressData);
    return progressData;
  } catch (error) {
    logger.error('Error visualizing actor progress:', error);
  } finally {
    await client.close();
  }
};
