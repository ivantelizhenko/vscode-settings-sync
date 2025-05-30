import styled from 'styled-components';
import { usePage } from '../context/PageContext';

const SryledImage = styled.img`
  padding: 2.4rem 2.4rem 2.4rem 1.2rem;
  height: 80%;
  max-width: 50%;
  align-self: center;
  transition: all 0.3s;
  transform: ${props => `translateX(${props.$page * -105}%)`};
  filter: ${props =>
    `grayscale(${props.$page === props.$index ? '0%' : '100%'})`};
`;

function Photo({ image, index }) {
  const { page } = usePage();

  return <SryledImage $page={page} src={image} $index={index} />;
}

export default Photo;
