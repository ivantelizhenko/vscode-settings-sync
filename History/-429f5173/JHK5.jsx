import styled from 'styled-components';
import ListItem from './ListItem';
import { useCards } from '../context/CardsContext';

const arr = [1, 2, 3, 4, 5];

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 1.2rem;
`;

function List() {
  const { cards } = useCards();

  return (
    <StyledList>
      {cards.map(item => (
        <ListItem key={item} title={item.name} />
      ))}
    </StyledList>
  );
}

export default List;
