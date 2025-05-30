import styled from 'styled-components';
import Photo from './Photo';

import { useCards } from '../context/CardsContext';

const StyledPhotos = styled.ul`
  position: absolute;
  display: flex;

  gap: 1.2rem;
`;

function Photos() {
  const { cards } = useCards();

  return (
    <StyledPhotos>
      {cards.map(item => (
        <Photo key={item.id} image={item.image} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
