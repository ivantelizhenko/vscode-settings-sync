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
}

export interface ScheduleState {
  event: [];
}
