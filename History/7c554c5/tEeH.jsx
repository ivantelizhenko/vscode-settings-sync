import styled from 'styled-components';
import { usePage } from '../context/PageContext';
import { useCards } from '../context/CatsContext';

const SryledImage = styled.img`
  /* background-color: orangered; */

  width: 100%;

  transform: ${props => `translateX(${props.$page * -101}%)`};
`;

function Photo({ image }) {
  const { page } = usePage();
  const { cards } = useCards();

  return <SryledImage $page={page} src={cards[page].image} />;
}

export default Photo;
