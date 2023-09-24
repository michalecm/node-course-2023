module.exports = {
    // The root directory where Jest should look for tests
    rootDir: './',
  
    // A list of file extensions that Jest should recognize as test files
    testMatch: ['**/*.test.ts', '**/*.spec.ts'],
      
    // Transform files with ts-jest
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {
        tsconfig: 'tsconfig.json', // Path to your TypeScript config file
        configFile: 'ts-jest.config.js', // Path to the ts-jest config file
        // ...other ts-jest options...
      }],
    },
  
    // Module file extensions that Jest should recognize
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
    // An array of file paths or glob patterns that should be excluded from test coverage
    coveragePathIgnorePatterns: ['/node_modules/'],
  
    // An array of file paths or glob patterns that indicate the locations of your test files
    // This example assumes that your test files are located in a directory named "__tests__"
    // and have the file extension ".test.ts" or ".spec.ts"
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  
    // A setup file to run before Jest starts executing your tests
    //setupFiles: ['<rootDir>/jest.setup.js'], // You can create this file if needed
  
    // A map from regular expressions to paths to transformers
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // A list of reporters to use for test results
    reporters: ['default'],
  
    // Whether to collect coverage information while running tests
    collectCoverage: true,
  
    // A list of additional modules that should be included in the coverage report
    // (useful for modules that are not imported directly in your tests)
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.ts'],
  
    // Clear mocks between test runs
    clearMocks: true,
  
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  };
  