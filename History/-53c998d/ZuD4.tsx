import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAppState } from '../contexts/appContext/AppContext';
import { useFilters } from '../contexts/filtersContext/FiltersContext';
import FilterBox from './FilterBox';

const FiltersBoxStyled = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function FiltersBox() {
  const { departments, statuses, countries } = useAppState();
  const {
    departmentFilters,
    statusFilters,
    countryFilters,
    toggleFilter,
    deleteFilter,
  } = useFilters();

  const [openFilterBox, setOpenFilterBox] = useState<boolean>(
    departmentFilters.length >= 3
  );

  useEffect(() => {
    if (departmentFilters.length)
      setOpenFilterBox(departmentFilters.length >= 3);
  }, [departmentFilters]);

  useEffect(() => {
    if (
      departmentFilters.length < 3 &&
      (statusFilters.length || countryFilters.length)
    ) {
      deleteFilter('country');
      deleteFilter('status');
    }
  }, [departmentFilters, deleteFilter, statusFilters, countryFilters]);

  const handleChangeFilter = useCallback(
    (name: string, e: ChangeEvent<HTMLInputElement>) => {
      toggleFilter(name, e.target.value);
    },
    [toggleFilter]
  );

  return (
    <FiltersBoxStyled>
      <FilterBox
        data={departments}
        name="department"
        handleChange={e => handleChangeFilter('department', e)}
        availableFilters={departmentFilters as string[]}
      />
      <FilterBox
        disabled={!openFilterBox}
        data={countries}
        name="country"
        handleChange={e => handleChangeFilter('country', e)}
        availableFilters={countryFilters as string[]}
      />
      <FilterBox
        disabled={!openFilterBox}
        data={statuses}
        name="status"
        handleChange={e => handleChangeFilter('status', e)}
        availableFilters={statusFilters as string[]}
      />
    </FiltersBoxStyled>
  );
}

export default FiltersBox;
