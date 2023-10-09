import { logger } from './logger';
import { exec } from 'child_process';

export const restoreDatabaseFromBackup = (backupPath) => {
  const cmd = `mongorestore --uri=${uri} --db=${dbName} ${backupPath}/${dbName}`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      logger.error('Error during database restore:', error);
      return;
    }
    console.log('Database restored successfully from backup.');
  });
};
