"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicConstantClient = void 0;
const regions_1 = require("./regions");
const departments_1 = require("./departments");
class PublicConstantClient {
    constructor(client) {
        this.client = client;
        this.regions = regions_1.rawRegions
            .map(region => ({
            label: region.name,
            departments: departments_1.rawDepartments
                .filter(department => department.region_code === region.code)
                .map(department => ({
                code: department.code,
                label: department.name,
            })),
        }))
            .sort((r1, r2) => r1.label.localeCompare(r2.label));
        this.departments = departments_1.rawDepartments.map(_ => ({ code: _.code, label: _.name }));
        this.getRegions = () => {
            // Simulate Async call since it could be moved to the API one day for factorization purpose
            return Promise.resolve(this.regions);
        };
        this.getDepartements = () => {
            // Simulate Async call since it could be moved to the API one day for factorization purpose
            return Promise.resolve(this.departments);
        };
        this.getDepartmentByCode = (code) => {
            // Simulate Async call since it could be moved in the API for factorization purpose
            return Promise.resolve(this.departments.find(_ => _.code === code));
        };
        this.getCountries = () => this.client.get(`/constants/countries`);
    }
}
exports.PublicConstantClient = PublicConstantClient;
//# sourceMappingURL=PublicConstantClient.js.map