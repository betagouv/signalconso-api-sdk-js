"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventClient = void 0;
class EventClient {
    constructor(client) {
        this.client = client;
        this.getByReportId = (reportId) => {
            return this.client
                .get(`reports/${reportId}/events`)
                .then(events => events.map(reportEvent => ({ ...reportEvent, data: EventClient.mapEvent(reportEvent.data) })));
        };
        this.getBySiret = (siret) => {
            return this.client
                .get(`companies/${siret}/events`)
                .then(events => events.map(reportEvent => ({ ...reportEvent, data: EventClient.mapEvent(reportEvent.data) })));
        };
    }
}
exports.EventClient = EventClient;
EventClient.mapEvent = (_) => ({
    ..._,
    action: _.action.value,
    creationDate: new Date(_.creationDate),
});
//# sourceMappingURL=EventClient.js.map