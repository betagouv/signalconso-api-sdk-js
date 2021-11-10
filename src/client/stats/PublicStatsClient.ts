import {ApiClientApi} from '../../core/ApiClient'
import {CountByDate, CurveStatsParams, SimpleStat} from './Stats'
import {Id, ReportSearch, ReportStatus} from '../../model'
import {Enum} from '@alexandreannic/ts-utils/lib/common'

export class PublicStatsClient {
  constructor(private client: ApiClientApi) {
  }

  private readonly baseURL = `stats/reports`

  readonly getReportCount = (search?: ReportSearch) => {
    return this.client.get<SimpleStat>(`${this.baseURL}/count`, {qs: search})
  }
  readonly getReportCountCurve = (search?: ReportSearch & CurveStatsParams) => {
    return this.client.get<CountByDate[]>(`${this.baseURL}/curve`, {qs: search})
      .then(res => res.map(_ => ({..._, date: new Date(_.date)})))
  }

  readonly percentage = new PublicStatsPercentageClient(this)

  readonly percentageCurve = new PublicStatsCurveClient(this)
}

class PublicStatsPercentageClient {
  constructor(private client: PublicStatsClient) {
  }

  private readonly getPercentByStatus = async (companyId: Id, status: ReportStatus[], baseStatus?: ReportStatus[]): Promise<number> => {
    const [count, baseCount,] = await Promise.all([
      this.client.getReportCount({companyIds: [companyId], status}),
      this.client.getReportCount({companyIds: [companyId], status: baseStatus}),
    ])
    return +count.value / +baseCount.value * 100

  }
  readonly getReportForwardedToPro = (companyId: Id): Promise<number> => {
    return this.getPercentByStatus(
      companyId,
      Enum.values(ReportStatus).filter(_ => ![ReportStatus.NA, ReportStatus.LanceurAlerte].includes(_)),
    )
  }

  readonly getReportReadByPro = (companyId: Id) => {
    return this.getPercentByStatus(
      companyId,
      [
        ReportStatus.Transmis,
        ReportStatus.PromesseAction,
        ReportStatus.Infonde,
        ReportStatus.MalAttribue,
        ReportStatus.ConsulteIgnore
      ],
      Enum.values(ReportStatus).filter(_ => ![ReportStatus.NA, ReportStatus.LanceurAlerte].includes(_)),
    )
  }

  readonly getReportWithResponse = (companyId: Id) => {
    return this.getPercentByStatus(
      companyId,
      [
        ReportStatus.PromesseAction,
        ReportStatus.Infonde,
        ReportStatus.MalAttribue
      ], [
        ReportStatus.Transmis,
        ReportStatus.PromesseAction,
        ReportStatus.Infonde,
        ReportStatus.MalAttribue,
        ReportStatus.ConsulteIgnore
      ],
    )
  }

  readonly getReportWithWebsite = async (companyId: Id) => {
    const [count, baseCount,] = await Promise.all([
      this.client.getReportCount({companyIds: [companyId], websiteExists: true}),
      this.client.getReportCount({companyIds: [companyId]}),
    ])
    return +count.value / +baseCount.value * 100
  }
}

class PublicStatsCurveClient {
  constructor(private client: PublicStatsClient) {
  }

  private readonly getReportPercentage = async ({
      companyId,
      ticks,
      tickDuration,
      status,
      baseStatus
    }: CurveStatsParams & {companyId: Id, status: ReportStatus[], baseStatus?: ReportStatus[]}
  ): Promise<CountByDate[]> => {
    const params = {
      companyIds: [companyId],
      status,
      ticks,
      tickDuration,
    }
    const baseParams = {
      companyIds: [companyId],
      status: baseStatus,
      ticks,
      tickDuration,
    }
    const [
      curve,
      baseCurve,
    ] = await Promise.all([
      this.client.getReportCountCurve(params),
      this.client.getReportCountCurve(baseParams),
    ])
    if (curve.length !== baseCurve.length) {
      console.error(params, curve, `doesn't have the same size than `, baseParams, baseCurve)
      return Promise.reject({code: 'front-side',})
    }
    return this.getPercent(curve, baseCurve,)
  }

  private getPercent = (curve: CountByDate[], baseCurve: CountByDate[]): Promise<CountByDate[]> => {
    let res: CountByDate[] = []
    for (let i = 0; i < curve.length; i++) {
      if (curve[i].date.getTime() !== baseCurve[i].date.getTime()) {
        console.error(curve[i], `have different date than`, baseCurve[i], ' values: ', curve, baseCurve)
        return Promise.reject({code: 'front-side',})
      }
      res[i] = {
        count: curve[i].count / baseCurve[i].count * 100,
        date: curve[i].date,
      }
    }
    return Promise.resolve(res)
  }

  readonly getReportForwardedPercentage = async (params: CurveStatsParams & {companyId: Id}): Promise<CountByDate[]> => {
    return this.getReportPercentage({
      ...params,
      status: [
        ReportStatus.PromesseAction,
        ReportStatus.Infonde,
        ReportStatus.MalAttribue
      ]
    })
  }

  readonly getReportRespondedPercentage = (params: CurveStatsParams & {companyId: Id}) => {
    return this.getReportPercentage({
      ...params,
      status: [ReportStatus.PromesseAction, ReportStatus.Infonde, ReportStatus.MalAttribue],
      baseStatus: [
        ReportStatus.Transmis,
        ReportStatus.PromesseAction,
        ReportStatus.Infonde,
        ReportStatus.MalAttribue,
        ReportStatus.ConsulteIgnore
      ]
    })
  }

  readonly getReportReadPercentage = (params: CurveStatsParams & {companyId: Id}) => {
    return this.getReportPercentage({
      ...params,
      status: [
        ReportStatus.Transmis,
        ReportStatus.PromesseAction,
        ReportStatus.Infonde,
        ReportStatus.MalAttribue,
        ReportStatus.ConsulteIgnore
      ],
      baseStatus: Enum.values(ReportStatus).filter(_ => ![ReportStatus.NA, ReportStatus.LanceurAlerte].includes(_)),
    })
  }
}
