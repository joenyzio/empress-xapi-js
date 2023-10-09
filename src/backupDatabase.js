import { logger } from './logger';
import { exec } from 'child_process';
require('dotenv').config();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

export const backupDatabase = (destinationPath) => {
  if (!uri || !dbName) {
    logger.error(
      'Mongo URI or database name missing in environment variables.',
    );
    throw new Error('Configuration error. Check your environment variables.');
  }

  const cmd = `mongodump --uri=${uri} --db=${dbName} --out=${destinationPath}`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      logger.error('Error during database backup:', error);
      throw new Error(
        'Failed to backup the database. Check logs for more details.',
      );
    }
    logger.info(`Database backed up successfully to ${destinationPath}`);
  });
};
