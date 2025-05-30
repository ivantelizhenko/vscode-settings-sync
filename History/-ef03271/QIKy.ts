import { ChangeEvent, useState } from 'react';

type HandleChangeEventProp = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export function useForm<InitialStateType>(initialState: InitialStateType) {
  const [values, setValues] = useState(initialState);

  function handleChange(e: HandleChangeEventProp) {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return [values, handleChange];
}
