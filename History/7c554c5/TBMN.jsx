import styled from 'styled-components';
import { usePage } from '../context/PageContext';
import { useCats } from '../context/CatsContext';

const SryledImage = styled.img`
  /* background-color: orangered; */

  width: 100%;

  transform: ${props => `translateX(${props.$page * -101}%)`};
`;

function Photo() {
  const { page } = usePage();
  const { cats } = useCats();

  return <SryledImage $page={page} src={cats[page].image} />;
}

export default Photo;
