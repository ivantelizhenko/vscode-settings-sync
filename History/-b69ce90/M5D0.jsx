import styled from 'styled-components';
import Photo from './Photo';
import { usePage } from '../context/PageContext';
import { useCards } from '../context/CardsContext';

const StyledPhotos = styled.ul`
  position: absolute;
  display: flex;
  gap: 1.2rem;
`;

function Photos() {
  const { page } = usePage();
  const { cards } = useCards();
  console.log(cards);
  return (
    <StyledPhotos>
      {cards.map(item => (
        <Photo key={item.id} page={page} image={item.image} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
