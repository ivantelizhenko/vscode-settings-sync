export type FiltersStateType = {
  [key: string]: string[] | (name:string, value?:string)=> void;
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
  payload: {
    country: string[];
    department: string[];
    status: string[];
  };
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
