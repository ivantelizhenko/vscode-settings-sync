import styled, { css } from 'styled-components';

type ButtonProps = {
  $selected?: boolean;
  $type: 'button-20rem' | 'button-10rem' | 'button-22rem-withoutBorder';
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.4rem;
  color: #000;
  border: 1px solid #c4c4c4;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;
  transition: all 0.2s;

  background-color: ${props => (props.$selected ? '#c4c4c4' : '#fff')};

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: #c4c4c4;
  }

  &:disabled {
    color: #c4c4c4;
  }

  ${props =>
    props.$type === 'button-20rem' &&
    css`
      width: 20rem;
    `}
  ${props =>
    props.$type === 'button-10rem' &&
    css`
      width: 10rem;
    `}
  ${props =>
    props.$type === 'button-22rem-withoutBorder' &&
    css`
      width: 22rem;
      border: none;
    `}
`;

export default Button;
