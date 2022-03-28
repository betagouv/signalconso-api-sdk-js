"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicStatsClient = void 0;
const model_1 = require("../../model");
const helper_1 = require("../../helper");
const date_fns_1 = require("date-fns");
const rxjs_1 = require("rxjs");
const ReportsClient_1 = require("../report/ReportsClient");
class PublicStatsClient {
    constructor(client) {
        this.client = client;
        this.baseURL = `stats/reports`;
        this.getReportCount = (filters) => {
            const qs = filters ? rxjs_1.pipe(ReportsClient_1.cleanReportFilter, ReportsClient_1.reportFilter2QueryString, helper_1.cleanObject)(filters) : undefined;
            return this.client.get(`${this.baseURL}/count`, { qs });
        };
        this.getReportCountCurve = (search) => {
            return this.client.get(`${this.baseURL}/curve`, { qs: search })
                .then(res => res.map(_ => ({ ..._, date: new Date(_.date) })));
        };
        this.percentage = new PublicStatsPercentageClient(this);
        this.percentageCurve = new PublicStatsCurveClient(this);
    }
}
exports.PublicStatsClient = PublicStatsClient;
class PublicStatsPercentageClient {
    constructor(client) {
        this.client = client;
        this.delayBeforeCountingToWaitForProResponseInDays = 30;
        this.statsAdminStartDate = new Date('2019-01-01');
        this.getPercentByStatus = async ({ companyId, status, baseStatus, start, end, }) => {
            const [count, baseCount,] = await Promise.all([
                this.client.getReportCount({ start, end, status, ...(companyId ? { companyIds: [companyId] } : {}) }),
                this.client.getReportCount({ start, end, status: baseStatus, ...(companyId ? { companyIds: [companyId] } : {}) }),
            ]);
            return { value: helper_1.roundValue(+count.value / +baseCount.value * 100) };
        };
        this.getReportForwardedToPro = (companyId) => {
            return this.getPercentByStatus({
                companyId,
                status: model_1.Report.transmittedStatus,
                start: this.statsAdminStartDate,
                end: date_fns_1.subDays(new Date(), this.delayBeforeCountingToWaitForProResponseInDays)
            });
        };
        this.getReportReadByPro = (companyId) => {
            return this.getPercentByStatus({
                companyId,
                status: model_1.Report.readStatus,
                baseStatus: model_1.Report.transmittedStatus,
                start: this.statsAdminStartDate,
                end: date_fns_1.subDays(new Date(), this.delayBeforeCountingToWaitForProResponseInDays)
            });
        };
        this.getReportWithResponse = (companyId) => {
            return this.getPercentByStatus({
                companyId,
                status: model_1.Report.respondedStatus,
                baseStatus: model_1.Report.readStatus,
                start: this.statsAdminStartDate,
                end: date_fns_1.subDays(new Date(), this.delayBeforeCountingToWaitForProResponseInDays)
            });
        };
        this.getReportWithWebsite = async (companyId) => {
            const [count, baseCount,] = await Promise.all([
                this.client.getReportCount({
                    hasWebsite: true,
                    start: this.statsAdminStartDate,
                    end: date_fns_1.subDays(new Date(), this.delayBeforeCountingToWaitForProResponseInDays),
                    ...(companyId ? { companyIds: [companyId] } : {})
                }),
                this.client.getReportCount({
                    start: this.statsAdminStartDate,
                    end: date_fns_1.subDays(new Date(), this.delayBeforeCountingToWaitForProResponseInDays),
                    ...(companyId ? { companyIds: [companyId] } : {})
                }),
            ]);
            return { value: helper_1.roundValue(+count.value / +baseCount.value * 100) };
        };
    }
}
class PublicStatsCurveClient {
    constructor(client) {
        this.client = client;
        this.getReportPercentageCurve = async ({ companyId, ticks, tickDuration, status, baseStatus, }) => {
            const params = {
                status,
                ticks,
                tickDuration,
                ...(companyId ? { companyIds: [companyId] } : {})
            };
            const baseParams = {
                status: baseStatus,
                ticks,
                tickDuration,
                ...(companyId ? { companyIds: [companyId] } : {})
            };
            const [curve, baseCurve,] = await Promise.all([
                this.client.getReportCountCurve(params),
                this.client.getReportCountCurve(baseParams),
            ]);
            if (curve.length !== baseCurve.length) {
                console.error(params, curve, `doesn't have the same size than `, baseParams, baseCurve);
                return Promise.reject({ code: 'front-side', });
            }
            return this.getPercent(curve, baseCurve);
        };
        this.getPercent = (curve, baseCurve) => {
            let res = [];
            for (let i = 0; i < curve.length; i++) {
                if (curve[i].date.getTime() !== baseCurve[i].date.getTime()) {
                    console.error(curve[i], `have different date than`, baseCurve[i], ' values: ', curve, baseCurve);
                    return Promise.reject({ code: 'front-side', });
                }
                res[i] = {
                    count: helper_1.roundValue(curve[i].count / baseCurve[i].count * 100),
                    date: curve[i].date,
                };
            }
            return Promise.resolve(res);
        };
        this.getReportForwardedPercentage = async (params) => {
            return this.getReportPercentageCurve({
                ...params,
                status: model_1.Report.transmittedStatus,
            });
        };
        this.getReportRespondedPercentage = (params) => {
            return this.getReportPercentageCurve({
                ...params,
                status: model_1.Report.respondedStatus,
                baseStatus: model_1.Report.readStatus,
            });
        };
        this.getReportReadPercentage = (params) => {
            return this.getReportPercentageCurve({
                ...params,
                status: model_1.Report.readStatus,
                baseStatus: model_1.Report.transmittedStatus,
            });
        };
    }
}
//# sourceMappingURL=PublicStatsClient.js.map