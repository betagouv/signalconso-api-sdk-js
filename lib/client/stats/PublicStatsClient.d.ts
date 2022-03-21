import { ApiClientApi } from '../../core/ApiClient';
import { CountByDate, CurveStatsParams, SimpleStat } from './Stats';
import { Id, ReportSearch } from '../../model';
export declare class PublicStatsClient {
    private client;
    constructor(client: ApiClientApi);
    private readonly baseURL;
    readonly getReportCount: (filters?: ReportSearch | undefined) => Promise<SimpleStat>;
    readonly getReportCountCurve: (search?: (ReportSearch & CurveStatsParams) | undefined) => Promise<{
        date: Date;
        count: number;
    }[]>;
    readonly percentage: PublicStatsPercentageClient;
    readonly percentageCurve: PublicStatsCurveClient;
}
declare class PublicStatsPercentageClient {
    private client;
    constructor(client: PublicStatsClient);
    private readonly delayBeforeCountingToWaitForProResponseInDays;
    private readonly statsAdminStartDate;
    private readonly getPercentByStatus;
    readonly getReportForwardedToPro: (companyId?: string | undefined) => Promise<SimpleStat>;
    readonly getReportReadByPro: (companyId?: string | undefined) => Promise<SimpleStat>;
    readonly getReportWithResponse: (companyId?: string | undefined) => Promise<SimpleStat>;
    readonly getReportWithWebsite: (companyId?: string | undefined) => Promise<SimpleStat>;
}
declare class PublicStatsCurveClient {
    private client;
    constructor(client: PublicStatsClient);
    private readonly getReportPercentageCurve;
    private getPercent;
    readonly getReportForwardedPercentage: (params: CurveStatsParams & {
        companyId?: Id;
    }) => Promise<CountByDate[]>;
    readonly getReportRespondedPercentage: (params: CurveStatsParams & {
        companyId?: Id;
    }) => Promise<CountByDate[]>;
    readonly getReportReadPercentage: (params: CurveStatsParams & {
        companyId?: Id;
    }) => Promise<CountByDate[]>;
}
export {};
