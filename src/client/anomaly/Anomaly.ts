import {Enum} from "@alexandreannic/ts-utils";

export interface SubcategoryBase extends Category {
    title: string
    description?: string
    tags?: ReportTag[]
    example?: string
    reponseconsoCode?: string[]
    ccrfCode?: string[]
}

export interface Anomaly extends Category {
    category: string
    categoryId: string
    path: string
    description?: string
    rank?: number
    sprite?: string
    cssClass?: string
    hidden?: boolean
    information?: Information
    breadcrumbTitle?: string
}

export type Subcategory = SubcategoryBase | SubcategoryInput | SubcategoryInformation

export enum ReportTag {
    LitigeContractuel = 'LitigeContractuel',
    Hygiene = 'Hygiene',
    ProduitDangereux = 'ProduitDangereux',
    DemarchageADomicile = 'DemarchageADomicile',
    Ehpad = 'Ehpad',
    DemarchageTelephonique = 'DemarchageTelephonique',
    AbsenceDeMediateur = 'AbsenceDeMediateur',
    Bloctel = 'Bloctel',
    Influenceur = 'Influenceur',
    ReponseConso = 'ReponseConso',
    Internet = 'Internet',
    ProduitIndustriel = 'ProduitIndustriel',
    ProduitAlimentaire = 'ProduitAlimentaire',
    CompagnieAerienne = 'CompagnieAerienne',
}

export type NA = 'NA'

export type ReportTagFilter = ReportTag | NA

export const ReportTagFilterValues: ReportTagFilter[] = [...Enum.values(ReportTag), 'NA']


export enum CompanyKinds {
    SIRET = 'SIRET',
    WEBSITE = 'WEBSITE',
    PHONE = 'PHONE',
    LOCATION = 'LOCATION',
    INFLUENCEUR = 'INFLUENCEUR',
}

export interface Category {
    id: string
    subcategoriesTitle?: string
    subcategories?: Subcategory[]
    companyKind?: CompanyKinds
}

export interface SubcategoryInput extends SubcategoryBase {
    detailTitle?: string
    fileLabel?: string
    detailInputs?: DetailInput[]
}

export interface SubcategoryInformation extends SubcategoryBase {
    information: Information
}

export interface Information {
    title?: string
    content?: string
    actions?: Action[]
    subTitle?: string
    outOfScope?: boolean
}

export interface Action {
    question: string
    example?: string
    answer: string
}

export interface DetailInput {
    label: string
    rank: number
    type: string
    placeholder?: string
    options?: string[]
    defaultValue?: string
    example?: string
    optionnal?: boolean
}

export enum InputType {
    Text = 'TEXT',
    Radio = 'RADIO',
    Checkbox = 'CHECKBOX',
    Textarea = 'TEXTAREA',
    Timeslot = 'TIMESLOT',
    Date = 'DATE',
}

export const formLabels = {
    reportingDateLabel: 'Date du constat',
    reportingTimeslotLabel: 'Heure du constat',
    descriptionLabel: 'Description',
}

