import { createContext, useContext, useEffect, useReducer } from 'react';

import {
  Action,
  TabsContextValue,
  TabsState,
  TabsContextProviderProps,
  Tab,
} from './TabsContextType';

const TabsContext = createContext<TabsContextValue | null>(null);

const initialState: TabsState = {
  tabs: [],
};

function tabsReducer(state: TabsState, action: Action): TabsState {
  switch (action.type) {
    case 'tab/add': {
      return {
        ...state,
        tabs: [...state.tabs, action.payload],
      };
    }
    case 'tab/remove': {
      return {
        ...state,
        tabs: state.tabs.filter((tab: Tab) => tab.id !== action.payload),
      };
    }
    default:
      throw new Error('Unknown action type');
  }
}

function TabsProvider({ children }: TabsContextProviderProps) {
  const [tabsState, dispatch] = useReducer(tabsReducer, initialState);

  useEffect(() => {
    async function get() {
      try {
        const books = await getBooks();

        dispatch({ type: 'books/loaded', payload: books });
      } catch (err) {
        console.error(err);
      }
    }

    get();
  }, []);

  const ctx: BooksContextValue = {
    ...booksState,
    async addBook(newBook) {
      dispatch({ type: 'book/add', payload: newBook });
      await addBookApi(newBook);
    },
    async removeBook(id) {
      dispatch({ type: 'book/remove', payload: id });
      await deleteBook(id);
    },
    async editBook(editedBook) {
      dispatch({ type: 'book/edit', payload: editedBook });
      await updateBook(editedBook.id, editedBook);
    },
    async toggleBookStatus(id, newStatus) {
      dispatch({ type: 'book/toggleStatus', payload: id });
      await updateBookStatus(id, newStatus);
    },
    setEditingBook(id: string) {
      dispatch({ type: 'editingBook/set', payload: id });
    },
    clearEditingBook() {
      dispatch({ type: 'editingBook/clear' });
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
