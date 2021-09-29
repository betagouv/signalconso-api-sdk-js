import { ReportTag, Subcategory, UploadedFile } from '../..';
import { Address } from '../../model/Address';
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
    firstName?: string;
    lastName?: string;
    email?: string;
    employeeConsumer: boolean;
    contactAgreement: boolean;
    creationDate: Date;
    status: ReportStatus;
}
export interface DetailInputValue {
    label: string;
    value: string;
}
export interface ReportSearchResult {
    report: Report;
    files: UploadedFile[];
}
export declare enum ReportStatus {
    NA = "NA",
    EmployeeConsumer = "Lanceur d'alerte",
    InProgress = "Traitement en cours",
    Unread = "Signalement non consult\u00E9",
    UnreadForPro = "Non consult\u00E9",
    Transmitted = "Signalement transmis",
    ToReviewedByPro = "\u00C0 r\u00E9pondre",
    Accepted = "Promesse action",
    ClosedForPro = "Cl\u00F4tur\u00E9",
    Rejected = "Signalement infond\u00E9",
    NotConcerned = "Signalement mal attribu\u00E9",
    Ignored = "Signalement consult\u00E9 ignor\u00E9"
}
