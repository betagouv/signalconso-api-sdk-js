import {ApiClientApi} from './core/ApiClient'
import {AnomalyClient, AuthenticateClient, FileClient, PublicConstantClient, RatingClient} from './client'
import {PublicCompanyClient} from './client/company/PublicCompanyClient'
import {PublicUserClient} from './client/user/PublicUserClient'
import {PublicReportClient} from './client/report/PublicReportClient'
import {PublicStatsClient} from './client/stats/PublicStatsClient'

export class SignalConsoPublicSdk {
  constructor(private client: ApiClientApi) {}

  readonly company = new PublicCompanyClient(this.client)
  readonly report = new PublicReportClient(this.client)
  readonly stats = new PublicStatsClient(this.client)
  readonly user = new PublicUserClient(this.client)
  readonly constant = new PublicConstantClient(this.client)
  readonly authenticate = new AuthenticateClient(this.client)
  readonly document = new FileClient(this.client)
  readonly anomaly = new AnomalyClient(this.client)
  readonly rating = new RatingClient(this.client)
}
