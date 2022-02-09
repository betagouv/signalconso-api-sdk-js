"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateClient = void 0;
class AuthenticateClient {
    constructor(client) {
        this.client = client;
        this.login = (login, password) => {
            return this.client.post(`/authenticate`, { body: { login, password } });
        };
        this.forgotPassword = (login) => {
            return this.client.post(`/authenticate/password/forgot`, { body: { login } });
        };
        this.sendActivationLink = (siret, token, email) => {
            return this.client.post(`/accesses/${siret}/send-activation-link`, { body: { token, email } });
        };
        this.validateEmail = (token) => {
            return this.client.post(`/account/validate-email`, { body: { token } });
        };
        this.resetPassword = (password, token) => {
            return this.client.post(`/authenticate/password/reset`, { body: { password }, qs: { token } });
        };
        this.checkConsumerEmail = (email) => {
            return this.client.post('/email/check', { body: { email } });
        };
        this.validateConsumerEmail = (email, confirmationCode) => {
            return this.client.post('/email/validate', { body: { email, confirmationCode } });
        };
    }
}
exports.AuthenticateClient = AuthenticateClient;
//# sourceMappingURL=AuthenticateClient.js.map