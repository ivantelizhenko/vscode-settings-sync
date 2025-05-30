import { ReactNode } from 'react';

export interface Book {
  title: string;
  author: string;
  category: 'Fiction' | 'Non-Fiction' | 'Science';
  isbn: string;
}

export type AppState = {
  isLoading: boolean;
  books: Book[];
};

export type AppContextValue = AppState & {
  addBook: (newBook: Book) => void;
};

export type BooksAppContextProviderProps = {
  children: ReactNode;
};

type isLoadingAction = {
  type: 'loading';
};

type isBooksLoadedAction = {
  type: 'books/loaded';
  payload: Book[];
};

type addBookAction = {
  type: 'book/add';
  payload: Book;
};

type removeBookAction = {
  type: 'book/remove';
  payload: string;
};

export type Action =
  | isLoadingAction
  | isBooksLoadedAction
  | addBookAction
  | removeBookAction;
