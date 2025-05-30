export type FiltersStateType = {
  countryFilters: string[];
  departmentFilters: string[];
  statusFilters: string[];
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilter: (name: string, value: string) => void;
  deleteFilter: (name: string) => void;
};

export type FilterName = 'department' | 'country' | 'status';
export type DispatchAddRemoveType =
  | `${FilterName}/add`
  | `${FilterName}/remove`;

export type DispatchDeleteType = `${FilterName}/removeAll`;

type FiltersInitialization = {
  type: 'filters/init';
  payload: FiltersStateType;
};

type FilterAddRemoveAction = {
  type: DispatchAddRemoveType;
  payload: string;
};
type FilterDeleteAction = {
  type: DispatchDeleteType;
};

export type ActionType =
  | FiltersInitialization
  | FilterAddRemoveAction
  | FilterDeleteAction;
