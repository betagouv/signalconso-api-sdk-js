import { CompanyKinds, ReportTag, Subcategory } from '../anomaly/Anomaly';
import { UploadedFile } from '../file/UploadedFile';
import { DetailInputValue } from './Report';
import { Address } from '../../model';
export interface ReportDraftConsumer {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}
export interface CompanyDraft {
    siret: string;
    name: string;
    brand?: string;
    address: Address;
    website?: string;
    phone?: string;
    activityCode?: string;
}
export interface ReportDraft {
    category: string;
    subcategories: Subcategory[];
    companyDraft: CompanyDraft;
    detailInputValues: DetailInputValue[];
    uploadedFiles: UploadedFile[];
    consumer: ReportDraftConsumer;
    employeeConsumer?: boolean;
    contactAgreement: boolean;
    vendor: string;
    ccrfCode?: string[];
    reponseconsoCode?: string[];
    tags?: ReportTag[];
    contractualDispute?: boolean;
    forwardToReponseConso?: boolean;
    companyKind?: CompanyKinds;
}
export declare class ReportDraft {
    static readonly getCompanyKindFomSubcategories: (r: ReportDraft) => CompanyKinds | undefined;
    static readonly getLastSubcategory: (r: ReportDraft) => Subcategory | undefined;
    static readonly getReponseconsoCode: (r: ReportDraft) => string[];
    static readonly ccrfCode: (r: ReportDraft) => string[];
    static readonly tags: (r: ReportDraft) => ReportTag[];
    static readonly isContractualDispute: (r: ReportDraft) => boolean;
    static readonly isVendor: (r: ReportDraft) => boolean;
    static readonly isInfluenceur: (r: ReportDraft) => boolean;
    static readonly isTransmittableToPro: (r: Pick<ReportDraft, 'employeeConsumer' | 'tags'>) => boolean;
    /** @deprecated use the one from Report */
    static readonly isGovernmentCompany: (_?: {
        activityCode?: string | undefined;
    } | undefined) => boolean;
}
export declare class ReportDraft_ {
    static readonly getCompanyKindFomSubcategories: (r: ReportDraft) => CompanyKinds | undefined;
    static readonly getLastSubcategory: (r: ReportDraft) => Subcategory | undefined;
    static readonly getReponseconsoCode: (r: ReportDraft) => string[];
    static readonly ccrfCode: (r: ReportDraft) => string[];
    static readonly tags: (r: ReportDraft) => ReportTag[];
    static readonly isContractualDispute: (r: ReportDraft) => boolean;
    static readonly isVendor: (r: ReportDraft) => boolean;
    static readonly isInfluenceur: (r: ReportDraft) => boolean;
    static readonly isTransmittableToPro: (r: Pick<ReportDraft, 'employeeConsumer' | 'tags'>) => boolean;
    static readonly isGovernmentCompany: (_?: {
        activityCode?: string | undefined;
    } | undefined) => boolean;
}
