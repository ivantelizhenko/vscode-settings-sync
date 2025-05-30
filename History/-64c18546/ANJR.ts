import { Project } from '../classes/Project';

export default interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export enum ProjectStatus {
  Active,
  Finished,
}

export type Listener = (items: Project[]) => void;
