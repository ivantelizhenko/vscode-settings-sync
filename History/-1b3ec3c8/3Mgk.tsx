import { FormEvent } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';

import DefaultButton from '../../../components/DefaultButton';
import { MENU_SELECT_DATA } from '../../utils/constants';
import { useAppDispatch } from '../../../store/store';
import { addIds, setSide } from '../../store/statusSlice';
import { setTime } from '../../store/timerSlice';
import { SideColor } from '../../types/StatusTypes';
import Select from './Select';
import { createBoard } from '../../utils/helpers';

function SettingsWindow({ onClose }: { onClose: () => void }) {
  const dispatch = useAppDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 1) Отримати і обробити дані з форми
    const form = e.target;
    const data = new FormData(form as HTMLFormElement);
    const { time, side } = Object.fromEntries(data);

    const gameId = nanoid();
    const userId = nanoid();

    dispatch(setTime(time as string));
    dispatch(setSide(side as SideColor));
    dispatch(addIds({ gameId, userId }));

    const newGameAPI = { board: JSON.stringify(createBoard()), time };

    // Закрити модальне вікно
    onClose();
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <ButtonClose type="button" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x-icon lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </ButtonClose>
      <Select options={MENU_SELECT_DATA.times} name="time" required />
      <Select options={MENU_SELECT_DATA.sides} name="side" required />
      <Button type="submit">Create</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  position: relative;
  display: grid;
  justify-items: center;
  padding: 48px;
  row-gap: 16px;
  border-radius: 16px;
`;

const Button = styled(DefaultButton)`
  background-color: var(--color-gray-500);
  color: var(--color-gray-100);
  font-size: 2rem;
  border-radius: 8px;
  width: 100%;
  margin-top: 1.5rem;
`;

const ButtonClose = styled(DefaultButton)`
  transform: translate(50%, -50%);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  padding: 12px 16px;
  background-color: var(--color-gray-100);
  aspect-ratio: 1/1;

  &:hover {
    background-color: var(--color-gray-300);
  }
`;

export default SettingsWindow;
