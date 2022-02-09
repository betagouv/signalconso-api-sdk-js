import { PaginatedFilters } from '../../model';
export interface User {
    email: string;
    firstName: string;
    lastName: string;
    lastEmailValidation: Date;
}
export declare class User {
    static readonly isUserActive: (user: User) => boolean;
}
export interface UserPending {
    email: string;
    tokenCreation: Date;
    tokenExpiration: Date;
}
export interface UserSearch extends PaginatedFilters {
    email?: string;
    active?: boolean;
}
export interface UserToActivate {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}
