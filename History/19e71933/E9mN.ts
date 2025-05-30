export function setIdToLocalStorage(id: string) {
  localStorage.setItem("tic-tac-toe/userId", id);
}
export function getIdFromLocalStorage() {
  const id = localStorage.getItem("tic-tac-toe/userId");

  return id;
}

export function isMoreThanFiveMinutesApart(lastUpdated: string): boolean {
  console.log(lastUpdated);

  const lastUpdatedTime = new Date(lastUpdated).getTime();
  console.log(lastUpdatedTime);
  const now = new Date().getTime();

  const diffInMilliseconds = Math.abs(lastUpdatedTime - now);
  // const fiveMinutesInMs = 5 * 60 * 1000;
  const fiveMinutesInMs = 10000;

  return diffInMilliseconds > fiveMinutesInMs;
}
