import { ApiHostWithReportCount, Paginate, HostReportCountSearch, Id, PaginatedData, WebsiteKind, WebsiteUpdateCompany, WebsiteWithCompany, WebsiteWithCompanySearch, Country } from '../../model';
import { ApiClientApi } from '../..';
export interface HostReportCountQueryString {
    q?: string;
    start?: string;
    end?: string;
    offset?: string;
    limit?: string;
}
export declare class WebsiteClient {
    private client;
    constructor(client: ApiClientApi);
    readonly list: (filters: WebsiteWithCompanySearch) => Promise<PaginatedData<WebsiteWithCompany> & {
        entities: WebsiteWithCompany[];
    }>;
    readonly listUnregistered: (filters: HostReportCountSearch) => Promise<Paginate<ApiHostWithReportCount>>;
    readonly extractUnregistered: (filters: HostReportCountSearch) => Promise<void>;
    readonly updateStatus: (id: Id, kind: WebsiteKind) => Promise<WebsiteWithCompany>;
    readonly updateCompany: (id: Id, website: WebsiteUpdateCompany) => Promise<WebsiteWithCompany>;
    readonly updateCountry: (id: Id, country: Country) => Promise<WebsiteWithCompany>;
    readonly remove: (id: Id) => Promise<void>;
    readonly search: () => Promise<any>;
}
