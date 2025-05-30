import styled from 'styled-components';
import ButtonDefault from '../DefaultButton';
import DefaultButton from '../DefaultButton';

function Buttons() {
  return (
    <Wrapper>
      <ChessButton>
        <span>Draw</span>
      </ChessButton>
      <ChessButton>
        <span>Surrender</span>
      </ChessButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-self: center;
  display: grid;
  row-gap: 24px;
  grid-area: buttons;
  justify-self: start;
`;

const IconButton = styled(DefaultButton)``;

const ChessButton = styled(ButtonDefault)`
  background-color: var(--color-gray-100);
  padding: 4px 8px;
  display: flex;
  gap: 12px;
  border-radius: 4px;
  width: fit-content;

  font-size: 1.25rem;
  letter-spacing: 3px;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    background-color: var(--color-gray-300);
  }
`;

export default Buttons;
