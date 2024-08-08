import { ChangeTypeOfKeys, IsString } from './types';

// Below are the env. vars where we have a known default values
// If not passed, the app will NOT throw error
// key - env var
// value - default value
const optionalEnv = {

    PORT: 3001,
    NODE_ENV: process.env.NODE_ENV,

};

type OptionalEnv = ChangeTypeOfKeys<Record<keyof typeof optionalEnv, string>, 'NODE_ENV', 'development' | 'production'>;

const stringVal = '';
const numberVal = 0;

type IsStringVal = IsString<typeof stringVal>;
type IsAnotherStringVal = IsString<typeof numberVal>;