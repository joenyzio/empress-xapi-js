import { client, connect } from './connect';
import { logger } from './logger';
import { validate } from './validation';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const bulkStoreStatements = async (data) => {
  let isConnected = false;

  try {
    await connect();
    isConnected = true;

    const collection = client.db(dbName).collection(collectionName);

    const validData = data.filter((entry) => validate(entry));
    if (!validData.length) {
      throw new Error('No valid records found');
    }

    await collection.insertMany(validData);
    logger.info(`${validData.length} records inserted successfully`);
  } catch (error) {
    logger.error('Error during bulk store:', error);
  } finally {
    if (isConnected) {
      await client.close();
    }
  }
};
