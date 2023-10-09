import { logger } from './logger';
import { exec } from 'child_process';

export const backupDatabase = (destinationPath) => {
  const cmd = `mongodump --uri=${uri} --db=${dbName} --out=${destinationPath}`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      logger.error('Error during database backup:', error);
      return;
    }
    console.log(`Database backed up successfully to ${destinationPath}`);
  });
};
