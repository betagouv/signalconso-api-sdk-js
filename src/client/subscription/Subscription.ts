import {Country, Department, ReportTag} from '../..'

export type SubscriptionFrequency = 'P7D' | 'P1D'

export interface Subscription {
  id: string
  departments: Department[]
  categories: string[]
  sirets: string[]
  frequency: SubscriptionFrequency
  countries: Country[]
  tags: ReportTag[]
}

export interface SubscriptionCreate {
  departments: string[]
  categories: string[]
  sirets: string[]
  frequency: SubscriptionFrequency
  countries: string[]
  tags: ReportTag[]
}
