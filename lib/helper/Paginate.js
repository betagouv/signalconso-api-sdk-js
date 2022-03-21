"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPaginatedData = exports.sortData = exports.paginateData = void 0;
const paginateData = (limit, offset) => (data) => {
    return {
        entities: data.slice(offset, offset + limit),
        totalCount: data.length,
    };
};
exports.paginateData = paginateData;
const sortData = (sortBy, orderBy) => (data) => {
    return data.sort((a, b) => ('' + a[sortBy]).localeCompare('' + b[sortBy]) * (orderBy === 'desc' ? -1 : 1));
};
exports.sortData = sortData;
const sortPaginatedData = (sortBy, orderBy) => (p) => {
    return {
        entities: (0, exports.sortData)(sortBy, orderBy)(p.entities),
        totalCount: p.totalCount,
    };
};
exports.sortPaginatedData = sortPaginatedData;
//# sourceMappingURL=Paginate.js.map