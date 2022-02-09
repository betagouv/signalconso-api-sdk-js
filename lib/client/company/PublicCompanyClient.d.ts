import { ApiClientApi, Country } from '../..';
import { CompanySearchResult } from './Company';
export declare class PublicCompanyClient {
    private client;
    constructor(client: ApiClientApi);
    readonly searchCompanies: (search: string, searchPostalCode: string) => Promise<CompanySearchResult[]>;
    readonly searchCompaniesByIdentity: (identity: string) => Promise<CompanySearchResult[]>;
    readonly searchCompaniesByUrl: (url: string) => Promise<CompanySearchResult[]>;
    readonly searchForeignCompaniesByUrl: (url: string) => Promise<Country[]>;
}
