export type FiltersStateType = {
  [key: string]: string[] | ((filterValue: string, name: string) => void);
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilter: (filterValue: string, name: string) => void;
  deleteFilter: (filterValue: string) => void;
};

export type FilterName = 'department' | 'country' | 'status';
export type DispatchAddRemoveType =
  | `${FilterName}/add`
  | `${FilterName}/remove`;
export type DispatchDeleteType = `${FilterName}/removeAll`;

type FilterAddRemoveAction = {
  type: DispatchType;
  payload: string;
};

export type ActionType = FilterAction;
