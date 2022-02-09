import { ResponseType } from 'axios';
export interface RequestOption {
    readonly qs?: any;
    readonly headers?: any;
    readonly body?: any;
    readonly timeout?: number;
    readonly responseType?: ResponseType;
}
export interface ApiClientParams {
    readonly baseUrl: string;
    readonly headers?: any;
    readonly requestInterceptor?: (options?: RequestOption) => Promise<RequestOption> | RequestOption;
    readonly proxy?: string;
    readonly mapData?: (_: any) => any;
    readonly mapError?: (_: any) => never;
}
export interface ApiClientApi {
    readonly baseUrl: string;
    readonly get: <T = any>(uri: string, options?: RequestOption) => Promise<T>;
    readonly post: <T = any>(uri: string, options?: RequestOption) => Promise<T>;
    readonly postGetPdf: <T = any>(uri: string, options?: RequestOption) => Promise<Blob>;
    readonly getPdf: <T = any>(uri: string, options?: RequestOption) => Promise<Blob>;
    readonly delete: <T = any>(uri: string, options?: RequestOption) => Promise<T>;
    readonly put: <T = any>(uri: string, options?: RequestOption) => Promise<T>;
    readonly patch: <T = any>(uri: string, options?: RequestOption) => Promise<T>;
}
export declare type StatusCode = 'front-side' | 200 | 301 | 302 | 400 | 401 | 403 | 404 | 423 | 500 | 504;
/** @deprecated*/
export interface ApiError {
    code: StatusCode;
    id: string;
    message: string;
    error?: Error;
}
export interface ApiDetailedError {
    code: StatusCode;
    message: Detail;
    error?: Error;
}
export interface Detail {
    type: string;
    title: string;
    details: string;
}
export declare type Method = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
export declare class ApiClient {
    private readonly fetch;
    readonly postGetPdf: (url: string, options?: RequestOption) => Promise<Blob>;
    readonly getPdf: (url: string, options?: RequestOption) => Promise<Blob>;
    readonly baseUrl: string;
    constructor({ baseUrl, headers, requestInterceptor, mapData, mapError }: ApiClientParams);
    private static readonly buildOptions;
    readonly get: <T = any>(uri: string, options?: RequestOption | undefined) => Promise<T>;
    readonly post: <T = any>(uri: string, options?: RequestOption | undefined) => Promise<T>;
    readonly delete: <T = any>(uri: string, options?: RequestOption | undefined) => Promise<T>;
    readonly put: <T = any>(uri: string, options?: RequestOption | undefined) => Promise<T>;
    readonly patch: <T = any>(uri: string, options?: RequestOption | undefined) => Promise<T>;
}
