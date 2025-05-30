export default interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragItem {
  dragOverHandler();
  dropHandler();
  dragLeaveHandler();
}

export type Listener<T> = (items: T[]) => void;

export enum ProjectStatus {
  Active,
  Finished,
}
