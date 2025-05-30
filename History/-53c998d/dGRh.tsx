import styled from 'styled-components';
import FilterBox from './FilterBox';

const FiltersBoxStyled = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function FiltersBox() {
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
