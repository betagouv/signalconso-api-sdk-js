import { ApiClientApi, CompanySearchResult, Event, Id, PaginatedFilters, Report, ReportAction, ReportResponse, ReportSearchResult } from '../..';
import { Address, PaginatedData, ReportSearch } from '../../model';
import { ReportDraft } from './ReportDraft';
export interface ReportFilterQuerystring {
    readonly departments?: string[];
    readonly tags?: string | string[];
    readonly companyCountries?: string[];
    readonly siretSirenList?: string[];
    readonly status?: string[];
    start?: string;
    end?: string;
    email?: string;
    websiteURL?: string;
    phone?: string;
    category?: string;
    details?: string;
    hasWebsite?: 'true' | 'false';
    hasPhone?: 'true' | 'false';
    hasForeignCountry?: 'true' | 'false';
    hasCompany?: 'true' | 'false';
}
export declare const reportFilter2QueryString: (report: ReportSearch) => ReportFilterQuerystring;
export declare const cleanReportFilter: (filter: ReportSearch) => ReportSearch;
export declare class ReportsClient {
    private client;
    constructor(client: ApiClientApi);
    readonly extract: (filters: ReportSearch & PaginatedFilters) => Promise<void>;
    readonly search: (filters: ReportSearch & PaginatedFilters) => Promise<PaginatedData<ReportSearchResult>>;
    readonly download: (id: Id) => Promise<void>;
    readonly remove: (id: Id) => Promise<void>;
    readonly getById: (id: Id) => Promise<ReportSearchResult>;
    readonly postResponse: (id: Id, response: ReportResponse) => Promise<Event>;
    readonly postAction: (id: Id, action: ReportAction) => Promise<Event>;
    readonly createReport: ({ consumer, companyDraft, uploadedFiles, detailInputValues, ...report }: ReportDraft) => Promise<Report>;
    readonly updateReportCompany: (reportId: string, company: CompanySearchResult) => Promise<Report>;
    readonly updateReportConsumer: (reportId: string, firstName: string, lastName: string, email: string, contactAgreement: boolean) => Promise<any>;
    readonly getCountByDepartments: ({ start, end }?: {
        start?: Date | undefined;
        end?: Date | undefined;
    }) => Promise<[string, number][]>;
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
        firstName: any;
        lastName: any;
        email: any;
        consumerPhone?: any;
        employeeConsumer: any;
        contactAgreement: any;
        creationDate: any;
        status: any;
        reponseconsoCode: any;
        ccrfCode: any;
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
