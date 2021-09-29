import { ApiClientApi } from '../../core/ApiClient';
import { MonthlyStat, SimpleStat } from './ReportStats';
export declare class PublicStatsClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getReportCount: () => Promise<any>;
    readonly getMonthlyReportCount: () => Promise<MonthlyStat[]>;
    readonly getReportForwardedToProPercentage: () => Promise<SimpleStat>;
    readonly getReportReadByProPercentage: () => Promise<SimpleStat>;
    readonly getMonthlyReportForwardedToProPercentage: () => Promise<MonthlyStat[]>;
    readonly getMonthlyReportReadByProPercentage: () => Promise<MonthlyStat[]>;
    readonly getReportWithResponsePercentage: () => Promise<SimpleStat>;
    readonly getMonthlyReportWithResponsePercentage: () => Promise<MonthlyStat[]>;
    readonly getReportWithWebsitePercentage: () => Promise<SimpleStat>;
}
