"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = exports.ReportStatusPro = exports.ReportStatus = exports.DetailInputValue = exports.DescriptionLabel = exports.ReportingTimeslotLabel = exports.ReportingDateLabel = void 0;
const format_1 = __importDefault(require("date-fns/format"));
exports.ReportingDateLabel = 'Date du constat';
exports.ReportingTimeslotLabel = 'Heure du constat';
exports.DescriptionLabel = 'Description';
class DetailInputValue {
}
exports.DetailInputValue = DetailInputValue;
DetailInputValue.precisionKeyword = '(à préciser)';
/** TODO Maybe deprecated since we do it in signalconso-website */
DetailInputValue.parse = (div) => {
    return {
        label: (() => {
            if (div.label.endsWith('?')) {
                return div.label.replace('?', ':');
            }
            if (!div.label.endsWith(':')) {
                return `${div.label} :`;
            }
            return div.label;
        })(),
        value: (() => {
            if (div.value instanceof Date) {
                return format_1.default(div.value, 'dd/MM/yyyy');
            }
            else if (div.value instanceof Array) {
                return div.value
                    .filter(v => v !== undefined && v !== null)
                    .map(v => {
                    if (v.indexOf(DetailInputValue.precisionKeyword) !== -1) {
                        return v.replace(DetailInputValue.precisionKeyword, '(').concat(')');
                    }
                    else {
                        return v;
                    }
                })
                    .reduce((v1, v2) => `${v1}, ${v2}`);
            }
            else if (div.value && div.value.indexOf && div.value.indexOf(DetailInputValue.precisionKeyword) !== -1) {
                return div.value.replace(DetailInputValue.precisionKeyword, '(').concat(')');
            }
            return div.value;
        })()
    };
};
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