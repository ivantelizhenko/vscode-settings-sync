import { ChangeEvent, useState } from 'react';

type HandleChangeEventProp = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

type useFormReturnType<InitialStateType> = [
  values: InitialStateType,
  (e: HandleChangeEventProp) => void
];

export function useForm<InitialStateType>(
  initialState: InitialStateType
): useFormReturnType<InitialStateType> {
  const [values, setValues] = useState(initialState);

  function handleChange(e: HandleChangeEventProp) {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return [values as InitialStateType, handleChange];
}
