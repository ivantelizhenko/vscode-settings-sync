import { useState, useEffect } from 'react';

export function useLocalStorageState(initialState) {
  const [watched, setWatched] = useState(() =>
    JSON.parse(localStorage.getItem('watched'))
  );

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched]);

  return { watched, setWatched };
}
