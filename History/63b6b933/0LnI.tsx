import styled from 'styled-components';
import { ChangeEvent } from 'react';

import { useAppState } from '../../contexts/userContext/AppContext';

import EditUserForm from './EditUserForm';
import Heading from '../../ui/Heading';
import Select from '../../ui/Select';
import { useSearchParams } from 'react-router';

const StyledEditUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const EditUsersInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

function EditUsers() {
  const { users, setCurrentUser, currentUser } = useAppState();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams();
  const usersTransform = users.map(user => ({
    id: user.id,
    name: user.name,
  }));

  function handleSelectUser(e: ChangeEvent<HTMLSelectElement>) {
    setSearchParams({ id: e.target.value });
    setCurrentUser(e.target.value);
  }

  return (
    <StyledEditUsers>
      <Heading as="h2">Edit user</Heading>

      <EditUsersInputsContainer>
        <Select
          label="User"
          objs={usersTransform}
          handlerSelect={handleSelectUser}
          defaultValue={currentUser?.id}
        />
        {currentUser?.name && <EditUserForm />}
      </EditUsersInputsContainer>
    </StyledEditUsers>
  );
}

export default EditUsers;
