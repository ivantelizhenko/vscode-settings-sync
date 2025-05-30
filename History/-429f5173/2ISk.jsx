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

function List() {
  const { cards } = useCards();
  const { page } = usePage();
  console.log(cards);
  if (!cards.length) return <Loading />;

  const { color, comfort, tree, timeOfDay, season } = cards[page].stats;

  return (
    <StyledList>
      <li>Color: {color}</li>
      <li>Comfort: {comfort}</li>
      <li>Tree: {tree}</li>
      <li>Time of days: {timeOfDay}</li>
      <li>Season: {season}</li>
    </StyledList>
  );
}

export default List;
