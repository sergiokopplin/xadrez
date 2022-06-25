module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  coveragePathIgnorePatterns: ["/node_modules/"],

  // Sonar Cloud Setup
  testResultsProcessor: "jest-sonar-reporter",

  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.test.ts"],
  coverageThreshold: {
    global: {
      branches: 93,
      functions: 93,
      lines: 93,
      statements: 93,
    },
  },
};
