import styled from 'styled-components';
import ListItem from './ListItem';
import { useCards } from '../context/CardsContext';
import { usePage } from '../context/PageContext';

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
  const {color, comfort, tree, time of days, season} = cards[page]?.stats;

  return <StyledList>{}</StyledList>;
}

export default List;
