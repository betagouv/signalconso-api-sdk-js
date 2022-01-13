import {CompanyKinds, ReportTag, Subcategory} from '../anomaly/Anomaly'
import {UploadedFile} from '../file/UploadedFile'
import {DetailInputValue} from './Report'
import {uniqby} from '../../helper/LodashNamedExport'
import {Address} from '../../model'

export interface ReportDraftConsumer {
  firstName: string
  lastName: string
  email: string
  phone?: string
}

export interface CompanyDraft {
  siret?: string
  name?: string
  brand?: string
  address?: Address
  website?: string
  phone?: string
  activityCode?: string
}

export interface ReportDraft {
  category: string
  subcategories?: Subcategory[]
  draftCompany: CompanyDraft
  detailInputValues: DetailInputValue[]
  uploadedFiles: UploadedFile[]
  consumer: ReportDraftConsumer
  employeeConsumer?: boolean
  contactAgreement: boolean
  vendor: string
  ccrfCode?: string[]
  reponseconsoCode?: string[]
  tags?: ReportTag[]
  contractualDispute?: boolean
  forwardToReponseConso?: boolean
  companyKind?: CompanyKinds
}

export class ReportDraft {
  static readonly getCompanyKindFomSubcategories = (r: ReportDraft): CompanyKinds | undefined => {
    return r.subcategories?.reverse().find(_ => !!_.companyKind)?.companyKind
  }

  static readonly getLastSubcategory = (r: ReportDraft): Subcategory | undefined => {
    if (r.subcategories && r.subcategories.length) {
      return r.subcategories[r.subcategories.length - 1]
    }
  }

  static readonly getReponseconsoCode = (r: ReportDraft): string[] => {
    return uniqby((r.subcategories ?? []).flatMap(_ => _.reponseconsoCode ?? []), _ => _)
  }

  static readonly ccrfCode = (r: ReportDraft): string[] => {
    return uniqby((r.subcategories ?? []).flatMap(_ => _.ccrfCode ?? []), _ => _)
  }

  static readonly tags = (r: ReportDraft): ReportTag[] => {
    const tags = (r.subcategories ?? []).flatMap(_ => _.tags ?? [])
    if (ReportDraft.getCompanyKindFomSubcategories(r) === CompanyKinds.WEBSITE) {
      tags.push(ReportTag.Internet)
    }
    if (!r.forwardToReponseConso) {
      return tags.filter(_ => _ !== ReportTag.ReponseConso)
    }
    return tags
  }

  static readonly isContractualDispute = (r: ReportDraft): boolean => {
    return !r.employeeConsumer && !!r.tags && r.tags.includes(ReportTag.LitigeContractuel)
  }

  static readonly isVendor = (r: ReportDraft): boolean => {
    return !!r.tags && r.tags.includes(ReportTag.ProduitDangereux)
  }

  static readonly isInfluenceur = (r: ReportDraft): boolean => {
    return !!r.tags && r.tags.includes(ReportTag.Influenceur)
  }

  static readonly isTransmittableToPro = (r: Pick<ReportDraft, 'employeeConsumer' | 'tags'>): boolean => {
    return !r.employeeConsumer
      && !(r.tags ?? []).find(_ => ([
        ReportTag.ReponseConso,
        ReportTag.ProduitDangereux,
        ReportTag.Bloctel
      ]).includes(_))
  }

  static readonly isGovernmentCompany = (_?: {activityCode?: string}): boolean => _?.activityCode?.startsWith('84.') ?? false
}

export class ReportDraft_ {
  static readonly getCompanyKindFomSubcategories = (r: ReportDraft): CompanyKinds | undefined => {
    return r.subcategories?.reverse().find(_ => !!_.companyKind)?.companyKind
  }

  static readonly getLastSubcategory = (r: ReportDraft): Subcategory | undefined => {
    if (r.subcategories && r.subcategories.length) {
      return r.subcategories[r.subcategories.length - 1]
    }
  }

  static readonly getReponseconsoCode = (r: ReportDraft): string[] => {
    return uniqby((r.subcategories ?? []).flatMap(_ => _.reponseconsoCode ?? []), _ => _)
  }

  static readonly ccrfCode = (r: ReportDraft): string[] => {
    return uniqby((r.subcategories ?? []).flatMap(_ => _.ccrfCode ?? []), _ => _)
  }

  static readonly tags = (r: ReportDraft): ReportTag[] => {
    const tags = (r.subcategories ?? []).flatMap(_ => _.tags ?? [])
    if (ReportDraft.getCompanyKindFomSubcategories(r) === CompanyKinds.WEBSITE) {
      tags.push(ReportTag.Internet)
    }
    if (!r.forwardToReponseConso) {
      return tags.filter(_ => _ !== ReportTag.ReponseConso)
    }
    return tags
  }

  static readonly isContractualDispute = (r: ReportDraft): boolean => {
    return !r.employeeConsumer && !!r.tags && r.tags.includes(ReportTag.LitigeContractuel)
  }

  static readonly isVendor = (r: ReportDraft): boolean => {
    return !!r.tags && r.tags.includes(ReportTag.ProduitDangereux)
  }

  static readonly isInfluenceur = (r: ReportDraft): boolean => {
    return !!r.tags && r.tags.includes(ReportTag.Influenceur)
  }

  static readonly isTransmittableToPro = (r: Pick<ReportDraft, 'employeeConsumer' | 'tags'>): boolean => {
    return !r.employeeConsumer
      && !(r.tags ?? []).find(_ => ([
        ReportTag.ReponseConso,
        ReportTag.ProduitDangereux,
        ReportTag.Bloctel
      ]).includes(_))
  }

  static readonly isGovernmentCompany = (_?: {activityCode?: string}): boolean => _?.activityCode?.startsWith('84.') ?? false
}
