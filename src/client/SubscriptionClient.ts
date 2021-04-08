import {Id} from '../model';
import {ApiClientApi} from '..';
import {getDepartmentByCode} from '../asset';
import {Subscription, SubscriptionCreate} from '../model';

const fromApi = (api: any): Subscription => ({
  ...api,
  categories: api.categories ?? [],
  sirets: api.sirets ?? [],
  countries: api.countries ?? [],
  tags: api.tags ?? [],
  departments: (api.departments ?? []).map(getDepartmentByCode),
});

const toApi = (subscription: Partial<Subscription>): any => ({
  ...subscription,
  departments: subscription.departments?.map(_ => _.code),
});

export class SubscriptionClient {

  constructor(private client: ApiClientApi) {
  }

  readonly list = (): Promise<Subscription[]> => {
    return this.client.get<Subscription[]>(`/subscriptions`).then(_ => _.map(fromApi));
  };

  readonly get = (id: Id) => {
    return this.client.get<Subscription>(`/subscriptions/${id}`).then(fromApi);
  };

  readonly create = (body: SubscriptionCreate) => {
    return this.client.post<Subscription>(`/subscriptions`, {body: toApi(body)}).then(fromApi);
  };

  readonly update = (id: Id, body: Partial<Subscription>) => {
    return this.client.put<Subscription>(`/subscriptions/${id}`, {body: toApi(body)}).then(fromApi);
  };

  readonly remove = (id: Id) => {
    return this.client.delete<void>(`/subscriptions/${id}`);
  };
}
