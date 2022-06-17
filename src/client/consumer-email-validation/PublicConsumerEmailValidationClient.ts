import {ApiClientApi} from '../../core/ApiClient'
import {ConsumerEmailResult, ConsumerEmailValidation, ConsumerEmailValidationSearch} from './ConsumerEmailValidation'
import {Paginate} from '../../model'

export class PublicConsumerEmailValidationClient {
  constructor(private client: ApiClientApi) {}

  readonly check = (email: string) => {
    return this.client.post<{valid: boolean}>('/email-validation/check', {body: {email}})
  }

  readonly checkAndValidate = (email: string, confirmationCode: string) => {
    return this.client.post<ConsumerEmailResult>('/email-validation/check-and-validate', {body: {email, confirmationCode}})
  }
}
