import { ApiClientApi } from '../../core/ApiClient';
import { CountByDate, SimpleStat } from './Stats';
import { Id } from '../../model';
export interface StatsParams {
    companyId?: Id;
}
export interface CurveStatsParams extends StatsParams {
    ticks?: number;
}
export declare class PublicStatsClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getReportCount: (params: StatsParams) => Promise<SimpleStat>;
    readonly getReportForwardedToProPercentage: (params: StatsParams) => Promise<SimpleStat>;
    readonly getReportReadByProPercentage: (params: StatsParams) => Promise<SimpleStat>;
    readonly getReportWithResponsePercentage: (params: StatsParams) => Promise<SimpleStat>;
    readonly getReportWithWebsitePercentage: (params: StatsParams) => Promise<SimpleStat>;
    readonly getMonthlyReportCount: (params: CurveStatsParams) => Promise<CountByDate[]>;
    readonly getMonthlyReportWithResponsePercentage: (params: CurveStatsParams) => Promise<CountByDate[]>;
    readonly getMonthlyReportForwardedToProPercentage: (params: CurveStatsParams) => Promise<CountByDate[]>;
    readonly getMonthlyReportReadByProPercentage: (params: CurveStatsParams) => Promise<CountByDate[]>;
}
