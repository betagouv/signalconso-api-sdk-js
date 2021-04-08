import {rawRegions} from './regions';
import {rawDepartments} from './departments';
import {Department, Region} from '../model/Common';

export const regions: Region[] = rawRegions.map(region => ({
  label: region.name,
  departments: rawDepartments
    .filter(department => department.region_code === region.code)
    .map(department => ({
      code: department.code,
      label: department.name
    }))
})).sort((r1, r2) => r1.label.localeCompare(r2.label));

export const departments: Department[] = rawDepartments.map(_ => ({code: _.code, label: _.name}));

export const getDepartmentByCode = (code: string): Department | undefined => departments.find(_ => _.code === code);
