export type FiltersStateType = {
  [key: string]: string[] | ((name: string, filterValue: string) => void);
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilterState: (name: string, filterValue: string) => void;
  deleteFilterState: (filterValue: string) => void;
};

export type FilterName = 'department' | 'country' | 'status';
export type DispatchAddRemoveType =
  | `${FilterName}/add`
  | `${FilterName}/remove`;

export type DispatchDeleteType = `${FilterName}/removeAll`;

type FilterAddRemoveAction = {
  type: DispatchAddRemoveType;
  payload: string;
};
type FilterDeleteAction = {
  type: DispatchDeleteType;
};

export type ActionType = FilterAddRemoveAction | FilterDeleteAction;
