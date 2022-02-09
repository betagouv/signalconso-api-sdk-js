import { ApiClientApi, UploadedFile } from '../..';
export declare class SecuredFileClient {
    private client;
    constructor(client: ApiClientApi);
    readonly remove: (file: UploadedFile) => Promise<any>;
}
