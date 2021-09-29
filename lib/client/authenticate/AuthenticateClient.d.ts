import { ApiClientApi, Id } from '../..';
import { AuthUser } from './UserWithPermission';
export declare class AuthenticateClient {
    private client;
    constructor(client: ApiClientApi);
    readonly login: (login: string, password: string) => Promise<AuthUser>;
    readonly forgotPassword: (login: string) => Promise<void>;
    readonly sendActivationLink: (siret: string, token: string, email: string) => Promise<void>;
    readonly validateEmail: (token: Id) => Promise<AuthUser>;
    readonly resetPassword: (password: string, token: string) => Promise<void>;
}
