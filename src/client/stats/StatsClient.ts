import {ApiClientApi} from '../../index'
import {Id} from '../../model'
import {CountByDate, Period, ReportResponseReviews, ReportStatusDistribution, ReportTagsDistribution} from './Stats'
import {duration, Duration, fnSwitch} from '@alexandreannic/ts-utils/lib/common'

export class StatsClient {
  constructor(private client: ApiClientApi) {
  }

  readonly getTags = (companyId: Id) => {
    return this.client.get<ReportTagsDistribution>(`/stats/tags`, {qs: {companyId}})
  }
  readonly getStatus = (companyId: Id) => {
    return this.client.get<ReportStatusDistribution>(`/stats/status`, {qs: {companyId}})
  }

  readonly getResponseReviews = (companyId: Id) => {
    return this.client.get<ReportResponseReviews>(`/stats/reviews`, {qs: {companyId}})
  }

  readonly getReadDelay = (companyId: Id): Promise<Duration | undefined> => {
    return this.client.get<{value: number | undefined}>(`/stats/reports/delay/read`, {qs: {companyId}})
      .then(_ => _.value ? duration(_.value, 'hour') : undefined)
  }

  readonly getResponseDelay = (companyId: Id): Promise<Duration | undefined> => {
    return this.client.get<{value: number | undefined}>(`/stats/reports/delay/responsed`, {qs: {companyId}})
      .then(_ => _.value ? duration(_.value, 'hour') : undefined)
  }
}
