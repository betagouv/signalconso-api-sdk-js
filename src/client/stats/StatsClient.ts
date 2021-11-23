import {ApiClientApi, CountByDate, CurveStatsParams} from '../../index'
import {Id} from '../../model'
import {ReportResponseReviews, ReportStatusDistribution, ReportTagsDistribution} from './Stats'
import {duration, Duration} from '@alexandreannic/ts-utils/lib/common'

export class StatsClient {
  constructor(private client: ApiClientApi) {}

  readonly getTags = (companyId: Id) => {
    return this.client.get<ReportTagsDistribution>(`/stats/reports/tags`, {qs: {companyId}})
  }

  readonly getStatus = (companyId: Id) => {
    return this.client.get<ReportStatusDistribution>(`/stats/reports/status`, {qs: {companyId}})
  }

  readonly getResponseReviews = (companyId: Id) => {
    return this.client.get<ReportResponseReviews>(`/stats/reports/reviews`, {qs: {companyId}})
  }

  readonly getReportedActiveProAccountRate = (search?: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats/pro-account-rate`, {qs: search})
        .then(res => res.map(_ => ({..._, date: new Date(_.date)})))
  }

  readonly getActiveDgccrfAccountCurve = (search?: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats/dgccrf-active-account`, {qs: search})
        .then(res => res.map(_ => ({..._, date: new Date(_.date)})))
  }

  readonly getDgccrfAccountCurve = (search?: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats/dgccrf-account`, {qs: search})
        .then(res => res.map(_ => ({..._, date: new Date(_.date)})))
  }

  readonly getDgccrfControlsCurve = (search?: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats/dgccrf-controls`, {qs: search})
        .then(res => res.map(_ => ({..._, date: new Date(_.date)})))
  }

  readonly getDgccrfSubscriptionsCurve = (search?: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats/dgccrf-subscriptions`, {qs: search})
        .then(res => res.map(_ => ({..._, date: new Date(_.date)})))
  }

  readonly getReadDelay = (companyId: Id): Promise<Duration | undefined> => {
    return this.client
      .get<{value: number | undefined}>(`/stats/reports/delay/read`, {qs: {companyId}})
      .then(_ => (_.value ? duration(_.value, 'hour') : undefined))
  }

  readonly getResponseDelay = (companyId: Id): Promise<Duration | undefined> => {
    return this.client
      .get<{value: number | undefined}>(`/stats/reports/delay/responsed`, {qs: {companyId}})
      .then(_ => (_.value ? duration(_.value, 'hour') : undefined))
  }
}
