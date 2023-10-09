import { client, connect } from './connect';
import { logger } from './logger';

export const getMostActiveActors = async () => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const actors = await collection
      .aggregate([
        { $group: { _id: '$actor.mbox', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray();

    console.log(actors);
    return actors;
  } catch (error) {
    logger.error('Error fetching most active actors:', error);
  } finally {
    await client.close();
  }
};
