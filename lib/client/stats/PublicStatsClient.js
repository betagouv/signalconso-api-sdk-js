"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicStatsClient = void 0;
class PublicStatsClient {
    constructor(client) {
        this.client = client;
        this.getReportCount = () => {
            return this.client.get(`/stats/reports/count`);
        };
        this.getMonthlyReportCount = () => {
            return this.client.get(`/stats/reports/count/monthly`);
        };
        this.getReportForwardedToProPercentage = () => {
            return this.client.get(`/stats/reports/forwarded/percentage`);
        };
        this.getReportReadByProPercentage = () => {
            return this.client.get(`/stats/reports/read/percentage`);
        };
        this.getMonthlyReportForwardedToProPercentage = () => {
            return this.client.get(`/stats/reports/forwarded/percentage/monthly`);
        };
        this.getMonthlyReportReadByProPercentage = () => {
            return this.client.get(`/stats/reports/read/percentage/monthly`);
        };
        this.getReportWithResponsePercentage = () => {
            return this.client.get(`/stats/reports/responsed/percentage`);
        };
        this.getMonthlyReportWithResponsePercentage = () => {
            return this.client.get(`/stats', 'reports/responsed/percentage/monthly`);
        };
        this.getReportWithWebsitePercentage = () => {
            return this.client.get(`/stats/reports/website/percentage`);
        };
    }
}
exports.PublicStatsClient = PublicStatsClient;
//# sourceMappingURL=PublicStatsClient.js.map