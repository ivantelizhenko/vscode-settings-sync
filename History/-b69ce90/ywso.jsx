import styled from 'styled-components';
import Photo from './Photo';
import { usePage } from '../context/PageContext';
import { useCards } from '../context/CardsContext';

const StyledPhotos = styled.ul`
  position: absolute;
  display: flex;
  gap: 4.8rem;
`;

const arr = [1, 2, 3, 4, 5];

function Photos() {
  const { page } = usePage();
  const { cards } = useCards();

  return (
    <StyledPhotos>
      {cards.map((img, i) => (
        <Photo key={img} page={page} index={i} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
