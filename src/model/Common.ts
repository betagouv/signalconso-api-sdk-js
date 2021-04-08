export type Id = string;

export interface Entity {
  id: Id;
}

export interface Region {
  label: string;
  departments: Department[];
}

export interface Department {
  code: string;
  label: string;
}
