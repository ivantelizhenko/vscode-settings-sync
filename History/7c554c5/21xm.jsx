import styled from 'styled-components';
import { usePage } from '../context/PageContext';
import { useCats } from '../context/CatsContext';

const SryledImage = styled.img`
  /* background-color: orangered; */
  padding: 2.4rem;
  height: 80%;
  max-width: 60%;
  align-self: center;
  transition: all 0.3s;
  transform: ${props => `translateX(${props.$page * -101}%)`};
`;

function Photo({ image }) {
  const { page } = usePage();
  const { cats } = useCats();

  return <SryledImage $page={page} src={image} />;
}

export default Photo;
