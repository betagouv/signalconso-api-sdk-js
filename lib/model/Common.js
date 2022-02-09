"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateFilters2QueryString = void 0;
// TODO(Alex) found a better type system than any
const paginateFilters2QueryString = ({ offset, limit, ...rest }) => {
    return {
        ...rest,
        offset: offset !== undefined ? offset + '' : undefined,
        limit: limit !== undefined ? limit + '' : undefined,
    };
};
exports.paginateFilters2QueryString = paginateFilters2QueryString;
//# sourceMappingURL=Common.js.map