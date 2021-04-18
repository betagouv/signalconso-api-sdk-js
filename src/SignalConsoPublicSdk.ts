import {Country} from './model'
import {ApiClientApi} from './core/ApiClient'
import {AuthenticateClient, DocumentClient, PublicCompanyClient} from './client'

export class SignalConsoPublicSdk {

  constructor(private client: ApiClientApi) {
  }

  readonly company = new PublicCompanyClient(this.client)
  readonly getCountries = () => this.client.get<Country[]>(`/constants/countries`)
  readonly authenticate = new AuthenticateClient(this.client)
  readonly document = new DocumentClient(this.client)
}
