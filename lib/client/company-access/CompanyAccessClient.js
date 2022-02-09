"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAccessClient = void 0;
class CompanyAccessClient {
    constructor(client) {
        this.client = client;
        this.fetch = (siret) => {
            return this.client.get(`/accesses/${siret}`);
        };
        this.update = (siret, userId, level) => {
            return this.client.put(`/accesses/${siret}/${userId}`, { body: { level } }).then(_ => ({ ..._, level: level }));
        };
        this.remove = (siret, userId) => {
            return this.client.delete(`/accesses/${siret}/${userId}`);
        };
    }
}
exports.CompanyAccessClient = CompanyAccessClient;
//# sourceMappingURL=CompanyAccessClient.js.map