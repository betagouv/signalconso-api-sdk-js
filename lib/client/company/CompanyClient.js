"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyClient = void 0;
const __1 = require("../..");
const date_fns_1 = require("date-fns");
class CompanyClient {
    constructor(client) {
        this.client = client;
        this.search = (search) => {
            return this.client.get(`/companies`, { qs: search }).then(res => ({
                ...res,
                entities: res.entities.map(CompanyClient.mapCompany),
            }));
        };
        this.updateAddress = (id, update) => {
            return this.client.put(`/companies/${id}/address`, { body: update });
        };
        this.saveUndeliveredDocument = (siret, returnedDate) => {
            return this.client.post(`/companies/${siret}/undelivered-document`, { body: { returnedDate: __1.dateToApi(returnedDate) } });
        };
        this.create = (company) => {
            return this.client.post(`/companies`, { body: company });
        };
        this.downloadActivationDocument = (companyIds) => {
            return this.client
                .postGetPdf(`/companies/activation-document`, { body: { companyIds } })
                .then(__1.directDownloadBlob(`signalement_depot_${date_fns_1.format(new Date(), 'ddMMyy')}`));
        };
        this.getHosts = (id) => {
            return this.client.get(`/companies/hosts/${id}`);
        };
        this.getAccessibleByPro = () => {
            return this.client.get(`/companies/connected-user`);
        };
        this.fetchToActivate = () => {
            return this.client.get(`/companies/to-activate`).then(_ => _.map(_ => {
                _.lastNotice = _.lastNotice ? new Date(_.lastNotice) : undefined;
                _.tokenCreation = new Date(_.tokenCreation);
                _.company.creationDate = new Date(_.company.creationDate);
                return _;
            }));
        };
        this.confirmCompaniesPosted = (ids) => {
            return this.client.post(`/companies/companies-posted`, { body: { companyIds: ids } });
        };
    }
}
exports.CompanyClient = CompanyClient;
CompanyClient.mapCompany = (company) => ({
    ...company,
    creationDate: new Date(company.creationDate),
});
//# sourceMappingURL=CompanyClient.js.map