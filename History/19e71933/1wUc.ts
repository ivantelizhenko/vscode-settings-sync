export function setIdToLocalStorage(id: string) {
  localStorage.setItem("tic-tac-toe/userId", id);
}
export function getIdFromLocalStorage() {
  localStorage.getItem("tic-tac-toe/userId");
}
