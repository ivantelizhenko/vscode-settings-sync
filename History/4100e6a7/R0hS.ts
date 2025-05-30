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

type setDashboardStatusAction = {
  type: 'page/setDashboardStatus';
};

type setFormStatusAction = {
  type: 'page/setFormStatus';
};

export type Action = toDashboardAction | toFormAction;
