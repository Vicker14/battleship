module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.m?js$': 'babel-jest'
  },
  moduleFileExtensions: ['js','json'],
  roots: ['<rootDir>/src']
};
