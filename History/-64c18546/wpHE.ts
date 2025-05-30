export default interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export interface Draggable {
  dragStartHandler();
  dragEndHandler();
}

export interface DragItem {}

export type Listener<T> = (items: T[]) => void;

export enum ProjectStatus {
  Active,
  Finished,
}
