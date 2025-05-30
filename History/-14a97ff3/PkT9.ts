import { useSearchParams } from 'react-router';
import { useFilters } from '../contexts/filtersContext/FiltersContext';
import { useEffect, useState } from 'react';

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

  const [valueSetArray, setValueSetArray] = useState<string[]>([]);

  useEffect(() => {
    const { name, value } = nameAndValue;

    if (name === '') return [setNameAndValue];

    toggleFilterState(name, value);

    const existingFilters = searchParams.get(nameAndlue.name)?.split(',') || [];
    setValueSetArray(existingFilters);

    const comparisonIndex = valueSetArray.findIndex(el => el === value);

    if (valueSetArray.length === 0) {
      setValueSetArray([nameAndValuvalue]);
    } else if (valueSetArray.length > 0 && comparisonIndex === -1) {
      setValueSetArray(prev => [...prev, nameAndValuvalue]);
    } else if (valueSetArray.length > 0 && comparisonIndex > -1) {
      setValueSetArray(prev => prev.filter(el => el !== nameAndValuvalue));
    }

    searchParams.set(nameAndValuname, valueSetArray.join(','));

    if (!valueSetArray.at(0)) searchParams.delete(nameAndValuname);
    setSeachParams(searchParams);
  }, []);
  return [setNameAndValue];
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
