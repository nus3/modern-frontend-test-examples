const { runtime } = require('./jest.swc.config');

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true
          },
          transform: {
            react: {
              runtime: 'automatic',
            }
          }
        },
      },
    ],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
