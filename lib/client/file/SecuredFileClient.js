"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecuredFileClient = void 0;
class SecuredFileClient {
    constructor(client) {
        this.client = client;
        this.remove = (file) => {
            return this.client.delete(`/reports/files/${file.id}/${file.filename}`);
        };
    }
}
exports.SecuredFileClient = SecuredFileClient;
//# sourceMappingURL=SecuredFileClient.js.map