import styled from 'styled-components';

type ButtonProps = {
  $width: string;
  $selected?: boolean;
  $type: 'header-20rem';
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

  width: ${props => props.$width};
  background-color: ${props => (props.$selected ? '#c4c4c4' : '#fff')};

  transition: all 0.2s;

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: #c4c4c4;
  }

  &:disabled {
    color: #c4c4c4;
  }
`;

export default Button;
