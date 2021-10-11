import { ApiClientApi, CompanySearchResult, Event, Id, Report, ReportAction, ReportResponse, ReportSearchResult } from '../..';
import { PaginatedData, ReportSearch } from '../../model';
import { Address } from '../../model/Address';
export interface ReportFilterQuerystring {
    readonly departments?: string;
    readonly tags?: string | string[];
    readonly companyCountries?: string;
    readonly siretSirenList?: string[];
    start?: string;
    end?: string;
    email?: string;
    websiteURL?: string;
    phone?: string;
    websiteExists?: 'true' | 'false';
    phoneExists?: 'true' | 'false';
    category?: string;
    status?: string;
    details?: string;
    hasCompany?: 'true' | 'false';
    offset?: string;
    limit?: string;
}
export declare const reportFilter2Body: (report: ReportSearch) => {
    readonly departments?: any;
    readonly tags?: any;
    readonly companyCountries?: any;
    readonly siretSirenList?: any;
    start?: any;
    end?: any;
    email?: any;
    websiteURL?: any;
    phone?: any;
    websiteExists?: any;
    phoneExists?: any;
    category?: any;
    status?: any;
    details?: any;
    hasCompany?: any;
    offset: any;
    limit: any;
};
export declare class ReportsClient {
    private client;
    constructor(client: ApiClientApi);
    readonly extract: (filter?: ReportSearch) => Promise<void>;
    readonly search: (filter?: ReportSearch) => Promise<PaginatedData<ReportSearchResult>>;
    readonly download: (id: Id) => Promise<void>;
    readonly remove: (id: Id) => Promise<void>;
    readonly getById: (id: Id) => Promise<ReportSearchResult>;
    readonly postResponse: (id: Id, response: ReportResponse) => Promise<Event>;
    readonly postAction: (id: Id, action: ReportAction) => Promise<Event>;
    readonly updateReportCompany: (reportId: string, company: CompanySearchResult) => Promise<Report>;
    readonly updateReportConsumer: (reportId: string, firstName: string, lastName: string, email: string, contactAgreement: boolean) => Promise<any>;
    static readonly mapReport: (report: {
        id: any;
        category: any;
        subcategories: any;
        tags: any;
        companyId: any;
        companyName: any;
        companyAddress: any;
        companySiret: any;
        websiteURL?: any;
        vendor: any;
        phone?: any;
        details: any;
        firstName?: any;
        lastName?: any;
        email?: any;
        employeeConsumer: any;
        contactAgreement: any;
        creationDate: any;
        status: any;
    }) => Report;
    static readonly mapAddress: (address: {
        number?: any;
        street?: any;
        addressSupplement?: any;
        postalCode?: any;
        city?: any;
        country?: any;
    }) => Address;
}