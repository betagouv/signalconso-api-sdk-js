"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const date_fns_1 = require("date-fns");
class User {
}
exports.User = User;
User.isUserActive = (user) => user.lastEmailValidation.getTime() > date_fns_1.subMonths(new Date(), 3).getTime();
//# sourceMappingURL=User.js.map