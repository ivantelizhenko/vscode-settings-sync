import styled from 'styled-components';

const FiltersBoxStyled = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function FiltersBox() {
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
