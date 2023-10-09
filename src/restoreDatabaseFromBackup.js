import { logger } from './logger';
import { exec } from 'child_process';
require('dotenv').config();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

export const restoreDatabaseFromBackup = (backupPath) => {
  const cmd = `mongorestore --uri=${uri} --db=${dbName} ${backupPath}/${dbName}`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      logger.error('Error during database restore:', error);
      return;
    }
    logger.info('Database restored successfully from backup.');
  });
};
