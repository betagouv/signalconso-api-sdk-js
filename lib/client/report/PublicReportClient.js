"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicReportClient = void 0;
class PublicReportClient {
    constructor(client) {
        this.client = client;
        this.postReviewOnReportResponse = (reportId, review) => {
            return this.client.post(`/reports/${reportId}/response/review`, { body: review });
        };
    }
}
exports.PublicReportClient = PublicReportClient;
//# sourceMappingURL=PublicReportClient.js.map