module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // For Node.js environment variables
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Prettier recommended settings
  ],
  parser: '@babel/eslint-parser', // Use the modern Babel parser for ESLint
  parserOptions: {
    ecmaVersion: 2021, // Specify ECMAScript year
    sourceType: 'module', // Treat files as ES modules
    requireConfigFile: false,
  },
  rules: {
    // Your ESLint rules
  },
};
