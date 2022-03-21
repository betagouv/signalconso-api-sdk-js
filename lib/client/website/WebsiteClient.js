"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteClient = void 0;
const model_1 = require("../../model");
const __1 = require("../..");
const Logger_1 = require("../../helper/Logger");
const Paginate_1 = require("../../helper/Paginate");
const hostReportFilter2QueryString = (hostReport) => {
    try {
        const { q, start, end, offset, limit, ...r } = hostReport;
        const parseDate = (_) => hostReport[_] ? { [_]: (0, __1.dateToApi)(hostReport[_]) } : {};
        return {
            ...r,
            q: q,
            ...parseDate('start'),
            ...parseDate('end'),
            offset: offset !== undefined ? offset + '' : undefined,
            limit: limit !== undefined ? limit + '' : undefined,
        };
    }
    catch (e) {
        Logger_1.ApiSdkLogger.error('Caught error on "hostReportFilter2QueryString"', hostReport, e);
        return {};
    }
};
const cleanFilter = (filter) => {
    if (filter.kinds === []) {
        delete filter.kinds;
    }
    if (filter.host === '') {
        delete filter.host;
    }
    return filter;
};
class WebsiteClient {
    constructor(client) {
        this.client = client;
        this.list = (filters) => {
            return this.client
                .get(`/websites`, { qs: cleanFilter(filters) })
                .then(paginated => Object.assign({}, paginated, { entities: paginated.entities.filter(website => website.kind !== model_1.WebsiteKind.MARKETPLACE) }))
                .then(result => {
                result.entities = result.entities.map(_ => {
                    _.creationDate = new Date(_.creationDate);
                    return _;
                });
                return result;
            });
        };
        this.listUnregistered = (filters) => {
            return this.client
                .get(`/websites/unregistered`, { qs: hostReportFilter2QueryString(filters) })
                .then((0, Paginate_1.paginateData)(filters.limit, filters.offset));
        };
        this.extractUnregistered = (filters) => {
            return this.client.get(`/websites/unregistered/extract`, { qs: hostReportFilter2QueryString(filters) });
        };
        this.updateStatus = (id, kind) => {
            return this.client.put(`/websites/${id}`, { qs: { kind: kind } });
        };
        this.updateCompany = (id, website) => {
            return this.client.put(`/websites/${id}/company`, { body: website });
        };
        this.updateCountry = (id, country) => {
            return this.client.put(`/websites/${id}/country`, { qs: { companyCountry: country.name } });
        };
        this.remove = (id) => {
            return this.client.delete(`/websites/${id}`);
        };
        this.search = () => {
            return this.client.get(`/websites/search`);
        };
    }
}
exports.WebsiteClient = WebsiteClient;
//# sourceMappingURL=WebsiteClient.js.map