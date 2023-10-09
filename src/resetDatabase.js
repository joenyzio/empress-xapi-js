import { client, connect } from './connect';
import { logger } from './logger';
import inquirer from 'inquirer';
require('dotenv').config();

const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

export const resetDatabase = async () => {
  try {
    const response = await inquirer.prompt({
      type: 'confirm',
      name: 'reset',
      message: 'WARNING: This will purge all records. Are you sure?',
    });

    if (response.reset) {
      await connect();
      const result = await client
        .db(dbName)
        .collection(collectionName)
        .deleteMany({});

      logger.info(`Deleted ${result.deletedCount} records.`);
    } else {
      logger.info('Database reset cancelled.');
    }
  } catch (error) {
    logger.error('Error during database reset:', error);
  } finally {
    await client.close();
  }
};
