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
  Аinished,
}

type Listener