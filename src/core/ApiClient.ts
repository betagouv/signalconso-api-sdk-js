import axios, {AxiosResponse, ResponseType} from 'axios'
import * as qs from 'qs'

export interface RequestOption {
  readonly qs?: any
  readonly headers?: any
  readonly body?: any
  readonly timeout?: number
  readonly responseType?: ResponseType
}

export interface ApiClientParams {
  readonly baseUrl: string
  readonly headers?: any
  readonly requestInterceptor?: (options?: RequestOption) => Promise<RequestOption> | RequestOption
  readonly proxy?: string
  readonly mapData?: (_: any) => any
  readonly mapError?: (_: any) => never
}

export interface ApiClientApi {
  readonly baseUrl: string
  readonly get: <T = any>(uri: string, options?: RequestOption) => Promise<T>
  readonly post: <T = any>(uri: string, options?: RequestOption) => Promise<T>
  readonly postGetPdf: <T = any>(uri: string, options?: RequestOption) => Promise<Blob>
  readonly getPdf: <T = any>(uri: string, options?: RequestOption) => Promise<Blob>
  readonly delete: <T = any>(uri: string, options?: RequestOption) => Promise<T>
  readonly put: <T = any>(uri: string, options?: RequestOption) => Promise<T>
  readonly patch: <T = any>(uri: string, options?: RequestOption) => Promise<T>
}

export type StatusCode = 'front-side' | 200 | 301 | 302 | 400 | 401 | 403 | 404 | 423 | 500 | 504

export class ApiError extends Error {
  public name: string

  constructor(
    public message: string,
    public code: StatusCode,
    public id?: string,
    public error?: Error,
  ) {
    super(message)
    this.name = new.target.prototype.constructor.name
    Object.setPrototypeOf(this, new.target.prototype)
  }

}

// /** @deprecated*/
// export interface ApiError {
//   code: StatusCode
//   id: string
//   message: string
//   error?: Error
// }
//
// export interface ApiDetailedError {
//   code: StatusCode
//   message: Detail
//   error?: Error
// }

// export interface Detail {
//   type: string
//   title: string
//   details: string
// }

export type Method = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'

export class ApiClient {
  private readonly fetch: (method: Method, url: string, options?: RequestOption) => Promise<any>

  readonly postGetPdf: (url: string, options?: RequestOption) => Promise<Blob>

  readonly getPdf: (url: string, options?: RequestOption) => Promise<Blob>

  readonly baseUrl: string

  constructor({baseUrl, headers, requestInterceptor, mapData, mapError}: ApiClientParams) {
    const client = axios.create({
      baseURL: baseUrl,
      headers: {...headers},
    })

    this.baseUrl = baseUrl

    this.fetch = async (method: Method, url: string, options?: RequestOption) => {
      const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor)
      return client
        .request({
          method,
          url,
          headers: builtOptions?.headers,
          params: options?.qs,
          data: options?.body,
          paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'}),
        })
        .then(mapData ?? ((_: AxiosResponse) => _.data))
        .catch(
          mapError ??
          ((_: any) => {
            if (_.response && _.response.data) {
              throw new ApiError(
                _.response.data.details ?? _.response.data.timeout ?? JSON.stringify(_.response.data),
                _.response.status,
                _.response.data.type,
                _,
              )
            }
            throw new ApiError(
              `Something not caught went wrong`,
              500,
              undefined,
              _
            )
          }),
        )
    }

    /** TODO(Alex) Didn't find any way to download pdf with axios but it should exist. */
    this.postGetPdf = async (url: string, options?: RequestOption) => {
      const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor)
      return fetch(baseUrl + url, {
        method: 'POST',
        headers: builtOptions?.headers,
        body: JSON.stringify(builtOptions?.body),
      }).then(_ => _.blob())
    }

    /** TODO(Alex) Didn't find any way to download pdf with axios but it should exist. */
    this.getPdf = async (url: string, options?: RequestOption) => {
      const builtOptions = await ApiClient.buildOptions(options, headers, requestInterceptor)
      return fetch(baseUrl + url, {
        method: 'GET',
        headers: builtOptions?.headers,
      }).then(_ => _.blob())
    }
  }

  private static readonly buildOptions = async (
    options?: RequestOption,
    headers?: any,
    requestInterceptor: (_?: RequestOption) => RequestOption | Promise<RequestOption> = _ => _!,
  ): Promise<RequestOption> => {
    const interceptedOptions = await requestInterceptor(options)
    return {
      ...interceptedOptions,
      headers: {...headers, ...interceptedOptions?.headers},
    }
  }

  readonly get = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('GET', uri, options)
  }

  readonly post = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('POST', uri, options)
  }

  readonly delete = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('DELETE', uri, options)
  }

  readonly put = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('PUT', uri, options)
  }

  readonly patch = <T = any>(uri: string, options?: RequestOption): Promise<T> => {
    return this.fetch('PATCH', uri, options)
  }
}
