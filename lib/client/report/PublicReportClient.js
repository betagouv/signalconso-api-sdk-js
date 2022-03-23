"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicReportClient = void 0;
const ReportDraft_1 = require("./ReportDraft");
const ReportsClient_1 = require("./ReportsClient");
class PublicReportClient {
    constructor(client) {
        this.client = client;
        this.postReviewOnReportResponse = (reportId, review) => {
            return this.client.post(`/reports/${reportId}/response/review`, { body: review });
        };
        this.create = (draft) => {
            return this.client.post(`/reports`, { body: ReportDraft_1.ReportDraft.toApi(draft) })
                .then(ReportsClient_1.ReportsClient.mapReport);
        };
    }
}
exports.PublicReportClient = PublicReportClient;
//# sourceMappingURL=PublicReportClient.js.map