import { Id, Report, ReviewOnReportResponse } from '../../model';
import { ApiClientApi } from '../../core/ApiClient';
import { ReportDraft } from './ReportDraft';
export declare class PublicReportClient {
    private client;
    constructor(client: ApiClientApi);
    readonly postReviewOnReportResponse: (reportId: Id, review: ReviewOnReportResponse) => Promise<void>;
    readonly create: (draft: ReportDraft) => Promise<Report>;
}
