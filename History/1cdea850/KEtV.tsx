import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
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
  const [newUserN, setNewUserN] = useForm<UserType>({
    id: Math.random().toString(),
    name: '',
    status: {
      name: '',
      value: '',
    },
    department: {
      name: '',
      value: '',
    },
    country: {
      name: '',
      value: '',
    },
  });
  useEffect(() => {
    console.log(newUserN);
  }, [newUserN]);

  const [newUser, setNewUser] = useState<UserType>({
    id: Math.random().toString(),
    name: '',
    status: {
      name: '',
      value: '',
    },
    department: {
      name: '',
      value: '',
    },
    country: {
      name: '',
      value: '',
    },
  });

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setNewUserN(e);
    const inputName = e.target.value;

    setNewUser(prevData => ({ ...prevData, name: inputName }));
  }

  function setFromSelect(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.name);
    const curOptionValue = e.target.value;
    const curSelectName = e.target.dataset.selection_name?.toLowerCase();
    const curSelectObjs = JSON.parse(e.target.dataset.selection_objs!);
    const curOption = curSelectObjs.find(
      (el: { name: string; value: string; id: string }) =>
        el.value === curOptionValue
    );
    setNewUser(prevData => ({
      ...prevData,
      [curSelectName!]: { name: curOption.name, value: curOption.name },
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addUser(newUser);
    closeModal();
  }

  return (
    <Form title="User Information" handleSubmit={handleSubmit}>
      <Input
        required={true}
        label="Full Name"
        type="text"
        name="name"
        handleChange={onChange}
      />
      <Select
        label="Department"
        objs={departments}
        name="department"
        handlerSelect={setFromSelect}
        required={true}
      />
      <Select
        label="Country"
        name="country"
        objs={countries}
        handlerSelect={setFromSelect}
        required={true}
      />
      <Select
        label="Status"
        name="status"
        objs={statuses}
        handlerSelect={setFromSelect}
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
