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
    let updatedValueSetArray: string[];

    if (name === '') return;

    toggleFilterState(name, value);

    const existingFilters = searchParams.get(name)?.split(',') || [];
    updatedValueSetArray = existingFilters;

    const comparisonIndex = updatedValueSetArray.findIndex(el => el === value);

    if (updatedValueSetArray.length === 0) {
      updatedValueSetArray = [value];
    } else if (updatedValueSetArray.length > 0 && comparisonIndex === -1) {
      updatedValueSetArray = [...updatedValueSetArray, value];
    } else if (updatedValueSetArray.length > 0 && comparisonIndex > -1) {
      updatedValueSetArray = updatedValueSetArray.filter(el => el !== value);
    }

    searchParams.set(name, updatedValueSetArray.join(','));

    if (!updatedValueSetArray.at(0)) searchParams.delete(name);
    setSeachParams(searchParams);
  }, [nameAndValue, toggleFilterState, searchParams, setSeachParams]);

  return setNameAndValue;
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
