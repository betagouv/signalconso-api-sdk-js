"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClientMock = void 0;
const ApiClient_1 = require("./ApiClient");
class ApiClientMock {
    constructor({ baseUrl, headers, requestInterceptor, mapData, mapError }) {
        this.baseUrl = 'mockApi';
        this.requests = [];
        this.mocks = [];
        this.mock = (urlPattern, returnValue) => {
            this.mocks.push({ urlPattern, returnValue });
        };
        this.get = (uri, options) => {
            return this.fetch('GET', uri, options);
        };
        this.getPdf = (uri, options) => {
            return this.fetch('POST', uri, options);
        };
        this.postGetPdf = (uri, options) => {
            return this.fetch('POST', uri, options);
        };
        this.post = (uri, options) => {
            return this.fetch('POST', uri, options);
        };
        this.delete = (uri, options) => {
            return this.fetch('DELETE', uri, options);
        };
        this.put = (uri, options) => {
            return this.fetch('PUT', uri, options);
        };
        this.patch = (uri, options) => {
            return this.fetch('PATCH', uri, options);
        };
        this.fetch = async (method, url, options) => {
            var _a;
            // @ts-ignore bypass private method
            const builtOptions = await ApiClient_1.ApiClient.buildOptions(options, headers, requestInterceptor);
            const returnValue = (_a = this.mocks.find(_ => _.urlPattern.test(url))) === null || _a === void 0 ? void 0 : _a.returnValue;
            this.requests.push({
                method,
                url,
                options: builtOptions,
                qs: builtOptions.qs,
            });
            return Promise.resolve(returnValue);
        };
    }
}
exports.ApiClientMock = ApiClientMock;
//# sourceMappingURL=ApiClientMock.js.map