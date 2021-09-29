import { ApiClientApi } from '../../index';
import { Id } from '../../model';
import { CountByDate, Period, ReportResponseReviews, ReportStatusDistribution, ReportTagsDistribution } from '../company-stats/CompanyStats';
import { Duration } from '@alexandreannic/ts-utils/lib/common';
export declare class StatsClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getTags: (companyId: Id) => Promise<ReportTagsDistribution>;
    readonly getStatus: (companyId: Id) => Promise<ReportStatusDistribution>;
    readonly getResponseReviews: (companyId: Id) => Promise<ReportResponseReviews>;
    readonly getReadDelay: (companyId: Id) => Promise<Duration | undefined>;
    readonly getResponseDelay: (companyId: Id) => Promise<Duration | undefined>;
    readonly getReportsCountCurve: (companyId: Id, period: Period) => Promise<CountByDate[]>;
    readonly getReportsRespondedCountCurve: (companyId: Id, period: Period) => Promise<CountByDate[]>;
    private readonly mapReportsCountByDate;
}
