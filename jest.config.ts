import type {Config} from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    testMatch: ['**/*.spec.ts'],
    moduleDirectories: ['node_modules', 'src'],
    transform: {
      '^.+\\.ts?$': 'ts-jest'
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    verbose: false,
    reporters: [
      'default',
      // "jest-html-reporters"
    ],
  }
};
