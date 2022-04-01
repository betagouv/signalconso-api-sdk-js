import { Entity, Id, PaginatedFilters } from '../../model/Common';
import { Company } from '../company/Company';
import { Address } from '../../model/Address';
import { Country } from '../constant/Country';
export declare enum WebsiteKind {
    DEFAULT = "DEFAULT",
    MARKETPLACE = "MARKETPLACE",
    PENDING = "PENDING"
}
export interface Website extends Entity {
    creationDate: Date;
    host: string;
    companyId: Id;
    kind: WebsiteKind;
}
export interface WebsiteUpdateCompany {
    siret: string;
    name?: string;
    address?: Address;
    activityCode?: string;
}
export interface WebsiteWithCompany extends Website {
    company?: Company;
    companyCountry?: Country;
    count?: 0;
}
export interface ApiHostWithReportCount {
    host: string;
    count: number;
}
export interface WebsiteWithCompanySearch extends PaginatedFilters {
    host?: string;
    kinds?: WebsiteKind[];
}
export interface HostReportCountSearch extends PaginatedFilters {
    q?: string;
    start?: Date;
    end?: Date;
}
