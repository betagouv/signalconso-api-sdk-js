import { ReportStatus } from '../report/Report';
import { Index } from '../../helper/Utils';
export interface SimpleStat {
    value: string | number;
}
export declare type Period = 'Day' | 'Month';
export interface CountByDate {
    date: Date;
    count: number;
}
export declare type ReportStatusDistribution = {
    [key in ReportStatus]: number;
};
export declare type ReportTagsDistribution = Index<number>;
export interface ReportResponseReviews {
    positive: number;
    negative: number;
}
