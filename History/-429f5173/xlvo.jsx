import styled from 'styled-components';
import ListItem from './ListItem';
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
      <li>
        Color: <Span>{color}</Span>
      </li>
      <li>
        Comfort: <Span>{comfort}</Span>
      </li>
      <li>
        Tree: <Span>{tree}</Span>
      </li>
      <li>
        Time of days: <Span>{timeOfDay}</Span>
      </li>
      <li>
        Season: <Span>{season}</Span>
      </li>
    </StyledList>
  );
}

export default List;
