import { ApiClientApi } from '../..';
import { AsyncFileStatus } from './AsyncFile';
export declare class AsyncFileClient {
    private client;
    constructor(client: ApiClientApi);
    private static readonly fileGenerationTimeoutHours;
    readonly fetch: () => Promise<{
        creationDate: Date;
        status: AsyncFileStatus;
        id: string;
        filename: string;
        url: string;
        kind: import("./AsyncFile").AsyncFileKind;
    }[]>;
    private static readonly getStatus;
}
