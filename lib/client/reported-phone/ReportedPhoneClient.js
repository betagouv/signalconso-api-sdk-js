"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportedPhoneClient = void 0;
const format_1 = __importDefault(require("date-fns/format"));
class ReportedPhoneClient {
    constructor(client) {
        this.client = client;
        this.list = (filters) => {
            return this.client.get(`/reported-phones`, { qs: ReportedPhoneClient.mapFilters(filters) });
        };
        this.extract = (filters) => {
            return this.client.get(`/reported-phones/extract`, { qs: ReportedPhoneClient.mapFilters(filters) });
        };
    }
}
exports.ReportedPhoneClient = ReportedPhoneClient;
ReportedPhoneClient.mapFilters = (filters) => ({
    q: filters.phone,
    ...(filters.start ? { start: (0, format_1.default)(filters.start, 'yyyy-MM-dd') } : {}),
    ...(filters.end ? { end: (0, format_1.default)(filters.end, 'yyyy-MM-dd') } : {}),
});
//# sourceMappingURL=ReportedPhoneClient.js.map