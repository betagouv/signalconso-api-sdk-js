import {ApiClientApi} from '../../core/ApiClient'
import {ConsumerEmailResult, ConsumerEmailValidation, ConsumerEmailValidationSearch} from './ConsumerEmailValidation'
import {Paginate} from '../../model'

export class ConsumerEmailValidationClient {
  constructor(private client: ApiClientApi) {
  }

  readonly check = (email: string) => {
    return this.client.post<{valid: boolean}>('/email-validation/check', {body: {email}})
  }

  readonly validate = (email: string) => {
    return this.client.post<ConsumerEmailResult>('/email-validation/validate', {body: {email}})
  }

  readonly checkAndValidate = (email: string, confirmationCode: string) => {
    return this.client.post<ConsumerEmailResult>('/email-validation/check-and-validate', {body: {email, confirmationCode}})
  }

  readonly search = (search: ConsumerEmailValidationSearch): Promise<Paginate<ConsumerEmailValidation>> => {
    return this.client.get<Paginate<{ [key in keyof ConsumerEmailValidation] }>>('/email-validation/search', {qs: search})
      .then(res => ({
        ...res,
        entities: res.entities.map(_ => ({
          ..._,
          lastValidationDate: _.lastValidationDate ? new Date(_.lastValidationDate) : undefined,
          lastAttempt: _.lastAttempt ? new Date(_.lastAttempt) : undefined,
          creationDate: new Date(_.creationDate),
        }))
      }))
  }
}
