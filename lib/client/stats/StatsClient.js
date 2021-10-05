"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsClient = void 0;
const common_1 = require("@alexandreannic/ts-utils/lib/common");
class StatsClient {
    constructor(client) {
        this.client = client;
        this.getTags = (companyId) => {
            return this.client.get(`/stats/reports/tags`, { qs: { companyId } });
        };
        this.getStatus = (companyId) => {
            return this.client.get(`/stats/reports/status`, { qs: { companyId } });
        };
        this.getResponseReviews = (companyId) => {
            return this.client.get(`/stats/reports/reviews`, { qs: { companyId } });
        };
        this.getReadDelay = (companyId) => {
            return this.client.get(`/stats/reports/delay/read`, { qs: { companyId } })
                .then(_ => _.value ? common_1.duration(_.value, 'hour') : undefined);
        };
        this.getResponseDelay = (companyId) => {
            return this.client.get(`/stats/reports/delay/responsed`, { qs: { companyId } })
                .then(_ => _.value ? common_1.duration(_.value, 'hour') : undefined);
        };
    }
}
exports.StatsClient = StatsClient;
//# sourceMappingURL=StatsClient.js.map