import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

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

    if (averageScore.length) {
      logger.info(
        `Average score for activity ${activityId}: ${averageScore[0].avgScore}`,
      );
      return averageScore[0].avgScore;
    } else {
      logger.warn(`No data found for activity ${activityId}`);
      return null;
    }
  } catch (error) {
    logger.error('Error getting average score:', error);
    return null;
  } finally {
    await client.close();
  }
};
