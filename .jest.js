const libDir = 'lib'; //process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  'node_modules\/[^/]+?\/(?!(es|node_modules)\/)', // Ignore modules without es dir
];

module.exports = {
  setupFiles: [
    'raf/polyfill',
    './tests/setup.js'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'md',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '\\.js$': './node_modules/yuso-tools/lib/jest/codePreprocessor',
    '\\.md$': './node_modules/yuso-tools/lib/jest/demoPreprocessor',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.{js}",
    "!**/node_modules/**",
  ],
  transformIgnorePatterns,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  reporters: [
    'default',
    'jest-spec-reporter'
  ],
};