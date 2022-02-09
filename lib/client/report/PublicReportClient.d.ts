import { Id, ReviewOnReportResponse } from '../../model';
import { ApiClientApi } from '../../core/ApiClient';
export declare class PublicReportClient {
    private client;
    constructor(client: ApiClientApi);
    readonly postReviewOnReportResponse: (reportId: Id, review: ReviewOnReportResponse) => Promise<void>;
}
