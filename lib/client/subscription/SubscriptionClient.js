"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionClient = void 0;
const __1 = require("../..");
const fromApi = (client) => async (api) => {
    var _a, _b, _c, _d;
    const getDepartmentByCode = new __1.PublicConstantClient(client).getDepartmentByCode;
    const departments = await Promise.all((api.departments || []).map(getDepartmentByCode));
    return {
        ...api,
        categories: (_a = api.categories) !== null && _a !== void 0 ? _a : [],
        sirets: (_b = api.sirets) !== null && _b !== void 0 ? _b : [],
        countries: (_c = api.countries) !== null && _c !== void 0 ? _c : [],
        tags: (_d = api.tags) !== null && _d !== void 0 ? _d : [],
        departments,
    };
};
const toApi = (subscription) => subscription;
class SubscriptionClient {
    constructor(client) {
        this.client = client;
        this.list = () => {
            return this.client.get(`/subscriptions`).then(_ => Promise.all(_.map(fromApi(this.client))));
        };
        this.get = (id) => {
            return this.client.get(`/subscriptions/${id}`).then(fromApi(this.client));
        };
        this.create = (body = {
            categories: [],
            departments: [],
            sirets: [],
            withTags: [],
            withoutTags: [],
            countries: [],
            frequency: 'P7D',
        }) => {
            return this.client.post(`/subscriptions`, { body: toApi(body) }).then(fromApi(this.client));
        };
        this.update = (id, body) => {
            return this.client.put(`/subscriptions/${id}`, { body: toApi(body) }).then(fromApi(this.client));
        };
        this.remove = (id) => {
            return this.client.delete(`/subscriptions/${id}`);
        };
    }
}
exports.SubscriptionClient = SubscriptionClient;
//# sourceMappingURL=SubscriptionClient.js.map