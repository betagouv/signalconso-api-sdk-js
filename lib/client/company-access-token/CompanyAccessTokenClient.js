"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAccessTokenClient = void 0;
class CompanyAccessTokenClient {
    constructor(client) {
        this.client = client;
        this.fetch = (siret) => {
            return this.client.get(`/accesses/${siret}/pending`);
        };
        this.remove = (siret, tokenId) => {
            return this.client.delete(`/accesses/${siret}/token/${tokenId}`);
        };
        this.create = (siret, email, level) => {
            return (this.client
                .post(`/accesses/${siret}/invitation`, { body: { email, level } })
                // Hack because the API don't return anything and create a CompanyAccessToken or a CompanyAccess
                .then(() => {
                const response = {
                    id: '' + Math.floor(Math.random() * 10000),
                    level,
                    emailedTo: email,
                    expirationDate: new Date(),
                };
                return response;
            }));
        };
    }
}
exports.CompanyAccessTokenClient = CompanyAccessTokenClient;
//# sourceMappingURL=CompanyAccessTokenClient.js.map