import {Id, PaginatedSearch} from '../../model'
import {WebsiteKind} from '../..'
import {Address} from '../../model/Address'

export interface WebsiteURL {
  url: string
}

export interface DraftCompany {
  siret?: string
  name?: string
  brand?: string
  address?: Address
  website?: WebsiteURL
  phone?: string
  activityCode?: string
}

export interface CompanyWithReportsCount extends Company {
  count: number
}

export interface Company {
  id: Id
  siret: string
  creationDate: Date
  name: string
  address: Address
  // postalCode?: string
  activityCode?: string
}

export interface CompanyToActivate {
  company: Company
  lastNotice?: Date
  tokenCreation: Date
}

export interface CompanyCreation {
  siret: string
  name: string
  address: Address
  // postalCode?: string
  activityCode?: string
}

export interface CompanyUpdate {
  address: Address
  // postalCode: string
  activationDocumentRequired: boolean
}

export interface CompanySearchResult {
  siret: string
  name?: string
  brand?: string
  isHeadOffice: boolean
  address: Address
  activityCode: string
  activityLabel?: string
  isMarketPlace: boolean
}

export interface CompanySearch extends PaginatedSearch<any> {
  readonly departments?: string[]
  identity?: string
}

// TODO(Alex) Harmonize with company-access types
export enum AccessLevel {
  NONE = 'none',
  MEMBER = 'member',
  ADMIN = 'admin',
}

export interface CompanyWithAccessLevel extends Company {
  level: AccessLevel
}

export const isGovernmentCompany = (_?: DraftCompany): boolean => _?.activityCode?.startsWith('84.') ?? false
