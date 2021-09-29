"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportStatus = exports.DescriptionLabel = exports.ReportingTimeslotLabel = exports.ReportingDateLabel = void 0;
exports.ReportingDateLabel = 'Date du constat';
exports.ReportingTimeslotLabel = 'Heure du constat';
exports.DescriptionLabel = 'Description';
var ReportStatus;
(function (ReportStatus) {
    ReportStatus["NA"] = "NA";
    ReportStatus["EmployeeConsumer"] = "Lanceur d'alerte";
    ReportStatus["InProgress"] = "Traitement en cours";
    ReportStatus["Unread"] = "Signalement non consult\u00E9";
    ReportStatus["UnreadForPro"] = "Non consult\u00E9";
    ReportStatus["Transmitted"] = "Signalement transmis";
    ReportStatus["ToReviewedByPro"] = "\u00C0 r\u00E9pondre";
    ReportStatus["Accepted"] = "Promesse action";
    ReportStatus["ClosedForPro"] = "Cl\u00F4tur\u00E9";
    ReportStatus["Rejected"] = "Signalement infond\u00E9";
    ReportStatus["NotConcerned"] = "Signalement mal attribu\u00E9";
    ReportStatus["Ignored"] = "Signalement consult\u00E9 ignor\u00E9";
})(ReportStatus = exports.ReportStatus || (exports.ReportStatus = {}));
//# sourceMappingURL=Report.js.map