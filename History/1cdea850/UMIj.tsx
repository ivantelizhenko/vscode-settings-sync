import { FormEvent } from 'react';
import styled from 'styled-components';

import { useAppState } from '../../contexts/appContext/AppContext';
import { UserType } from '../../contexts/appContext/AppContextTypes';

import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { Button } from '../../ui/Button';
import { useModal } from '../../contexts/modalContext/ModalContext';
import { useForm } from '../../hooks/useForm';

const ButtonBox = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: end;
  grid-column: 1/-1;
`;

function AddUserForm() {
  const { departments, statuses, countries, addUser } = useAppState();
  const { closeModal } = useModal();
  const [newUser, setNewUser] = useForm<Partial<UserType>>({
    id: Math.random().toString(),
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addUser(newUser as UserType);
    closeModal();
  }

  return (
    <Form title="User Information" handleSubmit={handleSubmit}>
      <Input
        required={true}
        label="Full Name"
        type="text"
        name="name"
        handleChange={setNewUser}
      />
      <Select
        label="Department"
        objs={departments}
        name="department"
        handlerSelect={setNewUser}
        required={true}
      />
      <Select
        label="Country"
        name="country"
        objs={countries}
        handlerSelect={setNewUser}
        required={true}
      />
      <Select
        label="Status"
        name="status"
        objs={statuses}
        handlerSelect={setNewUser}
        required={true}
      />
      <ButtonBox>
        <Button width="20rem">Add User</Button>
        <Button width="10rem" onClick={closeModal}>
          Undo
        </Button>
      </ButtonBox>
    </Form>
  );
}

export default AddUserForm;
