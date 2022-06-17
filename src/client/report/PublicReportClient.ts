import {Id, Report, ResponseConsumerReview} from '../../model'
import {ApiClientApi} from '../../core/ApiClient'
import {ReportDraft} from './ReportDraft'
import {ReportsClient} from './ReportsClient'

export class PublicReportClient {
  constructor(private client: ApiClientApi) {}

  readonly postReviewOnReportResponse = (reportId: Id, review: ResponseConsumerReview) => {
    return this.client.post<void>(`/reports/${reportId}/response/review`, {body: review})
  }

  readonly create = (draft: ReportDraft) => {
    return this.client.post<Report>(`/reports`, {body: ReportDraft.toApi(draft)}).then(ReportsClient.mapReport)
  }
}
