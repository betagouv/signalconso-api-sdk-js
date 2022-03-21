"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncFileClient = void 0;
const AsyncFile_1 = require("./AsyncFile");
const date_fns_1 = require("date-fns");
class AsyncFileClient {
    constructor(client) {
        this.client = client;
        this.fetch = () => {
            return this.client.get(`/async-files`).then(result => result.map(_ => {
                const creationDate = new Date(_.creationDate);
                return {
                    ..._,
                    creationDate,
                    status: AsyncFileClient.getStatus(_),
                };
            }));
        };
    }
}
exports.AsyncFileClient = AsyncFileClient;
AsyncFileClient.fileGenerationTimeoutHours = 24;
AsyncFileClient.getStatus = (file) => {
    if (file.filename) {
        return AsyncFile_1.AsyncFileStatus.Successed;
    }
    const creationDate = new Date(file.creationDate);
    return new Date().getTime() > (0, date_fns_1.addHours)(creationDate, AsyncFileClient.fileGenerationTimeoutHours).getTime()
        ? AsyncFile_1.AsyncFileStatus.Failed
        : AsyncFile_1.AsyncFileStatus.Loading;
};
//# sourceMappingURL=AsyncFileClient.js.map