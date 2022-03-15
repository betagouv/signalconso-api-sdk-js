"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsClient = exports.cleanReportFilter = exports.reportFilter2QueryString = void 0;
const __1 = require("../..");
const rxjs_1 = require("rxjs");
const Logger_1 = require("../../helper/Logger");
const reportFilter2QueryString = (report) => {
    try {
        const { hasCompany, hasForeignCountry, hasWebsite, hasPhone, start, end, ...r } = report;
        const parseBoolean = (_) => report[_] !== undefined && { [_]: ('' + report[_]) };
        const parseDate = (_) => (report[_] ? { [_]: __1.dateToApi(report[_]) } : {});
        return {
            ...r,
            ...parseBoolean('hasCompany'),
            ...parseBoolean('hasWebsite'),
            ...parseBoolean('hasPhone'),
            ...parseBoolean('hasForeignCountry'),
            ...parseDate('start'),
            ...parseDate('end'),
        };
    }
    catch (e) {
        Logger_1.ApiSdkLogger.error('Caught error on "reportFilter2QueryString"', report, e);
        return {};
    }
};
exports.reportFilter2QueryString = reportFilter2QueryString;
const cleanReportFilter = (filter) => {
    if (filter.hasCompany === false) {
        delete filter.siretSirenList;
    }
    if (filter.hasForeignCountry === false) {
        delete filter.companyCountries;
    }
    if (filter.hasWebsite === false) {
        delete filter.websiteURL;
    }
    if (filter.hasPhone === false) {
        delete filter.phone;
    }
    return filter;
};
exports.cleanReportFilter = cleanReportFilter;
class ReportsClient {
    constructor(client) {
        this.client = client;
        this.extract = (filters) => {
            return this.client.post(`reports/extract`, {
                qs: rxjs_1.pipe(exports.cleanReportFilter, exports.reportFilter2QueryString, __1.paginateFilters2QueryString, __1.cleanObject)(filters),
            });
        };
        this.search = (filters) => {
            return this.client
                .get(`/reports`, {
                qs: rxjs_1.pipe(exports.cleanReportFilter, exports.reportFilter2QueryString, __1.cleanObject)(filters),
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
            return this.client.get(`/reports/${id}`).then(_ => ({ files: _.files, report: ReportsClient.mapReport(_.report) }));
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
        this.getCountByDepartments = ({ start, end } = {}) => {
            return this.client.get(`/reports/count-by-departments`, { qs: { start: __1.dateToApi(start), end: __1.dateToApi(end) } });
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