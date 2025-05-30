import styled, { keyframes } from 'styled-components';
import Heading from './Heading';
import List from './List';
import { useCats } from '../context/CatsContext';
import { usePage } from '../context/PageContext';
import ButtonMain from './ButtonMain';

const showText = keyframes`
  from {
  transform: translateY(20rem);
  filter: opacity(0%);
  gap: 4.8rem;
  }

  to{
    transform: translateY(0);
    filter: opacity(100%);
    gap: 2.4rem;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.4rem;
  height: 100%;

  animation: ${showText} linear 0.5s;
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
      <ButtonMain>See Details &uarr;</ButtonMain>
    </StyledDetails>
  );
}

export default Details;
