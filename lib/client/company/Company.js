"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGovernmentCompany = exports.AccessLevel = void 0;
// TODO(Alex) Harmonize with company-access types
var AccessLevel;
(function (AccessLevel) {
    AccessLevel["NONE"] = "none";
    AccessLevel["MEMBER"] = "member";
    AccessLevel["ADMIN"] = "admin";
})(AccessLevel = exports.AccessLevel || (exports.AccessLevel = {}));
const isGovernmentCompany = (_) => { var _a, _b; return (_b = (_a = _ === null || _ === void 0 ? void 0 : _.activityCode) === null || _a === void 0 ? void 0 : _a.startsWith('84.')) !== null && _b !== void 0 ? _b : false; };
exports.isGovernmentCompany = isGovernmentCompany;
//# sourceMappingURL=Company.js.map