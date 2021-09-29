"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicCompanyClient = void 0;
class PublicCompanyClient {
    constructor(client) {
        this.client = client;
        this.searchCompanies = (search, searchPostalCode) => {
            return this.client.get(`/companies/search`, {
                qs: {
                    postalCode: searchPostalCode.toString(),
                    q: search,
                },
            });
        };
        this.searchCompaniesByIdentity = (identity) => {
            return this.client.get(`/companies/search/${identity}`, {});
            // .then(companies => companies.filter(_ => _.postalCode));
        };
        this.searchCompaniesByUrl = (url) => {
            return this.client.get(`/companies/search-url`, { qs: { url } });
        };
    }
}
exports.PublicCompanyClient = PublicCompanyClient;
//# sourceMappingURL=PublicCompanyClient.js.map