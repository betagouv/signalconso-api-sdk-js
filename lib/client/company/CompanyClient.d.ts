import { ApiClientApi, Paginate, CompanySearch, CompanyToActivate, CompanyWithAccessLevel, CompanyWithReportsCount } from '../..';
import { Company, CompanyCreation, CompanyUpdate, Event, Id } from '../../model';
export declare class CompanyClient {
    private client;
    constructor(client: ApiClientApi);
    readonly search: (search: CompanySearch) => Promise<Paginate<CompanyWithReportsCount>>;
    readonly updateAddress: (id: Id, update: CompanyUpdate) => Promise<Company>;
    readonly saveUndeliveredDocument: (siret: string, returnedDate: Date) => Promise<Event>;
    readonly create: (company: CompanyCreation) => Promise<Company>;
    readonly downloadActivationDocument: (companyIds: Id[]) => Promise<void>;
    readonly getHosts: (id: Id) => Promise<string[]>;
    readonly getAccessibleByPro: () => Promise<CompanyWithAccessLevel[]>;
    readonly fetchToActivate: () => Promise<CompanyToActivate[]>;
    readonly confirmCompaniesPosted: (ids: Id[]) => Promise<void>;
    private static readonly mapCompany;
}
