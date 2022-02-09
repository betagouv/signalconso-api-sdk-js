import { OrderBy, Paginate } from '../model';
export declare const paginateData: <T>(limit: number, offset: number) => (data: T[]) => Paginate<T>;
export declare const sortData: <T>(sortBy: keyof T, orderBy: OrderBy) => (data: T[]) => T[];
export declare const sortPaginatedData: <T>(sortBy: keyof T, orderBy: OrderBy) => (p: Paginate<T>) => Paginate<T>;
