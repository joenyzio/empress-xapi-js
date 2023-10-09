import { client, connect } from './connect';
import { logger } from './logger';

export const visualizeVerbUsage = async (filter) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const verbUsage = await collection
      .aggregate([
        { $match: filter },
        { $group: { _id: '$verb.id', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray();

    console.log(verbUsage);
    return verbUsage;
  } catch (error) {
    logger.error('Error visualizing verb usage:', error);
  } finally {
    await client.close();
  }
};
