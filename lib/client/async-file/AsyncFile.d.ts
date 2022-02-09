import { Id } from '../../model';
export interface AsyncFile {
    id: Id;
    creationDate: Date;
    filename: string;
    url: string;
    kind: AsyncFileKind;
    status: AsyncFileStatus;
}
export declare enum AsyncFileStatus {
    Loading = "Loading",
    Failed = "Failed",
    Successed = "Successed"
}
export declare enum AsyncFileKind {
    ReportedPhones = "ReportedPhones",
    Reports = "Reports",
    ReportedWebsites = "ReportedWebsites"
}
