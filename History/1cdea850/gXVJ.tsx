import { FormEvent, useId } from 'react';
import { useSearchParams } from 'react-router';
import styled from 'styled-components';

import { useAppState } from '../../contexts/appContext/AppContext';
import { UserType } from '../../contexts/appContext/AppContextTypes';
import { useModal } from '../../contexts/modalContext/ModalContext';

import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';
import { useForm } from '../../hooks/useForm';
import Heading from '../../ui/Heading';

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
    id: useId() + Math.random().toString(),
  });
  const [searchParams, setSearchParams] = useSearchParams();

  function handleDeleteIdFromLink() {
    searchParams.delete('id');
    setSearchParams(searchParams);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addUser(newUser as UserType);
    closeModal();
    handleDeleteIdFromLink();
  }

  function handleCloseModal() {
    closeModal();
    handleDeleteIdFromLink();
  }

  return (
    <Form handleSubmit={handleSubmit}>
      <Heading as="h3">Add User</Heading>
      <>
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
      </>
      <ButtonBox>
        <Button $width="20rem">Add User</Button>
        <Button $width="10rem" onClick={handleCloseModal}>
          Undo
        </Button>
      </ButtonBox>
    </Form>
  );
}

export default AddUserForm;
