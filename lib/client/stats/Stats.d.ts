import { ReportStatus } from '../report/Report';
import { Index } from '../../helper';
export interface SimpleStat {
    value: string | number;
}
export declare type Period = 'Day' | 'Month';
export declare type ReportResponseType = 'ACCEPTED' | 'REJECTED' | 'NOT_CONCERNED';
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
export interface CurveStatsParams {
    ticks?: number;
    tickDuration?: Period;
}
export interface ReportResponseStatsParams {
    ticks?: number;
    responseStatusQuery?: ReportResponseType[];
}
