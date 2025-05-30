import { ReactNode } from 'react';

export interface Tab {
  title: string;
}

export type TabsState = {
  tabs: Tab[];
};

export type TabsContextValue = TabsState & {};

export type BooksContextProviderProps = {
  children: ReactNode;
};

type AddTabAction = {
  type: 'tab/add';
};

export type Action = AddTabAction;
