export type FiltersStateType = {
  [key: string]:
    | string[]
    | boolean
    | ((name: string, filterValue: string) => void);
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
  payload: { [x: string]: string[] };
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
