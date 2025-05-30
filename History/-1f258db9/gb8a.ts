export enum Status {
  Casual,
  Important,
  Crucial,
}

export interface Event {
  title: string;
  description: string;
  date: string;
  status: Status;
  id: string;
}

export interface ScheduleState {
  event: Event[];
}

export type ScheduleContextValue = ScheduleState & {};

interface AddEventAction {
  type: 'event/add';
  payload: Event;
}

export type Action = AddEventAction;
