import { IsNotEmptyString, IsString, RemoveReadonly, SwapNumberKeyWithStringValue } from "./types";

export const askBoltError = {

    // Range 1000 - 2000 - Auth errors
    1000: 'FORBIDDEN',
  
    // Range 2001 - 3000 - I/O errors
    2001: '',
  
    // Range 3001 - 4000 - Logic errors
    3001: '',
  
    // Range 4001 - 4250 - Client errors
    4001: '',
  
    // Range 4251 - 5000 - Client validation errors
    4251: 'INPUT_VALIDATION_ERROR',
    4252: 'INPUT_VERIFY_VALIDATION_ERROR',
  
    // Range 5001 - 6000 - DB errors
    5001: 'DB_ENTRY_NOT_FOUND',
    5002: 'DB_ENTRY_ALREADY_EXISTS',
  
    // Range 6001 - 7000 - Validation errors
    6001: '',
  
    // Range 9001 - 9900 - System errors
    9001: 'QUERY_OPERATION_FAILED',
    9002: 'QUEUE_JOB_ADDITION_FAILED',
  
    // Range 9901 - 9999 - Misc errors
    9901: '',
    9997: 'NOT_IMPLEMENTED',
    9998: 'UNKNOWN_ERROR',
    9999: 'DEFAULT_ERROR'
  
} as const;
export type CustomErrorCode = keyof typeof askBoltError;

type AskBoltErrorType = SwapNumberKeyWithStringValue<RemoveReadonly<typeof askBoltError>>;
  
export const askBoltErrorCode = Object.fromEntries(Reflect.ownKeys(askBoltError).map(key => [key, key])) as unknown as { [key in CustomErrorCode]: CustomErrorCode };

const code = askBoltErrorCode.