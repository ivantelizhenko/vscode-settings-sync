import styled from 'styled-components';
import { useCards } from '../context/CardsContext';
import { usePage } from '../context/PageContext';
import Loading from './Loading';

const arr = [1, 2, 3, 4, 5];

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 1.2rem;
`;

const ListItem = styled.li`
  font-size: 1.6rem;
`;

const Span = styled.span`
  font-weight: 700;
`;

function List() {
  const { cards } = useCards();
  const { page } = usePage();
  console.log(cards);
  if (!cards.length) return <Loading />;

  const { color, comfort, tree, timeOfDay, season } = cards[page].stats;

  return (
    <StyledList>
      <ListItem>
        Color: <Span>{color}</Span>
      </ListItem>
      <ListItem>
        Comfort: <Span>{comfort}</Span>
      </ListItem>
      <ListItem>
        Tree: <Span>{tree}</Span>
      </ListItem>
      <ListItem>
        Time of days: <Span>{timeOfDay}</Span>
      </ListItem>
      <ListItem>
        Season: <Span>{season}</Span>
      </ListItem>
    </StyledList>
  );
}

export default List;
