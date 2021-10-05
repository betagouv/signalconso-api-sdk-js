import { Id, PaginatedSearch } from '../../model';
import { Address } from '../../model/Address';
export interface WebsiteURL {
    url: string;
}
export interface DraftCompany {
    siret?: string;
    name?: string;
    brand?: string;
    address?: Address;
    website?: WebsiteURL;
    phone?: string;
    activityCode?: string;
}
export interface CompanyWithReportsCount extends Company {
    count: number;
}
export interface Company {
    id: Id;
    siret: string;
    creationDate: Date;
    name: string;
    address: Address;
    activityCode?: string;
}
export interface CompanyToActivate {
    company: Company;
    lastNotice?: Date;
    tokenCreation: Date;
}
export interface CompanyCreation {
    siret: string;
    name: string;
    address: Address;
    activityCode?: string;
}
export interface CompanyUpdate {
    address: Address;
    activationDocumentRequired: boolean;
}
export interface CompanySearchResult {
    siret: string;
    name: string;
    brand: string;
    isHeadOffice: string;
    address: string;
    activityCode: string;
    activityLabel: string;
    isMarketPlace: string;
}
export interface CompanySearch extends PaginatedSearch<any> {
    readonly departments?: string[];
    identity?: string;
}
export declare enum AccessLevel {
    NONE = "none",
    MEMBER = "member",
    ADMIN = "admin"
}
export interface CompanyWithAccessLevel extends Company {
    level: AccessLevel;
}
export declare const isGovernmentCompany: (_?: DraftCompany | undefined) => boolean;
