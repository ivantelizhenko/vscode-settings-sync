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

export type AppContextValue = AppState & {};

export type BooksAppContextProviderProps = {
  children: ReactNode;
};

type isLoadingAction = {
  type: 'loading';
};

type isBooksLoaded = {
  books/loaded

}

export type Action = isLoadingAction;
