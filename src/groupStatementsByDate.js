import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

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

    logger.info(
      `Grouped statements by date. Retrieved ${results.length} groupings.`,
    );
    return results;
  } catch (error) {
    logger.error('Error grouping statements by date:', error);
    return null;
  } finally {
    await client.close();
  }
};
