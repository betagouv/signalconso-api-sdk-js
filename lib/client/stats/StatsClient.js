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
        this.getReportedInactiveProAccountRate = (search) => {
            return this.client.get(`/stats/pro-account-rate`, { qs: search })
                .then(res => res.map(_ => ({ ..._, date: new Date(_.date) })));
        };
        this.getProReportTransmittedStat = (search) => {
            return this.client.get(`/stats/reports/pro-transmitted`, { qs: search })
                .then(res => res.map(_ => ({ ..._, date: new Date(_.date) })));
        };
        this.getProReportResponseStat = (search) => {
            return this.client.get(`/stats/reports/pro-response`, { qs: search })
                .then(res => res.map(_ => ({ ..._, date: new Date(_.date) })));
        };
        this.getActiveDgccrfAccountCurve = (search) => {
            return this.client.get(`/stats/dgccrf-active-account`, { qs: search })
                .then(res => res.map(_ => ({ ..._, date: new Date(_.date) })));
        };
        this.getDgccrfAccountCurve = (search) => {
            return this.client.get(`/stats/dgccrf-account`, { qs: search })
                .then(res => res.map(_ => ({ ..._, date: new Date(_.date) })));
        };
        this.getDgccrfControlsCurve = (search) => {
            return this.client.get(`/stats/dgccrf-controls`, { qs: search })
                .then(res => res.map(_ => ({ ..._, date: new Date(_.date) })));
        };
        this.getDgccrfSubscriptionsCurve = (search) => {
            return this.client.get(`/stats/dgccrf-subscriptions`, { qs: search })
                .then(res => res.map(_ => ({ ..._, date: new Date(_.date) })));
        };
        this.getReadDelay = (companyId) => {
            return this.client
                .get(`/stats/reports/delay/read`, { qs: { companyId } })
                .then(_ => (_.value ? (0, common_1.duration)(_.value, 'hour') : undefined));
        };
        this.getResponseDelay = (companyId) => {
            return this.client
                .get(`/stats/reports/delay/responsed`, { qs: { companyId } })
                .then(_ => (_.value ? (0, common_1.duration)(_.value, 'hour') : undefined));
        };
    }
}
exports.StatsClient = StatsClient;
//# sourceMappingURL=StatsClient.js.map