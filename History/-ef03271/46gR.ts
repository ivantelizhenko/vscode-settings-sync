import { ChangeEvent, useState } from 'react';

type HandleChangeEventProp = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

type useFormType<InitialStateType> = (
  values: InitialStateType
) => [values: InitialStateType, (e: HandleChangeEventProp) => void];

export function useForm<InitialStateType>(
  initialState: InitialStateType
): [
  values: InitialStateType,
  handleChange: (e: HandleChangeEventProp) => void
] {
  const [values, setValues] = useState(initialState);

  function handleChange(e: HandleChangeEventProp) {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return [values, handleChange];
}
