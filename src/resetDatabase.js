import { client, connect } from './connect';
import { logger } from './logger';
import inquirer from 'inquirer';

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
      console.log(`Deleted ${result.deletedCount} records.`);
    } else {
      console.log('Database reset cancelled.');
    }
  } catch (error) {
    logger.error('Error during database reset:', error);
  } finally {
    await client.close();
  }
};
