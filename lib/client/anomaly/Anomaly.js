"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formLabels = exports.DetailInputType = exports.CompanyKinds = exports.ReportTag = void 0;
var ReportTag;
(function (ReportTag) {
    ReportTag["LitigeContractuel"] = "LitigeContractuel";
    ReportTag["Hygiene"] = "Hygiene";
    ReportTag["ProduitDangereux"] = "ProduitDangereux";
    ReportTag["DemarchageADomicile"] = "DemarchageADomicile";
    ReportTag["Ehpad"] = "Ehpad";
    ReportTag["DemarchageTelephonique"] = "DemarchageTelephonique";
    ReportTag["AbsenceDeMediateur"] = "AbsenceDeMediateur";
    ReportTag["Bloctel"] = "Bloctel";
    ReportTag["Influenceur"] = "Influenceur";
    ReportTag["ReponseConso"] = "ReponseConso";
    ReportTag["Internet"] = "Internet";
    ReportTag["ProduitIndustriel"] = "ProduitIndustriel";
    ReportTag["ProduitAlimentaire"] = "ProduitAlimentaire";
    ReportTag["CompagnieAerienne"] = "CompagnieAerienne";
})(ReportTag = exports.ReportTag || (exports.ReportTag = {}));
var CompanyKinds;
(function (CompanyKinds) {
    CompanyKinds["SIRET"] = "SIRET";
    CompanyKinds["WEBSITE"] = "WEBSITE";
    CompanyKinds["PHONE"] = "PHONE";
    CompanyKinds["LOCATION"] = "LOCATION";
    CompanyKinds["INFLUENCEUR"] = "INFLUENCEUR";
})(CompanyKinds = exports.CompanyKinds || (exports.CompanyKinds = {}));
var DetailInputType;
(function (DetailInputType) {
    DetailInputType["TEXT"] = "TEXT";
    DetailInputType["DATE_NOT_IN_FUTURE"] = "DATE_NOT_IN_FUTURE";
    DetailInputType["DATE"] = "DATE";
    DetailInputType["TIMESLOT"] = "TIMESLOT";
    DetailInputType["RADIO"] = "RADIO";
    DetailInputType["CHECKBOX"] = "CHECKBOX";
    DetailInputType["TEXTAREA"] = "TEXTAREA";
})(DetailInputType = exports.DetailInputType || (exports.DetailInputType = {}));
exports.formLabels = {
    reportingDateLabel: 'Date du constat',
    reportingTimeslotLabel: 'Heure du constat',
    descriptionLabel: 'Description',
};
//# sourceMappingURL=Anomaly.js.map