export function saveToLocalStage(key: string, object: any) {
  const stringObject = JSON.stringify(object);

  localStorage.setItem(key, stringObject);
}
