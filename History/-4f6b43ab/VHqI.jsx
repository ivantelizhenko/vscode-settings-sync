import styled from 'styled-components';
import Heading from './Heading';
import List from './List';
import { useCards } from '../context/CardsContext';
import { usePage } from '../context/PageContext';

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: green;
  padding: 2.4rem;
  height: 100%;
`;

function Details() {
  const { cards } = useCards();
  const { page } = usePage();

  return (
    <StyledDetails>
      <Heading as="h2">{cards[page]?.name}</Heading>
      <Description>{cards[page]?.description}</Description>
      <List />
      <div>Button</div>
    </StyledDetails>
  );
}

export default Details;
