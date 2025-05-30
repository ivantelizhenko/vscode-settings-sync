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
      const curSelectName = e.target.dataset.selection_name?.toLowerCase();
      const curSelectObjs = JSON.parse(e.target.dataset.selection_objs!);
      const curOption = curSelectObjs.find(
        (el: { name: string; value: string; id: string }) =>
          el.value === optionValue
      );
      setValues(prevData => ({
        ...prevData,
        [curSelectName!]: { name: curOption.name, value: curOption.value },
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
