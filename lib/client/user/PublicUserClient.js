"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicUserClient = void 0;
class PublicUserClient {
    constructor(client) {
        this.client = client;
        this.activateAccount = (user, token, companySiret) => {
            return this.client.post(`/account/activation`, {
                body: {
                    draftUser: user,
                    token: token,
                    ...(companySiret ? { companySiret } : {}),
                },
            });
        };
        this.fetchTokenInfo = (token, companySiret) => {
            if (companySiret) {
                return this.client.get(`/accesses/${companySiret}/token`, {
                    qs: {
                        token: token,
                    },
                });
            }
            else {
                return this.client.get(`/account/token`, {
                    qs: {
                        token: token,
                    },
                });
            }
        };
    }
}
exports.PublicUserClient = PublicUserClient;
//# sourceMappingURL=PublicUserClient.js.map