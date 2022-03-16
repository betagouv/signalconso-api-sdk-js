"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const qs = __importStar(require("qs"));
class ApiClient {
    constructor({ baseUrl, headers, requestInterceptor, mapData, mapError }) {
        this.get = (uri, options) => {
            return this.fetch('GET', uri, options);
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
        const client = axios_1.default.create({
            baseURL: baseUrl,
            headers: { ...headers },
        });
        this.baseUrl = baseUrl;
        this.fetch = async (method, url, options) => {
            const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor);
            return client
                .request({
                method,
                url,
                headers: builtOptions === null || builtOptions === void 0 ? void 0 : builtOptions.headers,
                params: options === null || options === void 0 ? void 0 : options.qs,
                data: options === null || options === void 0 ? void 0 : options.body,
                paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
            })
                .then(mapData !== null && mapData !== void 0 ? mapData : ((_) => _.data))
                .catch(mapError !== null && mapError !== void 0 ? mapError : ((_) => {
                var _a, _b;
                if (_.response && _.response.data) {
                    return Promise.reject({
                        code: _.response.status,
                        id: _.response.data.type,
                        message: (_b = (_a = _.response.data.details) !== null && _a !== void 0 ? _a : _.response.data.timeout) !== null && _b !== void 0 ? _b : JSON.stringify(_.response.data),
                        error: _,
                    });
                }
                return Promise.reject({
                    code: 500,
                    error: _,
                });
            }));
        };
        /** TODO(Alex) Didn't find any way to download pdf with axios but it should exist. */
        this.postGetPdf = async (url, options) => {
            const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor);
            return fetch(baseUrl + url, {
                method: 'POST',
                headers: builtOptions === null || builtOptions === void 0 ? void 0 : builtOptions.headers,
                body: JSON.stringify(builtOptions === null || builtOptions === void 0 ? void 0 : builtOptions.body),
            }).then(_ => _.blob());
        };
        /** TODO(Alex) Didn't find any way to download pdf with axios but it should exist. */
        this.getPdf = async (url, options) => {
            const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor);
            return fetch(baseUrl + url, {
                method: 'GET',
                headers: builtOptions === null || builtOptions === void 0 ? void 0 : builtOptions.headers,
            }).then(_ => _.blob());
        };
    }
}
exports.ApiClient = ApiClient;
ApiClient.buildOptions = async (options, headers, requestInterceptor = _ => _) => {
    const interceptedOptions = await requestInterceptor(options);
    return {
        ...interceptedOptions,
        headers: { ...headers, ...interceptedOptions === null || interceptedOptions === void 0 ? void 0 : interceptedOptions.headers },
    };
};
//# sourceMappingURL=ApiClient.js.map