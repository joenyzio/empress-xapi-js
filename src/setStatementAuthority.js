import { client, connect } from './connect';
import { logger } from './logger';

export const setStatementAuthority = async (statementId, authority) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    await collection.updateOne(
      { _id: statementId },
      { $set: { authority: authority } },
    );
  } catch (error) {
    logger.error('Error setting statement authority:', error);
  } finally {
    await client.close();
  }
};
