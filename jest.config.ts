import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^routes/(.*)$': '<rootDir>/src/routes/$1',
        '^controllers/(.*)$': '<rootDir>/src/controllers/$1',
        '^models/(.*)$': '<rootDir>/src/models/$1',
        '^services/(.*)$': '<rootDir>/src/services/$1',
        '^middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
        '^utils/(.*)$': '<rootDir>/src/utils/$1',
        '^Config$': '<rootDir>/src/Config',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};

export default config;
