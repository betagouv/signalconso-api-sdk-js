import { ApiClientApi } from '../..';
import { ReportStatus } from '../../model';
export declare class ConstantClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getReportStatusList: () => Promise<ReportStatus[]>;
}
