import { createContext, useContext, useEffect, useReducer } from 'react';

import { toggleBookStatus as toggleBookStatusHelper } from '../../utils/helpers';

const PageContext = createContext<PageContextValue | null>(null);

const initialState: PageState = {
  page: 'dashboard',
};

function pageReducer(state: PageState, action: Action): PageState {
  switch (action.type) {
    case 'page/toDashboard': {
      return { ...state, page: 'dashboard' };
    }
    case 'page/toForm': {
      return { ...state, page: 'form' };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function PageProvider({ children }: PageContextProviderProps) {
  const [pageState, dispatch] = useReducer(pageReducer, initialState);

  const ctx: PageContextValue = {
    ...pageState,
    toDashboard() {
      dispatch({ type: 'page/toDashboard' });
    },
    toForm() {
      dispatch({ type: 'page/toForm' });
    },
  };

  return <BooksContext.Provider value={ctx}>{children}</BooksContext.Provider>;
}

function useBooks() {
  const context = useContext(BooksContext);
  if (context === undefined)
    throw new Error('BooksContext was used outside of the BooksProvider');

  return context as BooksContextValue;
}

// eslint-disable-next-line react-refresh/only-export-components
export { BooksProvider, useBooks };
