import {ApiClientApi} from './core/ApiClient'
import {AnomalyClient, AuthenticateClient, ConstantClient, FileClient} from './client'
import {PublicCompanyClient} from './client/company/PublicCompanyClient'

export class SignalConsoPublicSdk {

  constructor(private client: ApiClientApi) {
  }

  readonly company = new PublicCompanyClient(this.client)
  readonly constant = new ConstantClient(this.client)
  readonly authenticate = new AuthenticateClient(this.client)
  readonly document = new FileClient(this.client)
  readonly anomaly = new AnomalyClient(this.client)
}
