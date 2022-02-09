import { ApiClientApi } from '../../core/ApiClient';
export declare class AdminClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getEmailCodes: () => Promise<string[]>;
    readonly sendTestEmail: (templateRef: string, to: string) => Promise<void>;
}
