"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportDraft_ = exports.ReportDraft = void 0;
const Anomaly_1 = require("../anomaly/Anomaly");
const LodashNamedExport_1 = require("../../helper/LodashNamedExport");
class ReportDraft {
}
exports.ReportDraft = ReportDraft;
ReportDraft.getCompanyKindFomSubcategories = (r) => {
    var _a, _b;
    return (_b = (_a = r.subcategories) === null || _a === void 0 ? void 0 : _a.reverse().find(_ => !!_.companyKind)) === null || _b === void 0 ? void 0 : _b.companyKind;
};
ReportDraft.getLastSubcategory = (r) => {
    if (r.subcategories && r.subcategories.length) {
        return r.subcategories[r.subcategories.length - 1];
    }
};
ReportDraft.getReponseconsoCode = (r) => {
    var _a;
    return LodashNamedExport_1.uniqby(((_a = r.subcategories) !== null && _a !== void 0 ? _a : []).flatMap(_ => { var _a; return (_a = _.reponseconsoCode) !== null && _a !== void 0 ? _a : []; }), _ => _);
};
ReportDraft.ccrfCode = (r) => {
    var _a;
    return LodashNamedExport_1.uniqby(((_a = r.subcategories) !== null && _a !== void 0 ? _a : []).flatMap(_ => { var _a; return (_a = _.ccrfCode) !== null && _a !== void 0 ? _a : []; }), _ => _);
};
ReportDraft.tags = (r) => {
    var _a;
    const tags = ((_a = r.subcategories) !== null && _a !== void 0 ? _a : []).flatMap(_ => { var _a; return (_a = _.tags) !== null && _a !== void 0 ? _a : []; });
    if (ReportDraft.getCompanyKindFomSubcategories(r) === Anomaly_1.CompanyKinds.WEBSITE) {
        tags.push(Anomaly_1.ReportTag.Internet);
    }
    if (!r.forwardToReponseConso) {
        return tags.filter(_ => _ !== Anomaly_1.ReportTag.ReponseConso);
    }
    return tags;
};
ReportDraft.isContractualDispute = (r) => {
    return !r.employeeConsumer && !!r.tags && r.tags.includes(Anomaly_1.ReportTag.LitigeContractuel);
};
ReportDraft.isVendor = (r) => {
    return !!r.tags && r.tags.includes(Anomaly_1.ReportTag.ProduitDangereux);
};
ReportDraft.isInfluenceur = (r) => {
    return !!r.tags && r.tags.includes(Anomaly_1.ReportTag.Influenceur);
};
ReportDraft.isTransmittableToPro = (r) => {
    var _a;
    return !r.employeeConsumer
        && !((_a = r.tags) !== null && _a !== void 0 ? _a : []).find(_ => ([
            Anomaly_1.ReportTag.ReponseConso,
            Anomaly_1.ReportTag.ProduitDangereux,
            Anomaly_1.ReportTag.Bloctel
        ]).includes(_));
};
/** @deprecated use the one from Report */
ReportDraft.isGovernmentCompany = (_) => { var _a, _b; return (_b = (_a = _ === null || _ === void 0 ? void 0 : _.activityCode) === null || _a === void 0 ? void 0 : _a.startsWith('84.')) !== null && _b !== void 0 ? _b : false; };
class ReportDraft_ {
}
exports.ReportDraft_ = ReportDraft_;
ReportDraft_.getCompanyKindFomSubcategories = (r) => {
    var _a, _b;
    return (_b = (_a = r.subcategories) === null || _a === void 0 ? void 0 : _a.reverse().find(_ => !!_.companyKind)) === null || _b === void 0 ? void 0 : _b.companyKind;
};
ReportDraft_.getLastSubcategory = (r) => {
    if (r.subcategories && r.subcategories.length) {
        return r.subcategories[r.subcategories.length - 1];
    }
};
ReportDraft_.getReponseconsoCode = (r) => {
    var _a;
    return LodashNamedExport_1.uniqby(((_a = r.subcategories) !== null && _a !== void 0 ? _a : []).flatMap(_ => { var _a; return (_a = _.reponseconsoCode) !== null && _a !== void 0 ? _a : []; }), _ => _);
};
ReportDraft_.ccrfCode = (r) => {
    var _a;
    return LodashNamedExport_1.uniqby(((_a = r.subcategories) !== null && _a !== void 0 ? _a : []).flatMap(_ => { var _a; return (_a = _.ccrfCode) !== null && _a !== void 0 ? _a : []; }), _ => _);
};
ReportDraft_.tags = (r) => {
    var _a;
    const tags = ((_a = r.subcategories) !== null && _a !== void 0 ? _a : []).flatMap(_ => { var _a; return (_a = _.tags) !== null && _a !== void 0 ? _a : []; });
    if (ReportDraft.getCompanyKindFomSubcategories(r) === Anomaly_1.CompanyKinds.WEBSITE) {
        tags.push(Anomaly_1.ReportTag.Internet);
    }
    if (!r.forwardToReponseConso) {
        return tags.filter(_ => _ !== Anomaly_1.ReportTag.ReponseConso);
    }
    return tags;
};
ReportDraft_.isContractualDispute = (r) => {
    return !r.employeeConsumer && !!r.tags && r.tags.includes(Anomaly_1.ReportTag.LitigeContractuel);
};
ReportDraft_.isVendor = (r) => {
    return !!r.tags && r.tags.includes(Anomaly_1.ReportTag.ProduitDangereux);
};
ReportDraft_.isInfluenceur = (r) => {
    return !!r.tags && r.tags.includes(Anomaly_1.ReportTag.Influenceur);
};
ReportDraft_.isTransmittableToPro = (r) => {
    var _a;
    return !r.employeeConsumer
        && !((_a = r.tags) !== null && _a !== void 0 ? _a : []).find(_ => ([
            Anomaly_1.ReportTag.ReponseConso,
            Anomaly_1.ReportTag.ProduitDangereux,
            Anomaly_1.ReportTag.Bloctel
        ]).includes(_));
};
ReportDraft_.isGovernmentCompany = (_) => { var _a, _b; return (_b = (_a = _ === null || _ === void 0 ? void 0 : _.activityCode) === null || _a === void 0 ? void 0 : _a.startsWith('84.')) !== null && _b !== void 0 ? _b : false; };
//# sourceMappingURL=ReportDraft.js.map