"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportResponseTypes = exports.EventActionValues = void 0;
var EventActionValues;
(function (EventActionValues) {
    EventActionValues["Creation"] = "Signalement du consommateur";
    EventActionValues["PostAccountActivationDoc"] = "Envoi du courrier d'activation";
    EventActionValues["AccountActivation"] = "Activation d'un compte";
    EventActionValues["ActivationDocReturned"] = "Courrier d'activation retourn\u00E9";
    EventActionValues["ActivationDocRequired"] = "Courrier d'activation \u00E0 renvoyer";
    EventActionValues["CompanyAddressChange"] = "Modification de l'adresse de l'entreprise";
    EventActionValues["ReportReadingByPro"] = "Premi\u00E8re consultation du signalement par le professionnel";
    EventActionValues["ReportProResponse"] = "R\u00E9ponse du professionnel au signalement";
    EventActionValues["ReportReviewOnResponse"] = "Avis du consommateur sur la r\u00E9ponse du professionnel";
    EventActionValues["ReportClosedByNoReading"] = "Signalement non consult\u00E9";
    EventActionValues["ReportClosedByNoAction"] = "Signalement consult\u00E9 ignor\u00E9";
    EventActionValues["EmailConsumerAcknowledgment"] = "Email \u00AB\u00A0Accus\u00E9 de r\u00E9ception\u00A0\u00BB envoy\u00E9 au consommateur";
    EventActionValues["EmailConsumerReportReading"] = "Email \u00AB\u00A0Signalement consult\u00E9\u00A0\u00BB envoy\u00E9 au consommateur";
    EventActionValues["EmailConsumerReportResponse"] = "Email \u00AB\u00A0L'entreprise a r\u00E9pondu \u00E0 votre signalement\u00A0\u00BB envoy\u00E9 au consommateur";
    EventActionValues["EmailConsumerReportClosedByNoReading"] = "Email \u00AB\u00A0L'entreprise n'a pas souhait\u00E9 consulter votre signalement\u00A0\u00BB envoy\u00E9 au consommateur";
    EventActionValues["EmailConsumerReportClosedByNoAction"] = "Email \u00AB\u00A0L'entreprise n'a pas r\u00E9pondu au signalement\u00A0\u00BB envoy\u00E9 au consommateur";
    EventActionValues["EmailProNewReport"] = "Email \u00AB\u00A0Nouveau signalement\u00A0\u00BB envoy\u00E9 au professionnel";
    EventActionValues["EmailProResponseAcknowledgment"] = "Email \u00AB\u00A0Accus\u00E9 de r\u00E9ception de la r\u00E9ponse\u00A0\u00BB envoy\u00E9 au professionnel";
    EventActionValues["EmailProRemindNoReading"] = "Email \u00AB\u00A0Nouveau signalement non consult\u00E9\u00A0\u00BB envoy\u00E9 au professionnel";
    EventActionValues["EmailProRemindNoAction"] = "Email \u00AB\u00A0Nouveau signalement en attente de r\u00E9ponse\u00A0\u00BB envoy\u00E9 au professionnel";
    EventActionValues["ReportCompanyChange"] = "Modification du commer\u00E7ant";
    EventActionValues["ReportConsumerChange"] = "Modification du consommateur";
    EventActionValues["Comment"] = "Ajout d'un commentaire";
    EventActionValues["ConsumerAttachments"] = "Ajout de pi\u00E8ces jointes fournies par le consommateur";
    EventActionValues["ProfessionalAttachments"] = "Ajout de pi\u00E8ces jointes fournies par l'entreprise";
    EventActionValues["Control"] = "Contr\u00F4le effectu\u00E9";
})(EventActionValues = exports.EventActionValues || (exports.EventActionValues = {}));
var ReportResponseTypes;
(function (ReportResponseTypes) {
    ReportResponseTypes["Accepted"] = "ACCEPTED";
    ReportResponseTypes["Rejected"] = "REJECTED";
    ReportResponseTypes["NotConcerned"] = "NOT_CONCERNED";
})(ReportResponseTypes = exports.ReportResponseTypes || (exports.ReportResponseTypes = {}));
//# sourceMappingURL=Event.js.map