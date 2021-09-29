export declare type Index<T> = {
    [key: string]: T;
};
export declare type Shape<T extends object> = {
    [key in keyof T]: any;
};
export declare const dateToYYYYMMDD: (date?: Date | undefined) => string | undefined;
export declare const dateToApi: (date?: Date | undefined) => string | undefined;
export declare const getHostFromUrl: (url?: string | undefined) => string | undefined;
export declare const isNotDefined: (value: any) => value is "" | null | undefined;
export declare const isDefined: <T>(value: "" | T | null | undefined) => value is T;
export declare const cleanObject: <T extends {
    [key: string]: any;
}>(obj: T) => Partial<T>;
export declare const toQueryString: (obj: any) => string;
export declare const directDownloadBlob: (fileName: string) => (blob: Blob) => void;
