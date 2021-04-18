import {ApiClientApi, UploadedFile} from '..'

export class DocumentClient {

  constructor(private client: ApiClientApi) {
  }

  readonly getLink = (file: UploadedFile) => `${this.client.baseUrl}/reports/files/${file.id}/${file.filename}`
}
