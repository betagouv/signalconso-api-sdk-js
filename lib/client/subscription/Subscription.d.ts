import { Country, Department, ReportTag } from '../..';
export declare type SubscriptionFrequency = 'P7D' | 'P1D';
export interface Subscription {
    id: string;
    departments: Department[];
    categories: string[];
    sirets: string[];
    frequency: SubscriptionFrequency;
    countries: Country[];
    withTags: ReportTag[];
    withoutTags: ReportTag[];
}
export interface SubscriptionCreate {
    departments: string[];
    categories: string[];
    sirets: string[];
    frequency: SubscriptionFrequency;
    countries: string[];
    withTags: ReportTag[];
    withoutTags: ReportTag[];
}
