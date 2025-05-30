import { UniqueIdentifier } from '@dnd-kit/core';
import { ReactNode } from 'react';

export interface Tab {
  id: UniqueIdentifier;
  title: string;
}

export type TabsState = {
  tabs: Tab[];
  activeId: UniqueIdentifier | null;
};

export type TabsContextValue = TabsState & {
  addTab: (newTab: Tab) => void;
  removeTab: (id: UniqueIdentifier) => void;
};

export type TabsContextProviderProps = {
  children: ReactNode;
};

type AddTabAction = {
  type: 'tab/add';
  payload: Tab;
};
type RemoveTabAction = {
  type: 'tab/remove';
  payload: UniqueIdentifier;
};
type SetActiveIdAction = {
  type: 'taactiveId/set';
  payload: UniqueIdentifier;
};
type removeActiveIdAction = {
  type: 'taactiveId/set';
};

export type Action = AddTabAction | RemoveTabAction;
