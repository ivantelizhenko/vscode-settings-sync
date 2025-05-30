import { ReactNode } from 'react';

export enum PageStatus {
  Dashboard = 'dashboard',
  Form = 'form',
}

export type PageState = {
  page: PageStatus;
};

export type PageContextValue = PageState & {
  toDashboard: () => void;
  toForm: () => void;
};

export type PageContextProviderProps = {
  children: ReactNode;
};

type toDashboardAction = {
  type: 'page/toDashboard';
};

type toFormAction = {
  type: 'page/toForm';
};

export type Action = toDashboardAction | toFormAction;
