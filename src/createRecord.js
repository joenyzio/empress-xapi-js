import { client, connect } from './connect';
import { logger } from './logger';
import { validate } from './validation'; // Assuming you separate validation logic into its own module.

export const createRecord = async (data) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);

    const valid = validate(data);
    if (!valid) {
      throw new Error(`Validation failed: ${JSON.stringify(validate.errors)}`);
    }

    await collection.insertOne(data);
    logger.info('Record created successfully');
  } catch (error) {
    logger.error('Error while creating record:', error);
  }
};
