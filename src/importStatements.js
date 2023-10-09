import { bulkStoreStatements } from './bulkStoreStatements';
import { logger } from './logger';
import fs from 'fs';

export const importStatements = async (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContent);
    await bulkStoreStatements(jsonData);
  } catch (error) {
    logger.error('Error during import:', error);
  }
};
