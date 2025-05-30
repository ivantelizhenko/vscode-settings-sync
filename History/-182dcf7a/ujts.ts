export type FiltersStateType = {
  [key: string]: string[] | ((filterValue: string, name: string) => void);
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilterState: (filterValue: string, name: string) => void;
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
