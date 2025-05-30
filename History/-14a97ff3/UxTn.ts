import { useSearchParams } from 'react-router';
import { useFilters } from '../contexts/filtersContext/FiltersContext';
import { useState } from 'react';

export function useToggleFilter() {
  const [searchParams, setSeachParams] = useSearchParams();
  const { toggleFilterState } = useFilters();

  const [nameAndValue, setNameAndValue] = useState<{
    name: string;
    value: string;
  }>({
    name: '',
    value: '',
  });

  function getNameAndValue(name: string, value: string) {
    setNameAndValue({ name, value });
  }

  const [valueSetArray, setValueSetArray] = useState<string[]>([]);

  if (nameAndValue.name === '') return [getNameAndValue];

  toggleFilterState(nameAndValue.name, nameAndValue.value);

  const existingFilters = searchParams.get(nameAndValue.name)?.split(',') || [];
  setValueSetArray(existingFilters);

  const comparisonIndex = valueSetArray.findIndex(
    el => el === nameAndValue.value
  );

  if (valueSetArray.length === 0) {
    setValueSetArray([nameAndValue.value]);
  } else if (valueSetArray.length > 0 && comparisonIndex === -1) {
    setValueSetArray(prev => [...prev, nameAndValue.value]);
  } else if (valueSetArray.length > 0 && comparisonIndex > -1) {
    setValueSetArray(prev => prev.filter(el => el !== nameAndValue.value));
  }

  searchParams.set(nameAndValue.name, valueSetArray.join(','));

  if (!valueSetArray.at(0)) searchParams.delete(nameAndValue.name);
  setSeachParams(searchParams);

  return [getNameAndValue];
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
