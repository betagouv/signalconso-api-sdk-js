"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalConsoPublicSdk = void 0;
const client_1 = require("./client");
const PublicCompanyClient_1 = require("./client/company/PublicCompanyClient");
const PublicUserClient_1 = require("./client/user/PublicUserClient");
const PublicReportClient_1 = require("./client/report/PublicReportClient");
const PublicStatsClient_1 = require("./client/stats/PublicStatsClient");
class SignalConsoPublicSdk {
    constructor(client) {
        this.client = client;
        this.company = new PublicCompanyClient_1.PublicCompanyClient(this.client);
        this.report = new PublicReportClient_1.PublicReportClient(this.client);
        this.stats = new PublicStatsClient_1.PublicStatsClient(this.client);
        this.user = new PublicUserClient_1.PublicUserClient(this.client);
        this.constant = new client_1.PublicConstantClient(this.client);
        this.authenticate = new client_1.AuthenticateClient(this.client);
        this.document = new client_1.FileClient(this.client);
        this.anomaly = new client_1.AnomalyClient(this.client);
    }
}
exports.SignalConsoPublicSdk = SignalConsoPublicSdk;
//# sourceMappingURL=SignalConsoPublicSdk.js.map