import { useState } from 'react';

export function useLocalStorageState() {
  const [watched, setWatched] = useState(() =>
    JSON.parse(localStorage.getItem('watched'))
  );
  return { watched, setWatched };
}
