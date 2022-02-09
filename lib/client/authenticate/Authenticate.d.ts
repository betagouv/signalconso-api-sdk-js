export declare type ValidationRejectReason = 'TOO_MANY_ATTEMPTS' | 'INVALID_CODE';
export interface UserWithPermission {
    id: string;
    login: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Roles;
    permissions: Permissions[];
}
export declare enum Roles {
    Admin = "Admin",
    DGCCRF = "DGCCRF",
    Pro = "Professionnel",
    ToActivate = "ToActivate"
}
export declare const roleUrlParam: (_: UserWithPermission) => string;
export interface AuthUser {
    token: string;
    user: UserWithPermission;
}
export declare enum TokenKind {
    companyInit = "COMPANY_INIT",
    companyJoin = "COMPANY_JOIN",
    dgccrfAccount = "DGCCRF_ACCOUNT"
}
export interface TokenInfo {
    token: string;
    kind: TokenKind;
    emailedTo: string;
}
export interface DGCCRFUserActivationToken extends TokenInfo {
}
export interface CompanyUserActivationToken extends TokenInfo {
    companySiret?: string;
}
export declare enum Permissions {
    listReports = "listReports",
    updateReport = "updateReport",
    deleteReport = "deleteReport",
    deleteFile = "deleteFile",
    createEvent = "createEvent",
    editDocuments = "editDocuments",
    subscribeReports = "subscribeReports",
    updateCompany = "updateCompany"
}
