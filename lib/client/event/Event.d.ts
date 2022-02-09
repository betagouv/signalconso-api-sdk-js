import { Id } from '../../model/Common';
export interface ReportEvent {
    data: Event;
    user?: EventUser;
}
export interface Event {
    id: Id;
    reportId?: Id;
    creationDate: Date;
    userId?: Id;
    eventType: EventType;
    action: EventActionValues;
    details: {
        description: string;
    } | ReportResponse;
}
export declare type EventType = 'PRO' | 'CONSO' | 'DGCCRF' | 'ADMIN' | 'SYSTEM';
export interface EventUser {
    firstName: string;
    lastName: string;
    role: string;
}
export declare enum EventActionValues {
    Creation = "Signalement du consommateur",
    PostAccountActivationDoc = "Envoi du courrier d'activation",
    AccountActivation = "Activation d'un compte",
    ActivationDocReturned = "Courrier d'activation retourn\u00E9",
    ActivationDocRequired = "Courrier d'activation \u00E0 renvoyer",
    CompanyAddressChange = "Modification de l'adresse de l'entreprise",
    ReportReadingByPro = "Premi\u00E8re consultation du signalement par le professionnel",
    ReportProResponse = "R\u00E9ponse du professionnel au signalement",
    ReportReviewOnResponse = "Avis du consommateur sur la r\u00E9ponse du professionnel",
    ReportClosedByNoReading = "Signalement non consult\u00E9",
    ReportClosedByNoAction = "Signalement consult\u00E9 ignor\u00E9",
    EmailConsumerAcknowledgment = "Email \u00AB\u00A0Accus\u00E9 de r\u00E9ception\u00A0\u00BB envoy\u00E9 au consommateur",
    EmailConsumerReportReading = "Email \u00AB\u00A0Signalement consult\u00E9\u00A0\u00BB envoy\u00E9 au consommateur",
    EmailConsumerReportResponse = "Email \u00AB\u00A0L'entreprise a r\u00E9pondu \u00E0 votre signalement\u00A0\u00BB envoy\u00E9 au consommateur",
    EmailConsumerReportClosedByNoReading = "Email \u00AB\u00A0L'entreprise n'a pas souhait\u00E9 consulter votre signalement\u00A0\u00BB envoy\u00E9 au consommateur",
    EmailConsumerReportClosedByNoAction = "Email \u00AB\u00A0L'entreprise n'a pas r\u00E9pondu au signalement\u00A0\u00BB envoy\u00E9 au consommateur",
    EmailProNewReport = "Email \u00AB\u00A0Nouveau signalement\u00A0\u00BB envoy\u00E9 au professionnel",
    EmailProResponseAcknowledgment = "Email \u00AB\u00A0Accus\u00E9 de r\u00E9ception de la r\u00E9ponse\u00A0\u00BB envoy\u00E9 au professionnel",
    EmailProRemindNoReading = "Email \u00AB\u00A0Nouveau signalement non consult\u00E9\u00A0\u00BB envoy\u00E9 au professionnel",
    EmailProRemindNoAction = "Email \u00AB\u00A0Nouveau signalement en attente de r\u00E9ponse\u00A0\u00BB envoy\u00E9 au professionnel",
    ReportCompanyChange = "Modification du commer\u00E7ant",
    ReportConsumerChange = "Modification du consommateur",
    Comment = "Ajout d'un commentaire",
    ConsumerAttachments = "Ajout de pi\u00E8ces jointes fournies par le consommateur",
    ProfessionalAttachments = "Ajout de pi\u00E8ces jointes fournies par l'entreprise",
    Control = "Contr\u00F4le effectu\u00E9"
}
export interface ReportResponse {
    responseType: ReportResponseTypes;
    consumerDetails: string;
    dgccrfDetails: string;
    fileIds?: string[];
}
export declare enum ReportResponseTypes {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    NotConcerned = "NOT_CONCERNED"
}
export interface ReviewOnReportResponse {
    positive: boolean;
    details?: string;
}
export interface ReportAction {
    actionType: EventActionValues;
    details?: string;
    fileIds: string[];
}
