"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsClient = void 0;
const common_1 = require("@alexandreannic/ts-utils/lib/common");
class StatsClient {
    constructor(client) {
        this.client = client;
        this.getTags = (companyId) => {
            return this.client.get(`/stats/tags`, { qs: { companyId } });
        };
        this.getStatus = (companyId) => {
            return this.client.get(`/stats/status`, { qs: { companyId } });
        };
        this.getResponseReviews = (companyId) => {
            return this.client.get(`/stats/reviews`, { qs: { companyId } });
        };
        this.getReadDelay = (companyId) => {
            return this.client.get(`/stats/reports/delay/read`, { qs: { companyId } })
                .then(_ => _.value ? common_1.duration(_.value, 'hour') : undefined);
        };
        this.getResponseDelay = (companyId) => {
            return this.client.get(`/stats/reports/delay/responsed`, { qs: { companyId } })
                .then(_ => _.value ? common_1.duration(_.value, 'hour') : undefined);
        };
        this.getReportsCountCurve = (companyId, period) => {
            const endpoint = common_1.fnSwitch(period, {
                'day': `/stats/reports/daily/count`,
            }, () => `/stats/reports/monthly/count`);
            return this.client.get(endpoint, { qs: { companyId } }).then(this.mapReportsCountByDate);
        };
        this.getReportsRespondedCountCurve = (companyId, period) => {
            const endpoint = common_1.fnSwitch(period, {
                'day': `/stats/reports/daily/count-responded`,
            }, () => `/stats/reports/monthly/count-responded`);
            return this.client.get(endpoint, { qs: { companyId } }).then(this.mapReportsCountByDate);
        };
        this.mapReportsCountByDate = (data) => {
            return data.map(_ => ({ ..._, date: new Date(_.date) }));
        };
    }
}
exports.StatsClient = StatsClient;
//# sourceMappingURL=StatsClient.js.map