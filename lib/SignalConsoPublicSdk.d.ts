import { ApiClientApi } from './core/ApiClient';
import { AnomalyClient, AuthenticateClient, FileClient, PublicConstantClient, RatingClient } from './client';
import { PublicCompanyClient } from './client/company/PublicCompanyClient';
import { PublicUserClient } from './client/user/PublicUserClient';
import { PublicReportClient } from './client/report/PublicReportClient';
import { PublicStatsClient } from './client/stats/PublicStatsClient';
export declare class SignalConsoPublicSdk {
    private client;
    constructor(client: ApiClientApi);
    readonly company: PublicCompanyClient;
    readonly report: PublicReportClient;
    readonly stats: PublicStatsClient;
    readonly user: PublicUserClient;
    readonly constant: PublicConstantClient;
    readonly authenticate: AuthenticateClient;
    readonly document: FileClient;
    readonly anomaly: AnomalyClient;
    readonly rating: RatingClient;
}
