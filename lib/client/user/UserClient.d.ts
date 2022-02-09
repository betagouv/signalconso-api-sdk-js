import { ApiClientApi, Paginate, UserPending, UserSearch } from '../..';
import { User } from './User';
export declare class UserClient {
    private client;
    constructor(client: ApiClientApi);
    readonly fetchConnectedUser: () => Promise<User>;
    readonly fetchDGCCRF: (filters: UserSearch) => Promise<Paginate<User>>;
    readonly fetchPendingDGCCRF: () => Promise<UserPending[]>;
    readonly inviteDGCCRF: (email: string) => Promise<void>;
    readonly changePassword: (oldPassword: string, newPassword: string) => Promise<any>;
}
