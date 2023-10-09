import { client, connect } from './connect';
import { logger } from './logger';

export const getStatementsByDuration = async (minDuration, maxDuration) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const statements = await collection
      .find({ duration: { $gte: minDuration, $lte: maxDuration } })
      .toArray();

    console.log(statements);
    return statements;
  } catch (error) {
    logger.error('Error retrieving statements by duration:', error);
  } finally {
    await client.close();
  }
};
