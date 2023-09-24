module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Adjust this to your project's source directory
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
};