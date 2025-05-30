import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 130px;

  font-size: 2rem;
  border: none;
  padding: 0.6rem;

  height: 3.6rem;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #c4c4be;
    background-color: #804600;
  }
  color: #f7e7ce;
  background-color: #ff8c00;
`;

function ButtonMain({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default ButtonMain;
