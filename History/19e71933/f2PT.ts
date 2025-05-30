export function setIdToLocalStorage(id: string) {
  localStorage.setItem("userId", id);
}
export function getIdFromLocalStorage() {
  localStorage.getItem("userId");
}
