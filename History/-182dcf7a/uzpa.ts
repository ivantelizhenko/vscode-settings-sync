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
export type DispatchAddRemoveType =
  | `${FilterName}/add`
  | `${FilterName}/remove`;

export type DispatchDeleteType = `${FilterName}/removeAll`;

type FiltersInitialization = {
  type: 'filters/init';
  payload: { [x: string]: string[] };
};

type FilterAddRemoveAction = {
  type: DispatchAddRemoveType;
  payload: string;
};
type FilterDeleteActionValues = {
  type: DispatchDeleteType;
};

export type ActionType =
  | FiltersInitialization
  | FilterAddRemoveAction
  | FilterDeleteValuesAction;
