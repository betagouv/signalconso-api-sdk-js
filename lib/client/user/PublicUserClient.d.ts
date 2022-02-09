import { ApiClientApi, TokenInfo, UserToActivate } from '../..';
export declare class PublicUserClient {
    private client;
    constructor(client: ApiClientApi);
    readonly activateAccount: (user: UserToActivate, token: string, companySiret?: string | undefined) => Promise<void>;
    readonly fetchTokenInfo: (token: string, companySiret?: string | undefined) => Promise<TokenInfo>;
}
