import { ApiClientApi } from '../../core/ApiClient';
import { CompaniesDbSyncInfos } from './CompaniesDbSync';
export declare class CompaniesDbSyncClient {
    private client;
    constructor(client: ApiClientApi);
    readonly startEtablissementFile: () => Promise<void>;
    readonly startUniteLegaleFile: () => Promise<void>;
    readonly cancelAllFiles: () => Promise<void>;
    readonly cancelEtablissementFile: () => Promise<void>;
    readonly cancelUniteLegaleFile: () => Promise<void>;
    readonly getInfo: () => Promise<CompaniesDbSyncInfos>;
    private static readonly mapCompaniesDbSyncInfo;
}
