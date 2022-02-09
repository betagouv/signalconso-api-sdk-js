import { ApiClientApi, Event, Id } from '../..';
export declare class EventClient {
    private client;
    constructor(client: ApiClientApi);
    readonly getByReportId: (reportId: Id) => Promise<{
        data: Event;
        user?: import("./Event").EventUser | undefined;
    }[]>;
    readonly getBySiret: (siret: string) => Promise<{
        data: Event;
        user?: import("./Event").EventUser | undefined;
    }[]>;
    static readonly mapEvent: (_: {
        id: any;
        reportId?: any;
        creationDate: any;
        userId?: any;
        eventType: any;
        action: any;
        details: any;
    }) => Event;
}
