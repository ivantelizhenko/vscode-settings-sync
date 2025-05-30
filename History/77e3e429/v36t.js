import { useState, useEffect } from 'react';

export function useLocalStorageState(initialState) {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem('value'))
  );

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(value));
  }, [value]);

  return { value, setValue };
}
