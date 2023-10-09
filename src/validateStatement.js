import { validate } from './validation';
import { logger } from './logger';

export const validateStatement = (data) => {
  const isValid = validate(data);
  if (isValid) {
    logger.info('Statement validation successful.');
    return { valid: true };
  } else {
    logger.warn('Statement validation failed.', validate.errors);
    return { valid: false, errors: validate.errors };
  }
};
