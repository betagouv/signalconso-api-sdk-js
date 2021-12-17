import {CompanyKinds, ReportTag, Subcategory} from '../anomaly/Anomaly'
import {DraftCompany} from '../company/Company'
import {UploadedFile} from '../file/UploadedFile'
import {DetailInputValue} from './Report'
import {uniqby} from '../../helper/LodashNamedExport'

export interface ReportDraftConsumer {
  firstName: string
  lastName: string
  email: string
}

export interface ReportDraft {
  category: string
  subcategories?: Subcategory[]
  draftCompany: DraftCompany
  detailInputValues: DetailInputValue[]
  uploadedFiles: UploadedFile[]
  consumer: ReportDraftConsumer
  employeeConsumer?: boolean
  contactAgreement: boolean
  forwardToReponseConso?: boolean
  vendor: string
  reponseconsoCode?: string[]
  ccrfCode?: string[]
}

export class ReportDraft {
  static readonly companyKind = (r: ReportDraft): CompanyKinds => {
    return ReportDraft.lastSubcategory(r)?.companyKind ?? CompanyKinds.SIRET
  }

  static readonly lastSubcategory = (r: ReportDraft): Subcategory | undefined => {
    if (r.subcategories && r.subcategories.length) {
      return r.subcategories[r.subcategories.length - 1]
    }
  }

  static readonly reponseconsoCode = (r: ReportDraft): string[] => {
    return uniqby((r.subcategories ?? []).flatMap(_ => _.reponseconsoCode ?? []), _ => _)
  }

  static readonly ccrfCode = (r: ReportDraft): string[] => {
    return uniqby((r.subcategories ?? []).flatMap(_ => _.ccrfCode ?? []), _ => _)
  }

  static readonly tags = (r: ReportDraft): ReportTag[] => {
    const tags = (r.subcategories ?? []).flatMap(_ => _.tags ?? [])
    if (ReportDraft.companyKind(r) === CompanyKinds.WEBSITE) {
      tags.push(ReportTag.Internet)
    }
    if (!r.forwardToReponseConso) {
      return tags.filter(_ => _ !== ReportTag.ReponseConso)
    }
    return tags
  }

  static readonly isContractualDispute = (r: ReportDraft): boolean => {
    return !r.employeeConsumer && ReportDraft.tags(r).includes(ReportTag.LitigeContractuel)
  }

  static readonly isVendor = (r: ReportDraft): boolean => {
    return ReportDraft.tags(r).includes(ReportTag.ProduitDangereux)
  }

  static readonly isInfluenceur = (r: ReportDraft): boolean => {
    return ReportDraft.tags(r).includes(ReportTag.Influenceur)
  }

  static readonly isTransmittableToPro = (r: ReportDraft): boolean => {
    return !r.employeeConsumer
      && !r.forwardToReponseConso
      && !ReportDraft.tags(r).find(_ => ([ReportTag.ProduitDangereux, ReportTag.Bloctel]).includes(_))
  }
}
