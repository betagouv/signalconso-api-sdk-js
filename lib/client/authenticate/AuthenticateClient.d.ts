import { ApiClientApi, Id, ValidationRejectReason } from '../..';
import { AuthUser } from './Authenticate';
export declare class AuthenticateClient {
    private client;
    constructor(client: ApiClientApi);
    readonly login: (login: string, password: string) => Promise<AuthUser>;
    readonly forgotPassword: (login: string) => Promise<void>;
    readonly sendActivationLink: (siret: string, token: string, email: string) => Promise<void>;
    readonly validateEmail: (token: Id) => Promise<AuthUser>;
    readonly resetPassword: (password: string, token: string) => Promise<void>;
    readonly checkConsumerEmail: (email: string) => Promise<{
        valid: boolean;
    }>;
    readonly validateConsumerEmail: (email: string, confirmationCode: string) => Promise<{
        valid: boolean;
        reason?: ValidationRejectReason | undefined;
    }>;
}
