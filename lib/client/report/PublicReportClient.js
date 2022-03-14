"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicReportClient = void 0;
const ReportDraft_1 = require("./ReportDraft");
class PublicReportClient {
    constructor(client) {
        this.client = client;
        this.postReviewOnReportResponse = (reportId, review) => {
            return this.client.post(`/reports/${reportId}/response/review`, { body: review });
        };
        this.create = (draft) => {
            return this.client.post(`/reports`, { body: ReportDraft_1.ReportDraft.toApi(draft) });
        };
    }
}
exports.PublicReportClient = PublicReportClient;
//# sourceMappingURL=PublicReportClient.js.map