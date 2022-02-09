import { ApiClientApi, CurveStatsParams, ReportResponseStatsParams } from '../../index';
import { Id } from '../../model';
import { ReportResponseReviews, ReportStatusDistribution, ReportTagsDistribution } from './Stats';
import { Duration } from '@alexandreannic/ts-utils/lib/common';
export declare class StatsClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getTags: (companyId: Id) => Promise<ReportTagsDistribution>;
    readonly getStatus: (companyId: Id) => Promise<ReportStatusDistribution>;
    readonly getResponseReviews: (companyId: Id) => Promise<ReportResponseReviews>;
    readonly getReportedInactiveProAccountRate: (search?: CurveStatsParams | undefined) => Promise<{
        date: Date;
        count: number;
    }[]>;
    readonly getProReportTransmittedStat: (search?: CurveStatsParams | undefined) => Promise<{
        date: Date;
        count: number;
    }[]>;
    readonly getProReportResponseStat: (search?: ReportResponseStatsParams | undefined) => Promise<{
        date: Date;
        count: number;
    }[]>;
    readonly getActiveDgccrfAccountCurve: (search?: CurveStatsParams | undefined) => Promise<{
        date: Date;
        count: number;
    }[]>;
    readonly getDgccrfAccountCurve: (search?: CurveStatsParams | undefined) => Promise<{
        date: Date;
        count: number;
    }[]>;
    readonly getDgccrfControlsCurve: (search?: CurveStatsParams | undefined) => Promise<{
        date: Date;
        count: number;
    }[]>;
    readonly getDgccrfSubscriptionsCurve: (search?: CurveStatsParams | undefined) => Promise<{
        date: Date;
        count: number;
    }[]>;
    readonly getReadDelay: (companyId: Id) => Promise<Duration | undefined>;
    readonly getResponseDelay: (companyId: Id) => Promise<Duration | undefined>;
}
