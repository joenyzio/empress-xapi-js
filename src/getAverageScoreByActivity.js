import { client, connect } from './connect';
import { logger } from './logger';

export const getAverageScoreByActivity = async (activityId) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const averageScore = await collection
      .aggregate([
        { $match: { 'object.id': activityId } },
        { $group: { _id: null, avgScore: { $avg: '$result.score.scaled' } } },
      ])
      .toArray();

    console.log(averageScore[0].avgScore);
    return averageScore[0].avgScore;
  } catch (error) {
    logger.error('Error getting average score:', error);
  } finally {
    await client.close();
  }
};
