import styled from 'styled-components';
import { usePage } from '../context/PageContext';
import { useCats } from '../context/CatsContext';

const SryledImage = styled.img`
  padding: 2.4rem 2.4rem 2.4rem 1.2rem;
  height: 80%;
  max-width: 50%;
  align-self: center;
  transition: all 0.3s;
  transform: ${props => `translateX(${props.$page * -105}%)`};
  filter: ${props=>`grayscale(${props.$page === props.$index })`. };
`;

function Photo({ image }) {
  const { page } = usePage();
  const { cats } = useCats();

  return <SryledImage $page={page} src={image} />;
}

export default Photo;
