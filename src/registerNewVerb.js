import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;

export const registerNewVerb = async (verb, definition) => {
  try {
    await connect();
    const collection = client.db(dbName).collection('verbs');
    await collection.insertOne({ verb, definition });

    logger.info(`Registered new verb: ${verb}`);
  } catch (error) {
    logger.error('Error during verb registration:', error);
  } finally {
    await client.close();
  }
};
