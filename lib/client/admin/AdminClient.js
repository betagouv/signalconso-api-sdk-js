"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminClient = void 0;
class AdminClient {
    constructor(client) {
        this.client = client;
        this.getEmailCodes = () => {
            return this.client.get(`/admin/test-email`);
        };
        this.sendTestEmail = (templateRef, to) => {
            return this.client.post(`/admin/test-email`, { qs: { templateRef, to } });
        };
    }
}
exports.AdminClient = AdminClient;
//# sourceMappingURL=AdminClient.js.map