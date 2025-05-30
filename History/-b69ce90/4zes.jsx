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
      {cards.map((img, i) => (
        <Photo key={img} page={page} src={img} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
