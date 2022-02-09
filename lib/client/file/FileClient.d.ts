import { ApiClientApi, FileOrigin, UploadedFile } from '../..';
export declare class FileClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getLink: (file: UploadedFile) => string;
    readonly upload: (file: File, origin: FileOrigin) => Promise<UploadedFile>;
    readonly remove: (file: UploadedFile) => Promise<any>;
}
