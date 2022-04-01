"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = exports.ReportStatusPro = exports.ReportStatus = exports.DescriptionLabel = exports.ReportingTimeslotLabel = exports.ReportingDateLabel = void 0;
exports.ReportingDateLabel = 'Date du constat';
exports.ReportingTimeslotLabel = 'Heure du constat';
exports.DescriptionLabel = 'Description';
var ReportStatus;
(function (ReportStatus) {
    ReportStatus["NA"] = "NA";
    ReportStatus["LanceurAlerte"] = "LanceurAlerte";
    ReportStatus["TraitementEnCours"] = "TraitementEnCours";
    ReportStatus["Transmis"] = "Transmis";
    ReportStatus["PromesseAction"] = "PromesseAction";
    ReportStatus["Infonde"] = "Infonde";
    ReportStatus["NonConsulte"] = "NonConsulte";
    ReportStatus["ConsulteIgnore"] = "ConsulteIgnore";
    ReportStatus["MalAttribue"] = "MalAttribue";
})(ReportStatus = exports.ReportStatus || (exports.ReportStatus = {}));
var ReportStatusPro;
(function (ReportStatusPro) {
    ReportStatusPro["NonConsulte"] = "NonConsulte";
    ReportStatusPro["ARepondre"] = "ARepondre";
    ReportStatusPro["Cloture"] = "Cloture";
})(ReportStatusPro = exports.ReportStatusPro || (exports.ReportStatusPro = {}));
class Report {
}
exports.Report = Report;
Report.closedStatus = [
    ReportStatus.PromesseAction,
    ReportStatus.Infonde,
    ReportStatus.NonConsulte,
    ReportStatus.ConsulteIgnore,
    ReportStatus.MalAttribue,
];
Report.transmittedStatus = [
    ReportStatus.TraitementEnCours,
    ReportStatus.Transmis,
    ReportStatus.PromesseAction,
    ReportStatus.Infonde,
    ReportStatus.NonConsulte,
    ReportStatus.ConsulteIgnore,
    ReportStatus.MalAttribue,
];
Report.readStatus = [
    ReportStatus.Transmis,
    ReportStatus.PromesseAction,
    ReportStatus.Infonde,
    ReportStatus.MalAttribue,
    ReportStatus.ConsulteIgnore,
];
Report.respondedStatus = [
    ReportStatus.PromesseAction,
    ReportStatus.Infonde,
    ReportStatus.MalAttribue
];
Report.isClosed = (status) => {
    return Report.closedStatus.includes(status);
};
Report.mapStatusPro = {
    [ReportStatus.NA]: () => {
        throw new Error(`Invalid status`);
    },
    [ReportStatus.LanceurAlerte]: () => {
        throw new Error(`Invalid status`);
    },
    [ReportStatus.TraitementEnCours]: () => ReportStatusPro.NonConsulte,
    [ReportStatus.Transmis]: () => ReportStatusPro.ARepondre,
    [ReportStatus.PromesseAction]: () => ReportStatusPro.Cloture,
    [ReportStatus.Infonde]: () => ReportStatusPro.Cloture,
    [ReportStatus.NonConsulte]: () => ReportStatusPro.Cloture,
    [ReportStatus.ConsulteIgnore]: () => ReportStatusPro.Cloture,
    [ReportStatus.MalAttribue]: () => ReportStatusPro.Cloture,
};
Report.mapStatusProInverted = Object.entries(Report.mapStatusPro)
    .reduce((acc, [status, statusProFn]) => {
    try {
        const statusPro = statusProFn();
        const prevStatus = acc[statusPro] ? acc[statusPro]() : [];
        acc[statusPro] = () => [...prevStatus, status];
        return acc;
    }
    catch {
        return acc;
    }
}, {});
Report.getStatusProByStatus = (status) => (Report.mapStatusPro[status])();
Report.getStatusByStatusPro = (status) => (Report.mapStatusProInverted[status])();
Report.isGovernmentCompany = (_) => { var _a, _b; return (_b = (_a = _ === null || _ === void 0 ? void 0 : _.activityCode) === null || _a === void 0 ? void 0 : _a.startsWith('84.')) !== null && _b !== void 0 ? _b : false; };
//# sourceMappingURL=Report.js.map