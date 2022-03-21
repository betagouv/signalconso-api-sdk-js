"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClient = void 0;
const __1 = require("../..");
const User_1 = require("./User");
const Option_1 = require("fp-ts/lib/Option");
class UserClient {
    constructor(client) {
        this.client = client;
        this.fetchConnectedUser = () => {
            return this.client.get(`/account`);
        };
        this.fetchDGCCRF = (filters) => {
            return this.client
                .get(`/account/dgccrf/users`)
                .then(users => users.map(_ => {
                _.lastEmailValidation = new Date(_.lastEmailValidation);
                return _;
            }))
                .then(users => (0, Option_1.fromNullable)(filters.email)
                .filter(_ => _ !== '')
                .map(user => users.filter(_ => _.email.includes(user)))
                .getOrElse(users))
                .then(users => (0, Option_1.fromNullable)(filters.active)
                .map(active => users.filter(_ => User_1.User.isUserActive(_) === active))
                .getOrElse(users))
                .then((0, __1.paginateData)(filters.limit, filters.offset));
        };
        this.fetchPendingDGCCRF = () => {
            return this.client.get(`/account/dgccrf/pending`).then(_ => _.map(_ => {
                _.tokenCreation = new Date(_.tokenCreation);
                _.tokenExpiration = new Date(_.tokenExpiration);
                return _;
            }));
        };
        this.inviteDGCCRF = (email) => {
            return this.client.post(`/account/dgccrf/invitation`, { body: { email } });
        };
        this.changePassword = (oldPassword, newPassword) => {
            return this.client.post(`/account/password`, { body: { oldPassword, newPassword } });
        };
    }
}
exports.UserClient = UserClient;
//# sourceMappingURL=UserClient.js.map