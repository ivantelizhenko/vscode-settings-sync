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
`;

function Details() {
  const { cards } = useCards();
  const { page } = usePage();
  console.log(cards[page].name);
  return (
    <StyledDetails>
      <Heading as="h2">{cards[page].name}</Heading>
      <p>{cards[page - 1].description}</p>
      <List />
      <div>Button</div>
    </StyledDetails>
  );
}

export default Details;
