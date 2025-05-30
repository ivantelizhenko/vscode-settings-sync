import styled from 'styled-components';
import Photo from './Photo';
import { usePage } from '../context/PageContext';
import { useCards } from '../context/CardsContext';

const StyledPhotos = styled.ul`
  position: absolute;
  display: flex;
  gap: 4.8rem;
`;

function Photos() {
  const { page } = usePage();
  const { cards } = useCards();
  console.log(cards);
  return (
    <StyledPhotos>
      {cards.map(item => (
        <Photo key={item.id} page={page} src={item.image} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
