import {Id, ReportStatus, ReportTag} from '../..'

export interface ReportSearch {
  readonly departments?: string[]
  readonly tags?: ReportTag[]
  readonly companyCountries?: string[]
  readonly siretSirenList?: string[]
  readonly activityCodes?: string[]
  readonly status?: ReportStatus[]
  readonly companyIds?: Id[]
  start?: Date
  end?: Date
  email?: string
  websiteURL?: string
  phone?: string
  websiteExists?: boolean
  phoneExists?: boolean
  category?: string
  details?: string
  hasCompany?: boolean
}
