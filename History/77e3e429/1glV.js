export function useLocalStorageState() {
  const [watched, setWatched] = useState(() =>
    JSON.parse(localStorage.getItem('watched'))
  );
  return;
}
