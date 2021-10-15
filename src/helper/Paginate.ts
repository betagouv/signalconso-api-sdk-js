import {OrderBy, Paginate} from '../model'

export const paginateData =
  <T>(limit: number, offset: number) =>
  (data: T[]): Paginate<T> => {
    return {
      entities: data.slice(offset, offset + limit),
      totalCount: data.length,
    }
  }

export const sortData =
  <T>(sortBy: keyof T, orderBy: OrderBy) =>
  (data: T[]): T[] => {
    return data.sort((a, b) => ('' + a[sortBy]).localeCompare('' + b[sortBy]) * (orderBy === 'desc' ? -1 : 1))
  }

export const sortPaginatedData =
  <T>(sortBy: keyof T, orderBy: OrderBy) =>
  (p: Paginate<T>): Paginate<T> => {
    return {
      entities: sortData(sortBy, orderBy)(p.entities),
      totalCount: p.totalCount,
    }
  }
