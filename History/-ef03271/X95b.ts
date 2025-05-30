import { ChangeEvent, useState } from 'react';

type HandleChangeEventProp = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

type useFormReturnType<InitialStateType> = [
  values: InitialStateType,
  (e: HandleChangeEventProp) => void
];

export function useForm<InitialStateType>(initialState: InitialStateType) {
  const [values, setValues] = useState(initialState);

  function handleChange(e: HandleChangeEventProp) {
    const tag = e.target.tagName.toLowerCase();

    if (tag === 'select') {
      const optionValue = e.target.value;
      const selectName = e.target.dataset.selection_name?.toLowerCase();
      const selectObjs = JSON.parse(e.target.dataset.selection_objs!);
      console.log(selectObjs);
      const curOption = selectObjs.find(el => el.value === optionValue);
      setValues(prevData => ({
        ...prevData,
        [selectName!]: { name: curOption.name, value: curOption.value },
      }));
    }

    if (tag === 'input') {
      setValues(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  }

  return [values, handleChange] as useFormReturnType<InitialStateType>;
}
