"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileClient = void 0;
class FileClient {
    constructor(client) {
        this.client = client;
        this.getLink = (file) => `${this.client.baseUrl}/reports/files/${file.id}/${encodeURI(file.filename)}`;
        this.upload = (file, origin) => {
            const fileFormData = new FormData();
            fileFormData.append('reportFile', file, file.name);
            fileFormData.append('reportFileOrigin', origin);
            return this.client.post(`reports/files`, { body: fileFormData });
        };
        this.remove = (file) => {
            return this.client.delete(`/reports/files/${file.id}/${encodeURI(file.filename)}`);
        };
    }
}
exports.FileClient = FileClient;
//# sourceMappingURL=FileClient.js.map