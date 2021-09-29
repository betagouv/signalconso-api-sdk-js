"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnomalyClient = void 0;
const __1 = require("../..");
const anomalies_json_1 = __importDefault(require("../anomaly/yml/anomalies.json"));
const common_1 = require("@alexandreannic/ts-utils/lib/common");
class AnomalyClient {
    constructor(client) {
        this.client = client;
        this.getAnomalies = common_1.lazy(() => Promise.resolve(anomalies_json_1.default.list.map(AnomalyClient.enrichAnomaly)));
        this.getCategories = common_1.lazy(() => Promise.resolve(this.getAnomalies().then(_ => _.filter(anomaly => !anomaly.information).map(anomaly => anomaly.category))));
    }
}
exports.AnomalyClient = AnomalyClient;
AnomalyClient.askCompanyKindIfMissing = (anomaly, tags) => {
    var _a;
    if (!anomaly.subcategories && !anomaly.companyKind && !AnomalyClient.instanceOfSubcategoryInformation(anomaly)) {
        return {
            ...anomaly,
            description: undefined,
            subcategoriesTitle: 'Est-ce que votre problème concerne une entreprise sur internet ?',
            subcategories: [
                {
                    ...anomaly,
                    title: 'Oui',
                    companyKind: __1.CompanyKinds.WEBSITE,
                    example: undefined,
                },
                {
                    ...anomaly,
                    title: 'Non, pas sur internet',
                    companyKind: tags.indexOf(__1.ReportTag.ProduitDangereux) === -1 ? __1.CompanyKinds.SIRET : __1.CompanyKinds.LOCATION,
                    example: undefined,
                },
            ],
        };
    }
    return {
        ...anomaly,
        subcategories: (_a = anomaly.subcategories) === null || _a === void 0 ? void 0 : _a.map(_ => {
            var _a;
            return ({
                ..._,
                ...AnomalyClient.askCompanyKindIfMissing(_, [...tags, ...((_a = anomaly.tags) !== null && _a !== void 0 ? _a : [])]),
            });
        }),
    };
};
AnomalyClient.propagateCompanyKinds = (anomaly) => {
    var _a, _b;
    return {
        ...anomaly,
        subcategories: (_b = (_a = anomaly.subcategories) === null || _a === void 0 ? void 0 : _a.map(_ => ({ ..._, companyKind: _.companyKind || anomaly.companyKind }))) === null || _b === void 0 ? void 0 : _b.map(_ => ({ ..._, ...AnomalyClient.propagateCompanyKinds(_) })),
    };
};
AnomalyClient.enrichAnomaly = (anomaly) => AnomalyClient.askCompanyKindIfMissing(AnomalyClient.propagateCompanyKinds(anomaly), []);
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