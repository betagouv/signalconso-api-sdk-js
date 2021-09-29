"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesDbSyncClient = void 0;
class CompaniesDbSyncClient {
    constructor(client) {
        this.client = client;
        this.startEtablissementFile = () => this.client.post(`enterprises-sync/start-etablissement`);
        this.startUniteLegaleFile = () => this.client.post(`enterprises-sync/start-unitelegale`);
        this.cancelAllFiles = () => this.client.post(`enterprises-sync/cancel`);
        this.cancelEtablissementFile = () => this.client.post(`enterprises-sync/cancel-etablissement`);
        this.cancelUniteLegaleFile = () => this.client.post(`enterprises-sync/cancel-unitelegale`);
        this.getInfo = () => {
            return this.client.get(`enterprises-sync/info`)
                .then(_ => ({
                etablissementImportInfo: CompaniesDbSyncClient.mapCompaniesDbSyncInfo(_.etablissementImportInfo),
                uniteLegaleInfo: CompaniesDbSyncClient.mapCompaniesDbSyncInfo(_.uniteLegaleInfo),
            }));
        };
    }
}
exports.CompaniesDbSyncClient = CompaniesDbSyncClient;
CompaniesDbSyncClient.mapCompaniesDbSyncInfo = (_) => _ ? ({
    ..._,
    startedAt: new Date(_.startedAt),
    ...(_.endedAt ? { endedAt: new Date(_.endedAt) } : {}),
}) : undefined;
//# sourceMappingURL=CompaniesDbSyncClient.js.map