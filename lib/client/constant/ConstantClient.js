"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantClient = void 0;
class ConstantClient {
    constructor(client) {
        this.client = client;
        this.getReportStatusList = () => this.client.get(`/constants/reportStatus`);
    }
}
exports.ConstantClient = ConstantClient;
//# sourceMappingURL=ConstantClient.js.map