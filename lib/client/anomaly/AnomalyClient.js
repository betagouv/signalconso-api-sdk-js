"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnomalyClient = void 0;
const anomalies_json_1 = __importDefault(require("../anomaly/yml/anomalies.json"));
const common_1 = require("@alexandreannic/ts-utils/lib/common");
class AnomalyClient {
    constructor(client) {
        this.client = client;
        this.getAnomalies = common_1.lazy(() => Promise.resolve(anomalies_json_1.default.list));
        this.getCategories = common_1.lazy(() => Promise.resolve(this.getAnomalies().then(_ => _.filter(anomaly => !anomaly.information).map(anomaly => anomaly.category))));
    }
}
exports.AnomalyClient = AnomalyClient;
// private static readonly askCompanyKindIfMissing = (anomaly: Category, tags: ReportTag[]): Category => {
//   if (!anomaly.subcategories && !anomaly.companyKind && !AnomalyClient.instanceOfSubcategoryInformation(anomaly)) {
//     return {
//       ...anomaly,
//       description: undefined,
//       subcategoriesTitle: 'Est-ce que votre problème concerne une entreprise sur internet ?',
//       subcategories: [
//         {
//           ...anomaly,
//           title: 'Oui',
//           companyKind: CompanyKinds.WEBSITE,
//           example: undefined,
//         },
//         {
//           ...anomaly,
//           title: 'Non, pas sur internet',
//           companyKind: tags.indexOf(ReportTag.ProduitDangereux) === -1 ? CompanyKinds.SIRET : CompanyKinds.LOCATION,
//           example: undefined,
//         },
//       ],
//     } as Category
//   }
//   return {
//     ...anomaly,
//     subcategories: anomaly.subcategories?.map(_ => ({
//       ..._,
//       ...AnomalyClient.askCompanyKindIfMissing(_, [...tags, ...((anomaly as Subcategory).tags ?? [])]),
//     })),
//   }
// }
// private static readonly propagateCompanyKinds = (anomaly: Category): Category => {
//   return {
//     ...anomaly,
//     subcategories: anomaly.subcategories
//       ?.map(_ => ({..._, companyKind: _.companyKind || anomaly.companyKind}))
//       ?.map(_ => ({..._, ...AnomalyClient.propagateCompanyKinds(_)})),
//   }
// }
// private static readonly enrichAnomaly = (anomaly: Category): Category => {
//   return AnomalyClient.propagateCompanyKinds(anomaly)
//   return AnomalyClient.askCompanyKindIfMissing(AnomalyClient.propagateCompanyKinds(anomaly), [])
// }
AnomalyClient.instanceOfSubcategoryInput = (_) => {
    var _a;
    return !!((_a = _) === null || _a === void 0 ? void 0 : _a.detailInputs);
};
AnomalyClient.instanceOfSubcategoryInformation = (_) => {
    var _a;
    return !!((_a = _) === null || _a === void 0 ? void 0 : _a.information);
};
AnomalyClient.instanceOfAnomaly = (_) => {
    var _a;
    return !!((_a = _) === null || _a === void 0 ? void 0 : _a.category);
};
//# sourceMappingURL=AnomalyClient.js.map