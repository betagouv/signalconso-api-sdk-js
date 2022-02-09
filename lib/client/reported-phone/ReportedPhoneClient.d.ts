import { ApiClientApi, ReportedPhoneFilters } from '../..';
import { ReportedPhone } from '../../model';
export declare class ReportedPhoneClient {
    private client;
    constructor(client: ApiClientApi);
    readonly list: (filters: ReportedPhoneFilters) => Promise<ReportedPhone[]>;
    readonly extract: (filters: ReportedPhoneFilters) => Promise<void>;
    private static mapFilters;
}
