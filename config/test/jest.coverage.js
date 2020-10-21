const base = require('./jest');

module.exports = {
  ...base,
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 90,
    },
    'src/**/*.hooks.ts': {
      branches: 100,
    },
  },
  coveragePathIgnorePatterns: ['node_modules', 'src/api.ts'],
  collectCoverageFrom: ['**/*.{ts,tsx}'],
};
