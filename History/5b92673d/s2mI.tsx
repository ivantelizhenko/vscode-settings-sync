import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const ModalContext = createContext<AppContextValueType | null>(null);

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

  const ctx: AppContextValueType = {
    ...appState,

    setStatusModal(status) {
      dispatch({ type: 'modal/setStatus', payload: status });
    },
    closeModal() {
      dispatch({ type: 'modal/close' });
    },
  };

  return <ModalContext.Provider value={ctx}>{children}</ModalContext.Provider>;
}

function useAppState() {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error('AppContext was used outside of the AppContextProvider');

  return context as AppContextValueType;
}

export { AppProvider, useAppState };
