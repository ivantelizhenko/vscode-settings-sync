export function setIdToLocalStorage(id: string) {
  localStorage.setItem("tic-tac-toe/userId", id);
}
export function getIdFromLocalStorage() {
  const id = localStorage.getItem("tic-tac-toe/userId");

  return id;
}

export function isMoreThanFiveMinutesApart(
  date1: Date | string,
  date2: Date | string
): boolean {
  const time1 = new Date(date1).getTime();
  const time2 = new Date(date2).getTime();

  const diffInMilliseconds = Math.abs(time1 - time2);
  // const fiveMinutesInMs = 5 * 60 * 1000;
  const fiveMinutesInMs = 10000;

  return diffInMilliseconds > fiveMinutesInMs;
}
