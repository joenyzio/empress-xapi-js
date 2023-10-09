import { client, connect } from './connect';
import { logger } from './logger';
import { validate } from './validation';

export const bulkInsert = async (data) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);

    const validData = data.filter((entry) => validate(entry));
    if (!validData.length) {
      throw new Error('No valid records found');
    }

    await collection.insertMany(validData);
    logger.info(`${validData.length} records inserted successfully`);
  } catch (error) {
    logger.error('Error during bulk insert:', error);
  }
};
