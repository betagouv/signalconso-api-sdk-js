import { ApiClientApi, CompanyAccessLevel, Id } from '../..';
import { CompanyAccessToken } from './CompanyAccessToken';
export declare class CompanyAccessTokenClient {
    private client;
    constructor(client: ApiClientApi);
    readonly fetch: (siret: string) => Promise<CompanyAccessToken[]>;
    readonly remove: (siret: string, tokenId: Id) => Promise<void>;
    readonly create: (siret: string, email: string, level: CompanyAccessLevel) => Promise<CompanyAccessToken>;
}
