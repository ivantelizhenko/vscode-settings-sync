export function setIdToLocalStorage(id: string) {
  localStorage.setItem("tic-tac-toe/userId", id);
}
export function getIdFromLocalStorage() {
  const id = localStorage.getItem("tic-tac-toe/userId");

  return id;
}

export function isMoreThanFiveMinutesApart({
  lastUpdated,
  now,
}: {
  lastUpdated: Date | string;
  now: Date | string;
}): boolean {
  const lastUpdatedTime = new Date(lastUpdated).getTime();
  const nowTime = new Date(now).getTime();

  const diffInMilliseconds = Math.abs(lastUpdatedTime - nowTime);
  // const fiveMinutesInMs = 5 * 60 * 1000;
  const fiveMinutesInMs = 10000;

  return diffInMilliseconds > fiveMinutesInMs;
}
