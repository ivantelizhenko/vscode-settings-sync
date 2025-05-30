import styled from 'styled-components';

const SryledImage = styled.img`
  /* background-color: orangered; */
  height: 75%;
  width: 75%;

  /* width: 9.6rem; */

  transform: ${props => `translateX(${props.$page * -75}%)`};
`;

function Photo({ page, image }) {
  return <SryledImage $page={page} src={image} />;
}

export default Photo;
