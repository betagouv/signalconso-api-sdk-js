import { Id, Subscription, SubscriptionCreate } from '../../model';
import { ApiClientApi } from '../..';
export declare class SubscriptionClient {
    private client;
    constructor(client: ApiClientApi);
    readonly list: () => Promise<Subscription[]>;
    readonly get: (id: Id) => Promise<Subscription>;
    readonly create: (body?: SubscriptionCreate) => Promise<Subscription>;
    readonly update: (id: Id, body: Partial<SubscriptionCreate>) => Promise<Subscription>;
    readonly remove: (id: Id) => Promise<void>;
}
