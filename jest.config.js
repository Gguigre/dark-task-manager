module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFiles: ['./jest/jest.setup.js', './node_modules/react-native-gesture-handler/jestSetup.js'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-navigation|react-navigation|@react-native-community/async-storage/(?!(lib)))',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/environment'],
  collectCoverage: true,
};
