import { client, connect } from './connect';
import { logger } from './logger';

export const groupStatementsByDate = async (filter, granularity) => {
  // This will group by day as an example
  const groupBy = {
    $group: {
      _id: {
        year: { $year: '$timestamp' },
        month: { $month: '$timestamp' },
        day: { $dayOfMonth: '$timestamp' },
      },
      count: { $sum: 1 },
    },
  };

  // Adjust based on granularity...

  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const results = await collection.aggregate([groupBy]).toArray();
    console.log(results);
    return results;
  } catch (error) {
    logger.error('Error grouping statements by date:', error);
  } finally {
    await client.close();
  }
};
