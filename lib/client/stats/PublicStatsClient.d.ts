import { ApiClientApi } from '../../core/ApiClient';
import { CountByDate, Period, SimpleStat } from './Stats';
import { Id } from '../../model';
export interface StatsParams {
    companyId?: Id;
}
export interface CurveStatsParams extends StatsParams {
    ticks?: number;
}
export interface CurveStatsParamsWithPeriod extends CurveStatsParams {
    tickDuration?: Period;
}
export declare class PublicStatsClient {
    private client;
    constructor(client: ApiClientApi);
    private readonly baseURL;
    readonly getReportCount: (params: StatsParams) => Promise<SimpleStat>;
    readonly curve: PublicStatsCurveClient;
    readonly percentage: PublicStatsPercentageClient;
}
declare class PublicStatsPercentageClient {
    private client;
    private baseURL;
    constructor(client: ApiClientApi, baseURL: string);
    readonly getReportForwardedToPro: (params: StatsParams) => Promise<SimpleStat>;
    readonly getReportReadByPro: (params: StatsParams) => Promise<SimpleStat>;
    readonly getReportWithResponse: (params: StatsParams) => Promise<SimpleStat>;
    readonly getReportWithWebsite: (params: StatsParams) => Promise<SimpleStat>;
}
declare class PublicStatsCurveClient {
    private client;
    private baseURL;
    constructor(client: ApiClientApi, baseURL: string);
    readonly getReportCount: (params: CurveStatsParamsWithPeriod) => Promise<CountByDate[]>;
    readonly getReportRespondedCount: (params: CurveStatsParamsWithPeriod) => Promise<CountByDate[]>;
    readonly getReportForwardedPercentage: (params: CurveStatsParamsWithPeriod) => Promise<CountByDate[]>;
    readonly getReportRespondedPercentage: (params: CurveStatsParamsWithPeriod) => Promise<CountByDate[]>;
    readonly getReportReadPercentage: (params: CurveStatsParamsWithPeriod) => Promise<CountByDate[]>;
    private static readonly mapReportsCountByDate;
}
export {};
