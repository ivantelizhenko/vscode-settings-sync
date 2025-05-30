import {
  ChangeEvent,
  FormEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';

import { useAppState } from '../../contexts/appContext/AppContext';
import { UserType } from '../../contexts/appContext/AppContextTypes';

import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Form from '../../ui/Form';
import { Button } from '../../ui/Button';
import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
  grid-column: 1/-1;
`;

function EditUserForm() {
  const { departments, statuses, countries, currentUser, updateUser } =
    useAppState();
  // const [updatedUser, setUpdatedUser] = useState(currentUser);
  const [updatedUser, setUpdatedUser, setToDefault] =
    useForm<UserType>(currentUser);

  useEffect(() => {
    setUpdatedUser(currentUser as UserType);
  }, [currentUser]);

  function changeName(e: ChangeEvent<HTMLInputElement>) {
    setUpdatedUser(prev => ({ ...prev, name: e.target.value }));
  }

  function setFromSelect(e: ChangeEvent<HTMLSelectElement>) {
    const curOptionValue = e.target.value;
    const curSelectName = e.target.dataset.selection_name?.toLowerCase();
    const curSelectObjs = JSON.parse(e.target.dataset.selection_objs!);
    const curOption = curSelectObjs.find(
      (el: { name: string; value: string; id: string }) =>
        el.value === curOptionValue
    );
    setUpdatedUser(prevData => ({
      ...prevData,
      [`${curSelectName}`]: { name: curOption.name, value: curOption.value },
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updateUser(currentUser.id!, updatedUser as UserType);
  }

  function handleDecline(e: SyntheticEvent) {
    e.preventDefault();
    setUpdatedUser(currentUser);
  }
  return (
    <Form title="User Information" handleSubmit={handleSubmit}>
      <Input
        required={true}
        label="Full Name"
        name="name"
        defaultValue={updatedUser.name}
        type="text"
        handleChange={setUpdatedUser}
      />
      <Select
        required={true}
        label="Department"
        name="department"
        objs={departments}
        handlerSelect={setUpdatedUser}
        defaultValue={updatedUser?.department?.value}
      />
      <Select
        required={true}
        label="Country"
        name="country"
        objs={countries}
        handlerSelect={setUpdatedUser}
        defaultValue={updatedUser?.country?.value}
      />
      <Select
        label="Status"
        name="status"
        required={true}
        objs={statuses}
        handlerSelect={setUpdatedUser}
        defaultValue={updatedUser?.status?.value}
      />

      <ButtonsContainer>
        <Button
          width="20rem"
          disabled={JSON.stringify(updatedUser) === JSON.stringify(currentUser)}
        >
          Save
        </Button>
        {JSON.stringify(updatedUser) !== JSON.stringify(currentUser) && (
          <Button width="10rem" onClick={handleDecline}>
            Undo
          </Button>
        )}
      </ButtonsContainer>
    </Form>
  );
}

export default EditUserForm;
