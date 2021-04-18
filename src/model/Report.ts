import {Subcategory, Tag} from './Anomaly'
import {WebsiteURL} from './Company'
import {UploadedFile} from './UploadedFile'

export interface Report {
  id: string
  category: string
  subcategories: Subcategory[]
  tags: Tag[]
  companyId: string
  companyName: string
  companyAddress: string
  companyPostalCode: string
  companyCountry: string
  companySiret: string
  website?: string
  vendor: string
  phone?: string
  details: DetailInputValue[]
  firstName: string
  lastName: string
  email: string
  employeeConsumer: boolean
  contactAgreement: boolean
  creationDate: Date
  status: string
}

export interface DetailInputValue {
  label: string
  value: string
}

export interface ReportsSearchResult {
  report: Report
  files: UploadedFile[]
}

export enum ReportStatus {
  NA = 'NA',
  EmployeeConsumer = 'Lanceur d\'alerte',
  InProgress = 'Traitement en cours',
  Unread = 'Signalement non consulté',
  UnreadForPro = 'Non consulté',
  Transmitted = 'Signalement transmis',
  ToReviewedByPro = 'À répondre',
  Accepted = 'Promesse action',
  ClosedForPro = 'Clôturé',
  Rejected = 'Signalement infondé',
  Ignored = 'Signalement consulté ignoré',
  NotConcerned = 'Signalement mal attribué'
}
