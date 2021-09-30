"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicStatsClient = void 0;
class PublicStatsClient {
    constructor(client) {
        this.client = client;
        this.getReportCount = (params) => {
            return this.client.get(`/stats/reports/count`);
        };
        this.getReportForwardedToProPercentage = (params) => {
            return this.client.get(`/stats/reports/forwarded/percentage`);
        };
        this.getReportReadByProPercentage = (params) => {
            return this.client.get(`/stats/reports/read/percentage`);
        };
        this.getReportWithResponsePercentage = (params) => {
            return this.client.get(`/stats/reports/responsed/percentage`);
        };
        this.getReportWithWebsitePercentage = (params) => {
            return this.client.get(`/stats/reports/website/percentage`);
        };
        this.getMonthlyReportCount = (params) => {
            return this.client.get(`/stats/reports/count/monthly`);
        };
        this.getMonthlyReportWithResponsePercentage = (params) => {
            return this.client.get(`/stats', 'reports/responsed/percentage/monthly`);
        };
        this.getMonthlyReportForwardedToProPercentage = (params) => {
            return this.client.get(`/stats/reports/forwarded/percentage/monthly`);
        };
        this.getMonthlyReportReadByProPercentage = (params) => {
            return this.client.get(`/stats/reports/read/percentage/monthly`);
        };
    }
}
exports.PublicStatsClient = PublicStatsClient;
//# sourceMappingURL=PublicStatsClient.js.map