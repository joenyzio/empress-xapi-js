import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const setStatementAuthority = async (statementId, authority) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.updateOne(
      { _id: statementId },
      { $set: { authority: authority } },
    );

    if (result.matchedCount === 0) {
      logger.warn(`No statements found with ID: ${statementId}`);
    } else {
      logger.info(`Authority updated for statement with ID: ${statementId}`);
    }
  } catch (error) {
    logger.error('Error setting statement authority:', error);
  } finally {
    await client.close();
  }
};
