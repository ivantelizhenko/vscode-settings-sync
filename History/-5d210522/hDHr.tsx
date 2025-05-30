import { createContext, useContext, useReducer } from 'react';
import { Action, PageContextValue, PageState } from './PageContextTypes';

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
    setDashboard() {
      dispatch({ type: 'page/toDashboard' });
    },
    setForm() {
      dispatch({ type: 'page/toForm' });
    },
  };

  return <PageContext.Provider value={ctx}>{children}</PageContext.Provider>;
}

function usePage() {
  const context = useContext(PageContext);
  if (context === undefined)
    throw new Error('BooksContext was used outside of the PAgeProvider');

  return context as PageContextValue;
}

// eslint-disable-next-line react-refresh/only-export-components
export { PageProvider, usePage };
