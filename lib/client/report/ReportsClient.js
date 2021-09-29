"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsClient = exports.reportFilter2Body = void 0;
const __1 = require("../..");
const rxjs_1 = require("rxjs");
const Logger_1 = require("../../helper/Logger");
const reportFilter2QueryString = (report) => {
    try {
        const { offset, limit, hasCompany, websiteExists, phoneExists, companyCountries, departments, start, end, ...r } = report;
        const parseBoolean = (_) => report[_] !== undefined && { [_]: ('' + report[_]) };
        const parseDate = (_) => (report[_] ? { [_]: __1.dateToApi(report[_]) } : {});
        const parseArray = (_) => { var _a; return report[_] ? { [_]: (_a = [report[_]]) === null || _a === void 0 ? void 0 : _a.flatMap(_ => _).join(',') } : {}; };
        return {
            ...r,
            offset: offset !== undefined ? offset + '' : undefined,
            limit: limit !== undefined ? limit + '' : undefined,
            ...parseBoolean('hasCompany'),
            ...parseBoolean('websiteExists'),
            ...parseBoolean('phoneExists'),
            ...parseArray('companyCountries'),
            ...parseArray('departments'),
            ...parseDate('start'),
            ...parseDate('end'),
        };
    }
    catch (e) {
        Logger_1.ApiSdkLogger.error('Caught error on "reportFilter2QueryString"', report, e);
        return {};
    }
};
const cleanReportFilter = (filter) => {
    if (filter.websiteExists === false) {
        delete filter.websiteExists;
        delete filter.websiteURL;
    }
    if (filter.phoneExists === false) {
        delete filter.phoneExists;
        delete filter.phone;
    }
    return filter;
};
const reportFilter2Body = (report) => {
    const { start, end, offset, departments, tags, limit, siretSirenList, ...rest } = report;
    return {
        ...rest,
        limit: undefined,
        offset: undefined,
        siretSirenList: Array.isArray(siretSirenList) ? siretSirenList : siretSirenList !== undefined ? [siretSirenList] : undefined,
        departments: departments || [],
        tags: tags || [],
        start: __1.dateToApi(start),
        end: __1.dateToApi(end),
    };
};
exports.reportFilter2Body = reportFilter2Body;
class ReportsClient {
    constructor(client) {
        this.client = client;
        this.extract = (filter = { offset: 0, limit: 10 }) => {
            const body = rxjs_1.pipe(cleanReportFilter, exports.reportFilter2Body, __1.cleanObject)(filter);
            return this.client.post(`reports/extract`, { body });
        };
        this.search = (filter = { offset: 0, limit: 10 }) => {
            return this.client
                .get(`/reports`, {
                qs: rxjs_1.pipe(cleanReportFilter, reportFilter2QueryString, __1.cleanObject)(filter),
            })
                .then(result => {
                result.entities.forEach(entity => {
                    entity.report = ReportsClient.mapReport(entity.report);
                });
                return result;
            });
        };
        this.download = (id) => {
            // TODO Type it and maybe improve it
            return this.client.getPdf(`/reports/${id}/download`).then(__1.directDownloadBlob('test.pdf'));
        };
        this.remove = (id) => {
            return this.client.delete(`reports/${id}`);
        };
        this.getById = (id) => {
            return this.client
                .get(`/reports/${id}`)
                .then(_ => ({ files: _.files, report: ReportsClient.mapReport(_.report) }));
        };
        this.postResponse = (id, response) => {
            var _a;
            return this.client.post(`reports/${id}/response`, { body: { ...response, fileIds: (_a = response.fileIds) !== null && _a !== void 0 ? _a : [] } });
        };
        this.postAction = (id, action) => {
            // const mappedAction: any = {...action, actionType: {value: action.actionType}}
            return this.client.post(`reports/${id}/action`, { body: action });
        };
        this.updateReportCompany = (reportId, company) => {
            return this.client.post(`/reports/${reportId}/company`, {
                body: {
                    name: company.name,
                    address: company.address,
                    siret: company.siret,
                    activityCode: company.activityCode,
                },
            });
        };
        this.updateReportConsumer = (reportId, firstName, lastName, email, contactAgreement) => {
            return this.client.post(`reports/${reportId}/consumer`, {
                body: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    contactAgreement,
                },
            });
        };
    }
}
exports.ReportsClient = ReportsClient;
ReportsClient.mapReport = (report) => ({
    ...report,
    companyAddress: ReportsClient.mapAddress(report.companyAddress),
    creationDate: new Date(report.creationDate),
});
ReportsClient.mapAddress = (address) => {
    var _a;
    return ({
        ...address,
        country: (_a = address.country) === null || _a === void 0 ? void 0 : _a.name,
    });
};
//# sourceMappingURL=ReportsClient.js.map