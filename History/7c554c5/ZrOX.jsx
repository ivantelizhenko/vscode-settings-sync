import styled from 'styled-components';
import { usePage } from '../context/PageContext';

const SryledImage = styled.img`
  /* background-color: orangered; */

  width: 100%;

  transform: ${props => `translateX(${props.$page * -110}%)`};
`;

function Photo({ image }) {
  const { page } = usePage();
  return <SryledImage $page={page} src={image} />;
}

export default Photo;
