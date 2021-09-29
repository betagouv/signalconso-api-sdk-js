"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directDownloadBlob = exports.toQueryString = exports.cleanObject = exports.isDefined = exports.isNotDefined = exports.getHostFromUrl = exports.dateToApi = exports.dateToYYYYMMDD = void 0;
const dateToYYYYMMDD = (date) => (date ? date.toISOString().split('T')[0] : undefined);
exports.dateToYYYYMMDD = dateToYYYYMMDD;
exports.dateToApi = exports.dateToYYYYMMDD;
const getHostFromUrl = (url) => {
    return url === null || url === void 0 ? void 0 : url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
};
exports.getHostFromUrl = getHostFromUrl;
const isNotDefined = (value) => {
    return [undefined, null, ''].includes(value);
};
exports.isNotDefined = isNotDefined;
const isDefined = (value) => !exports.isNotDefined(value);
exports.isDefined = isDefined;
const cleanObject = (obj) => {
    const clone = { ...obj };
    for (let k in clone) {
        const val = clone[k];
        if (exports.isNotDefined(val) || (Array.isArray(val) && val.filter(exports.isDefined).length === 0)) {
            delete clone[k];
        }
    }
    return clone;
};
exports.cleanObject = cleanObject;
const toQueryString = (obj) => {
    if (!obj)
        return '';
    return ('?' +
        Object.keys(obj)
            .filter(k => obj[k] !== undefined)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
            .join('&'));
};
exports.toQueryString = toQueryString;
const directDownloadBlob = (fileName) => (blob) => {
    const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
};
exports.directDownloadBlob = directDownloadBlob;
//# sourceMappingURL=Utils.js.map