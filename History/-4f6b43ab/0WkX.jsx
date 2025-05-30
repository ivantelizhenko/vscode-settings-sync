import styled, { keyframes } from 'styled-components';
import Heading from './Heading';
import List from './List';
import { useCats } from '../context/CatsContext';
import { usePage } from '../context/PageContext';
import Button from './Button';

const showText = keyframes`
  from {
  opacity: 0;
  }

  to{
  opacity: 100%}
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
  height: 100%;

  animation: ${showText} linear 2s;
`;

const Description = styled.p`
  font-style: italic;
`;

function Details() {
  const { cats } = useCats();
  const { page } = usePage();

  return (
    <StyledDetails>
      <Heading as="h2">{cats[page]?.name}</Heading>
      <Description>{cats[page]?.description}</Description>
      <List />
      <Button>See Details &uarr;</Button>
    </StyledDetails>
  );
}

export default Details;
