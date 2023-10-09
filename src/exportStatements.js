import { client, connect } from './connect';
import { logger } from './logger';
import fs from 'fs';
import { Parser } from 'json2csv';

export const exportStatements = async (filter, format) => {
  try {
    await connect();
    const collection = client.db(dbName).collection(collectionName);
    const results = await collection.find(JSON.parse(filter)).toArray();
    switch (format.toLowerCase()) {
      case 'csv':
        const parser = new Parser();
        const csv = parser.parse(results);
        fs.writeFileSync('exported_statements.csv', csv);
        break;
      case 'json':
      default:
        fs.writeFileSync(
          'exported_statements.json',
          JSON.stringify(results, null, 2),
        );
        break;
    }
    logger.info(`Exported statements in ${format} format.`);
  } catch (error) {
    logger.error('Error during export:', error);
  } finally {
    await client.close();
  }
};
