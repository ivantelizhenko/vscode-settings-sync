import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export enum Status {
  Casual,
  Important,
  Crucial,
}

export interface Inputs {
  title: string;
  description: string;
  date: string;
  status: Status;
}
