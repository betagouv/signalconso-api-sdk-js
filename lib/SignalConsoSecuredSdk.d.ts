import { CompanyAccessClient, CompanyClient, ConstantClient, EventClient, ReportedPhoneClient, ReportsClient, SubscriptionClient, UserClient, WebsiteClient } from './client';
import { ApiClientApi } from './core/ApiClient';
import { AsyncFileClient } from './client/async-file/AsyncFileClient';
import { CompanyAccessTokenClient } from './client/company-access-token/CompanyAccessTokenClient';
import { SecuredFileClient } from './client/file/SecuredFileClient';
import { ReportBlockedNotificationClient } from './client/blocked-report-notifications/ReportBlockedNotificationClient';
import { AccessesClient } from './client/accesses/AccessesClient';
import { CompaniesDbSyncClient } from './client/companies-db-sync/CompaniesDbSyncClient';
import { StatsClient } from './client/stats/StatsClient';
export declare class SignalConsoSecuredSdk {
    private client;
    constructor(client: ApiClientApi);
    readonly accesses: AccessesClient;
    readonly website: WebsiteClient;
    readonly reportedPhone: ReportedPhoneClient;
    readonly constant: ConstantClient;
    readonly subscription: SubscriptionClient;
    readonly company: CompanyClient;
    readonly companyStats: StatsClient;
    readonly companyAccess: CompanyAccessClient;
    readonly companyAccessToken: CompanyAccessTokenClient;
    readonly reports: ReportsClient;
    readonly events: EventClient;
    readonly asyncFiles: AsyncFileClient;
    readonly user: UserClient;
    readonly document: SecuredFileClient;
    readonly reportBlockedNotification: ReportBlockedNotificationClient;
    readonly companiesDbSync: CompaniesDbSyncClient;
}
