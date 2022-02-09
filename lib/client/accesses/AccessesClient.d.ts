import { ApiClientApi } from '../../core/ApiClient';
export declare class AccessesClient {
    private client;
    constructor(client: ApiClientApi);
    readonly acceptToken: (siret: string, token: string) => Promise<void>;
}
