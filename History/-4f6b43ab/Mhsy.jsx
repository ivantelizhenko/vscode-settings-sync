import styled from 'styled-components';
import Heading from './Heading';
import List from './List';
import { useCards } from '../context/CardsContext';
import { usePage } from '../context/PageContext';

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  background-color: green;
  padding: 2.4rem;
  max-height: 48rem;
`;

function Details() {
  const { cards } = useCards();
  const { page } = usePage();

  return (
    <StyledDetails>
      <Heading as="h2">{cards[page]?.name}</Heading>
      <p>{cards[page]?.description}</p>
      <List />
      <div>Button</div>
    </StyledDetails>
  );
}

export default Details;
