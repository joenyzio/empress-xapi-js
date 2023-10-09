import winston from 'winston';

let loggerInstance = null;

// Dynamically import and configure dotenv (if needed)
import('dotenv/config')
  .then(() => {
    // Initialize Winston logger
    loggerInstance = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console(),
      ],
    });
  })
  .catch((error) => {
    console.error("Error importing 'dotenv/config':", error);
  });

export const logger = loggerInstance;
