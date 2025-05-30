import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  ActionType,
  DispatchAddRemoveType,
  DispatchDeleteType,
  FilterName,
  FiltersContextValueType,
  FiltersStateType,
} from './FiltersContextTypes';
import { useSearchParams } from 'react-router';

const FiltersContext = createContext<FiltersContextValueType | null>(null);

const initialState: FiltersStateType = {
  countryFilters: [],
  departmentFilters: [],
  statusFilters: [],
};

function usersReducer(
  state: FiltersStateType,
  action: ActionType
): FiltersStateType {
  switch (action.type) {
    case 'filters/init': {
      return {
        departmentFilters: action.payload.department,
        countryFilters: action.payload.country,
        statusFilters: action.payload.status,
      };
    }
    case 'department/add': {
      return {
        ...state,
        departmentFilters: [
          ...(state.departmentFilters as string[]),
          action.payload,
        ],
      };
    }
    case 'department/remove': {
      return {
        ...state,
        departmentFilters: (state.departmentFilters as string[]).filter(
          filter => filter !== action.payload
        ),
      };
    }
    case 'department/removeAll': {
      return {
        ...state,
        departmentFilters: [],
      };
    }
    case 'country/add': {
      return {
        ...state,
        countryFilters: [...(state.countryFilters as string[]), action.payload],
      };
    }
    case 'country/remove': {
      return {
        ...state,
        countryFilters: (state.countryFilters as string[]).filter(
          filter => filter !== action.payload
        ),
      };
    }
    case 'country/removeAll': {
      return {
        ...state,
        countryFilters: [],
      };
    }
    case 'status/add': {
      return {
        ...state,
        statusFilters: [...(state.statusFilters as string[]), action.payload],
      };
    }
    case 'status/remove': {
      return {
        ...state,
        statusFilters: (state.statusFilters as string[]).filter(
          filter => filter !== action.payload
        ),
      };
    }
    case 'status/removeAll': {
      return {
        ...state,
        statusFilters: [],
      };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function FiltersProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersState, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    const fromLink = Array.from(searchParams);
    console.log(fromLink);
    // console.log(fromLink, Object.keys(fromLink).length);
    // const initialStateFromLink = {};

    for (const [key, value] of fromLink) {
    }

    // dispatch({ type: 'filters/init', payload: initialStateFromLink });
  }, []);

  const ctx: FiltersContextValueType = {
    ...filtersState,

    toggleFilter(name: string, value: string) {
      // Toggle from state
      const [dispatchName] = name.split('F');

      const existFilter = (
        filtersState[`${name}Filters`] as Array<string>
      ).find(filter => filter === value);

      const curType: DispatchAddRemoveType = existFilter
        ? `${dispatchName as FilterName}/remove`
        : `${dispatchName as FilterName}/add`;

      dispatch({ type: curType, payload: value });

      // Toggle from link
      let valueSetArray: string[];
      const existingFilters = searchParams.get(name)?.split(',') || [];
      valueSetArray = existingFilters;

      const comparisonIndex = valueSetArray.findIndex(el => el === value);

      if (valueSetArray.length === 0) {
        valueSetArray = [value];
      } else if (valueSetArray.length > 0 && comparisonIndex === -1) {
        valueSetArray = [...valueSetArray, value];
      } else if (valueSetArray.length > 0 && comparisonIndex > -1) {
        valueSetArray = valueSetArray.filter(el => el !== value);
      }

      searchParams.set(name, valueSetArray.join(','));

      if (!valueSetArray.at(0)) searchParams.delete(name);
      setSearchParams(searchParams);
    },

    deleteFilter: useCallback(
      (name: string) => {
        // delete from state
        const curType: DispatchDeleteType = `${name as FilterName}/removeAll`;
        dispatch({ type: curType });

        // delete from link
        searchParams.delete(name);
        setSearchParams(searchParams);
      },
      [searchParams, setSearchParams]
    ),
  };

  return (
    <FiltersContext.Provider value={ctx}>{children}</FiltersContext.Provider>
  );
}

function useFilters() {
  const context = useContext(FiltersContext);

  if (context === undefined)
    throw new Error(
      'FilterContext was used outside of the FilterContextContextProvider'
    );

  return context as FiltersContextValueType;
}

export { FiltersProvider, useFilters };
