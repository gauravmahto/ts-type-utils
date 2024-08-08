export type ChangeTypeOfKeys<
    T extends object,
    Keys extends keyof T,
    NewType> = {
        [key in keyof T]: key extends Keys ? NewType : T[key]
    };

export type IsString<T> = T extends string ? true : false;

export type IsNotEmptyString<T> = IsString<T> extends true ? T extends '' ? false : true : false

export type RemoveReadonly<T> = {
    -readonly [K in keyof T]: T[K]
}

export type SwapNumberKeyWithStringValue<V> = {
    [K in keyof V as K extends number ? V[K] extends string ? IsNotEmptyString<V[K]> extends true ? V[K] : never : never : never]: K
}

export type newType<V> = {
    [K in keyof V]-?: (Exclude<V[K], null>) extends { [key: number]: infer InferredValueType } ? IsString<InferredValueType> extends true ? InferredValueType : never : never
}[keyof V]