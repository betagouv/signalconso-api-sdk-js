import { ApiClientApi, Id } from '../..';
import { BlockedReportNotification } from './BlockedReportNotification';
export declare class ReportBlockedNotificationClient {
    private client;
    constructor(client: ApiClientApi);
    readonly fetch: () => Promise<{
        dateCreation: Date;
        companyId: string;
    }[]>;
    readonly create: (companyIds: Id[]) => Promise<BlockedReportNotification[]>;
    readonly delete: (companyIds: Id[]) => Promise<void>;
}
