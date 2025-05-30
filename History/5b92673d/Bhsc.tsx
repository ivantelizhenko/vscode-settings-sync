import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const AppContext = createContext<AppContextValueType | null>(null);

const initialState: AppStateType = {
  users: [],
  filterCountries: [],
  filterDepartments: [],
  filterStatuses: [],
  modalStatus: 'closedModal',
};

function usersReducer(state: AppStateType, action: ActionType): AppStateType {
  switch (action.type) {
    case 'modal/setStatus': {
      return {
        ...state,

        showModalStatus: action.payload,
      };
    }
    case 'modal/close': {
      return {
        ...state,
        showModalStatus: 'closedModal',
      };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function AppProvider({ children }: AppContextProviderProps) {
  const [appState, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'loading' });
      try {
        const users = await getJSON(`${API_URL}/users`);
        dispatch({ type: 'users/loaded', payload: users });

        const departments = await getJSON(`${API_URL}/departments`);
        dispatch({ type: 'departments/loaded', payload: departments });

        const countries = await getJSON(`${API_URL}/countries`);
        dispatch({ type: 'countries/loaded', payload: countries });

        const statuses = await getJSON(`${API_URL}/statuses`);
        dispatch({ type: 'statuses/loaded', payload: statuses });
      } catch (error) {
        console.error(error);
        dispatch({
          type: 'rejected',
          payload: 'The problem with a fetching data from the server',
        });
      }
    }

    fetchData();
  }, []);

  const ctx: AppContextValueType = {
    ...appState,

    setStatusModal(status) {
      dispatch({ type: 'modal/setStatus', payload: status });
    },
    closeModal() {
      dispatch({ type: 'modal/close' });
    },
    setCurrentUser: useCallback(id => {
      dispatch({ type: 'user/set', payload: id });
    }, []),
    addUser(newUser) {
      addUserAPI(newUser);
      dispatch({ type: 'user/add', payload: newUser });
    },
    deleteUser(id) {
      deleteUserAPI(id);
      dispatch({ type: 'user/delete', payload: id });
    },

    updateUser(id, updatedUser) {
      updateUserAPI(id, updatedUser);
      dispatch({ type: 'user/update', payload: { id, updatedUser } });
    },
  };

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
}

function useAppState() {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error('AppContext was used outside of the AppContextProvider');

  return context as AppContextValueType;
}

export { AppProvider, useAppState };
