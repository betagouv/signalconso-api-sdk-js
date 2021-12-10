import {PaginatedFilters} from '../../model'
import {subMonths} from 'date-fns'

export interface User {
  email: string
  firstName: string
  lastName: string
  lastEmailValidation: Date
}

export class User {
  static readonly isUserActive = (user: User) => user.lastEmailValidation.getTime() > subMonths(new Date(), 3).getTime()
}

export interface UserPending {
  email: string
  tokenCreation: Date
  tokenExpiration: Date
}

export interface UserSearch extends PaginatedFilters {
  email?: string
  active?: boolean
}

export interface UserToActivate {
  email: string
  firstName: string
  lastName: string
  password: string
}
