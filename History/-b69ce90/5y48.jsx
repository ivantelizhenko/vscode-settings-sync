import styled from 'styled-components';
import Photo from './Photo';
import { usePage } from '../context/PageContext';

const StyledPhotos = styled.ul`
  position: absolute;
  display: flex;
  gap: 4.8rem;
`;

const arr = [1, 2, 3, 4, 5];

function Photos() {
  const { page } = usePage();

  return (
    <StyledPhotos>
      {arr.map((img, i) => (
        <Photo index={i} key={img} page={page} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
