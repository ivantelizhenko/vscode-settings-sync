import { FormEvent, useCallback } from 'react';
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

  // const handleSubmit = useCallback(
  //   (e: FormEvent) => {
  //     e.preventDefault();
  //     addUser(newUser as UserType);
  //     closeModal();
  //   },
  //   [addUser, closeModal, newUser]
  // );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addUser(newUser as UserType);
    closeModal();
  }

  return (
    <Form title="User Information" handleSubmit={handleSubmit}>
      <Input
        label="Full Name"
        name="name"
        type="text"
        required={true}
        handleChange={setNewUser}
      />
      <Select
        label="Department"
        name="department"
        objs={departments}
        required={true}
        handlerSelect={setNewUser}
      />
      <Select
        label="Country"
        name="country"
        objs={countries}
        required={true}
        handlerSelect={setNewUser}
      />
      <Select
        label="Status"
        name="status"
        objs={statuses}
        required={true}
        handlerSelect={setNewUser}
      />
      <ButtonBox>
        <Button $width="20rem">Add User</Button>
        <Button $width="10rem" onClick={closeModal}>
          Undo
        </Button>
      </ButtonBox>
    </Form>
  );
}

export default AddUserForm;
