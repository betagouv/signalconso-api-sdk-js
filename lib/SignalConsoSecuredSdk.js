"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalConsoSecuredSdk = void 0;
const client_1 = require("./client");
const AsyncFileClient_1 = require("./client/async-file/AsyncFileClient");
const CompanyAccessTokenClient_1 = require("./client/company-access-token/CompanyAccessTokenClient");
const SecuredFileClient_1 = require("./client/file/SecuredFileClient");
const ReportBlockedNotificationClient_1 = require("./client/blocked-report-notifications/ReportBlockedNotificationClient");
const AccessesClient_1 = require("./client/accesses/AccessesClient");
const CompaniesDbSyncClient_1 = require("./client/companies-db-sync/CompaniesDbSyncClient");
const StatsClient_1 = require("./client/stats/StatsClient");
class SignalConsoSecuredSdk {
    constructor(client) {
        this.client = client;
        this.accesses = new AccessesClient_1.AccessesClient(this.client);
        this.website = new client_1.WebsiteClient(this.client);
        this.reportedPhone = new client_1.ReportedPhoneClient(this.client);
        this.constant = new client_1.ConstantClient(this.client);
        this.subscription = new client_1.SubscriptionClient(this.client);
        this.company = new client_1.CompanyClient(this.client);
        this.stats = new StatsClient_1.StatsClient(this.client);
        this.companyAccess = new client_1.CompanyAccessClient(this.client);
        this.companyAccessToken = new CompanyAccessTokenClient_1.CompanyAccessTokenClient(this.client);
        this.reports = new client_1.ReportsClient(this.client);
        this.events = new client_1.EventClient(this.client);
        this.asyncFiles = new AsyncFileClient_1.AsyncFileClient(this.client);
        this.user = new client_1.UserClient(this.client);
        this.document = new SecuredFileClient_1.SecuredFileClient(this.client);
        this.reportBlockedNotification = new ReportBlockedNotificationClient_1.ReportBlockedNotificationClient(this.client);
        this.companiesDbSync = new CompaniesDbSyncClient_1.CompaniesDbSyncClient(this.client);
    }
}
exports.SignalConsoSecuredSdk = SignalConsoSecuredSdk;
//# sourceMappingURL=SignalConsoSecuredSdk.js.map