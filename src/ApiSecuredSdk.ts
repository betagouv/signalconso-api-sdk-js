import {CompanyClient, ConstantClient, ReportedPhoneClient, SubscriptionClient, WebsiteClient} from './client';
import {ApiClientApi} from './core/ApiClient';

export class ApiSecuredSdk {

  constructor(private client: ApiClientApi) {
  }

  readonly website = new WebsiteClient(this.client);
  readonly reportedPhone = new ReportedPhoneClient(this.client);
  readonly constant = new ConstantClient(this.client);
  readonly subscription = new SubscriptionClient(this.client);
  readonly company = new CompanyClient(this.client);
}
