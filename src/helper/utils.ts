export type Index<T> = {[key: string]: T}

export const dateToYYYYMMDD = (date: Date): string => date.toISOString().split('T')[0];
