import {Id, ReportStatus, ReportTagFilter} from '../..'

export interface ReportSearch {
  departments?: string[]
  tags?: ReportTagFilter[]
  companyCountries?: string[]
  siretSirenList?: string[]
  activityCodes?: string[]
  status?: ReportStatus[]
  companyIds?: Id[]
  start?: Date
  end?: Date
  email?: string
  websiteURL?: string
  phone?: string
  category?: string
  details?: string
  hasPhone?: boolean
  hasWebsite?: boolean
  hasForeignCountry?: boolean
  hasCompany?: boolean
}
