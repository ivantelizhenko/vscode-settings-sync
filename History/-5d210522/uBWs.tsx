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

function BooksProvider({ children }: BooksContextProviderProps) {
  const [booksState, dispatch] = useReducer(booksReducer, initialState);

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
    setAddFormStatus() {
      dispatch({ type: 'form/addStatus' });
    },
    setEditFormStatus() {
      dispatch({ type: 'form/editStatus' });
    },
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
