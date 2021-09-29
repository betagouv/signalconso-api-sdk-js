"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputType = exports.CompanyKinds = exports.ReportTag = void 0;
var ReportTag;
(function (ReportTag) {
    ReportTag["LitigeContractuel"] = "Litige contractuel";
    ReportTag["Hygiene"] = "hygi\u00E8ne";
    ReportTag["ProduitDangereux"] = "Produit dangereux";
    ReportTag["DemarchageADomicile"] = "D\u00E9marchage \u00E0 domicile";
    ReportTag["Ehpad"] = "Ehpad";
    ReportTag["DemarchageTelephonique"] = "D\u00E9marchage t\u00E9l\u00E9phonique";
    ReportTag["AbsenceDeMediateur"] = "Absence de m\u00E9diateur";
})(ReportTag = exports.ReportTag || (exports.ReportTag = {}));
var CompanyKinds;
(function (CompanyKinds) {
    CompanyKinds["SIRET"] = "SIRET";
    CompanyKinds["WEBSITE"] = "WEBSITE";
    CompanyKinds["PHONE"] = "PHONE";
    CompanyKinds["LOCATION"] = "LOCATION";
})(CompanyKinds = exports.CompanyKinds || (exports.CompanyKinds = {}));
var InputType;
(function (InputType) {
    InputType["Text"] = "TEXT";
    InputType["Radio"] = "RADIO";
    InputType["Checkbox"] = "CHECKBOX";
    InputType["Textarea"] = "TEXTAREA";
    InputType["Timeslot"] = "TIMESLOT";
    InputType["Date"] = "DATE";
})(InputType = exports.InputType || (exports.InputType = {}));
// const askCompanyKindIfMissing = (anomaly: Category): Category => {
//   if (!anomaly.subcategories && !anomaly.companyKind && !instanceOfSubcategoryInformation(anomaly)) {
//     return {
//       ...anomaly,
//       description: undefined,
//       subcategoriesTitle: 'Est-ce que votre problème concerne une entreprise sur internet ?',
//       subcategories: [
//         {
//           ...anomaly,
//           title: 'Oui',
//           companyKind: CompanyKinds.WEBSITE,
//           example: undefined
//         }, {
//           ...anomaly,
//           title: 'Non, pas sur internet',
//           companyKind: CompanyKinds.SIRET,
//           example: undefined
//         },
//       ]
//     } as Category
//   }
//   return {
//     ...anomaly,
//     subcategories: anomaly.subcategories?.map(_ => ({..._, ...askCompanyKindIfMissing(_)})),
//   }
// }
//
// const propagateCompanyKinds = (anomaly: Category): Category => {
//   return {
//     ...anomaly,
//     subcategories: anomaly.subcategories
//       ?.map(_ => ({..._, companyKind: _.companyKind || anomaly.companyKind,}))
//       ?.map(_ => ({..._, ...propagateCompanyKinds(_),}))
//   }
// }
//
// export const enrichAnomaly = (anomaly: Category): Category => askCompanyKindIfMissing(propagateCompanyKinds(anomaly))
//
// export const instanceOfSubcategoryInput = (_?: Category): _ is SubcategoryInput => {
//   return !!(_ as SubcategoryInput)?.detailInputs
// }
//
// export const instanceOfSubcategoryInformation = (_?: Category): _ is SubcategoryInformation => {
//   return !!(_ as SubcategoryInformation)?.information
// }
// export const instanceOfAnomaly = (_?: Category): _ is Anomaly => {
//   return !!(_ as Anomaly)?.category
// }
//# sourceMappingURL=Anomaly.js.map