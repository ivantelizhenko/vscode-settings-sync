import { useSearchParams } from 'react-router';
import { useFilters } from '../contexts/filtersContext/FiltersContext';
import { useState } from 'react';

export function useToggleFilter() {
  const [searchParams, setSeachParams] = useSearchParams();
  const { toggleFilterState } = useFilters();

  const [nameValue, setNameValue] = useState<{ name: string; value: string }>({
    name: '',
    value: '',
  });

  const [valueSetArray, setValueSetArray] = useState<string[]>([]);

  toggleFilterState(nameValue.name, nameValue.value);

  const existingFilters = searchParams.get(nameValue.name)?.split(',') || [];
  setValueSetArray(existingFilters);

  const comparisonIndex = valueSetArray.findIndex(el => el === nameValue.value);

  if (valueSetArray.length === 0) {
    setValueSetArray([nameValue.value]);
  } else if (valueSetArray.length > 0 && comparisonIndex === -1) {
    setValueSetArray(prev => [...prev, nameValue.value]);
  } else if (valueSetArray.length > 0 && comparisonIndex > -1) {
    setValueSetArray(prev => prev.filter(el => el !== nameValue.value));
  }

  searchParams.set(nameValue.name, valueSetArray.join(','));

  if (!valueSetArray.at(0)) searchParams.delete(nameValue.name);
  setSeachParams(searchParams);

  return [setNameValue];
}

// function toggleFilter(name: string, value: string) {
//   toggleFilterState(name, value);

//   let valueSetArray: string[];
//   const existingFilters = searchParams.get(name)?.split(',') || [];
//   valueSetArray = existingFilters;

//   const comparisonIndex = valueSetArray.findIndex(el => el === value);

//   if (valueSetArray.length === 0) {
//     valueSetArray = [value];
//   } else if (valueSetArray.length > 0 && comparisonIndex === -1) {
//     valueSetArray = [...valueSetArray, value];
//   } else if (valueSetArray.length > 0 && comparisonIndex > -1) {
//     valueSetArray = valueSetArray.filter(el => el !== value);
//   }

//   searchParams.set(name, valueSetArray.join(','));

//   if (!valueSetArray.at(0)) searchParams.delete(name);
//   console.log(`toggle function ${searchParams.get('department')}`);
//   setSeachParams(searchParams);
// }
