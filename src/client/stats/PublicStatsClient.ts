import {ApiClientApi} from '../../core/ApiClient'
import {CountByDate, Period, SimpleStat} from './Stats'
import {Id} from '../../model'

export interface StatsParams {
  companyId?: Id
}

export interface CurveStatsParams extends StatsParams {
  ticks?: number
}

export interface CurveStatsParamsWithPeriod extends CurveStatsParams {
  tickDuration?: Period
}

export class PublicStatsClient {
  constructor(private client: ApiClientApi) {}

  private readonly baseURL = `stats/reports`

  readonly getReportCount = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`${this.baseURL}/count`, {qs: params})
  }

  readonly curve = new PublicStatsCurveClient(this.client, this.baseURL + '/curve')

  readonly percentage = new PublicStatsPercentageClient(this.client, this.baseURL + '/percentage')
}

class PublicStatsPercentageClient {
  constructor(private client: ApiClientApi, private baseURL: string) {}

  readonly getReportForwardedToPro = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`${this.baseURL}/forwarded`, {qs: params})
  }

  readonly getReportReadByPro = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`${this.baseURL}/read`, {qs: params})
  }

  readonly getReportWithResponse = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`${this.baseURL}/responsed`, {qs: params})
  }

  readonly getReportWithWebsite = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`${this.baseURL}/website`, {qs: params})
  }
}

class PublicStatsCurveClient {
  constructor(private client: ApiClientApi, private baseURL: string) {
  }

  readonly getReportCount = (params: CurveStatsParamsWithPeriod & {status?: string[]} = {status: []}): Promise<CountByDate[]> => {
    return this.client.get(`${this.baseURL}/count`, {qs: params}).then(PublicStatsCurveClient.mapReportsCountByDate)
  }

  readonly getReportForwardedPercentage = (params: CurveStatsParamsWithPeriod) => {
    return this.client
      .get<CountByDate[]>(`${this.baseURL}/forwarded-percentage`, {qs: params})
      .then(PublicStatsCurveClient.mapReportsCountByDate)
  }

  readonly getReportRespondedPercentage = (params: CurveStatsParamsWithPeriod) => {
    return this.client
      .get<CountByDate[]>(`${this.baseURL}/responded-percentage`, {qs: params})
      .then(PublicStatsCurveClient.mapReportsCountByDate)
  }

  readonly getReportReadPercentage = (params: CurveStatsParamsWithPeriod) => {
    return this.client
      .get<CountByDate[]>(`${this.baseURL}/read-percentage`, {qs: params})
      .then(PublicStatsCurveClient.mapReportsCountByDate)
  }

  private static readonly mapReportsCountByDate = (data: CountByDate[]): CountByDate[] => {
    return data.map(_ => ({..._, date: new Date(_.date)}))
  }
}
