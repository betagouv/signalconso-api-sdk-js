import { CompanyAccess, CompanyAccessLevel } from './CompanyAccess';
import { ApiClientApi, Id } from '../..';
export declare class CompanyAccessClient {
    private client;
    constructor(client: ApiClientApi);
    readonly fetch: (siret: string) => Promise<CompanyAccess[]>;
    readonly update: (siret: string, userId: string, level: CompanyAccessLevel) => Promise<{
        level: CompanyAccessLevel;
        userId: string;
        firstName: string;
        lastName: string;
        email: string;
        editable: Boolean;
        isHeadOffice: Boolean;
    }>;
    readonly remove: (siret: string, userId: Id) => Promise<void>;
}
