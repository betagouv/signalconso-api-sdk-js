import { Anomaly, ApiClientApi, Category, SubcategoryInformation, SubcategoryInput } from '../..';
export declare class AnomalyClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getAnomalies: () => Promise<Anomaly[]>;
    readonly getCategories: () => Promise<string[]>;
    static readonly instanceOfSubcategoryInput: (_?: Category | undefined) => _ is SubcategoryInput;
    static readonly instanceOfSubcategoryInformation: (_?: Category | undefined) => _ is SubcategoryInformation;
    static readonly instanceOfAnomaly: (_?: Category | undefined) => _ is Anomaly;
}
