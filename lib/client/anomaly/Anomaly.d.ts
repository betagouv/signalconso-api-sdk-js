export interface SubcategoryBase extends Category {
    title: string;
    description?: string;
    tags?: ReportTag[];
    example?: string;
}
export interface Anomaly extends Category {
    category: string;
    categoryId: string;
    path: string;
    description?: string;
    rank?: number;
    sprite?: string;
    hidden?: boolean;
    information?: Information;
    breadcrumbTitle?: string;
}
export declare type Subcategory = SubcategoryBase | SubcategoryInput | SubcategoryInformation;
export declare enum ReportTag {
    LitigeContractuel = "Litige contractuel",
    Hygiene = "hygi\u00E8ne",
    ProduitDangereux = "Produit dangereux",
    DemarchageADomicile = "D\u00E9marchage \u00E0 domicile",
    Ehpad = "Ehpad",
    DemarchageTelephonique = "D\u00E9marchage t\u00E9l\u00E9phonique",
    AbsenceDeMediateur = "Absence de m\u00E9diateur"
}
export declare enum CompanyKinds {
    SIRET = "SIRET",
    WEBSITE = "WEBSITE",
    PHONE = "PHONE",
    LOCATION = "LOCATION"
}
export interface Category {
    subcategoriesTitle?: string;
    subcategories?: Subcategory[];
    companyKind?: string;
}
export interface SubcategoryInput extends SubcategoryBase {
    detailTitle?: string;
    fileLabel: string;
    detailInputs?: DetailInput[];
}
export interface SubcategoryInformation extends SubcategoryBase {
    information: Information;
}
export interface Information {
    title?: string;
    content?: string;
    actions?: Action[];
    subTitle?: string;
    outOfScope?: boolean;
}
export interface Action {
    question: string;
    example?: string;
    answer: string;
}
export interface DetailInput {
    label: string;
    rank: number;
    type: string;
    placeholder?: string;
    options?: string[];
    defaultValue?: string;
    example?: string;
    optionnal?: boolean;
}
export declare enum InputType {
    Text = "TEXT",
    Radio = "RADIO",
    Checkbox = "CHECKBOX",
    Textarea = "TEXTAREA",
    Timeslot = "TIMESLOT",
    Date = "DATE"
}
