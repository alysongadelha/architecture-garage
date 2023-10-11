export interface ISelect {
  id: string;
  options: ISelectOptions[];
}

export interface ISelectOptions {
  value: string | number;
  label: string;
}
