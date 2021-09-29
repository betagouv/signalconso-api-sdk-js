export declare enum CompanyAccessLevel {
    admin = "Administrateur",
    member = "Acc\u00E8s simple"
}
export interface CompanyAccess {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    level: CompanyAccessLevel;
    editable: Boolean;
    isHeadOffice: Boolean;
}
