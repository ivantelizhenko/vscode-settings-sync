import styled from 'styled-components';
import { usePage } from '../../store/PageContext/PageContext';
import { useForm } from '../../store/FormContext/FormContext';

import Table from './Table';
import SelectField from '../SelectField';
import { ChangeEvent, useState } from 'react';

const StyledDashboard = styled.div`
  background-color: #fefae0;
  padding: 2.4rem 4.8rem;
  border-radius: 4px;
  height: 100%;
  overflow: auto;
`;

const AddBookButton = styled.button`
  height: 6.4rem;
  width: 6.4rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0 0 0 / 0.2);
  background-color: #0267c1;
  color: #fff;
  position: fixed;
  right: 0;
  top: 5%;
`;

enum FilterValues {
  ShowAll = 'all',
  ShowActive = 'active',
  ShowDeactive = 'deactivated',
}

function Dashboard() {
  const [filter, setFilter] = useState<FilterValues>(FilterValues.ShowAll);
  const { setFormAddStatus } = useForm();
  const { setPageFormStatus } = usePage();

  function handleToForm() {
    setFormAddStatus();
    setPageFormStatus();
  }

  function handleSetFilter(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setFilter(e.target.value as FilterValues);
  }

  return (
    <StyledDashboard>
      <SelectField
        title="Filter"
        name="filter"
        value={filter}
        onChange={handleSetFilter}
        options={['all', 'active', 'deactivated']}
      />
      <AddBookButton onClick={handleToForm}>Add book</AddBookButton>
      <Table />
    </StyledDashboard>
  );
}

export default Dashboard;
