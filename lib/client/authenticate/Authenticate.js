"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = exports.TokenKind = exports.roleUrlParam = exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["DGCCRF"] = "DGCCRF";
    Roles["Pro"] = "Professionnel";
    Roles["ToActivate"] = "ToActivate";
})(Roles = exports.Roles || (exports.Roles = {}));
const roleUrlParam = (_) => {
    switch (_.role) {
        case Roles.Admin:
            return 'admin';
        case Roles.DGCCRF:
            return 'dgccrf';
        case Roles.Pro:
            return 'pro';
        default:
            return '';
    }
};
exports.roleUrlParam = roleUrlParam;
var TokenKind;
(function (TokenKind) {
    TokenKind["companyInit"] = "COMPANY_INIT";
    TokenKind["companyJoin"] = "COMPANY_JOIN";
    TokenKind["dgccrfAccount"] = "DGCCRF_ACCOUNT";
})(TokenKind = exports.TokenKind || (exports.TokenKind = {}));
var Permissions;
(function (Permissions) {
    Permissions["listReports"] = "listReports";
    Permissions["updateReport"] = "updateReport";
    Permissions["deleteReport"] = "deleteReport";
    Permissions["deleteFile"] = "deleteFile";
    Permissions["createEvent"] = "createEvent";
    Permissions["editDocuments"] = "editDocuments";
    Permissions["subscribeReports"] = "subscribeReports";
    Permissions["updateCompany"] = "updateCompany";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
//# sourceMappingURL=Authenticate.js.map