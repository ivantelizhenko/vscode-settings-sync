export enum Status {
  Casual = 'Casual',
  Important = 'Important',
  Crucial = 'Crucial',
}

export interface Event {
  title: string;
  description: string;
  date: string;
  status: Status;
  id: string;
}

export interface ScheduleState {
  events: Event[];
  editedEvent: Event | null;
}

export type ScheduleContextValue = ScheduleState & {
  addEvent: (newEvent: Event) => void;
  removeEvent: (id: string) => void;
  setEditedEvent: (id: string) => void;
};

interface AddEventAction {
  type: 'event/add';
  payload: Event;
}
interface removeEventAction {
  type: 'event/remove';
  payload: string;
}
interface setEditedEvent {
  type: 'editedEvent/set';
  payload: Event;
}

export type Action = AddEventAction | removeEventAction | setEditedEvent;
