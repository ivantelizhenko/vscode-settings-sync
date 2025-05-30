import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Filter = {
  label: string;
  value: string;
  checked?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const StyledFilter = styled.li`
  display: flex;
  padding: 0.8rem 1.2rem;
  gap: 1.2rem;
  align-items: center;
  width: 100%;

  label {
    font-size: 1.4rem;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: flex;
    justify-content: center;
    width: 1rem;
  }

  input {
    appearance: none;

    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid #000;

    &:checked {
    }
  }
`;

function Filter({ label, value, handleChange, checked = false }: Filter) {
  return (
    <StyledFilter>
      <input
        id={label}
        type="checkbox"
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      <span>
        <b>{label.charAt(0).toUpperCase()}</b>
      </span>
      <label htmlFor={label}>{label}</label>
    </StyledFilter>
  );
}

export default Filter;
