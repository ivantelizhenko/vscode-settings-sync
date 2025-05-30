import styled from 'styled-components';
import Photo from './Photo';

import { useCats } from '../context/CatsContext';

const StyledPhotos = styled.ul`
  position: absolute;
  display: flex;

  gap: 1.2rem;
`;

function Photos() {
  const { cats } = useCats();

  return (
    <StyledPhotos>
      {cats.map(item => (
        <Photo key={item.id} image={item.image} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
