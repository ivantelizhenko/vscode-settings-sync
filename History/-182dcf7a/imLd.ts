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

type FiltersInitialization = {
  type: 'filters/init';
  payload: { [x: string]: string[] };
};

type FilterToggleAction = {
  type: DispatchToggleType;
  payload: string;
};
type FilterDeleteActionValuesAction = {
  type: DispatchDeleteType;
};

export type ActionType =
  | FiltersInitialization
  | FilterToggleAction
  | FilterDeleteValuesAction;
