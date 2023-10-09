import { client, connect } from './connect';
import { logger } from './logger';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const getStatementsByDuration = async (minDuration, maxDuration) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const statements = await collection
      .find({ duration: { $gte: minDuration, $lte: maxDuration } })
      .toArray();

    logger.info(
      `Retrieved ${statements.length} statements within the specified duration range.`,
    );
    return statements;
  } catch (error) {
    logger.error('Error retrieving statements by duration:', error);
    return null;
  } finally {
    await client.close();
  }
};
