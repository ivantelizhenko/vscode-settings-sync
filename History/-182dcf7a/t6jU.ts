export type FiltersStateType = {
  countryFilters: string[];
  departmentFilters: string[];
  statusFilters: string[];

  // [key: string]: string[];
};

export type FiltersContextValueType = FiltersStateType & {
  toggleFilter: (filterValue: string, name: string) => void;
};

export type FilterName = 'department' | 'country' | 'status';
export type PossibleDispatchType = `${FilterName}/add` | `${FilterName}/remove`;

type FilterAction = {
  type: PossibleDispatchType;
  payload: string;
};

export type ActionType = FilterAction;

// type RemoveDepartmentAction = {
//   type: 'department/remove';
//   payload: string;
// };
// type AddCountryAction = {
//   type: 'country/add';
//   payload: string;
// };
// type RemoveCountryAction = {
//   type: 'country/remove';
//   payload: string;
// };
// type AddStatusAction = {
//   type: 'status/add';
//   payload: string;
// };
// type RemoveStatusAction = {
//   type: 'status/remove';
//   payload: string;
// };
