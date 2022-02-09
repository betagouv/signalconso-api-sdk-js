"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessesClient = void 0;
class AccessesClient {
    constructor(client) {
        this.client = client;
        this.acceptToken = (siret, token) => {
            return this.client.post(`/accesses/${siret}/token/accept`, { body: { token } });
        };
    }
}
exports.AccessesClient = AccessesClient;
//# sourceMappingURL=AccessesClient.js.map