"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportDraft = void 0;
const Anomaly_1 = require("../anomaly/Anomaly");
const LodashNamedExport_1 = require("../../helper/LodashNamedExport");
const ts_utils_1 = require("@alexandreannic/ts-utils");
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
    return (0, LodashNamedExport_1.uniqby)(((_a = r.subcategories) !== null && _a !== void 0 ? _a : []).flatMap(_ => { var _a; return (_a = _.reponseconsoCode) !== null && _a !== void 0 ? _a : []; }), _ => _);
};
ReportDraft.ccrfCode = (r) => {
    var _a;
    return (0, LodashNamedExport_1.uniqby)(((_a = r.subcategories) !== null && _a !== void 0 ? _a : []).flatMap(_ => { var _a; return (_a = _.ccrfCode) !== null && _a !== void 0 ? _a : []; }), _ => _);
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
ReportDraft.toApi = (draft) => {
    var _a, _b;
    return {
        ...draft,
        details: draft.details,
        subcategories: (0, ts_utils_1.map)(draft.subcategories, subcategories => subcategories.map(_ => { var _a; return (_a = _.title) !== null && _a !== void 0 ? _a : _; })),
        firstName: draft.consumer.firstName,
        lastName: draft.consumer.lastName,
        email: draft.consumer.email,
        consumerPhone: draft.consumer.phone,
        fileIds: (_b = (_a = draft.uploadedFiles) === null || _a === void 0 ? void 0 : _a.map(file => file.id)) !== null && _b !== void 0 ? _b : [],
        companyName: draft.companyDraft.name,
        companyAddress: draft.companyDraft.address,
        companySiret: draft.companyDraft.siret,
        companyActivityCode: draft.companyDraft.activityCode,
        websiteURL: draft.companyDraft.website,
        phone: draft.companyDraft.phone,
    };
};
//
// export class ReportDraft_ {
//   static readonly getCompanyKindFomSubcategories = (r: ReportDraft): CompanyKinds | undefined => {
//     return r.subcategories?.reverse().find(_ => !!_.companyKind)?.companyKind
//   }
//
//   static readonly getLastSubcategory = (r: ReportDraft): Subcategory | undefined => {
//     if (r.subcategories && r.subcategories.length) {
//       return r.subcategories[r.subcategories.length - 1]
//     }
//   }
//
//   static readonly getReponseconsoCode = (r: ReportDraft): string[] => {
//     return uniqby((r.subcategories ?? []).flatMap(_ => _.reponseconsoCode ?? []), _ => _)
//   }
//
//   static readonly ccrfCode = (r: ReportDraft): string[] => {
//     return uniqby((r.subcategories ?? []).flatMap(_ => _.ccrfCode ?? []), _ => _)
//   }
//
//   static readonly tags = (r: ReportDraft): ReportTag[] => {
//     const tags = (r.subcategories ?? []).flatMap(_ => _.tags ?? [])
//     if (ReportDraft.getCompanyKindFomSubcategories(r) === CompanyKinds.WEBSITE) {
//       tags.push(ReportTag.Internet)
//     }
//     if (!r.forwardToReponseConso) {
//       return tags.filter(_ => _ !== ReportTag.ReponseConso)
//     }
//     return tags
//   }
//
//   static readonly isContractualDispute = (r: ReportDraft): boolean => {
//     return !r.employeeConsumer && !!r.tags && r.tags.includes(ReportTag.LitigeContractuel)
//   }
//
//   static readonly isVendor = (r: ReportDraft): boolean => {
//     return !!r.tags && r.tags.includes(ReportTag.ProduitDangereux)
//   }
//
//   static readonly isInfluenceur = (r: ReportDraft): boolean => {
//     return !!r.tags && r.tags.includes(ReportTag.Influenceur)
//   }
//
//   static readonly isTransmittableToPro = (r: Pick<ReportDraft, 'employeeConsumer' | 'tags'>): boolean => {
//     return !r.employeeConsumer
//       && !(r.tags ?? []).find(_ => ([
//         ReportTag.ReponseConso,
//         ReportTag.ProduitDangereux,
//         ReportTag.Bloctel
//       ]).includes(_))
//   }
//
//   static readonly isGovernmentCompany = (_?: {activityCode?: string}): boolean => _?.activityCode?.startsWith('84.') ?? false
// }
//# sourceMappingURL=ReportDraft.js.map