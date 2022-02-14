import { ReportTag, Subcategory, UploadedFile } from '../..';
import { Address } from '../../model';
export declare const ReportingDateLabel = "Date du constat";
export declare const ReportingTimeslotLabel = "Heure du constat";
export declare const DescriptionLabel = "Description";
export interface Report {
    id: string;
    category: string;
    subcategories: Subcategory[];
    tags: ReportTag[];
    companyId: string;
    companyName: string;
    companyAddress: Address;
    companySiret: string;
    websiteURL?: string;
    vendor: string;
    phone?: string;
    details: DetailInputValue[];
    firstName: string;
    lastName: string;
    email: string;
    consumerPhone?: string;
    employeeConsumer: boolean;
    contactAgreement: boolean;
    creationDate: Date;
    status: ReportStatus;
    reponseconsoCode: string[];
    ccrfCode: string[];
}
export interface DetailInputValue {
    label: string;
    value: string | string[];
}
export declare class DetailInputValue {
    static readonly precisionKeyword = "(\u00E0 pr\u00E9ciser)";
    static readonly parse: (div: DetailInputValue) => DetailInputValue;
}
export interface ReportSearchResult {
    report: Report;
    files: UploadedFile[];
}
export declare enum ReportStatus {
    NA = "NA",
    LanceurAlerte = "LanceurAlerte",
    TraitementEnCours = "TraitementEnCours",
    Transmis = "Transmis",
    PromesseAction = "PromesseAction",
    Infonde = "Infonde",
    NonConsulte = "NonConsulte",
    ConsulteIgnore = "ConsulteIgnore",
    MalAttribue = "MalAttribue"
}
export declare enum ReportStatusPro {
    NonConsulte = "NonConsulte",
    ARepondre = "ARepondre",
    Cloture = "Cloture"
}
export declare class Report {
    static readonly closedStatus: ReportStatus[];
    static readonly transmittedStatus: ReportStatus[];
    static readonly readStatus: ReportStatus[];
    static readonly respondedStatus: ReportStatus[];
    static readonly isClosed: (status: ReportStatus) => boolean;
    private static readonly mapStatusPro;
    private static mapStatusProInverted;
    static readonly getStatusProByStatus: (status: ReportStatus) => ReportStatusPro;
    static readonly getStatusByStatusPro: (status: ReportStatusPro) => ReportStatus[];
    static readonly isGovernmentCompany: (_?: {
        activityCode?: string | undefined;
    } | undefined) => boolean;
}
