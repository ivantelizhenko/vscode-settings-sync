export type FiltersStateType = {
  departmentFilters: string[];
  statusFilters: string[];
  countryFilters: string[];
  openFilterBox: boolean;
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilterValue: (name: string, value: string) => void;
  deleteFilterValues: (name: string) => void;
};

export type FilterName = 'department' | 'country' | 'status';
export type DispatchToggleType = `${FilterName}/add` | `${FilterName}/remove`;

export type DispatchDeleteType = `${FilterName}/removeAll`;

type FiltersValuesInitialization = {
  type: 'filters/init';
  payload: { [x: string]: string[] };
};

type FilterToggleAction = {
  type: DispatchToggleType;
  payload: string;
};
type FilterDeleteValuesAction = {
  type: DispatchDeleteType;
};

export type ActionType =
  | FiltersValuesInitialization
  | FilterToggleAction
  | FilterDeleteValuesAction;
