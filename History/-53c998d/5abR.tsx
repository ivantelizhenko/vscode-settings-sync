import styled from 'styled-components';
import FilterBox from './FilterBox';
import { useFilters } from '../contexts/filtersContext/FiltersContext';
import { ChangeEvent, useState } from 'react';

const FiltersBoxStyled = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function FiltersBox() {
  const { toggleFilter, statusFilters, countryFilters } = useFilters();

  const [openFilterBox, setOpenFilterBox] = useState<boolean>(
    departmentFilters.length >= 3
  );

  useEffect(() => {
    if (departmentFilters.length)
      setOpenFilterBox(departmentFilters.length >= 3);
  }, [departmentFilters.length]);

  useEffect(() => {
    if (!openFilterBox && (statusFilters.length || countryFilters.length)) {
      deleteFilter('country');
      deleteFilter('status');
    }
  }, [openFilterBox, deleteFilter, statusFilters, countryFilters]);

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
      />
      <FilterBox
        disabled={!openFilterBox}
        data={countries}
        name="country"
        handleChange={e => handleChangeFilter('country', e)}
      />
      <FilterBox
        disabled={!openFilterBox}
        data={statuses}
        name="status"
        handleChange={e => handleChangeFilter('status', e)}
      />
    </FiltersBoxStyled>
  );
}

export default FiltersBox;
