import { ApiClientApi } from '../../core/ApiClient';
import { Subcategory } from '../anomaly/Anomaly';
export declare class RatingClient {
    private client;
    constructor(client: ApiClientApi);
    readonly rate: (category: string, subcategories: Subcategory[], positive: boolean) => Promise<void>;
}
