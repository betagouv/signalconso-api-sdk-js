import { ApiHostWithReportCount, Paginate, HostReportCountSearch, Id, PaginatedData, Website, WebsiteUpdateCompany, WebsiteWithCompany, WebsiteWithCompanySearch } from '../../model';
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
    readonly update: (id: Id, website: Partial<Website>) => Promise<WebsiteWithCompany>;
    readonly updateCompany: (id: Id, website: WebsiteUpdateCompany) => Promise<WebsiteWithCompany>;
    readonly remove: (id: Id) => Promise<void>;
    readonly search: () => Promise<any>;
}
