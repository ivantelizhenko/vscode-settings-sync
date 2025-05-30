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
  payload: Tab;
};
type RemoveTabAction = {
  type: 'tab/remove';
  payload: string;
};

export type Action = AddTabAction | RemoveTabAction;
