import { validate } from './validation';

export const validateStatement = (data) => {
  const isValid = validate(data);
  if (isValid) {
    return { valid: true };
  } else {
    return { valid: false, errors: validate.errors };
  }
};
