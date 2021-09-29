import { ApiClientApi } from '../../core/ApiClient';
import { CountByDate, SimpleStat } from './Stats';
export declare class PublicStatsClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getReportCount: () => Promise<any>;
    readonly getMonthlyReportCount: () => Promise<CountByDate[]>;
    readonly getReportForwardedToProPercentage: () => Promise<SimpleStat>;
    readonly getReportReadByProPercentage: () => Promise<SimpleStat>;
    readonly getMonthlyReportForwardedToProPercentage: () => Promise<CountByDate[]>;
    readonly getMonthlyReportReadByProPercentage: () => Promise<CountByDate[]>;
    readonly getReportWithResponsePercentage: () => Promise<SimpleStat>;
    readonly getMonthlyReportWithResponsePercentage: () => Promise<CountByDate[]>;
    readonly getReportWithWebsitePercentage: () => Promise<SimpleStat>;
}
