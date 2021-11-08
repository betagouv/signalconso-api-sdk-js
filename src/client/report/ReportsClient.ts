import {
  ApiClientApi,
  cleanObject,
  CompanySearchResult,
  dateToApi,
  directDownloadBlob,
  Event,
  Id,
  PaginatedFilters,
  Report,
  ReportAction,
  ReportResponse,
  ReportSearchResult,
} from '../..'
import {Address, PaginatedData, ReportSearch} from '../../model'
import {pipe} from 'rxjs'
import {ApiSdkLogger} from '../../helper/Logger'

export interface ReportFilterQuerystring {
  readonly departments?: string[]
  readonly tags?: string | string[]
  readonly companyCountries?: string[]
  readonly siretSirenList?: string[]
  readonly status?: string[]
  start?: string
  end?: string
  email?: string
  websiteURL?: string
  phone?: string
  websiteExists?: 'true' | 'false'
  phoneExists?: 'true' | 'false'
  category?: string
  details?: string
  hasCompany?: 'true' | 'false'
  offset?: string
  limit?: string
}

const reportFilter2QueryString = (report: ReportSearch & PaginatedFilters): ReportFilterQuerystring => {
  try {
    const {offset, limit, hasCompany, websiteExists, phoneExists, start, end, ...r} = report
    const parseBoolean = (_: keyof Pick<ReportSearch, 'websiteExists' | 'phoneExists' | 'hasCompany'>) =>
      report[_] !== undefined && {[_]: ('' + report[_]) as 'true' | 'false'}
    const parseDate = (_: keyof Pick<ReportSearch, 'start' | 'end'>) => (report[_] ? {[_]: dateToApi(report[_])} : {})
    return {
      ...r,
      offset: offset !== undefined ? offset + '' : undefined,
      limit: limit !== undefined ? limit + '' : undefined,
      ...parseBoolean('hasCompany'),
      ...parseBoolean('websiteExists'),
      ...parseBoolean('phoneExists'),
      ...parseDate('start'),
      ...parseDate('end'),
    }
  } catch (e) {
    ApiSdkLogger.error('Caught error on "reportFilter2QueryString"', report, e)
    return {}
  }
}

const cleanReportFilter = (filter: ReportSearch & PaginatedFilters): ReportSearch & PaginatedFilters => {
  if (filter.websiteExists === false) {
    delete filter.websiteExists
    delete filter.websiteURL
  }
  if (filter.phoneExists === false) {
    delete filter.phoneExists
    delete filter.phone
  }
  return filter
}

// const reportFilter2Body = (report: ReportSearch): {[key in keyof ReportSearch]: any} => {
//   const {start, end, departments, tags, siretSirenList, ...rest} = report
//   return {
//     ...rest,
//     siretSirenList: Array.isArray(siretSirenList) ? siretSirenList : siretSirenList !== undefined ? [siretSirenList] : undefined,
//     departments: departments || [],
//     tags: tags || [],
//     start: dateToApi(start),
//     end: dateToApi(end),
//   }
// }

export class ReportsClient {
  constructor(private client: ApiClientApi) {
  }

  readonly extract = (filters: ReportSearch & PaginatedFilters) => {
    return this.client.post<void>(`reports/extract`, {
      qs: pipe(cleanReportFilter, reportFilter2QueryString, cleanObject)(filters),
    })
  }

  readonly search = (filters: ReportSearch & PaginatedFilters) => {
    console.log(filters)
    return this.client
      .get<PaginatedData<ReportSearchResult>>(`/reports`, {
        // qs: {offset, limit},
        qs: pipe(cleanReportFilter, reportFilter2QueryString, cleanObject)(filters),
      })
      .then(result => {
        result.entities.forEach(entity => {
          entity.report = ReportsClient.mapReport(entity.report)
        })
        return result
      })
  }

  readonly download = (id: Id) => {
    // TODO Type it and maybe improve it
    return this.client.getPdf<any>(`/reports/${id}/download`).then(directDownloadBlob('test.pdf'))
  }

  readonly remove = (id: Id) => {
    return this.client.delete<void>(`reports/${id}`)
  }

  readonly getById = (id: Id): Promise<ReportSearchResult> => {
    return this.client.get(`/reports/${id}`).then(_ => ({files: _.files, report: ReportsClient.mapReport(_.report)}))
  }

  readonly postResponse = (id: Id, response: ReportResponse) => {
    return this.client.post<Event>(`reports/${id}/response`, {body: {...response, fileIds: response.fileIds ?? []}})
  }

  readonly postAction = (id: Id, action: ReportAction) => {
    // const mappedAction: any = {...action, actionType: {value: action.actionType}}
    return this.client.post<Event>(`reports/${id}/action`, {body: action})
  }

  readonly updateReportCompany = (reportId: string, company: CompanySearchResult) => {
    return this.client.post<Report>(`/reports/${reportId}/company`, {
      body: {
        name: company.name,
        address: company.address,
        siret: company.siret,
        activityCode: company.activityCode,
      },
    })
  }

  readonly updateReportConsumer = (
    reportId: string,
    firstName: string,
    lastName: string,
    email: string,
    contactAgreement: boolean,
  ) => {
    return this.client.post(`reports/${reportId}/consumer`, {
      body: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactAgreement,
      },
    })
  }

  static readonly mapReport = (report: {[key in keyof Report]: any}): Report => ({
    ...report,
    companyAddress: ReportsClient.mapAddress(report.companyAddress),
    creationDate: new Date(report.creationDate),
  })

  static readonly mapAddress = (address: {[key in keyof Address]: any | undefined}): Address => ({
    ...address,
    country: address.country?.name,
  })
}
