import { ChangeEvent, useCallback, useState } from 'react';

type HandleChangeEventProp = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

type useFormReturnType<InitialStateType> = [
  values: InitialStateType,
  (e: HandleChangeEventProp) => void,
  (e: InitialStateType) => void
];

export function useForm<InitialStateType>(initialState: InitialStateType) {
  const [values, setValues] = useState(initialState);

  function handleChange(e: HandleChangeEventProp) {
    const tag = e.target.tagName.toLowerCase();

    if (tag === 'select') {
      const optionValue = e.target.value;
      console.log(optionValue);
      const selectObjs = JSON.parse(e.target.dataset.selection_objs!);
      const { name, value } = selectObjs.find(
        (el: { name: string; value: string; id: string }) =>
          el.value === optionValue
      );
      setValues(prevData => ({
        ...prevData,
        [e.target.name]: { name, value },
      }));
    }

    if (tag === 'input') {
      setValues(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const handleSetValues = useCallback((obj: InitialStateType) => {
    setValues(obj);
  }, []);

  return [
    values,
    handleChange,
    handleSetValues,
  ] as useFormReturnType<InitialStateType>;
}
