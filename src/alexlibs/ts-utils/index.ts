export * from './common'

const hashArgs = (args: any[]) => {
  let res = ''
  args.forEach(arg => {
    if (typeof arg == 'string' || typeof arg == 'boolean' || typeof arg == 'number') res += '|' + arg
    else if (typeof arg === 'function') res += '|fun'
    else res += '|' + JSON.stringify(arg)
  })
  return res
}

export const lazy = <T, P extends Array<any>>(fn: (...p: P) => T): ((...p: P) => T) => {
  const cache = new Map<string, T>()
  return (...p: P) => {
    const argsHashed = hashArgs(p)
    const cachedValue = cache.get(argsHashed)
    if (cachedValue === undefined) {
      const value = fn(...p)
      cache.set(argsHashed, value)
      return value
    }
    return cachedValue
  }
}

export type Map = {
  <A, R>(a: A | undefined, fn: (_: A) => R): R | undefined
  <A, B, R>(a: A | undefined, b: B | undefined, fn: (a: A, b: B) => R): R | undefined
  <A, B, C, R>(a: [A | undefined, B | undefined, C | undefined], fn: (a: A, b: B, c: C) => R): R | undefined
  <A, B, C, D, R>(a: [A | undefined, B | undefined, C | undefined, D | undefined], fn: (a: A, b: B, c: C, d: D) => R):
    | R
    | undefined
}
export const map: Map = (...args: any[]) => {
  const fn = args.pop()
  return args.every(_ => _ !== undefined) ? fn(...args) : undefined
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

type _Enum = {[key: string]: any}

export class Enum {
  static readonly entries = <T extends _Enum>(t: T): Entries<T> => {
    return Object.entries(t)
  }

  static readonly keys = <T extends _Enum>(t: T): (keyof T)[] => {
    return Enum.entries(t).map(([key]) => key)
  }

  static readonly values = <T extends _Enum>(t: T): T[keyof T][] => {
    return Object.values(t)
  }
}
