export enum Status {
  Casual,
  Important,
  Crucial,
}

interface Event {
  title: string;
  description: string;
  date: string;
  status: Status;
}

interface ScheduleState {
  event: [];
}
