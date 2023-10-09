import { client } from './dbClient';
import { logger } from './logger';

export const connect = async () => {
  if (!client.isConnected()) {
    try {
      await client.connect();
    } catch (error) {
      logger.error('Could not connect to MongoDB:', error);
      throw new Error('Could not connect to MongoDB');
    }
  }
};
