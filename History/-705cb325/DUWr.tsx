import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { usePage } from '../../store/PageContext/PageContext';
import { useForm } from '../../store/FormContext/FormContext';

import Table from './Table';
import SelectField from '../SelectField';
import { FilterValues } from './DashboardTypes';
import Navigation from './Navigation';
import Filter from './Filter';

const StyledDashboard = styled.div`
  background-color: #fefae0;
  padding: 2.4rem 4.8rem;
  border-radius: 4px;
  height: 100%;
  overflow: auto;
`;

function Dashboard() {
  const [filterValue, setFilterValue] = useState<FilterValues>(
    FilterValues.ShowAll
  );
  const { setFormAddStatus } = useForm();
  const { setPageFormStatus } = usePage();

  function handleToForm() {
    setFormAddStatus();
    setPageFormStatus();
  }

  function handleSetFilter(e: ChangeEvent<HTMLSelectElement>) {
    setFilterValue(e.target.value as FilterValues);
  }

  return (
    <StyledDashboard>
      <Navigation>
        <Filter>
          <SelectField
            title="Books"
            name="filter"
            value={filterValue}
            onChange={handleSetFilter}
            options={['all', 'active', 'deactivated']}
          />
        </Filter>
        <AddEditBookButton onClick={handleToForm}>Add book</AddEditBookButton>
      </Navigation>
      <Table filter={filterValue} />
    </StyledDashboard>
  );
}

export default Dashboard;
