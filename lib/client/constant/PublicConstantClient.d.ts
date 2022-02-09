import { ApiClientApi, Country } from '../..';
import { Department, Region } from './Country';
export declare class PublicConstantClient {
    private client;
    constructor(client: ApiClientApi);
    private readonly regions;
    private readonly departments;
    readonly getRegions: () => Promise<Region[]>;
    readonly getDepartements: () => Promise<Department[]>;
    readonly getDepartmentByCode: (code: string) => Promise<Department | undefined>;
    readonly getCountries: () => Promise<Country[]>;
}
