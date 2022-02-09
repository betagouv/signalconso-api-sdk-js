"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportBlockedNotificationClient = void 0;
class ReportBlockedNotificationClient {
    constructor(client) {
        this.client = client;
        this.fetch = () => {
            return this.client
                .get(`/report-blocked-notification`)
                .then(result => result.map(_ => ({ ..._, dateCreation: new Date(_.dateCreation) })));
        };
        this.create = (companyIds) => {
            return this.client.post(`/report-blocked-notification`, { body: { companyIds } });
        };
        this.delete = (companyIds) => {
            return this.client.post(`/report-blocked-notification/delete`, { body: { companyIds } });
        };
    }
}
exports.ReportBlockedNotificationClient = ReportBlockedNotificationClient;
//# sourceMappingURL=ReportBlockedNotificationClient.js.map