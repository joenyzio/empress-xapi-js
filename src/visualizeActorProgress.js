import { client, connect, dbName, collectionName } from './connect';
import { logger } from './logger';

export const visualizeActorProgress = async (actorId) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const progressData = await collection
      .find({ 'actor.id': actorId })
      .sort({ timestamp: 1 })
      .toArray();

    logger.info('Successfully retrieved actor progress data.');
    return progressData;
  } catch (error) {
    logger.error('Error visualizing actor progress:', error);
  } finally {
    await client.close();
  }
};
