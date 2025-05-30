import styled from 'styled-components';
import { ChangeEvent } from 'react';

import { useAppState } from '../../contexts/userContext/AppContext';

import EditUserForm from './EditUserForm';
import Heading from '../../ui/Heading';
import Select from '../../ui/Select';

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

  const usersTransform = users.map(user => ({
    id: user.id,
    name: user.name,
  }));

  function handleSelectUser(e: ChangeEvent<HTMLSelectElement>) {
    setCurrentUser(e.target.value);
  }

  return (
    <StyledEditUsers>
      <span className="edit-user__heading">
        <Heading as="h2">Edit user</Heading>
      </span>

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
