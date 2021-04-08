import {Country} from './model';
import {ApiClientApi} from './core/ApiClient';
import {PublicCompanyClient} from './client';

export class ApiPublicSdk {

  constructor(private client: ApiClientApi) {
  }

  readonly company = new PublicCompanyClient(this.client);
  readonly getCountries = () => this.client.get<Country[]>(`/constants/countries`);
}
