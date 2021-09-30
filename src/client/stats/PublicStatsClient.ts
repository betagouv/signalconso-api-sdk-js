import {ApiClientApi} from '../../core/ApiClient'
import {CountByDate, SimpleStat} from './Stats'
import {Id} from '../../model'

export interface StatsParams {
  companyId?: Id
}

export interface CurveStatsParams extends StatsParams {
  ticks?: number
}

export class PublicStatsClient {

  constructor(private client: ApiClientApi) {
  }

  readonly getReportCount = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`/stats/reports/count`)
  }

  readonly getReportForwardedToProPercentage = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`/stats/reports/forwarded/percentage`)
  }

  readonly getReportReadByProPercentage = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`/stats/reports/read/percentage`)
  }

  readonly getReportWithResponsePercentage = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`/stats/reports/responsed/percentage`)
  }

  readonly getReportWithWebsitePercentage = (params: StatsParams) => {
    return this.client.get<SimpleStat>(`/stats/reports/website/percentage`)
  }

  readonly getMonthlyReportCount = (params: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats/reports/count/monthly`)
  }

  readonly getMonthlyReportWithResponsePercentage = (params: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats', 'reports/responsed/percentage/monthly`)
  }

  readonly getMonthlyReportForwardedToProPercentage = (params: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats/reports/forwarded/percentage/monthly`)
  }

  readonly getMonthlyReportReadByProPercentage = (params: CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`/stats/reports/read/percentage/monthly`)
  }
}
