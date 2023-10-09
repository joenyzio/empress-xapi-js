import { client } from './dbClient';

export const disconnect = async () => {
  if (client.isConnected()) {
    await client.close();
  }
};
