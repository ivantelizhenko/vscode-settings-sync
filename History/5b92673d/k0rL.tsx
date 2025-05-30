import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const ModalContext = createContext<AppContextValueType | null>(null);

const initialState: AppStateType = {
  modalStatus: 'closedModal',
};

function usersReducer(state: AppStateType, action: ActionType): AppStateType {
  switch (action.type) {
    case 'modal/setStatus': {
      return {
        ...state,

        modalStatus: action.payload,
      };
    }
    case 'modal/close': {
      return {
        ...state,
        modalStatus: 'closedModal',
      };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function ModalProvider({ children }: AppContextProviderProps) {
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

function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error(
      'ModalContext was used outside of the ModalContextContextProvider'
    );

  return context as AppContextValueType;
}

export { ModalProvider, useModal };
