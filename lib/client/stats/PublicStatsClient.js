"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicStatsClient = void 0;
class PublicStatsClient {
    constructor(client) {
        this.client = client;
        this.baseURL = `stats/reports`;
        this.getReportCount = (params) => {
            return this.client.get(`${this.baseURL}/count`, { qs: params });
        };
        this.curve = new PublicStatsCurveClient(this.client, this.baseURL + '/curve');
        this.percentage = new PublicStatsPercentageClient(this.client, this.baseURL + '/percentage');
    }
}
exports.PublicStatsClient = PublicStatsClient;
class PublicStatsPercentageClient {
    constructor(client, baseURL) {
        this.client = client;
        this.baseURL = baseURL;
        this.getReportForwardedToPro = (params) => {
            return this.client.get(`${this.baseURL}/forwarded`, { qs: params });
        };
        this.getReportReadByPro = (params) => {
            return this.client.get(`${this.baseURL}/read`, { qs: params });
        };
        this.getReportWithResponse = (params) => {
            return this.client.get(`${this.baseURL}/responsed`, { qs: params });
        };
        this.getReportWithWebsite = (params) => {
            return this.client.get(`${this.baseURL}/website`, { qs: params });
        };
    }
}
class PublicStatsCurveClient {
    constructor(client, baseURL) {
        this.client = client;
        this.baseURL = baseURL;
        this.getReportCount = (params) => {
            return this.client.get(`${this.baseURL}/count`, { qs: params })
                .then(PublicStatsCurveClient.mapReportsCountByDate);
        };
        this.getReportRespondedCount = (params) => {
            return this.client.get(`${this.baseURL}/count-responded`, { qs: params })
                .then(PublicStatsCurveClient.mapReportsCountByDate);
        };
        this.getReportForwardedPercentage = (params) => {
            return this.client.get(`${this.baseURL}/forwarded-percentage`, { qs: params })
                .then(PublicStatsCurveClient.mapReportsCountByDate);
        };
        this.getReportRespondedPercentage = (params) => {
            return this.client.get(`${this.baseURL}/responded-percentage`, { qs: params })
                .then(PublicStatsCurveClient.mapReportsCountByDate);
        };
        this.getReportReadPercentage = (params) => {
            return this.client.get(`${this.baseURL}/read-percentage`, { qs: params })
                .then(PublicStatsCurveClient.mapReportsCountByDate);
        };
    }
}
PublicStatsCurveClient.mapReportsCountByDate = (data) => {
    return data.map(_ => ({ ..._, date: new Date(_.date) }));
};
//# sourceMappingURL=PublicStatsClient.js.map